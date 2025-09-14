import { FaWhatsapp, FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "./shared/Navbar";   
 import Footer from "./shared/Footer";  

export default function ContactUs() {
  return (


    <div className="">
      <Navbar />
    <div className="w-full bg-white text-gray-800    px-2 md:px-16 py-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-16 ">
        
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p>
            At <span className="font-semibold">Jobcode</span>, we are committed 
            to helping job seekers stay updated with the latest job openings, coding roadmaps, 
            and career tips. If you have any questions, suggestions, or need support, feel free to 
            reach out to us.
          </p>

          {/* Email Support */}
          <div>
            <h2 className="text-xl font-semibold">📧 Email Support</h2>
            <p className="mt-1">
              For general inquiries, support, or partnership opportunities, contact us at: <br />
              <span className="font-semibold text-blue-600">info@jobcode.in</span>
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold">🌐 Social Media</h2>
            <p className="mt-1">Stay connected with us on social media for the latest updates:</p>
            <ul className="list-disc list-inside text-blue-600 mt-2 space-y-1">
              <li><a href="#">Facebook: facebook.com/jobcodeteam</a></li>
              <li><a href="#">Instagram: instagram.com/jobcodeteam</a></li>
              <li><a href="#">Twitter (X): twitter.com/jobcodeteam</a></li>
              <li><a href="#">LinkedIn: linkedin.com/company/jobcode</a></li>
            </ul>
          </div>

          {/* Join Groups */}
          <div>
            <h2 className="text-xl font-semibold">📢 Join Our Groups</h2>
            <ul className="mt-2 space-y-1">
              <li>👉 Join WhatsApp: <a href="#" className="text-blue-600 font-semibold">Click Here</a></li>
              <li>👉 Follow Telegram: <a href="#" className="text-blue-600 font-semibold">Click Here</a></li>
            </ul>
          </div>

          {/* Business Address */}
          <div>
            <h2 className="text-xl font-semibold">📍 Business Address</h2>
            <p className="mt-1 font-semibold">Siliguri, West Bengal, India</p>
          </div>

          <hr className="my-6 border-gray-300" />

          {/* Important Note */}
          <div>
            <h2 className="text-xl font-semibold text-red-600">⚠ Important Note:</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>We <span className="font-semibold">do not</span> offer jobs directly. We only share verified job listings and opportunities.</li>
              <li>Always verify job details from the official company career portal before applying.</li>
              <li>If you find any outdated or misleading job post, kindly inform us.</li>
            </ul>
            <p className="mt-3">
              We appreciate your trust in <span className="font-semibold">Jobcode</span> 
              and look forward to assisting you in your career journey! 🚀
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Follow Us */}
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg">
                <FaWhatsapp className="mr-2" /> Join WhatsApp
              </a>
              <a href="#" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                <FaTelegram className="mr-2" /> Join Telegram
              </a>
              <a href="#" className="flex items-center bg-pink-500 text-white px-4 py-2 rounded-lg">
                <FaInstagram className="mr-2" /> Instagram
              </a>
              <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg">
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-bold">Airbus</p>
                <p className="text-sm">Build Your Career with a Data Science Engineer Internship</p>
                <p className="text-xs text-gray-500">September 11, 2025</p>
              </div>
              <div>
                <p className="text-sm font-bold">S&P Global</p>
                <p className="text-sm">Data Researcher Analyst Job Opportunity | Apply Now</p>
                <p className="text-xs text-gray-500">September 11, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}
