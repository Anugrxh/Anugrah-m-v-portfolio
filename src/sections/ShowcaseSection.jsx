import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <a href="https://github.com/Anugrxh">
            <div className="image-wrapper">
              <img src="/images/ppp.png" alt="Ryde App Interface" />
            </div>
            </a>
            <div className="text-content">
              <h2>
               A University Fine-arts live result app for students and teachers with a user-friendly interface
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React , Firebase, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <a href="https://github.com/Anugrxh">
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/p1.png"
                  alt="Library Management Platform"
                />
              </div>
              </a>
              <h2>Wedding Card Generating Website</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <a href="https://github.com/Anugrxh">
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/p3.png" alt="YC Directory App" />
              </div>
              <h2>Quick Hire - A Jobseeker website</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;