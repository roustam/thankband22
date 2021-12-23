import HeaderWhite from "../components/HeaderWhite"
import WomanOnBike from '../images/bike-image.svg'
import FooterWhite from '../components/FooterWhite'
import {Link} from "react-router-dom";
function GoodDeeds() {
  document.body.classList.add('Background-Green');

  return (
    <div className='GoodDeeds'>
      <div className='GoodDeeds-container'>
        <HeaderWhite />
        <h2 className="HeaderText">You are a 50% <br />better person</h2>
        <img className="TopImg" src={WomanOnBike} />
        <div className="GoodDeeds-desc">You can track the Journey of <br /> your band and see how we <br /> are connected.</div>
        <Link className="GoodDeeds-Link" to="#">Continue</Link>
      </div>
      <FooterWhite />
    </div>
  )
}

export default GoodDeeds