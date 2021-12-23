import React from 'react'

const CodeForm = (props) => {
  return (
    <form className='App-codeForm'>
      <h3>Got a wristband?</h3>
      <div className='App-codeForm-desc'>Enter the code on your band</div>
      <input type='text' maxLength="1" />
      <input type='text' maxLength="1" />
      <input type='text' maxLength="1" />
      <input type='text' maxLength="1" />
      <div className='App-codeForm-footer'>Find the code on the wristband.</div>
      <a href="/sharestory" className='App-btn '>Submit</a>
    </form>
  )
}

export default CodeForm