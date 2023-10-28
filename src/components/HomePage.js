import React from 'react';
import Footer from './Footer';
import '../css/Homepage.css'

const HomePage = () => {
    
  return(

     <div className='pcards'>
    
  <div className='pcard'>
      <div className='card___content'>
        <p>
        <p>Welcome, Drivers!</p>
        <p>We extend a warm and enthusiastic welcome to all our dedicated 
            drivers joining us on this virtual platform.</p>
        Your role as ambassadors of our bus company is vital, 
        and we greatly appreciate your commitment to providing safe and efficient
         transportation to our valued passengers. 
        <p> As you embark on your daily journeys, 
            we kindly remind you to conduct yourselves with the utmost professionalism and respect.</p>
        <p> Each interaction with passengers is an opportunity to make a positive impact, 
            so let's ensure we deliver exceptional customer service at every turn.</p>
        </p>
    
      </div>
  </div>
  <div className='pcard'>
      <div className='card___content'>
        <p>
        In addition, we would like to emphasize the importance of keeping your route information up to date. 
        <p>By promptly updating your assigned routes, 
            we can ensure smooth operations and minimize any inconvenience to our passengers. </p>
        <p>Remember, you are part of a dynamic team 
            dedicated to providing a seamless transportation experience. 
            Your dedication and attention to detail make all the difference 
            in fostering a safe and enjoyable journey for our passengers.
             We are confident in your abilities and appreciate your commitment to excellence.
             </p>
        </p>
     <p></p>
     <p></p>
      </div>

  </div>
  <div className='pcard'>
      <div className='card___content'>
        <p>
        Wishing each and every one of you a busy and successful day at work. 
        Let's continue to drive forward together, 
        delivering outstanding service and upholding the high standards that define our company.
        </p>

        <header style={{fontSize: "20px"}}>Thank you for being an essential part of our bus company!</header>
        <header style={{fontSize: "40px"}}>ROUTE-MASTER-LTD</header>
      </div>
  </div>
</div>)  ; <Footer/>
};

export default HomePage;
