import React from "react";
import { Navbar, Transactions, Services, Footer, Welcome, Whyus, About, Journey  } from "./components";

const App = () => {
 
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
    <Navbar />
    <Welcome />
    </div>
    <Services/>
    <Whyus/>
    <About/>
    <Journey/>
    <Transactions />
    <Footer />
    </div>
  );
}

export default App
