import React from 'react';
import logo from '../../assets/hero.jpg';

function Hero() {
return (
    <section className = 'my-5'>
      <div className = 'flex-row'>
            <img src={logo} className="my-2" style={{ width: "100%" }} alt="cover" />
        </div>
    </section>
)
}

export default Hero;