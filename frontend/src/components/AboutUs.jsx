import { FaWhatsapp, FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "./shared/Navbar";   
import Footer from "./shared/Footer";



export default function AboutUs() {
  return (

   <div>
     <Navbar />
   
     <div className="w-full bg-white text-gray-800 px-19 md:px-16 py-5 ">
        
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-16 ">
        
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className=" font-bold text-lg sm:text-xl ">About Us</h1>
          <p>
            Welcome to <span className="font-semibold">HireNext</span>, your{" "}
            <span className="font-semibold">one-click solution</span> to staying
            updated with the latest tech job openings, internships, coding
            roadmaps, and career insights. We understand that{" "}
            <span className="font-semibold">
              job hunting is time-consuming and overwhelming
            </span>
            —thats why were here to simplify the process.
          </p>

          <h2 className="text-xl font-semibold">Our Goal</h2>
          <p>
            Finding the right job shouldn’t be a time-consuming process. Instead
            of visiting multiple company portals, Jobcode brings all the latest
            job openings and internship opportunities to one place. Every job
            post is <span className="font-semibold">genuine and verified</span>.
            With just one click, you can access company portals and apply
            directly!
          </p>

          <h2 className="text-xl font-semibold">Why Choose Jobcode?</h2>
          <ul className="list-none space-y-2">
            <li>✅ <span className="font-semibold">Latest job updates</span> – Stay informed about openings.</li>
            <li>✅ <span className="font-semibold">Verified internships</span> – Find real opportunities.</li>
            <li>✅ <span className="font-semibold">Coding roadmaps</span> – Get structured learning paths.</li>
            <li>✅ <span className="font-semibold">Resume & interview tips</span> – Learn how to stand out.</li>
            <li>✅ <span className="font-semibold">Time-saving & efficient</span> – No more endless job hunting.</li>
          </ul>

          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p>📧 Email: info@hireNext.in</p>
          <p>💬 WhatsApp: Join Group</p>
          <p>🌐 Website: www.HireNext.in</p>
          <p>📲 Follow us: @HireNext</p>

          <h2 className="text-xl font-semibold">Your Future Starts Here!</h2>
          <p>
            Keep studying, keep skilling up, and{" "}
            <span className="font-semibold">stay motivated</span>—your dream job
            is just around the corner!{" "}
            <span className="font-semibold">
              We wish you success in your career journey. 🚀
            </span>
          </p>
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
