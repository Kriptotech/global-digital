import { List, MapPin, Phone } from "phosphor-react";
import styles from "./styles.module.css";
import { useState } from "react";
import IMG from "./logo.png";
import { Link } from "react-router-dom";

export function Header() {
    const [dropped, setDropped] = useState(false);

    return (
        <div className={styles.header} data-aos="fade-down">
            <div className={styles.top}>
                <span>
                    <Phone color="#555" weight="fill" size={12} /> (+258) 85 702
                    7202 / 85 702 7202{" "}
                </span>
                <span>
                    <MapPin color="#555" weight="fill" size={12} /> Ponta Gêa,
                    Rua Correia de Brito, Cidade da Beira
                </span>
            </div>

            <nav>
                <div className={styles.logo}>
                    <img src={IMG} width="250px" alt="" />
                </div>

                <div className={styles.links}>
                    <Link to="/">Inicio</Link>
                    <Link to="/about">A empresa</Link>
                    <Link to="/services">Serviços</Link>
                    <Link to="#">Nos contacte</Link>
                </div>

                <button onClick={() => setDropped(!dropped)}>
                    <List color="#222" weight="fill" size={30} />
                </button>
            </nav>

            {dropped && (
                <div className={styles.mobile_links}>
                    <Link to="/">Inicio</Link>
                    <Link to="/about">A empresa</Link>
                    <Link to="/services">Serviços</Link>
                    <Link to="#">Nos contacte</Link>
                </div>
            )}
        </div>
    );
}
