import React from 'react'
import WhiteThankbandLogo from '../images/WhiteThankbandLogo.svg'

function FooterWhite() {
  return(
    <div className='App-footer'>
      <img src={WhiteThankbandLogo} />
      <span className='GoodDeeds-desc'>good deeds done</span>
      <span className='GoodDeeds-copyright'>© 2021 Thankband · All Rights Reserved</span>
    </div>
  )
}

export default FooterWhite