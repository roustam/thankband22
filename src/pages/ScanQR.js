import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import QrReader from 'react-qr-reader'
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

function RedirectToStory(data) {

//  history.push(data)
}

function ScanQRPage() {
  let state = {
    result: 'No result'
  }
  let navigate = useNavigate()
  const handleScan = data => {

    if (data && data.slice(0,4) === 'http') {
      this.setState({
        result: data
      })
      navigate(data) //redirecting to story page
    }
  }
  const handleError = err => {
    console.error(err)
  }

    return (
      <div className="QRCodeReader">
        <PageHeader />
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        <p>QR Code contains:</p>
        <p>{state.result}</p>
        <PageFooter />
      </div>
    )

}

export default ScanQRPage