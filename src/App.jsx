import React, { Suspense, lazy } from 'react';
import Navbar from "./components/Navbar.jsx";
import Footer from "./sections/Footer.jsx";
import Loading from './components/Loading.jsx'; // Create a Loading component for placeholders

// Lazy load sections
const Hero = lazy(() => import('./sections/Hero.jsx'));
const ShowcaseSection = lazy(() => import('./sections/ShowcaseSection.jsx'));
const FeatureCards = lazy(() => import('./sections/FeatureCards.jsx'));
const ExperienceSection = lazy(() => import('./sections/ExperienceSection.jsx'));
const TechStack = lazy(() => import('./sections/TechStack.jsx'));
const Testimonials = lazy(() => import('./sections/Testimonials.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));

const App = () => {
  return (
    <main>
      <>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ShowcaseSection />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <FeatureCards />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ExperienceSection />
        </Suspense>
        
          <TechStack />
        
        <Suspense fallback={<Loading />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
        <Footer />
      </>
    </main>
  );
};

export default App;