import React from 'react'
import ThankbandLogo from '../images/thankband.svg'

function Footer() {
  return(
    <div className='App-footer'>
      <img src={ThankbandLogo} />
      <span className='App-footer-desc'>good deeds done</span>
      <span className='App-footer-copyright'>© 2021 Thankband · All Rights Reserved</span>
    </div>
  )
}

export default Footer