import { useState } from 'react';
import { motion } from 'motion/react';
import { Loader2, ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';
import { createClient } from '@supabase/supabase-js';

// Connexion à Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export default function WaitlistForm() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Vrai appel Supabase (remplace le setTimeout)
    const { error } = await supabase
      .from('Waitlist')
      .insert([{ first_name: firstName, email: email }]);

    setLoading(false);

    if (error) {
      toast.error('Something went wrong. Please try again.');
    } else {
      setSubmitted(true);
      toast.success("You've been added to the waitlist!");
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white text-center w-full max-w-md mx-auto"
      >
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
          <Check className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
        <p className="text-white/70">We'll let you know when Outbrake goes live.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full max-w-2xl mx-auto items-stretch">
      <div className="flex-1 relative group">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          required
          className="w-full h-12 px-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
        />
      </div>
      <div className="flex-1 relative group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          className="w-full h-12 px-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="h-12 px-8 bg-[#00295B] text-white font-bold rounded-full hover:bg-[#003da8] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap shadow-lg shadow-[#00295B]/30"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            Join the waitlist
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
