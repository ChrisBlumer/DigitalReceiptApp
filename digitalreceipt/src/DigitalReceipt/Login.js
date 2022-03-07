import React from 'react'

import Navbar from './Components/Navbar'
import Home from './Home'
import CreateAccont from './CreateAccount'

import './CSS/login.css'
import BarcodeScanner from './BarcodeScanner'
import getAuth from './Helpers/Auth'
import { Button, TextField } from '@mui/material'


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
                        <img src='/TempLogo.png' alt="Digital Receipt Temporary Logo" width="25%" height="25%"></img>
                    </div>
                    <div id='loginInputs'>
                        {/* <input id='email' placeholder='Email'/> */}
                        <TextField id="email" label="Email" variant="outlined" placeholder='Email'/>
                        <TextField id="password" type="password" label="Password" variant="outlined" />
                        {/* <input id='password' type='password' placeholder='Password'/> */}
                    </div>
                    <div>
                        <Button
                            className='btn'
                            variant="contained"
                            onClick={()=>{
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
                        </Button>
                        <Button
                            className='btn'
                            variant="contained"
                            onClick={() =>{
                                setPageTitle(titleOptions[1])
                        }}>
                            Create Account
                        </Button>
                    </div>
                    <a href=''>Forgot Password</a>
                </div>
                : <CreateAccont setPageTitle={setPageTitle} titleOtions={titleOptions}/>
            : pageTitle === titleOptions[2] ? <Home/>
            :pageTitle === titleOptions[3] ? <BarcodeScanner/>
            : ''
            }
        </div>
    )
}