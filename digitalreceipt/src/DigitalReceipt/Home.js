import React from 'react'

import CollapsibleTable from './Components/Grid'
import {MultiCompressedBarcode} from './Helpers/Variables'

import './CSS/home.css'

export default function Home(){

    const [data, setData] = React.useState(MultiCompressedBarcode)

    //add use effect to call the GET API to the DB

    return(
        <div>            
            <h1>Home</h1>
            <div style={{width:'75%', margin:'auto'}}> 
                {data ? <CollapsibleTable color="primary" data={data}/>
                    : <p>No Data</p>
                }
            </div>
        </div>
    )
}

/**
 * edit table to display x number of items from the data in HRF
 */