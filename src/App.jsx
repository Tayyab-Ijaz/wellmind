import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

// Home is loaded eagerly since it's the landing page most visitors hit first.
import Home from './pages/Home/Home';

// Everything else is code-split: each page's JS only downloads when a user
// actually navigates to it, instead of all ~25 pages loading up front.
const About = lazy(() => import('./pages/About'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const IndividualCaseStudy = lazy(() => import('./pages/IndividualCaseStudy'));
const Resources = lazy(() => import('./pages/Resources'));
const BookDiscovery = lazy(() => import('./pages/BookDiscovery'));
const CostCalculator = lazy(() => import('./pages/CostCalculator/CostCalculator'));

const IndustryFinancial = lazy(() => import('./pages/Industries/IndustryFinancial'));
const IndustryHealthcare = lazy(() => import('./pages/Industries/IndustryHealthcare'));
const IndustryManufacturing = lazy(() => import('./pages/Industries/IndustryManufacturing'));
const IndustryRetail = lazy(() => import('./pages/Industries/IndustryRetail'));
const IndustryAgriculture = lazy(() => import('./pages/Industries/Industryagriculture'));
const IndustryEducation = lazy(() => import('./pages/Industries/Industryeducation'));

const ServicesAiMl = lazy(() => import('./pages/Services/ServicesAiMl'));
const ServicesDataAnalytics = lazy(() => import('./pages/Services/ServicesDataAnalytics'));
const ServicesAiSoftware = lazy(() => import('./pages/Services/ServiceAiSoftware'));
const ServicesAutomation = lazy(() => import('./pages/Services/ServicesAutomation'));
const ServicesUiUx = lazy(() => import('./pages/Services/ServicesUiUx'));
const ServicesBioinformatics = lazy(() => import('./pages/Services/ServicesBioinformatics'));

const ServiceChildPage = lazy(() => import('./pages/Services/ServiceChildPage'));
const DataAnalyticsChildPage = lazy(() => import('./pages/Services/DataAnalyticsChildPage'));
const AiSoftwareChildPage = lazy(() => import('./pages/Services/AiSoftwareChildPage'));
const AutomationChildPage = lazy(() => import('./pages/Services/Automationchildpage'));
const BioinformaticsChildPage = lazy(() => import('./pages/Services/Bioinformaticschildpage'));

// Minimal, layout-neutral fallback shown while a lazy page chunk downloads.
function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', border: '3px solid rgba(0,0,0,0.08)', borderTopColor: 'currentColor', animation: 'spin 0.8s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollTop/>
      <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
        <Header/>
        {/*
          ─── CaseStudies URL Deep-Link Pattern ───────────────────────────────────
          The CaseStudies page reads URL query params for pre-filtered views:
            /case-studies?service=ai-ml
            /case-studies?service=data-analytics
            /case-studies?service=ai-software
            /case-studies?service=automation
            /case-studies?service=ui-ux
            /case-studies?service=bioinformatics
            /case-studies?industry=financial
            /case-studies?industry=healthcare
            /case-studies?industry=retail
            /case-studies?industry=manufacturing
            /case-studies?service=ai-ml&industry=healthcare   ← combined

          Usage in service/industry pages — "View All Case Studies" button:
            import { Link } from 'react-router-dom';
            <Link to="/case-studies?service=ai-ml">View All Case Studies →</Link>
            <Link to="/case-studies?industry=healthcare">View All Case Studies →</Link>
        */}
        <main>
          <Suspense fallback={<PageLoader/>}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<IndividualCaseStudy />} />
              <Route path="/resources" element={<Resources/>}/>
              <Route path="/book-discovery" element={<BookDiscovery/>}/>
              <Route path="/ai-cost-calculator" element={<CostCalculator/>}/>

              <Route path="/industry-financial-service" element={<IndustryFinancial/>}/>
              <Route path="/industry-healthcare" element={<IndustryHealthcare/>}/>
              <Route path="/industry-manufacturing" element={<IndustryManufacturing/>}/>
              <Route path="/industry-retail-ecommerce" element={<IndustryRetail/>}/>
              <Route path="/industry-agriculture" element={<IndustryAgriculture/>}/>
              <Route path="/industry-education" element={<IndustryEducation/>}/>

              <Route path="/services-ai-ml" element={<ServicesAiMl/>}/>
              <Route path="/services-data-analytics" element={<ServicesDataAnalytics/>}/>
              <Route path="/services-ai-software" element={<ServicesAiSoftware/>}/>
              <Route path="/services-automation" element={<ServicesAutomation/>}/>
              <Route path="/services-ui-ux" element={<ServicesUiUx/>}/>
              <Route path="/services-bioinformatics" element={<ServicesBioinformatics/>}/>

              <Route path="*" element={<Navigate to="/" replace/>}/>

              <Route path="/services-ai-ml/:childId" element={<ServiceChildPage />}/>
              <Route path="/services-data-analytics/:childId" element={<DataAnalyticsChildPage />} />
              <Route path="/services-ai-software/:childId" element={<AiSoftwareChildPage />} />
              <Route path="/services-automation/:childId" element={<AutomationChildPage />} />
              <Route path="/services-bioinformatics/:childId" element={<BioinformaticsChildPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;