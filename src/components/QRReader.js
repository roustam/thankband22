import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import {useNavigate} from "react-router-dom";

const QRReaderComponent = () => {

  let navigate = useNavigate()
  const handleScan = (data) => {
    console.log('data -> ', data)
    if (data) {
      console.log('data -> ', data)
      navigate(data)
    }
  }
  return(
    <div>
      <QrReader
        delay={300}
        //onError={this.handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  )

}

// class QRReaderComponent extends Component {
//   state = {
//     result: 'No result'
//   }
//   returnResult = data => {
//     return data
//   }
//   handleScan = data => {
//     if (data) {
//       this.setState({
//         result: data
//       })
//     }
//   }
//   handleError = err => {
//     console.error(err)
//   }
//   render() {
//     return (
//       <div>
//         <QrReader
//           delay={300}
//           onError={this.handleError}
//           onScan={this.handleScan}
//           style={{ width: '100%' }}
//         />
//         <p>{this.state.result}</p>
//
//       </div>
//     )
//   }
// }

export default QRReaderComponent