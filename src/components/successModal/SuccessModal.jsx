import React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { Button } from '../buttons/button/Button'
import successImg from '../../../public/assets/img/illustration.png'
import './successModal.scss'

export const SuccessModal = ({ open, handleClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <>
          <Fade in={open}>
            <Box sx={style}>
              <div className="wrapper-img">
                <img src={successImg} alt="success-img" />
              </div>
              <Typography className="transition-modal-title" component="h2">
                Thank you!
              </Typography>
              <Typography className="transition-modal-description">
                thank you, the manager will contact you shortly.
              </Typography>
              <Button type="submit" text="Cancel" handleClick={handleClose} />
            </Box>
          </Fade>
        </>
      </Modal>
    </div>
  )
}
