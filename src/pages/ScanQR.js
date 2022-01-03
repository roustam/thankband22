import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

class ScanQRPage extends Component {
  state = {
    result: 'No result'
  }
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div className="QRCodeReader">
        <PageHeader />
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
        <p>QR Code contains:</p>
        <p>{this.state.result}</p>
        <PageFooter />
      </div>
    )
  }
}

export default ScanQRPage