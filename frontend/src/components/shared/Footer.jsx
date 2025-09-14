// // import React from 'react';

// // const Footer = () => {
// //   return (
// //     <footer className="border-t border-t-gray-200 py-8">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col md:flex-row justify-between items-center">
// //           <div className="mb-4 md:mb-0">
// //             <h2 className="text-xl font-bold">TechChange</h2>
// //             <p className="text-sm">Copyright © 2025 TechChange   |  All Rights Reserved</p>
// //           </div>
          
// //           <div className="flex space-x-4 mt-4 md:mt-0">
// //             <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
// //               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" /></svg>
// //             </a>
// //             <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
// //               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" /></svg>
// //             </a>
// //             <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
// //               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// // export default Footer;


// // Footer.jsx
// import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane, FaLinkedinIn, FaRss } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className=" text-black">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
//         {/* Logo + Description */}
//         <div>
//           <h2 className="text-2xl font-bold mb-3">
//             <span className="text-red-500">&lt;Tech</span>Change/&gt;
//           </h2>
//           <p className="text-gray-300 text-sm leading-relaxed">
//             <span className="font-bold">jobcode.in</span> provides the latest{" "}
//             <span className="font-semibold">tech job updates, coding roadmaps, resume tips, and career growth insights</span>. 
//             We ensure you get <span className="font-semibold">verified opportunities</span> and valuable resources to build a successful career.
//           </p>
//         </div>

//         {/* Categories */}
//         <div>
//           <h3 className="font-semibold text-lg mb-4">Categories</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             <li>Freshers Jobs</li>
//             <li>Internships</li>
//             <li>Experienced Jobs</li>
//             <li>Hackathons</li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             <li>About Us</li>
//             <li>Contact Us</li>
//             <li>Disclaimer</li>
//             <li>Privacy Policy</li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="font-semibold text-lg mb-4">Follow Us On</h3>
//           <div className="bg-[#222] p-4 rounded-lg">
//             <div className="flex items-center gap-2 mb-3">
//               <FaRss className="text-xl" />
//               <div>
//                 <p className="font-semibold">Follow Us On Social Media</p>
//                 <p className="text-xs text-gray-400">Get Latest Update On Social Media</p>
//               </div>
//             </div>
//             <div className="flex gap-3">
//               <a href="#" className="bg-blue-600 p-2 rounded text-white"><FaLinkedinIn /></a>
//               <a href="#" className="bg-black p-2 rounded text-white"><FaTelegramPlane /></a>
//               <a href="#" className="bg-green-600 p-2 rounded text-white"><FaWhatsapp /></a>
//               <a href="#" className="bg-pink-600 p-2 rounded text-white"><FaInstagram /></a>
//               <a href="#" className="bg-red-600 p-2 rounded text-white"><FaFacebookF /></a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
//         TechChange • All rights reserved
//       </div>
//     </footer>
//   );
// }

// Footer.jsx
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane, FaLinkedinIn, FaRss } from "react-icons/fa";
import { Link } from "react-router-dom";




export default function Footer() {
  return (
    <footer className=" text-black shadow-md border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            <span className="text-red-500">&lt;Tech</span>Change/&gt;
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="font-bold">TechChange</span> provides the latest{" "}
            <span className="font-semibold">tech job updates, coding roadmaps, resume tips, and career growth insights</span>. 
            We ensure you get <span className="font-semibold">verified opportunities</span> and valuable resources to build a successful career.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><a href="#">Freshers Jobs</a></li>
            <li><a href="#">Internships</a></li>
            <li><a href="#">Experienced Jobs</a></li>
            <li><a href="#">Hackathons</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="hover:text-[#5616c4] transition-colors duration-300 hover:underline " ><Link to="/AboutUs">About Us</Link></li>
            <li className="hover:text-[#5616c4] transition-colors duration-300 hover:underline " ><Link to="/contactUS">Contact Us</Link></li>
            <li className="hover:text-[#5616c4] transition-colors duration-300 hover:underline  " ><Link to="/disclaimer">Disclaimer</Link></li>
            <li className="hover:text-[#5616c4] transition-colors duration-300 hover:underline  " ><Link to="/Policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us On</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <FaRss className="text-xl text-black" />
              <div>
                <p className="font-semibold">Follow Us On Social Media</p>
                <p className="text-xs text-gray-500">Get Latest Update On Social Media</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="bg-blue-600 p-2 rounded text-white"><FaLinkedinIn /></a>
              <a href="#" className="bg-black p-2 rounded text-white"><FaTelegramPlane /></a>
              <a href="#" className="bg-green-600 p-2 rounded text-white"><FaWhatsapp /></a>
              <a href="#" className="bg-pink-600 p-2 rounded text-white"><FaInstagram /></a>
              <a href="#" className="bg-red-600 p-2 rounded text-white"><FaFacebookF /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" pb-4 text-center text-gray-600 text-sm">
        TechChange • Copyright © {new Date().getFullYear()} • All rights reserved
      </div>
    </footer>
  );
}
