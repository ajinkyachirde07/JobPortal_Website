

import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";


export default function PrivacyPolicy() {
  return (

    <div>
      <Navbar />
    <div className="w-full bg-white text-gray-800 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p>
            Welcome to <span className="font-semibold">Jobcode!</span> Your
            privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information when you use our
            website <span className="font-semibold">www.jobcode.in</span>.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <span className="font-semibold">A. Personal Information:</span>{" "}
                When you subscribe, contact us, or join our community, we may
                collect your name, email address, phone number, or other contact
                details.
              </li>
              <li>
                <span className="font-semibold">B. Non-Personal Information:</span>{" "}
                We automatically collect log data, IP addresses, browser type,
                device information, and cookies to improve website performance
                and user experience.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>✅ To provide job updates, internship listings, and career-related content</li>
              <li>✅ To improve website functionality and user experience</li>
              <li>✅ To respond to user inquiries and customer support requests</li>
              <li>✅ To personalize content based on user preferences</li>
              <li>✅ To prevent fraudulent activities and ensure website security</li>
              <li>✅ To comply with legal and regulatory obligations</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold">3. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance user
              experience and analyze website traffic. You can disable cookies in
              your browser settings, but some features may not function properly.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
            <p>
              We may use third-party services (such as Google Ads, analytics
              tools, and payment processors) that collect data for advertising,
              analytics, or other functions. These services operate under their
              own privacy policies.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold">5. Google AdSense & Advertising</h2>
            <p>
              We use <span className="font-semibold">Google AdSense</span> to
              display ads on our website. Google may use cookies to serve
              personalized ads based on user activity. You can manage your ad
              preferences through Google Ad Settings.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold">6. Data Protection & Security</h2>
            <p>
              We take appropriate security measures to protect your information
              from unauthorized access, loss, or misuse. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold">7. Your Rights & Choices</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>✔ Request access to your personal data</li>
              <li>✔ Ask for corrections or deletion of your data</li>
              <li>✔ Opt-out of marketing emails at any time</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-semibold">8. Children’s Privacy</h2>
            <p>
              Jobcode does not knowingly collect data from children under 13. If
              you believe a child has provided us with personal information,
              please contact us for removal.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-semibold">9. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the revised effective date.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-semibold">10. Contact Us</h2>
            <p>
              📧 Email: info@jobcode.in <br />
              🌐 Website: www.jobcode.in
            </p>
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
