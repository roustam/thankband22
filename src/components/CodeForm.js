import React from 'react'
import {useState} from "react";


const CodeForm = (props) => {
// на каждом инпуте добавлять число в массив, на четвертом делать сабмит
  const [codeInput, setCodeInput] = useState('')
  const [inputIdx, setInputIdx] = useState(0)

  const onInputFocus = (e) => {
    e.currentTarget.value = ''
  }

  const handleChange = (e) => {
    console.log('change handled',e.currentTarget.value)
  }
  return (
    <form className='App-codeForm'>
      <h3>Got a wristband?</h3>
      <div className='App-codeForm-desc'>Enter the code on your band</div>
      <input type='text' maxLength="1" onFocus={onInputFocus} onChange={handleChange} />
      <input type='text' maxLength="1" onFocus={onInputFocus} onChange={handleChange} />
      <input type='text' maxLength="1" onFocus={onInputFocus} onChange={handleChange} />
      <input type='text' maxLength="1" onFocus={onInputFocus} onChange={handleChange} />
      <div className='App-codeForm-footer'>Find the code on the wristband.</div>
      <a href="/sharestory" className='App-btn '>Submit</a>
    </form>
  )
}

export default CodeForm