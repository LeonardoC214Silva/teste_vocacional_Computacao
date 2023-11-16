import React, {useState} from 'react';

const Questionnaire2 = ({onProfessionSelect}) => {
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
    };

    const professions = {
        'Desenvolvedor Fullstack': 0,
        'Desenvolvedor Front-end': 0,
        'Desenvolvedor Back-end': 0,
        'Cientista de dados': 0,
        'Gerente de projeto': 0,
        'Analista de sistema': 0,
        'Engenheiro de redes': 0,
        'Desenvolvedor de jogos': 0,
        'Engenheiro de Qualidade de Software (QA)': 0,
        'Engenheiro de Sistemas Embarcados': 0,
        'Engenheiro de DevOps': 0,
        'Desenvolvedor Mobile': 0,
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
        if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        }
    };

    const renderOptions = () => {
        const pageQuestions = Object.keys(questions).slice(currentPage * 3, currentPage * 3 + 3);

        return (
            <div>
                <p className="Title2">Escolha as opções que mais te representa</p>
                <div className="checkbox-group">
                    {pageQuestions.map((question, index) => (
                        <div key={index}>

                            <label >
                                <input
                                    type="checkbox"
                                    checked={!!selectedQuestions[question]}
                                    onChange={() => handleQuestionSelect(question)}
                                />
                                {question}
                            </label>
                        </div>
                    ))}
                </div>
                <button className="button-style" onClick={submitForm}>Próxima Página</button>
            </div>
        );
    };

    const renderResults = () => {
        console.log(selectedProfession);
        return (
            <div>
                <t1>Resultados:</t1>

                <p>Você é adequado para a profissão de {selectedProfession}!</p>
                <button className="button-style" onClick={goToFirstPage}>Tentar novamente</button>
            </div>
        );
    };
    if (currentPage >= 4) {

        return <div>{renderResults()}</div>;
    } else {
        return <div>{renderOptions()}</div>;
    }

};

export default Questionnaire2;
