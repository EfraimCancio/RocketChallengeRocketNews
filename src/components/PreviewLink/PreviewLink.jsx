import React from 'react'
import Arrow from '../../../public/arrow-right.png'
import './PreviewLink.css';

const PreviewLink = () => {
  return (
    <div className="previewLink-container">
        <a className="previewLink">
            <p>deixe-me ler primeiro</p> 
            <img src={Arrow}/>
        </a>
    </div>
  )
}

export default PreviewLink