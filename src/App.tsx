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

        {/* Short URL support — /prakunj works same as /invite/prakunj */}
        <Route path="/:guestSlug" element={<WeddingInvitationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
