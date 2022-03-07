import React from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

export default function Scan({setScannedData, setValidScan}) {

  return (
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result){
            setScannedData(result.text)
            setValidScan(true)
// console.log(result.text)
          } 
        }}
      />
  )
}