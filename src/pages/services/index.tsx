import Footer from "../../components/footer";
import { Header } from "../../components/header";
import Hero from "./components/hero";
import { Services } from "./components/services";
import { Pricing } from "./components/pricing";
import { Contact } from "./components/contact";

export default function SercicesPage() {
    return (
        <div style={{ width: "100%" }}>
            <Header />
            <Hero />
            <Services />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    );
}
