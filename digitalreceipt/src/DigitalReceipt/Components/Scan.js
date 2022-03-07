import React from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

export default function Scan({setScannedData, setValidScan}) {

  // const [ data, setData ] = React.useState('Not Found');

  return (
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result){
            // setData(result.text)
            setScannedData(result.text)
            setValidScan(true)
            console.log(result.text)
          } 
          // else{
          //   setData('Not Found')
          // }
        }}
      />
  )
}