import React from 'react';
import VoiceListener from './components/VoiceListener';

function App() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Hey Wimfi</h1>
      <p>Say: <i>"Hey Wimfi, I put my charger in the case."</i></p>
      <VoiceListener />
    </main>
  );
}
export default App;
