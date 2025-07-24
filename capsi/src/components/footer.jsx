import React from 'react';
//import '../';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/aegerev" target="_blank"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/alexander-egerev-3494aa301/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; 2024 Alexander Egerev  |  <a href="https://github.com/aegerev/my-portfolio/blob/main/src/assets/Egerev_Alexander_Resume2024.docx.pdf" className="link">Get Resume Here</a>  |  <a href="https://coolors.co/palette/f7e03b-f5b338-ec2020-00ab4e-1a8549">color palette</a>
            </p>

        </div>
    )
}

export default Footer;