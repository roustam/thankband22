import ThankbandLogoWhite from '../images/WhiteThankbandLogo.svg'
import NavBar from "./NavBar";

function HeaderWhite() {
  return (
    <header>
      <img src={ThankbandLogoWhite} className=''/>
      <NavBar WhiteLogo={true} />
    </header>
  )
}

export default HeaderWhite