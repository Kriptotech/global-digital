import {
    Code,
    UserCircleGear,
    Globe,
    ShareNetwork,
    Database,
    SelectionPlus,
    GlobeHemisphereEast,
    DeviceTabletSpeaker,
} from "phosphor-react";
import style from "./styles.module.css";

export function Services() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <span>Nosssos serviços</span>
                <h1>Solucões Tecnologicas e Inovadoras</h1>
            </div>

            <div className={style.box}>
                <div className={style.item}>
                    <div>
                        <Code size={30} weight="fill" />
                    </div>
                    <h1>Desenvolvimento de Software</h1>
                    <p>
                        Criação de aplicativos, sistemas e soluções
                        personalizadas para atender às necessidades específicas
                        de negócios ou de usuários finais.
                    </p>
                </div>
                <div className={style.item}>
                    <div>
                        <Globe size={30} weight="fill" />
                    </div>
                    <h1>Websites</h1>
                    <p>
                        Criação e manutenção de sites, lojas virtuais e
                        plataformas online.
                    </p>
                </div>

                <div className={style.item}>
                    <div>
                        <UserCircleGear size={30} weight="fill" />
                    </div>
                    <h1>Consultoria em TI</h1>
                    <p>
                        Assessoria técnica para empresas, ajudando-as a tomar
                        decisões estratégicas sobre tecnologia, segurança da
                        informação e infraestrutura.
                    </p>
                </div>

                <div className={style.item}>
                    <div>
                        <ShareNetwork size={30} weight="fill" />
                    </div>
                    <h1>E-mails corporativos</h1>
                    <p>
                        Criação e configuração de e-mails corporativos para sua
                        empresa. exemplo@suaempresa.co.mz.
                    </p>
                </div>

                <div className={style.item}>
                    <div>
                        <Database size={30} weight="fill" />
                    </div>
                    <h1>Análise de Dados</h1>
                    <p>
                        Utilização de ferramentas e técnicas para analisar
                        grandes volumes de dados e extrair insights relevantes
                        para o negócio.
                    </p>
                </div>

                <div className={style.item}>
                    <div>
                        <SelectionPlus size={30} weight="fill" />
                    </div>
                    <h1>Segurança Cibernética</h1>
                    <p>
                        Implementação de medidas para proteger sistemas e dados
                        contra ataques cibernéticos e ameaças.
                    </p>
                </div>

                <div className={style.item}>
                    <div>
                        <GlobeHemisphereEast size={30} weight="fill" />
                    </div>
                    <h1>Hospedagem Web</h1>
                    <p>
                        Serviços de hospedagem para sites, aplicativos e
                        sistemas na nuvem ou em servidores dedicados. Veja a
                        nossa PaaS Elite Cloud
                    </p>
                </div>

                <div className={style.item}>
                    <div>
                        <DeviceTabletSpeaker size={30} weight="fill" />
                    </div>
                    <h1>Design gráfico</h1>
                    <p>
                        Trabalhamos no densenho gráfico de: Logotipos, Flyers,
                        Banners e muito mais.
                    </p>
                </div>

                <div className={style.item}>
                    <div>
                        <ShareNetwork size={30} weight="fill" />
                    </div>
                    <h1>Redes de computadores</h1>
                    <p>
                        Configuração, monitoramento e manutenção de redes de
                        computadores, incluindo redes locais (LAN) e redes
                        amplas (WAN)..
                    </p>
                </div>
            </div>
        </div>
    );
}
