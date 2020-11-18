import React from 'react';


function Footer() {
    return (
    <footer>
        <div className="rounded-social-buttons">
                    <a className="social-button facebook" href="https://www.facebook.com/" target="_blank" rel = 'noreferrer'><i class="fab fa-facebook-f"></i></a>
                    <a className="social-button twitter" href="https://www.twitter.com/" target="_blank" rel = 'noreferrer'><i class="fab fa-twitter"></i></a>
                    <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank" rel = 'noreferrer'><i class="fab fa-linkedin"></i></a>
                    <a className="social-button youtube" href="https://www.youtube.com/" target="_blank" rel = 'noreferrer'><i class="fab fa-youtube"></i></a>
                    <a className="social-button instagram" href="https://www.instagram.com/" target="_blank" rel = 'noreferrer'><i class="fab fa-instagram"></i></a>
        </div>
        <div>
          giVing ©2020 Created by project-ptba
        </div>
    </footer>
    )
}  

export default Footer;