import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './pages/IndexPage';
import AboutPage from '../src/pages/aboutPage'
import GetStarted from "./pages/GetStarted";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import reportWebVitals from './reportWebVitals';
import ShareStory from "./pages/ShareStory";
import ThankYou from "./pages/ThankYou";
import GoodDeeds from "./pages/Gooddeeds"
import QRCode from "./pages/QRCode";
import ReceiveGive from './pages/ReceiveGive'
import ScanQRPage from './pages/ScanQR'
render (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sharestory" element={<ShareStory />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/gooddeeds" element={<GoodDeeds />} />
        <Route path="/QRCode" element={<QRCode />} />
        <Route path='/ReceiveGive' element={<ReceiveGive />} />
        <Route path="/scanqr" element={<ScanQRPage />} />
      </Routes>
    </BrowserRouter>,

  document.getElementById('root')
)

reportWebVitals();
