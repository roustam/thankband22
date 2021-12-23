import SittingMeditation from '../images/sitting-meditation.svg'
import {Link} from "react-router-dom";
import '../styles/App.css'
import PageHeader from "../components/PageHeader";
import Footer from "../components/PageFooter";

function ThankYou() {
  return(
    <div className='ThankYouPage'>
      <PageHeader />
      <h2>Thank you</h2>
      <img className='TopImg' src={SittingMeditation} />
      <h3>Keep your story alive by sharing it with someone new. </h3>
      <div className='ThankYouPage-desc'>You can track the Journey of your band and see how we all all connected.</div>
      <Link to='#' className="App-btn SignInContainer-btn">Continue</Link>
      <Footer />
    </div>

  )
}

export default ThankYou