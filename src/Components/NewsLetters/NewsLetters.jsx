import React from 'react'
import './NewsLetters.css'

const NewsLetters = () => {
  return (

        <div className='newsletter'>
            <h1>Get Exclusive Offers on your Email</h1>
            <p>Subscribe to our newsletter and get updated</p>
            <div>
                <input type="email" placeholder='Enter your email here' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}


export default NewsLetters
