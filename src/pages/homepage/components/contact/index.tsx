import { Phone, Star, Envelope } from "phosphor-react";
import style from "./style.module.css";

export function Contact() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1>4.9/5.0</h1>

                <div className={style.row1}>
                    <Star size={40} color="#fb0" weight="fill" />
                    <Star size={40} color="#fb0" weight="fill" />
                    <Star size={40} color="#fb0" weight="fill" />
                    <Star size={40} color="#fb0" weight="fill" />
                </div>

                <p>30 clientes</p>

                <div className={style.row2}>
                    <Phone color="#fff" size={60} />
                    <div>
                        <span>LIGUE-NOS PARA MAIS INFORMAÇÕES!</span>
                        <span>(+258) 85 702 7202 / 87 702 7202</span>
                    </div>
                </div>

                <div className={style.row2}>
                    <Envelope color="#fff" size={60} />
                    <div>
                        <span>ENVIE-NOS E-MAIL</span>
                        <span>info@eliteteclda.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
