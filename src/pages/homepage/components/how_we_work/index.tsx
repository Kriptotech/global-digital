import style from "./style.module.css";

export function HowWeWork() {
    return (
        <div className={style.container}>
            <h4>COMO TRABALHAMOS?</h4>
            <h1>
                Como isso ajuda <span>no teu sucesso de negocios</span>
            </h1>

            <div className={style.row}>
                <div>
                    <span>Percepção</span>
                    <p>
                        Percebemos o problema e fazemos o levantamento de todos
                        os requisitos possiveis.
                    </p>
                </div>
                <div>
                    <span>Análises</span>
                    <p>
                        Neste ponto fazemos a analise dos requisitos levantados.
                    </p>
                </div>
                <div>
                    <span>Possiveis erros</span>
                    <p>
                        Depois da analise, fazemos um mapeamento das possivies
                        falha e erros que possam impedir a resoluçao do
                        problema.
                    </p>
                </div>
                <div>
                    <span>Melhores soluçoes</span>
                    <p>
                        Após o mapeamento, providenciamos a melhor solução
                        tecnológica possivel de modo a garantir melhor
                        funcionamento.
                    </p>
                </div>
            </div>
        </div>
    );
}
