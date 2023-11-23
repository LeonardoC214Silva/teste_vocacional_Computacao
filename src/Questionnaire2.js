import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Questionnaire2 = ({onProfessionSelect}) => {
    const MaxPages = 11
    const TipoP = {
        Fullstack: 'Desenvolvedor Fullstack',
        Front: 'Desenvolvedor Front-end',
        Back: 'Desenvolvedor Back-end',
        Cdaddos: 'Cientista de dados',
        GProj: 'Gerente de projeto',
        Analisa: 'Analista de sistema',
        Redes: 'Engenheiro de redes',
        Jogos: 'Desenvolvedor de jogos',
        QA: 'Engenheiro de Qualidade de Software (QA)',
        Embar: 'Engenheiro de Sistemas Embarcados',
        Ops: 'Engenheiro de DevOps',
        Mobilee: 'Desenvolvedor Mobile',
        UXDesigner: 'Designer de UX',
        UIEngineer: 'Engenheiro de UI',
        SegInfo: 'Especialista em Segurança da Informação',
        AdmBD: 'Administrador de Banco de Dados',
        AdmSys: 'Administrador de Sistemas',
        ArqSoft: 'Arquiteto de Software',
        EngSoft: 'Engenheiro de Software',
        CientistaComp: 'Cientista da Computação',
        EngDados: 'Engenheiro de Dados',
        AnalistaBI: 'Analista de Business Intelligence',
        ConsultorTI: 'Consultor de TI',
        EspecMachineL: 'Especialista em Machine Learning',
        DesWeb: 'Desenvolvedor Web',
        DesApp: 'Desenvolvedor de Aplicações',
        GerenteTI: 'Gerente de TI',
        EspecCloud: 'Especialista em Cloud Computing',
        AnalistaQA: 'Analista de QA',
        ProdManag: 'Gerente de Produto',
        UXResearch: 'Pesquisador de UX',
        CyberSecAnalyst: 'Analista de Cybersecurity',
        DataArchitect: 'Arquiteto de Dados',
        SysIntegrator: 'Integrador de Sistemas',
        BlockchainDev: 'Desenvolvedor Blockchain',
        RoboticEngineer: 'Engenheiro de Robótica',
        AIEngineer: 'Engenheiro de IA',
        VRDev: 'Desenvolvedor de Realidade Virtual',
        ARDev: 'Desenvolvedor de Realidade Aumentada',
        GameDesigner: 'Designer de Jogos',
        GraphicDesigner: 'Designer Gráfico',
        WebDesigner: 'Designer Web',
        SoftTester: 'Testador de Software',
        ProjCoordinator: 'Coordenador de Projetos',
        ITSupport: 'Suporte de TI',
        NetworkArchitect: 'Arquiteto de Rede',
        SysAnalyst: 'Analista de Sistemas',
        ProductDesigner: 'Designer de Produto',
        EthicalHacker: 'Hacker Ético',
        DigitalMarketer: 'Profissional de Marketing Digital',
        TechWriter: 'Escritor Técnico',
        DataJournalist: 'Jornalista de Dados',
        CloudArchitect: 'Arquiteto de Cloud',
        ITAuditor: 'Auditor de TI',
        MobileAppTester: 'Testador de Aplicativos Móveis',
        IoTDeveloper: 'Desenvolvedor de IoT',
        BigDataAnalyst: 'Analista de Big Data',
        AIResearcher: 'Pesquisador de IA',
    };

    const professions = {
        'Desenvolvedor Fullstack': 0,
        'Desenvolvedor Front-end': 0,
        'Desenvolvedor Back-end': 0,
        'Cientista de Dados': 0,
        'Gerente de Sistemas de Informação': 0,
        'Engenheiro de Cloud': 0,
        'Engenheiro de Redes': 0,
        'Desenvolvedor de Sistemas': 0,
        'Consultor de TI': 0,
        'Administrador de Banco de Dados': 0,
        'Analista de Segurança': 0,
        'Desenvolvedor Web': 0,
        'Arquiteto de Software': 0,
        'Analista de Sistemas': 0,
        'Gerente de Projetos': 0,
        'Engenheiro de QA': 0,
        'Engenheiro de Sistemas Embarcados': 0,
        'Engenheiro de DevOps': 0,
        'Desenvolvedor Mobile': 0,
        'Designer de UX': 0,
        'Engenheiro de UI': 0,
        'Especialista em Segurança da Informação': 0,
        'Administrador de Sistemas': 0,
        'Engenheiro de Software': 0,
        'Cientista da Computação': 0,
        'Engenheiro de Dados': 0,
        'Analista de Business Intelligence': 0,
        'Especialista em Machine Learning': 0,
        'Desenvolvedor de Aplicações': 0,
        'Gerente de TI': 0,
        'Especialista em Cloud Computing': 0,
        'Analista de QA': 0,
        'Gerente de Produto': 0,
        'Pesquisador de UX': 0,
        'Especialista em IoT': 0,
        'Analista de Cybersecurity': 0,
        'Arquiteto de Dados': 0,
        'Integrador de Sistemas': 0,
        'Desenvolvedor Blockchain': 0,
        'Engenheiro de Robótica': 0,
        'Engenheiro de IA': 0,
        'Desenvolvedor de Realidade Virtual': 0,
        'Desenvolvedor de Realidade Aumentada': 0,
        'Designer de Jogos': 0,
        'Designer Gráfico': 0,
        'Designer Web': 0,
        'Testador de Software': 0,
        'Coordenador de Projetos': 0,
        'Especialista de Suporte de TI': 0,
        'Arquiteto de Rede': 0,
        'Designer de Produto': 0,
        'Hacker Ético': 0,
        'Profissional de Marketing Digital': 0,
        'Escritor Técnico': 0,
        'Jornalista de Dados': 0,
        'Arquiteto de Cloud': 0,
        'Auditor de TI': 0,
        'Testador de Aplicativos Móveis': 0,
        'Desenvolvedor de IoT': 0,
        'Analista de Big Data': 0,
        'Pesquisador de IA': 0,
    };

    const questions = {
        'Gosto de retorno visual ao testar o sistema': {Fullstack: 1, Front: 2, Mobilee: 1},
        'Gosto de ver e melhorar o desempenho do sistema': {Fullstack: 1, Back: 2, Mobilee: 1},
        'Não me importo com o retorno visual ao testar, apenas a ferramenta de debug e alguns textos de retorno são o suficientes': {
            Fullstack: 1,
            Back: 2,
            Mobilee: 1
        },
        'Gosto de trabalhar com banco de dados': {Cdaddos: 3, Back: 2, Mobilee: 2},
        'Gosto de trabalhar com interface': {Front: 3, Mobilee: 2},
        'Gosto de trabalhar com lógica': {Fullstack: 2, Back: 2, Mobilee: 2, Embar: 2},
        'Gosto de trabalhar com redes': {Redes: 3, Back: 2, Mobilee: 2},
        'Gosto de trabalhar com jogos': {Jogos: 3, Back: 1, Mobilee: 2},
        'Gosto de trabalhar com testes': {QA: 3, Back: 2, Mobilee: 2},
        'Gosto de trabalhar com sistemas embarcados': {Embar: 3},
        'Gosto de desafios de implementação em hardware limitado': {Embar: 3},
        'Acredito que a automação de processos é fundamental para garantir uma entrega contínua e eficiente de software.': {Ops: 3},
        'A segurança é uma prioridade para mim.': {Ops: 3},
        'Gosto de trabalhar com gerenciamento de projetos': {GProj: 3},
        'Gosto de planejar um sistema': {Analisa: 3},
        'Gosto de trabalhar com design de experiência do usuário': {UXDesigner: 3, Front: 1},
        'Estou interessado em criar interfaces de usuário interativas': {UIEngineer: 3, Front: 2},
        'Prezo pela segurança e integridade dos dados em sistemas': {SegInfo: 3, AdmBD: 2},
        'Prefiro trabalhar em projetos que envolvam inovações em hardware': {EngDados: 2, EngSoft: 1, RoboticEngineer: 3},
        'Minha paixão é otimizar e escalar sistemas de grande porte': {ArqSoft: 3, CloudArchitect: 2, EngDados: 1},
        'Me interesso por análise e interpretação de grandes volumes de dados': {DataArchitect: 3, BigDataAnalyst: 3, CientistaComp: 2},
        'Tenho habilidade em escrever e documentar processos técnicos': {TechWriter: 3, AnalistaQA: 2, SysAnalyst: 1},
        'Me interesso por desenvolvimento e implementação de algoritmos de IA': {AIEngineer: 3, AIResearcher: 3, CientistaComp: 2},
        'Estou sempre procurando maneiras de melhorar a segurança cibernética': {EthicalHacker: 3, CyberSecAnalyst: 3, SegInfo: 2},
        'Desenvolver soluções de IoT é algo que me fascina': {IoTDeveloper: 3, EngDados: 2, SysIntegrator: 1},
        'Gosto de trabalhar com análise e visualização de dados': {DataJournalist: 3, AnalistaBI: 2, BigDataAnalyst: 1},
        'Meu foco está em criar e testar aplicativos móveis': {MobileAppTester: 3, DesApp: 2, UXDesigner: 1},
        'Sou apaixonado por desenvolver e gerenciar produtos digitais': {ProdManag: 3, ProductDesigner: 2, DigitalMarketer: 1},
        'Tenho interesse em gerenciar equipes e projetos de TI': {GerenteTI: 3, ProjCoordinator: 2, GProj: 1},
        'A criação e manutenção de redes corporativas me atrai': {NetworkArchitect: 3, AdmSys: 2, EngRedes: 1},
        'Desenvolver jogos digitais é a minha paixão': {GameDesigner: 3, DesWeb: 2, GraphicDesigner: 1},
        'Gosto de criar experiências imersivas em VR e AR': {VRDev: 3, ARDev: 3, GameDesigner: 2},
        'A auditoria e o compliance de sistemas de TI são áreas de meu interesse': {ITAuditor: 3, AdmSys: 2, SegInfo: 1},
        'Estou interessado em desenvolver soluções baseadas em blockchain': {BlockchainDev: 3, EngDados: 2, SegInfo: 1},
        'Tenho paixão por entender e melhorar a interação usuário-sistema': {UXResearch: 3, UXDesigner: 2, UIEngineer: 1},
        'Fico entusiasmado com a ideia de trabalhar em sistemas embarcados e IoT': {Embar: 3, IoTDeveloper: 2, EngSoft: 1},
        'Gosto de resolver problemas complexos de negócios através da tecnologia': {ConsultorTI: 3, AnalistaBI: 2, ProdManag: 1},
        'Estou interessado em criar e gerenciar infraestruturas de TI robustas': {AdmSys: 3, CloudArchitect: 2, NetworkArchitect: 1},
        'Sou apaixonado por otimizar e garantir a qualidade de software': {SoftTester: 3, QA: 2, EngSoft: 1},
        'Me atrai a ideia de criar interfaces visuais atraentes para sites e aplicativos': {WebDesigner: 3, UXDesigner: 2, UIEngineer: 1},
        'Tenho interesse em promover e comercializar produtos digitais': {DigitalMarketer: 3, ProdManag: 2},
        'Gosto de criar e analisar estratégias de segurança cibernética': {CyberSecAnalyst: 3, EthicalHacker: 2, SegInfo: 1},
        'Me interesso por desenvolvimento e inovação em softwares de robótica': {RoboticEngineer: 3, EngSoft: 2, AIEngineer: 1},
        'Trabalhar com sistemas de realidade aumentada me fascina': {ARDev: 3, VRDev: 2, GameDesigner: 1},
        'Estou interessado em explorar e desenvolver aplicações de realidade virtual': {VRDev: 3, ARDev: 2, GameDesigner: 1},
        'A área de marketing digital, com foco em tecnologia, me atrai': {DigitalMarketer: 3, ProdManag: 2, TechWriter: 1},
        'Quero trabalhar com a análise e melhoria de processos de TI': {ITAuditor: 3, ConsultorTI: 2, AnalistaQA: 1},
        'Estou interessado em desenvolver e gerenciar grandes bases de dados': {AdmBD: 3, DataArchitect: 2, BigDataAnalyst: 1},
        'Gosto de trabalhar com suporte e manutenção de infraestruturas de TI': {ITSupport: 3, AdmSys: 2, NetworkArchitect: 1},
        'Tenho interesse em pesquisar e desenvolver tecnologias de IA': {AIResearcher: 3, AIEngineer: 2, CientistaComp: 1},
        'Estou motivado para projetar e construir arquiteturas de rede complexas': {NetworkArchitect: 3, SysIntegrator: 2, EngRedes: 1},
        'Desenvolver estratégias de teste e garantia de qualidade me entusiasma': {AnalistaQA: 3, SoftTester: 2, QA: 1},
        'Meu foco é a escrita técnica e a documentação de projetos de TI': {TechWriter: 3, SysAnalyst: 2, ConsultorTI: 1},
        'Estou interessado em explorar e desenvolver soluções para big data': {BigDataAnalyst: 3, DataArchitect: 2, CientistaComp: 1},
        'Quero trabalhar com a análise e desenvolvimento de sistemas embarcados': {Embar: 3, IoTDeveloper: 2, EngDados: 1},
        'A criação de conteúdo e estratégias para marketing digital me interessa': {DigitalMarketer: 3, TechWriter: 2, ProdManag: 1},
        'Me atrai a ideia de gerenciar projetos e equipes em ambientes de TI': {GerenteTI: 3, ProjCoordinator: 2, GProj: 1},
        'Estou motivado para trabalhar com auditoria e compliance em TI': {ITAuditor: 3, AdmSys: 2, SegInfo: 1},
        'A pesquisa e o desenvolvimento em inteligência artificial são meus interesses principais': {AIResearcher: 3, AIEngineer: 2, CientistaComp: 1},
        'Gosto de desafios relacionados à segurança de redes e sistemas': {NetworkArchitect: 3, CyberSecAnalyst: 2, EthicalHacker: 1},
        'Estou interessado em desenvolver e testar jogos digitais': {GameDesigner: 3, DesWeb: 2, GraphicDesigner: 1},
        'Trabalhar com o desenvolvimento e manutenção de aplicativos móveis é meu objetivo': {MobileAppTester: 3, DesApp: 2, UXDesigner: 1},
        'Tenho paixão por desenvolver soluções inovadoras em cloud computing': {CloudArchitect: 3, SysIntegrator: 2, EngDados: 1},
    };
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedQuestions, setSelectedQuestions] = useState({});
    const [selectedProfession, setSelectedProfession] = useState('');

    const handleQuestionSelect = (question) => {
        if (selectedQuestions[question]) {
            // Se estiver presente, cria uma cópia do estado excluindo a propriedade correspondente à pergunta
            const {[question]: omit, ...newSelectedQuestions} = selectedQuestions;
            setSelectedQuestions(newSelectedQuestions);
        } else {
            // Se não estiver presente, adiciona a propriedade correspondente à pergunta
            setSelectedQuestions({
                ...selectedQuestions,
                [question]: questions[question],
            });
        }
    };
    const goToFirstPage = () => {
        setCurrentPage(0);
        setSelectedQuestions({});
        setSelectedProfession('');
        for (const prof in professions) {
            professions[prof] = 0;
        }
    };
    const returnForm  = () =>{
        if (currentPage > 0) {
            setCurrentPage(currentPage -1);
        }
    }
    const submitForm = () => {
        for (const question in selectedQuestions) {
            console.log('questao:', question, '\n');
            // Iterar sobre as profissões associadas à pergunta
            for (const profession in selectedQuestions[question]) {
                console.log('profissao:', profession, '\n');
                // Obter os pontos associados à profissão para a pergunta
                const points = selectedQuestions[question][profession];
                console.log('profissao de vdd:', TipoP[profession], '\n');
                // Acumular os pontos para a profissão

                professions[TipoP[profession]] += points;
            }
        }
        console.log(professions);
        let maxPoints = 0;


        for (const prof in professions) {
            const points = professions[prof];

            if (points > maxPoints) {
                maxPoints = points;
                setSelectedProfession(prof);
            }
        }
        if (currentPage < MaxPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const renderOptions = () => {
        const pageQuestions = Object.keys(questions).slice(currentPage * 5, currentPage * 5 + 5);

        return (
            <div className="mt-5">

                <div className="text-center">
                    <h1 className="form-label fs-1 mb-lg-5">Teste vocacional de informática</h1>
                </div>


                <div className="text-center">
                    <h2 className="form-label text-info mb-5">Escolha as opções que mais te representa</h2>
                </div>

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="container-md ms-5 ps-5 col-md-8">

                            {pageQuestions.map((question, index) => (
                                <div className="row" key={index}>
                                    <div className="col-md-12">
                                        <div className="form-check mb-4 ms-4">

                                            <label className="form-check-label ms-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={!!selectedQuestions[question]}
                                                    onChange={() => handleQuestionSelect(question)}
                                                />
                                                {question}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="col-md-2"></div>
                    </div>



                <div className="mt-2 text-center">
                    <h3 className = ""> {currentPage+1}/{MaxPages}</h3>
                    <button className="btn btn-secondary me-2" onClick={returnForm}>Voltar Página</button>
                    <button className="btn btn-primary" onClick={submitForm}>Próxima Página</button>
                </div>
                <div className="fixed-bottom text-center"> <h6>Feito por Leonardo C. da Silva e Luís Eduardo Souza Vasconcelos</h6>
                </div>
            </div>

        );
    };


    const renderResults = () => {
        if(selectedProfession===""){
            return (
                <div className="container-md text-center align-content-md-center flex-column align-items-center pt-5">
                    <h2 className="text-center"> Resultado:</h2>

                    <p>Respostas insuficientes para obter um resultado válido.</p>
                    <button className="button-style" onClick={goToFirstPage}>Tentar novamente</button>
                </div>
            );
        }else {
            return (
                <div className="container-md text-center align-content-md-center flex-column align-items-center pt-5">
                    <h2 className="text-center"> Resultado:</h2>

                    <p>Você é adequado para a profissão de {selectedProfession}!</p>
                    <button className="button-style" onClick={goToFirstPage}>Tentar novamente</button>
                </div>
            );
        }
    };
    if (currentPage >= MaxPages) {

        return <div>{renderResults()}</div>;
    } else {
        return <div className=".container">{renderOptions()}</div>;
    }

};

export default Questionnaire2;
