import ChoresDoneImg from '../images/chores-done.svg';
import WomanOnBikeImg from '../images/bike-image.svg';
import ManWithSmartphoneImg from '../images/mobile-shopping.svg';
import InfoBlock from "../components/InfoBlock";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from '../styles/App.css'
import CodeForm from "../components/CodeForm";

function App() {
  return (
    <div className='App'>
      <PageHeader IndexPageInfoBlock={true}/>
      <Link to='#' className="App-btn">Sign in</Link>

      <section>
        <div>Your QRCode is your gateway to begin your Journey.</div>
        <Link to='' className="App-link">Have a wristband?</Link>
        <InfoBlock
                   header='Scan my band.'
                   text='I have a QR code, Connect by open up your camera and scan the QR code to start your jounrey.'/>
        <Link to='#' className="App-btn">Connect</Link>
        <InfoBlock imgsrc={WomanOnBikeImg}
                     header='Join the story.'
                     text='Share your story of the ThankBand journey and access
                     its collection of good deed stories with its unique code.'/>
        <InfoBlock imgsrc={ChoresDoneImg}
                     header='Pay thanks forward.'
                     text='Pass the Thankband on to someone you help and continue the collection of good deed stories.'/>
        <InfoBlock imgsrc={ManWithSmartphoneImg}
                     header='Track good deeds.'
                     text='Receive continued updates of your Thankband’s stories and explore its journey as it travels around the world.'/>
        <CodeForm />
        </section>
        <PageFooter className="App-header" />
      </div>
  );
}

export default App;
