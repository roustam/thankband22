import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QrReader from 'react-qr-reader'
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import QrReaderComponent from '../components/QRReader'

function ScanQRPage() {
  const result = 'test'
  const Something = QrReaderComponent.hasOwnProperty('result')
  const GetQrCodeResult = (res) => {
    console.log('qr code result' , res)
  }

  console.log('Qr reader comp --->', QrReaderComponent)
    return (
      <div className="QRCodeReader">
        <PageHeader />
        <p>story page url: {result} </p>
          <QrReaderComponent />
        <PageFooter />
      </div>
    )

}

export default ScanQRPage