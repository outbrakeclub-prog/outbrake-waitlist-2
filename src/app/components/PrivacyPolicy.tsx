import { Link } from "react-router";
import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#111] text-white/80 p-6 md:p-12 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-white/50 hover:text-white mb-8 transition-colors"
        >
          ← Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ fontFamily: '"Racing Sans One", sans-serif' }}>
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-sm md:text-base leading-relaxed" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you sign up for our waitlist. This may include your email address and name.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to send you updates about our brand launch, products, and services. We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Cookies</h2>
              <p>
                We may use cookies and similar tracking technologies to track the activity on our Service and hold certain information to improve your experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Data Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@outbrake.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
