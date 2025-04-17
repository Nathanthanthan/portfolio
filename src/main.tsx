import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { Index } from './pages/Index';
import "./global.css";
import { Realisations } from './pages/Realisations';
import { Competences } from './pages/Competences';
import { Contact } from './pages/Contact';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />

        <Route path="réalisations" element={<Realisations />} />

        <Route path="compétences" element={<Competences />} />

        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
