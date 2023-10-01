import React from 'react'
import { useNavigate } from 'react-router-dom'


const Ternary = ({ loggedIn, setIsLoggedIn }) => {
    const router = useNavigate()
    return (
        <div><h1>
            Ternary
        </h1>
            {loggedIn ?
                <h1 onClick={() => setIsLoggedIn((preVal) => !preVal)}>
                    Welcome !
                </h1>
                :
                <button onClick={() => setIsLoggedIn((preVal) => !preVal)} >
                    Please Login
                </button>

            }<br />
            {loggedIn && <h3>Logged In</h3>}




            <button onClick={() => router('/')}>Go To HomePage</button>
        </div>
    )
}

export default Ternary