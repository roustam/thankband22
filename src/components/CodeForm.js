import React from 'react'

const CodeForm = (props) => {
  return (
    <form className='App-codeForm'>
      <h3>Got a wristband?</h3>
      <div className='App-codeForm-desc'>Enter the code on your band</div>
      <input type='text' maxlength="1"></input>
      <input type='text' maxlength="1"></input>
      <input type='text' maxlength="1"></input>
      <input type='text' maxlength="1"></input>
      <div className='App-codeForm-footer'>Find the code on the wristband.</div>
      <a href='#' className='App-btn '>Submit</a>
    </form>
  )
}

export default CodeForm