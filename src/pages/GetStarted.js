import PageHeader from "../components/PageHeader";
import WomanOnBikeImg from "../images/bike-image.svg";
import InputSignIn from "../components/InputSingIn";
import {Link} from "react-router-dom";
import Footer from "../components/PageFooter";
import GoogleIcon from '../images/google.svg'
import FacebookIcon from '../images/facebook.svg'
import AppleIcon from '../images/apple.svg'

function GetStarted() {
  function LinkMouseOver() {

  }
  return (
    <div className='GetStartedContainer'>
      <PageHeader />
      <img className='TopImg' src={WomanOnBikeImg} />
      <div className='App-infoBlock'>
        <h3>Get started</h3>
        <p className='App-SignIn-desc'>You are on your way to share your story.</p>
      </div>
      <Link className='LoginButton' to='#'>
        <img src={GoogleIcon} />
        <span>Continue with Google</span>
      </Link>
      <Link className='LoginButton' to='#'>
        <img src={AppleIcon} />
        <span>Continue with Apple</span>
      </Link>
      <Link className='LoginButton' to='#'>
        <img src={FacebookIcon} />
        <span>Continue with Facebook</span>
      </Link>
      <Link className='PlainLink' to='#'>Continue with Email</Link>
      <p className='App-SignIn-desc'>Chill out, we dont give your data to anyone.</p>
      <Footer />
    </div>
  )
}

export default GetStarted