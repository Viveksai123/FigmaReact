import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductCategories from "./components/ProductCategories";
import Footer from "./components/Footer";
import Segments from "./components/Segments";
import TrendingProducts from "./components/TrendingProducts";
import InteriorDesigning from "./components/InteriorDesigning";
import AboutUs from "./components/AboutUs";
import OurProcess from "./components/OurProcess";
import WhyVibrerStandsOut from "./components/WhyVibrerStandsOut";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import "./App.css";
import 'animate.css';

const ParallaxSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates only once
    threshold: 0.1, // Triggers when 10% of the component is visible
  });

  const animation = useSpring({
    opacity: inView ? 2: 0,
    transform: inView ? "translateY(0)" : "translateY(250px)",
    config: { tension: 500, friction: 90 },
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

const App: React.FC = () => {
  return (
    <div style={{ overflow: "auto", msOverflowStyle: "none", scrollbarWidth: "none" }}>
      <NavBar />
      <div className="flex flex-col justify-center items-center py-4">
        <ParallaxSection>
        <div className="flex flex-col justify-center items-center py-4">
          <Home />
          </div>
        </ParallaxSection>
        <ParallaxSection>
          <ProductCategories />
        </ParallaxSection>
        <ParallaxSection>
          <Segments />
        </ParallaxSection>
        <ParallaxSection>
          <TrendingProducts />
        </ParallaxSection>
      </div>
      <ParallaxSection>
        <InteriorDesigning />
      </ParallaxSection>
      <ParallaxSection>
        <AboutUs />
      </ParallaxSection>
      <ParallaxSection>
        <OurProcess />
      </ParallaxSection>
      <ParallaxSection>
        <WhyVibrerStandsOut />
      </ParallaxSection>
      <Footer />
    </div>
  );
};

export default App;
