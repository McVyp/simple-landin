import React from 'react'
import './Main.css'

export default function Main({imageSrc}) {
  return (
    <div className="main">
        <img src={imageSrc} alt="travel-iimage" className="main_image"  />
        <h1 className="main_title">this is it</h1>
    </div>
  )
}
