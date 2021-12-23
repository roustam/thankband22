import '../styles/InputStory.css'

function InputStory() {
  return(
    <div className='InputStory'>
      <div class='InputStory-info'>Tell us your story</div>
      <textarea rows={3} className="InputStory-textarea" placeholder='eg. Thankband will help me connect with new people'/>
      <div className='InputStory-info'> Where you at </div>
      <input className="InputStory-input" type='text' placeholder='eg. Sydney'  />
    </div>
  )
}

export default InputStory