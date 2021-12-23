import React from 'react'

const InfoBlock = (props) => {
  return (
    <div className='App-infoBlock'>
      <h3>{props.header}</h3>
      {props.imgsrc && (<img src={props.imgsrc} />)}
      <div className='App-infoBlock-desc'>{props.text}</div>
    </div>
  )
}

export default InfoBlock