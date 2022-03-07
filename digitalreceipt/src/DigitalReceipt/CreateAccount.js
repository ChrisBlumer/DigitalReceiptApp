import React from 'react'

import './CSS/createaccount.css'

export default function CreateAccont({setPageTitle, titleOtions, ...props}){

    return(
        <div>            
            <h1>createAccont</h1>
            <div>
                <input id='email' placeholder='Email'/>
                <input id='password' type='password' placeholder='Password'/>
                <input id='repassword' type='password' placeholder='Reenter Password'/>
            </div>
            <div>
                <button onClick={() => {
                    console.log('submitting request')
                    setPageTitle(titleOtions[0])
                }}>
                    Submit
                </button>
                <button onClick={() => {
                    console.log('cancelling request')
                    setPageTitle(titleOtions[0])
                }}>
                    Cancel
                </button>
            </div>
        </div>
    )
}