import style from "./style.module.css";

export default function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.row}>
                <div>
                    <p>
                        Global digital - a solução perfeita para atender às suas
                        necessidades tecnologicas!
                    </p>
                </div>

                <div>
                    <h3>Informações de Contacto</h3>
                    <a href="#">
                        CHAMANCULO A, RUA MARCELINO DOS SANTOS, Q23, CASA Nº 515
                    </a>
                    <a href="#">Ligações: +258 84 2033333 </a>
                    <a href="#">WhatsApp: 258 84 2033333 </a>
                    <a href="#">info@maxanamicrocredito.co.mz </a>
                </div>

                <div>
                    <h3>Acesso Rápido</h3>
                    <a href="/">Início</a>
                    <a href="/about">A empresa </a>
                    <a href="/services">Serviços</a>
                </div>
            </div>

            <div className={style.reference}>
                Copyright © 2023 Global digital
            </div>
        </footer>
    );
}
