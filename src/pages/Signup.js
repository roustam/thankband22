import PageHeader from "../components/PageHeader";
import WomanOnBikeImg from "../images/bike-image.svg";
import InputSignIn from "../components/InputSingIn";
import {Link} from "react-router-dom";
import Footer from "../components/PageFooter";

function SignUp() {
  return (
    <div className='SignInContainer'>
      <PageHeader />
      <img className='TopImg' src={WomanOnBikeImg} />
      <div className='App-infoBlock'>
        <h3>Sign up</h3>
        <p className='App-SignIn-desc'>You are on your way to share your story.</p>
      </div>
      <InputSignIn placeholder='your name' />
      <InputSignIn placeholder='your email ' />
      <InputSignIn placeholder='your password ' password={true} />
      <Link to='#' className="App-btn SignInContainer-btn">Continue</Link>
      <Footer />
    </div>
  )
}

export default SignUp