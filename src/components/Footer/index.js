import React from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';
// import logo from '../../assets/cover/giving-logo.png';

function Footer() {
    return (
    <footer>
        <div class="rounded-social-buttons">
                    <a class="social-button facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a class="social-button twitter" href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a class="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
        <div>
          giVing ©2020 Created by project-pba
        </div>
    </footer>
    )
}  

export default Footer;