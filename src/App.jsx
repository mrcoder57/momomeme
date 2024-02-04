import AboutMomo from "./components/about-momo";
import Footer from "./components/footer";
import Getmemo from "./components/getmemo";
import Hero from "./components/hero";
import HowToBuy from "./components/how-to-buy";
import Momomap from "./components/momomap";
import Navbar from "./components/navbar";
import Tokenomics from "./components/tokenomics";
import LandingPage from "./pages/landing-page";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
     <Navbar />
      <div className="bg-[#FF90E8] h-full overflow-x-hidden">
     
         
        <Hero />
        <AboutMomo />
        <HowToBuy />
        <Tokenomics />
        <div className="h-full w-full">
          <Momomap />
        </div>
        <div className="h-full w-full">
          <Getmemo />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
