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
            Mentions Légales / Legal Notice
          </h1>
          
          <div className="space-y-6 text-sm md:text-base leading-relaxed" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Éditeur du site / Website Editor</h2>
              <p><span className="text-white/50">Nom / Name :</span> Mattéo Jadeau EI (Entrepreneur Individuel)</p>
              <p className="mt-2"><span className="text-white/50">Siège social / Registered Office :</span> 6 rue Carnot, 94700, Maisons-Alfort, France</p>
              <p className="mt-2"><span className="text-white/50">Immatriculation / Registration :</span> 919 477 810 R.C.S. Créteil</p>
              <p className="mt-2"><span className="text-white/50">Numéro de TVA / VAT Number :</span> FR16919477810</p>
              <p className="mt-2"><span className="text-white/50">Statut fiscal / Tax Status :</span> TVA non applicable, art. 293 B du CGI (VAT not applicable)</p>
              <p className="mt-2"><span className="text-white/50">Contact :</span> <a href="mailto:Outbrake.club@gmail.com" className="hover:text-white transition-colors">Outbrake.club@gmail.com</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Hébergement / Hosting</h2>
              <p className="mb-2">Le site est hébergé par / The website is hosted by :</p>
              <p><span className="text-white/50">Hébergeur / Host :</span> Vercel Inc.</p>
              <p className="mt-2"><span className="text-white/50">Adresse / Address :</span> 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
              <p className="mt-2"><span className="text-white/50">Site web / Website :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">https://vercel.com</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Propriété intellectuelle / Intellectual Property</h2>
              <p>
                Tout le contenu de ce site, incluant mais non limité aux textes, graphiques, logos, images et logiciels, est la propriété de Mattéo Jadeau EI / Outbrake Motorsport et est protégé par les lois internationales sur le droit d'auteur.
              </p>
              <p className="mt-2">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Mattéo Jadeau EI / Outbrake Motorsport and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Limitation de responsabilité / Limitation of Liability</h2>
              <p>
                Outbrake Motorsport ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site.
              </p>
              <p className="mt-2">
                Outbrake Motorsport shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Droit applicable / Applicable Law</h2>
              <p>
                Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
              <p className="mt-2">
                This website is governed by French law. In case of dispute, French courts shall have exclusive jurisdiction.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}