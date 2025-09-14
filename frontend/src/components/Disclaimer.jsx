
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

export default function Disclaimer() {
  return (

  <div> <Navbar/> 
    <div className="w-full bg-white text-gray-800 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">Disclaimer</h1>
          <p>
            Welcome to <span className="font-semibold">Jobcode</span>. By using
            our website, you acknowledge and agree to this disclaimer. If you do
            not agree with any part of this disclaimer, please do not use our
            site.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold">1. General Information</h2>
            <p>
              Jobcode is an <span className="font-semibold">informational platform</span> 
              that provides job updates, internship opportunities, coding roadmaps, 
              and career-related resources. While we strive to ensure the accuracy 
              and reliability of the information, 
              <span className="font-semibold"> we do not guarantee</span> that all job 
              listings or details are 100% error-free or up to date.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold">2. No Guarantees on Employment</h2>
            <p>
              Jobcode does <span className="font-semibold">not</span> offer jobs or 
              guarantee employment. We only share job opportunities posted by 
              third-party companies and organizations. Job seekers are responsible 
              for verifying job details, eligibility, and authenticity before applying.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold">3. External Links Disclaimer</h2>
            <p>
              Our website may contain links to third-party websites, including company 
              career portals and external job listings. 
              <span className="font-semibold"> We do not control or endorse</span> the 
              content, privacy policies, or practices of these third-party websites. 
              Users should review their terms and policies before engaging with them.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold">4. Advertisement & Google AdSense</h2>
            <p>
              Jobcode displays advertisements through 
              <span className="font-semibold"> Google AdSense</span>. These ads are served 
              based on user interests and cookies. Clicking on third-party ads is at 
              <span className="font-semibold"> your own risk</span>, and we are not 
              responsible for any issues arising from external advertisements.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold">5. Copyright & Fair Use Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Images & Media:</span> Jobcode uses 
                royalty-free images and content sourced under 
                <span className="font-semibold"> Creative Commons License</span> or 
                free-to-use sources. If you believe any image or content violates 
                copyright laws, please contact us for removal.
              </li>
              <li>
                <span className="font-semibold">Third-Party Content:</span> All trademarks, 
                company names, and logos mentioned belong to their respective owners. 
                They are used for <span className="font-semibold">informational purposes only</span>.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
            <p>
              Jobcode, its team, and affiliates shall not be held liable for any losses, 
              damages, or issues resulting from the use of this website, job listings, 
              or third-party links. Users must exercise discretion and conduct 
              independent research before taking action.
            </p>
          </div>
            {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold">7. Changes to This Disclaimer</h2>
            <p>
                We reserve the right to update or modify this disclaimer at any time. Changes will be effective upon posting on this page.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">8. Contact Usr</h2>
            <p>
               If you have any concerns or questions regarding this disclaimer, please contact us at: </p>

               <p>📧 Email: info@jobcode.in</p> 
               <p>🌐 Website: www.jobcode.in </p>  
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          {/* Follow Us */}
          <div className="border rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <div className="flex flex-col space-y-3">
              <a href="#" className="bg-green-500 text-white text-center py-2 rounded-full">Join WhatsApp</a>
              <a href="#" className="bg-blue-600 text-white text-center py-2 rounded-full">Join Telegram</a>
              <a href="#" className="bg-pink-500 text-white text-center py-2 rounded-full">Instagram</a>
              <a href="#" className="bg-black text-white text-center py-2 rounded-full">LinkedIn</a>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="border rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-3">Recent Posts</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="block text-sm hover:underline">
                  Build Your Career with a Data Science Engineer Internship at Airbus
                </a>
                <p className="text-xs text-gray-500">September 11, 2025</p>
              </li>
              <li>
                <a href="#" className="block text-sm hover:underline">
                  Data Researcher Analyst Job Opportunity | Apply Now
                </a>
                <p className="text-xs text-gray-500">September 11, 2025</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
     </div>
    <Footer />
   </div>
  );
}
