import {
  Features,
  Footer,
  Hero,
  ScreenShots,
  ScrollToTop,
  Team,
} from "../components";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <main className="overflow-hidden">
      <ScrollToTop />
      <Header />
      <Hero />
      <Features />
      <ScreenShots />
      <Team />
      <Footer />
    </main>
  );
};

export default LandingPage;
