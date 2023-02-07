import React from "react";
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import AppSection from "./HeroSection"
import CardSection from "./HeroSection"
import Footer from "./Footer"

const App = () => {
    return(
        <div>
            <Navbar />
            <HeroSection />
            <AppSection />
            <CardSection />
            <Footer />
        </div>
    )
}
 
export default App;