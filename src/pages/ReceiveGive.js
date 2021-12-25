import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import InfoBlock from "../components/InfoBlock";
import WomanOnBikeImg from "../images/bike-image.svg";
import {Link} from "react-router-dom";
import '../styles/App.css'

function ReceiveGive() {
  return (
    <div className='ReceiveGive'>
      <PageHeader className='ReceiveGive-header'/>
      <InfoBlock topimg={WomanOnBikeImg}
                 header='Reciving an act thanks'
                 text='Receive the act of thanks and pass it. Lorem ipsum, dolores lorem'/>
      <Link to='#' className="ReceiveGive Continue-btn">Continue</Link>
      <InfoBlock topimg={WomanOnBikeImg}
                 header='Giving an act thanks'
                 text='Receive the act of thanks and pass it. Lorem ipsum, dolores lorem'/>
      <Link to='#' className="ReceiveGive Continue-btn">Continue</Link>
      <PageFooter />
    </div>
  )
}

export default ReceiveGive