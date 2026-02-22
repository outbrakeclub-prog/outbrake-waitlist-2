import { Link } from "react-router";
import { motion } from "motion/react";

export default function LegalNotice() {
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
            Legal Notice
          </h1>
          
          <div className="space-y-6 text-sm md:text-base leading-relaxed" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Identification</h2>
              <p>
                Outbrake Motorsport is a registered trademark. This website is operated by Outbrake, located at [Address Line 1], [City], [Country].
              </p>
              <p className="mt-2">
                Email: contact@outbrake.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Outbrake Motorsport or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Limitation of Liability</h2>
              <p>
                Outbrake Motorsport shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Applicable Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
