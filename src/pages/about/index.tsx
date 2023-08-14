import Footer from "../../components/footer";
import { Header } from "../../components/header";
import { Contact } from "../services/components/contact";
import About from "./components/about";
import Hero from "./components/hero";

export default function AboutPage() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}
