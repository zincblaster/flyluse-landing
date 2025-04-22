import { motion } from 'framer-motion';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://YOUR-SUPABASE-URL.supabase.co', 'YOUR-ANON-KEY');

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async () => {
    const { error } = await supabase.from('subscribers').insert([{ email }]);
    setStatus(error ? 'Error subscribing' : 'Subscribed!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 text-white flex flex-col items-center justify-center p-6">
      <motion.h1 className="text-5xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
        FlyLuse
      </motion.h1>
      <motion.p className="text-lg mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Fly Smart. Live Luxe.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-3 rounded-l-md text-black w-64"
        />
        <button onClick={handleSubscribe} className="bg-white text-purple-700 p-3 rounded-r-md font-semibold">
          Notify Me
        </button>
      </motion.div>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}