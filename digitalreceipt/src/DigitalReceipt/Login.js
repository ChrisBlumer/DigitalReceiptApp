import React from 'react'

import Navbar from './Components/Navbar'
import Home from './Home'
import CreateAccont from './CreateAccount'

import './CSS/login.css'
import BarcodeScanner from './BarcodeScanner'
import getAuth from './Helpers/Auth'


export default function Login(){

    const titleOptions = ['', 'Create Account', 'Home', 'Scan']
    const [auth, setAuth] = React.useState(false)
    const [pageTitle, setPageTitle] = React.useState(titleOptions[0])

    return(
        <div>
            <div id='nav'>
                <Navbar auth={auth} setAuth={setAuth} pageTitle={pageTitle} setPageTitle={setPageTitle} titleOptions={titleOptions}/>
            </div>
            {!auth ? pageTitle !== titleOptions[1] 
                ? <div>
                    <div>
                        <input id='email' placeholder='Email'/>
                        <input id='password' type='password' placeholder='Password'/>
                    </div>
                    <div>
                        <button onClick={()=>{
                            var email = document.getElementById('email').value
                            var password = document.getElementById('password').value

                            //Will call true auth function in the future
                            if(getAuth(email, password)){
                                setAuth(true)
                                setPageTitle(titleOptions[2])
                            }
                            else{
                                alert('issue logging in please try again')
                            }
                        }}>
                            Login
                        </button>
                        <button onClick={() =>{
                            setPageTitle(titleOptions[1])
                        }}>
                            Create Account
                        </button>
                    </div>
                </div>
                : <CreateAccont setPageTitle={setPageTitle} titleOtions={titleOptions}/>
            : pageTitle === titleOptions[2] ? <Home/>
            :pageTitle === titleOptions[3] ? <BarcodeScanner/>
            : ''
            }
        </div>
    )
}