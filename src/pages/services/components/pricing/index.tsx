import style from "./style.module.css";
import gear from "./gear.png";
import rocket from "./rocket.png";
import diamond from "./diamond.png";
import { Link } from "react-router-dom";
import { Check } from "phosphor-react";

export function Pricing() {
    return (
        <div className={style.container}>
            <h1>
                Experimente nossos pacotes <span>All-In-One.</span>
            </h1>

            <div className={style.row}>
                <div className={style.item}>
                    <h5>ELITE ESSENCIAL</h5>

                    <div className={style.img}>
                        <img src={gear} alt="" />
                    </div>

                    <h2>
                        <span>MT</span>5000<span>/Mensal</span>
                    </h2>

                    <Link to="#">Adira já</Link>

                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>
                            Assistencia técnica e manutenção em até 5
                            computadores
                        </p>
                    </div>
                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>Suporte em redes de computadores</p>
                    </div>
                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>Manutenção nos softwares</p>
                    </div>
                </div>

                <div className={style.item}>
                    <h5>ELITE PROFISSIONAL</h5>

                    <div className={style.img}>
                        <img src={rocket} alt="" />
                    </div>

                    <h2>
                        <span>MT</span>7500<span>/Mensal</span>
                    </h2>

                    <Link to="#">Adira já</Link>

                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>
                            Assistencia técnica e manutenção em até 10
                            computadores
                        </p>
                    </div>
                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>Suporte em redes de computadores</p>
                    </div>
                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>Manutenção nos softwares</p>
                    </div>
                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>Criação e configuração de E-mails coorporativos</p>
                    </div>
                </div>

                <div className={style.item}>
                    <h5>ELITE NEGÓCIO</h5>

                    <div className={style.img}>
                        <img src={diamond} alt="" />
                    </div>

                    <h2>
                        <span>MT</span>15000<span>/Mensal</span>
                    </h2>

                    <Link to="#">Adira já</Link>

                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>
                            Assistencia técnica e manutenção em até 25
                            computadores
                        </p>
                    </div>
                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>Suporte em redes de computadores</p>
                    </div>
                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>Manutenção nos softwares</p>
                    </div>
                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>Criação e configuração de E-mails coorporativos</p>
                    </div>
                    <div className={style.row2}>
                        <Check size={25} weight="bold" />
                        <p>Website empresarial</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
