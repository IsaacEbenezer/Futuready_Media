import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";

const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
     <div class="row">
       <div class="footer-col">
         <ul>
           <li><a href="/">About ABC Talkies</a></li>
           <li><a href="/">Privacy Policy</a></li>
           <li><a href="/">Copyright Policy</a></li>
           <li><a href="/">Cookies Policy</a></li>
           <li><a href="/">Filmmaker Contract</a></li>
         </ul>
       </div>
       <div class="footer-col">
         <ul>
           <li><a href="/">Big Shorts Challenge</a></li>
           <li><a href="/">Payment Cancellation &amp; Refund Policy</a></li>
           <li><a href="/">User Terms of Use</a></li>
           <li><a href="/">Contact us</a></li>
         </ul>
       </div>
       
       <div class="footer-col">
         <h4>follow us</h4>
         <div class="social-links">
           <a href="/"><FaFacebookF /></a>
           <a href="/">< FaTwitter/></a>
           <a href="/"><FaInstagram /></a>
         </div>
       </div>
       <div class="footer-col">
         <h4>App available on</h4>
         <div class="social-links">
           <a href="/"><AiFillApple /></a>
           <a href="/"><AiFillAndroid/></a>
         </div>
       </div>
     </div>
    </div>
 </footer>
  );
};

export default Footer;