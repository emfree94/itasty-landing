import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import './contactUs.scss'
import { SuccessModal } from '../successModal/SuccessModal'
import { Button } from '../buttons/button/Button'

const schemaValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  messages: Yup.string()
    .min(2, 'Too Short!')
    .max(300, 'Too Long!')
    .required('Required'),
})

const sitekey = import.meta.env.VITE_API_RECAPTCHA_SITE_KEY || ''

const initialValues = { email: '', name: '', messages: '' }

export const ContactUs = () => {
  const [open, setOpen] = useState(false)
  const [captchaValue, setCaptchaValue] = useState(null)

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false)
      setOpen(true)
    }, 500)
  }

  const handleClick = () => setOpen(true)

  return (
    <div className="contact-us" id="contact-us">
      <SuccessModal open={open} handleClose={() => setOpen(false)} />
      <div className="contact-us__block wrapper">
        <h2 className="contact-us__block--title">Contact us</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={schemaValidation}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="contact-us__block--form">
              <div className="contact-us__block--form__wrapper">
                <div className="contact-us__block--form__wrapper--input">
                  <Field
                    className="form-input"
                    placeholder="Name"
                    name="name"
                    type="text"
                  />
                  <ErrorMessage
                    className="error-message"
                    name="name"
                    component="div"
                  />
                </div>

                <div className="contact-us__block--form__wrapper--input">
                  <Field
                    className="form-input"
                    placeholder="Email"
                    name="email"
                    type="email"
                  />
                  <ErrorMessage
                    className="error-message"
                    name="email"
                    component="div"
                  />
                </div>
              </div>

              <div className="contact-us__block--form__wrapper--input">
                <Field
                  className="form-input textarea"
                  placeholder="Your message ...."
                  name="messages"
                  component="textarea"
                />
                <ErrorMessage
                  className="error-message textarea"
                  name="messages"
                  component="div"
                />
              </div>

              <ReCAPTCHA
                sitekey={sitekey}
                onChange={(val) => setCaptchaValue(val)}
              />

              <Button type="submit" text="Send" handleClick={handleClick} marginTop='30px' />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
