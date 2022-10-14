import React from "react";
import {
  Devices,
  Features,
  Footer,
  Home,
  ScreenShots,
  ScrollToTop,
  Team,
} from "./components";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Home />
      <Features />
      <ScreenShots />
      <Team />
      <Devices />
      <Footer />
    </div>
  );
}

export default App;
