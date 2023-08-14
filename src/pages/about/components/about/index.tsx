import img from "./aboutt.jpg";
import img2 from "./aboutt2.jpg";
import style from "./style.module.css";

export default function About() {
    return (
        <>
            <div className={style.container}>
                <div className={style.left}>
                    <img src={img} alt="" />
                </div>

                <div className={style.right}>
                    <h1>
                        Ajudamos <span>Empresas</span> a expandirem os seus
                        negócios.
                    </h1>
                    <p className={style.bold}>
                        A Elite Tec é uma empresa vocacionada na área de
                        Tecnologias de Informação e Comunicação, constituída em
                        2018 pela conservatória das entidades legais de
                        Moçambique.
                    </p>
                    <p>
                        Atualmente, contamos com equipas formadas em diversas
                        áreas de atuação com o propósito de atender as
                        necessidades dos clientes de forma eficaz e eficiente
                        por meio de soluções tecnológicas inovadoras.
                    </p>
                </div>
            </div>

            <div className={style.container}>
                <div className={style.right}>
                    <h1>
                        providenciamos melhores soluções de{" "}
                        <span>hardware</span> e <span>software</span>.
                    </h1>
                    <p>
                        Somos melhores no que fazemos, somos constituidos por
                        Engenheiros com alta gama de experiência e por assim ser
                        sentimos a necessidade de providenciar sempre o melhor.
                    </p>
                </div>

                <div className={style.left}>
                    <img src={img2} alt="" />
                </div>
            </div>
        </>
    );
}
