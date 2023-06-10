import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-900 text-white">
                <div>
                    <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/820/820691.png" alt="" />
                    <p>BF Musical Instrument School<br />Providing reliable tech since 2000</p>
                </div>
                <div>
                    <span className="footer-title">Classes</span>
                    <a className="link link-hover">Guitar</a>
                    <a className="link link-hover">Harmonium</a>
                    <a className="link link-hover">Pioano</a>
                    <a className="link link-hover">Drum</a>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <p>If You you need extra support You can contact with us</p>
                    <a className="link link-hover">email: bfmi@gmail.com</a>
                    <a className="link link-hover">Phone: +111 222-445 55</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-gray-900 text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by BFMI School</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;