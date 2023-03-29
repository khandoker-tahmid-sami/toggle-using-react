import React, {useState} from 'react'
import style from "./faqsData.module.css"

const FaqsData = ({title, id, body}) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={style.faq}>
      <h4>{title}</h4>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "-" : "+"}
      </button>
      {toggle && <p>{body}</p>}
    </div>
  )
}

export default FaqsData