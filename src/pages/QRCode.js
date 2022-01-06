import {useEffect, useState } from "react";
import QRCode from 'qrcode'

import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
function QRCodePage() {

  const focation = '/sharestory'
  console.log('url address ', focation)

  const [src, setSrc ] = useState("")

  useEffect(()=>QRCode.toDataURL(focation).then((setSrc)), [focation])
  return(
    <div className="QRCodePage">
      <PageHeader />
      <img className="QRCodePage-CodeImg" src={src}/>
      <PageFooter />
    </div>
  )
}

export default QRCodePage