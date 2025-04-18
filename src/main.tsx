import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import "./global.css";
import { Layout } from './Layout';
import { Competences } from './pages/Competences';
import { Contact } from './pages/Contact';
import { Index } from './pages/Index';
import { Realisations } from './pages/Realisations';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />

        <Route path="réalisations" element={<Realisations />} />

        <Route path="compétences" element={<Competences />} />

        <Route path="contact" element={<Contact />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
