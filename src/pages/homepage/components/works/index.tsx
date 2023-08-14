import style from "./style.module.css";

export function Works() {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <img
                    src="https://eliteteclda.com/assets/images/icons/visita_stella.jpg"
                    alt=""
                />
                <h1>Visita da Secretária de Estado </h1>
                <p>
                    A Elite Tec, Lda Recebe no dia 01/09/2022 visita da sua
                    excelência Secretária de Estado na província de Sofala
                    Stella Zeca, no ambito da visita de trabalho ao governo do
                    distrito da beira.
                </p>
            </div>

            <div className={style.item}>
                <img
                    src="https://eliteteclda.com/assets/images/icons/elitecloud.jpg"
                    alt=""
                />
                <h1>Registo de domínios Moçambicanos </h1>
                <p>
                    Já podes registar domínios moçambicanos a melhor preço com a
                    Elite Cloud. Aprovite Já e registe o domínio de internet
                    ideal para teu negócio com extensão que representa o seu
                    país.
                </p>
            </div>

            <div className={style.item}>
                <img
                    src="https://eliteteclda.com/assets/images/icons/et4.jpg"
                    alt=""
                />
                <h1>Celebração do 4° aniversário da Elite Tec </h1>
                <p>
                    Jantar de Celebração do 4° aniversário da Elite Tec. 4 anos
                    inovando Moçambique. Solução inovação e tecnologia .
                </p>
            </div>

            <div className={style.item}>
                <img
                    src="https://eliteteclda.com/assets/images/icons/emprega.jpg"
                    alt=""
                />
                <h1>Enceramento do ano 2021 Elite Tec</h1>
                <p>
                    Jantar de Enceramnto do ano da empresa de Tecnologias de
                    informação e comunicação.
                </p>
            </div>
        </div>
    );
}
