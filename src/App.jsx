import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://your-project.supabase.co', 'your-public-anon-key');

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Welcome to FlyLuse ✈️</h1>
      <p>Track flight fares and book at the lowest price.</p>
    </div>
  );
}

export default App;