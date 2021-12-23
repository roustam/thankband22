import ThankbandLogoImg from '../images/thankband.svg'
import WomanTopImg from '../images/woman-top-image.svg'
import NavBar from "./NavBar";

const Header = props => {
  return(
    <header>
      <img src={ThankbandLogoImg} />
      <NavBar />
      {props.IndexPageInfoBlock && (
      <div className='App-header-block'>
        <img src={WomanTopImg} />
        <h2>Making good deeds social.</h2>
        <div className='App-header-block-desc'>An experiment to share and follow acts of kindness</div>
      </div>
      )}

    </header>
  )
}

export default Header