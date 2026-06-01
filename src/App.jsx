import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Services
const ServicesIndex = lazy(() => import('./pages/Services'));
const VoiceAgents = lazy(() => import('./pages/services/VoiceAgents'));
const FollowUpMachine = lazy(() => import('./pages/services/FollowUpMachine'));
const ReferralTracker = lazy(() => import('./pages/services/ReferralTracker'));
const WinBack = lazy(() => import('./pages/services/WinBack'));
const CustomBuilds = lazy(() => import('./pages/services/CustomBuilds'));
const VideoCreation = lazy(() => import('./pages/services/VideoCreation'));

// Work
const Work = lazy(() => import('./pages/Work'));
const OmadCase = lazy(() => import('./pages/work/Omad'));
const RoadReadyCase = lazy(() => import('./pages/work/RoadReady'));
const LocalBoostCase = lazy(() => import('./pages/work/LocalBoost'));

// About
const About = lazy(() => import('./pages/About'));

function PageLoader() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ width: '28px', height: '28px', border: '3px solid var(--border)', borderTopColor: 'var(--accent)', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Suspense fallback={<PageLoader />}><ServicesIndex /></Suspense>} />
          <Route path="services/voice-agents" element={<Suspense fallback={<PageLoader />}><VoiceAgents /></Suspense>} />
          <Route path="services/follow-up-machine" element={<Suspense fallback={<PageLoader />}><FollowUpMachine /></Suspense>} />
          <Route path="services/referral-tracker" element={<Suspense fallback={<PageLoader />}><ReferralTracker /></Suspense>} />
          <Route path="services/win-back" element={<Suspense fallback={<PageLoader />}><WinBack /></Suspense>} />
          <Route path="services/custom-builds" element={<Suspense fallback={<PageLoader />}><CustomBuilds /></Suspense>} />
          <Route path="services/video-creation" element={<Suspense fallback={<PageLoader />}><VideoCreation /></Suspense>} />
          <Route path="work" element={<Suspense fallback={<PageLoader />}><Work /></Suspense>} />
          <Route path="work/omad" element={<Suspense fallback={<PageLoader />}><OmadCase /></Suspense>} />
          <Route path="work/road-ready" element={<Suspense fallback={<PageLoader />}><RoadReadyCase /></Suspense>} />
          <Route path="work/localboost" element={<Suspense fallback={<PageLoader />}><LocalBoostCase /></Suspense>} />
          <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
