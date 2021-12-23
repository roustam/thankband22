import PageHeader from "../components/PageHeader";
import WomanOnBikeImg from '../images/bike-image.svg';
import InfoBlock from "../components/InfoBlock";
import InputSignIn from "../components/InputSingIn";
import '../styles/App.css'
import {Link} from "react-router-dom";
import Footer from "../components/PageFooter";
import InputStory from "../components/InputStory";


function ShareStory() {
  return (
    <div className='ShareYourStory'>
      <PageHeader />
      <img className='TopImg' src={WomanOnBikeImg} />
      <h2>Share your story</h2>

      <InputStory />
      <Link to='#' className="App-btn SignInContainer-btn">Continue</Link>
      <Footer />
    </div>
  )
}

export default ShareStory