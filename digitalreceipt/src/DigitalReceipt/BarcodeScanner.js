import React from 'react'
import Scan from './Components/Scan'

import CollapsibleTable from './Components/Grid'
// import './CSS/barcodescanner.css'

export default function BarcodeScanner({setPageTitle, titleOtions, ...props}){

    const [scannedData, setScannedData] = React.useState(null)
    const [validScan, setValidScan] = React.useState(false)

    console.log(typeof(scannedData))
    if(scannedData !== null && typeof(scannedData) === 'string'){
        var tmp = []
        tmp.push(JSON.parse(scannedData))

        setScannedData(tmp)
    }


    return(
        <div>            
            <div>
                { !validScan ? <Scan setValidScan={setValidScan} setScannedData={setScannedData}/>
                : <div style={{width:'75%', margin:'5% auto 2% auto'}}> 
                        <CollapsibleTable color="primary" data={scannedData}/>
                    </div>
                }
            </div>
            <div>
                <button onClick={() => {
                    console.log('Saving Reciept')
                    setValidScan(false)
                    setScannedData(null)
                }}>
                    Save Reciept
                </button>
                <button onClick={() => {
                    console.log('Cancelling Request')
                    setValidScan(false)
                    setScannedData(null)
                }}>
                    Cancel
                </button>
            </div>
        </div>
    )
}
