import React from 'react'
import "./style.css"
export default function Card({ date,source,title,desc,img,URL }) {
  return (
    <>
        <div className="card">
            <div className="card-header">
                <img src={img} alt="news-image" id="news-img" />
            </div>
            <div className="card-content">
                <h3 id="news-title">{title}</h3>
                <h5 id='name'>From {source}</h5>
                <h6 className="news-source" id="news-source">{new Date(date).toLocaleString("en-US",{timeZone:"Asia/Jakarta"})}</h6>
                <p className="news-desc" id="news-desc">{desc}</p>
                <a href={URL}>More Info</a>
            </div>
        </div>
    </>
  )
}
