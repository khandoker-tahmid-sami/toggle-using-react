import React, {useState} from 'react'
import FaqsData from './faqsData'
import { myData } from '../data'
import style from "./faqs.module.css"
const Faqs = () => {
    const [faqs, setFaqs] = useState(myData)
    console.log(faqs)
  return (
    <div className={style.container}>
      <section className={style.faqs}>
        <h1 className={style.h1}>Faqs</h1>
        {faqs.map(faq => <FaqsData key={faq.id} {...faq} />)}
      </section>
    </div>
  )
}

export default Faqs