import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WeddingInvitationPage } from './pages/WeddingInvitationPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Invitation Route */}
        <Route path="/" element={<WeddingInvitationPage />} />

        {/* Personalized Guest URL Routes (e.g. /invite/rahul-sharma, /invite/amit-family, /invite/prakunj-vishwakarma) */}
        <Route path="/invite/:guestSlug" element={<WeddingInvitationPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
