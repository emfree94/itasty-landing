import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './faq.scss'

export const FAQ = () => {
  const faqData = [
    {
      title: 'Загальні питання',
      id: 1,
      faq_lists: [
        {
          list_id: 1,
          list_title: 'Як гості будуть відкривати меню?',
          list_description:
            'Lorem ipsum dolor sit amet consectetur. Praesent amet dignissim pretium congue consectetur orci augue mi. Donec cursus lacus laoreet feugiat in fermentum sem purus.',
        },
        {
          list_id: 2,
          list_title:
            'Lorem ipsum dolor sit amet consectetur praesent amet dignissim pretium ?',
          list_description: 'itasty',
        },
        {
          list_id: 3,
          list_title: 'Lorem ipsum dolor sit amet consectetur amet ?',
        },
        {
          list_id: 4,
          list_title:
            'Lorem ipsum dolor sit amet consectetur praesent amet dignissim pretium ?',
        },
        {
          list_id: 5,
          list_title: 'Lorem ipsum dolor sit amet consectetur amet ?',
        },
      ],
    },

    { title: 'Я все ще сумніваюсь' },
    { title: 'Що таке електронне меню для кафе та ресторанів?' },
  ]

  return (
    <div className="faq">
      <div className="faq__block wrapper">
        <h2 className="faq__block--title">Залишились питання?</h2>
        {/* <Accordion> */}
        {faqData.map((accord_item) => (
          <Accordion key={accord_item.id + accord_item.title}>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
              expandIcon={<ExpandMoreIcon />}
            >
              {accord_item.title}
            </AccordionSummary>
            <AccordionDetails key={accord_item.id + accord_item.title}>
              {accord_item.faq_lists?.map(
                ({ list_id, list_title, list_description }) => (
                  <Accordion
                    key={list_id + list_title}
                    id="panel1-header-children"
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      {list_title}
                    </AccordionSummary>
                    <AccordionDetails>
                      {list_description ?? list_description}
                    </AccordionDetails>
                  </Accordion>
                )
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  )
}
