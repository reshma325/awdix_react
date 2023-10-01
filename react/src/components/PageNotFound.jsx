import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const PageNotFound = () => {

  const router = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const hii = setInterval(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        alert("Hiii")
        router('/')
        clearInterval(hii)
        // hii.clearInterval()
      }
    }, 1000);
    // if(countdown == 0){
    //   h
    // }
  }, [countdown]);


  return (
    <div>
      <h1>
        Page Not Found, Redirecting you to the Homepage in {countdown} seconds....
      </h1>
      <button onClick={() => router('/')}>Go to home</button>
    </div>
  )
}

export default PageNotFound