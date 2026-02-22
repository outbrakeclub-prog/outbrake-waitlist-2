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
            Politique de Confidentialité / Privacy Policy
          </h1>
          
          <div className="space-y-6 text-sm md:text-base leading-relaxed" style={{ fontFamily: '"Work Sans", sans-serif' }}>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Identité du responsable / Identity of the Controller</h2>
              <p>Le responsable du traitement des données et Délégué à la Protection des Données (DPO) est : Mattéo Jadeau EI, situé au 6 rue Carnot, 94700 Maisons-Alfort, France.</p>
              <p className="mt-2">The Data Controller and Data Protection Officer (DPO) is: Mattéo Jadeau EI, located at 6 rue Carnot, 94700 Maisons-Alfort, France.</p>
              <p className="mt-2"><span className="text-white/50">Contact :</span> <a href="mailto:outbrake.club@gmail.com" className="hover:text-white transition-colors">outbrake.club@gmail.com</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Finalités / Purpose of Collection</h2>
              <p className="mb-2">Les données sont collectées pour / Data is collected for :</p>
              <ul className="list-disc list-inside space-y-1 text-white/70">
                <li>Vous informer par e-mail du lancement officiel de la marque Outbrake / Informing you by email about the official launch of the Outbrake brand.</li>
                <li>Vous envoyer notre newsletter (actualités, offres exclusives, marketing) / Sending you our newsletter (news, exclusive offers, marketing content).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Base légale / Legal Basis</h2>
              <p>Le traitement de vos données repose exclusivement sur votre consentement, que vous donnez librement en remplissant et en validant le formulaire d'inscription.</p>
              <p className="mt-2">The processing of your data is based exclusively on your consent, which you provide freely by completing and submitting the registration form.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Caractère obligatoire / Mandatory Nature</h2>
              <p>La fourniture de votre adresse e-mail est obligatoire pour vous inscrire à la waitlist. À défaut, nous ne pourrons pas vous enregistrer.</p>
              <p className="mt-2">Providing your email address is mandatory to join the waitlist. Failure to provide this data will prevent us from registering you.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Destinataires / Data Recipients</h2>
              <p className="mb-2">Vos données ne sont jamais vendues. Elles sont uniquement accessibles par / Your data is never sold. It is only accessible by :</p>
              <ul className="list-disc list-inside space-y-1 text-white/70">
                <li>Le responsable du traitement (Mattéo Jadeau) / The Data Controller (Mattéo Jadeau).</li>
                <li>Nos sous-traitants techniques (Mailchimp, Brevo, Vercel) / Our technical processors (Mailchimp, Brevo, Vercel).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Conservation / Retention Period</h2>
              <p>Vos données sont conservées tant que vous ne manifestez pas votre volonté de vous désinscrire, et supprimées après 3 ans d'inactivité.</p>
              <p className="mt-2">Your data is kept as long as you do not unsubscribe, and permanently deleted after 3 years of inactivity.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Vos droits / Your Rights</h2>
              <p className="mb-2">Vous disposez des droits suivants / You have the following rights :</p>
              <ul className="list-disc list-inside space-y-1 text-white/70">
                <li>Droit d'accès et de rectification / Right of access and rectification.</li>
                <li>Droit à l'effacement / Right of erasure (right to be forgotten).</li>
                <li>Droit à la portabilité / Right to data portability.</li>
                <li>Droit de retrait du consentement / Right to withdraw consent at any time.</li>
              </ul>
              <p className="mt-2">Pour exercer ces droits / To exercise these rights : <a href="mailto:outbrake.club@gmail.com" className="hover:text-white transition-colors">outbrake.club@gmail.com</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Réclamation CNIL / Right to Lodge a Complaint</h2>
              <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL.</p>
              <p className="mt-2">If you feel that your rights are not being respected, you have the right to lodge a complaint with the CNIL.</p>
              <p className="mt-2"><a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.cnil.fr</a></p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}