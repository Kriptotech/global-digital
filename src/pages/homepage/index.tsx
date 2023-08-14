import Footer from "../../components/footer";
import { Header } from "../../components/header";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { HowWeWork } from "./components/how_we_work";
import { Pricing } from "./components/pricing";
import { Services } from "./components/services";
import { Works } from "./components/works";

export default function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <Works />
            <Services />
            <HowWeWork />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    );
}
