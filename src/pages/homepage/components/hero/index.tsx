import { Link } from "react-router-dom";
import style from "./styles.module.css";

export function Hero() {
    return (
        <div className={style.hero}>
            <div className={style.content} data-aos="fade-up">
                <h1>Solução, Inovação e Tecnologia</h1>

                <Link to="/about">Ver mais</Link>
            </div>
        </div>
    );
}
