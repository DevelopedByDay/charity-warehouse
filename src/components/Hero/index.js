import React from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';
import logo from '../../assets/hero.jpg';

function Hero() {
return (
    <section>
        <div className = "mfg-home-search-seasonal responsivebg impact-results-hero">
          <h1 className = "mfgtextabsolute blue-on-white">
            <span className = "background">
              Statement Or Other Text
            </span>
            <a href='https://www.freepik.com/vectors/people'>People vector created by pikisuperstar - www.freepik.com</a>
            <img src={logo} className="my-2" style={{ width: "100%" }} alt="cover" />
          </h1>
          <a href = "index image">
            <h2 className = "mfgtextabsolute white-on-green">
              <span className = "background">
                "Statement or Other Text"
                <span className = "green-link">Learn More...</span>
              </span>
            </h2>
          </a> 
        </div>
        </section>
)
}

export default Hero;