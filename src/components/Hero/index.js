import React from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';
import logo from '../../assets/hero.jpg';

function Hero() {
return (
    <section className = 'my-5'>
      <div className = 'flex-row'>
        {/* <div className = "mfg-home-search-seasonal responsivebg impact-results-hero"> */}
          {/* <div className = "mfgtextabsolute blue-on-white"> */}
            {/* <span className = "background">
            
            </span> */}
           
            <img src={logo} className="my-2" style={{ width: "100%" }} alt="cover" />
          {/* </div> */}
          {/* <a href = "index image">
            <h2 className = "mfgtextabsolute white-on-green">
              <span className = "background"></span>
               
                <span className = "green-link"></span>
              
            </h2>
          </a>  */}
        </div>
    </section>
)
}

export default Hero;