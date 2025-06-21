const todasPerguntas = [
    {
      id: "q1",
      texto: "Qual das seguintes declarações fornece o MELHOR exemplo do 'Efeito AI'?",
      alternativas: [
        "As pessoas perdem seus empregos porque os sistemas baseados em AI desempenham suas funções de forma mais barata e melhor.",
        "Os jogos competitivos de computador perdem popularidade, pois os baseados em AI sempre ganham.",
        "Sistemas especialistas baseados em regras para diagnóstico médico não são mais considerados como AI.",
        "As pessoas acreditam que a AI tomará conta do mundo, como mostrado nos filmes."
      ],
      correta: "Sistemas especialistas baseados em regras para diagnóstico médico não são mais considerados como AI."
    },
    {
      id: "q2",
      texto: "Qual das seguintes opções NÃO é uma tecnologia utilizada para implementar a AI?",
      alternativas: [
        "Máquina de Suporte Vetorial",
        "Árvore de decisão",
        "Raciocínio evolutivo",
        "Otimização Bayesiana"
      ],
      correta: "Raciocínio evolutivo"
    },
    {
      id: "q3",
      texto: "Qual das seguintes declarações sobre o hardware usado para implementar sistemas baseados em AI é MAIS provável que seja CORRETA?",
      alternativas: [
        "Os processadores usados para treinar um sistema de recomendação móvel devem ser os mesmos que os processadores do telefone celular.",
        "As unidades de processamento gráfico (GPUs) são uma escolha razoável para implementar um sistema de visão por computador baseado em AI.",
        "Sistemas Deep Learning precisam ser treinados, avaliados e testados usando chips específicos de AI.",
        "É sempre melhor escolher processadores com mais bits para obter precisão suficiente para sistemas baseados em AI."
      ],
      correta: "As unidades de processamento gráfico (GPUs) são uma escolha razoável para implementar um sistema de visão por computador baseado em AI."
    },
    {
      id: "q4",
      texto: "Você decidiu perguntar ao fornecedor do modelo sobre os dados utilizados para o treinamento do modelo e seu formato. Qual das seguintes afirmações é o MELHOR exemplo de um risco que você está tentando mitigar fazendo estas perguntas?",
      alternativas: [
        "Má precisão de classificação dos modelos pré-treinados.",
        "Diferenças nos dados utilizados para o treinamento do modelo e nos dados operacionais.",
        "Questões de eficiência de desempenho do modelo pré-treinado.",
        "Ausência de explicação do modelo pré-treinado em comparação com um modelo treinado por você."
      ],
      correta: "Diferenças nos dados utilizados para o treinamento do modelo e nos dados operacionais."
    },
    {
      id: "q5",
      texto: "Qual das seguintes declarações é mais provável que especifique um requisito de autonomia em um sistema baseado em AI?",
      alternativas: [
        "O sistema deve manter uma distância segura para outros veículos até que o freio ou acelerador seja acionado pelo motorista.",
        "O sistema deve aprender o estilo preferido de resposta a e-mails através do monitoramento remoto do tráfego de e-mails.",
        "O sistema deve comparar suas previsões de preços de casas com os preços reais de venda para determinar se precisa ser requalificado.",
        "Deve ser possível modificar o comportamento do sistema para trabalhar com diferentes tipos de usuários em menos de um dia."
      ],
      correta: "O sistema deve aprender o estilo preferido de resposta a e-mails através do monitoramento remoto do tráfego de e-mails."
    },
    {
        id: "q6",
        texto: "Qual das seguintes práticas é MAIS apropriada ao preparar dados de imagem para treinar um modelo baseado em AI?",
        alternativas: [
          "Reduzir o brilho das imagens para melhorar a generalização.",
          "Remover metadados de imagem para reduzir o viés.",
          "Padronizar o tamanho das imagens.",
          "Alterar os rótulos das imagens para melhorar a diversidade."
        ],
        correta: "Padronizar o tamanho das imagens."
      },
      {
        id: "q7",
        texto: "O que é um exemplo de 'sobretreinamento' (overfitting) em sistemas baseados em AI?",
        alternativas: [
          "O modelo funciona bem com dados de produção, mas não com os de treinamento.",
          "O modelo erra com dados muito diferentes dos de treinamento.",
          "O modelo tem precisão muito alta no treinamento, mas baixa em novos dados.",
          "O modelo exige muitos recursos computacionais para executar."
        ],
        correta: "O modelo tem precisão muito alta no treinamento, mas baixa em novos dados."
      },
      {
        id: "q8",
        texto: "Qual das seguintes atividades de teste é MAIS apropriada para identificar vieses indesejados em um modelo de AI?",
        alternativas: [
          "Testes de regressão automática.",
          "Revisão de código do modelo.",
          "Análise de representatividade dos dados de teste.",
          "Validação cruzada do modelo."
        ],
        correta: "Análise de representatividade dos dados de teste."
      },
      {
        id: "q9",
        texto: "O que um testador deve esperar ao testar um sistema que incorpora AI baseada em aprendizado de máquina?",
        alternativas: [
          "Que o sistema produza resultados 100% previsíveis.",
          "Que o sistema tenha comportamento determinístico sob entradas idênticas.",
          "Que algumas respostas corretas não sejam explicáveis.",
          "Que o sistema nunca melhore com o tempo."
        ],
        correta: "Que algumas respostas corretas não sejam explicáveis."
      },
      {
        id: "q10",
        texto: "Ao realizar testes exploratórios em um sistema baseado em AI, qual abordagem seria a MAIS útil?",
        alternativas: [
          "Executar apenas casos de teste previamente definidos.",
          "Permitir ao testador explorar com base em hipóteses de comportamento inesperado.",
          "Testar apenas os caminhos principais do sistema.",
          "Desabilitar todos os recursos baseados em AI temporariamente."
        ],
        correta: "Permitir ao testador explorar com base em hipóteses de comportamento inesperado."
      },
      {
        id: "q11",
        texto: "O que representa melhor o conceito de 'explainability' (explicabilidade) em sistemas baseados em AI?",
        alternativas: [
          "A habilidade do sistema de fornecer relatórios de desempenho detalhados.",
          "A capacidade do sistema de justificar suas decisões de forma compreensível.",
          "A facilidade com que o sistema pode ser treinado com novos dados.",
          "A rapidez com que o sistema responde às entradas do usuário."
        ],
        correta: "A capacidade do sistema de justificar suas decisões de forma compreensível."
      },
      {
        id: "q12",
        texto: "Durante o teste de um modelo de classificação, um testador nota que o modelo apresenta alta precisão, mas baixa sensibilidade. O que isso indica?",
        alternativas: [
          "O modelo tem alta capacidade de identificar verdadeiros negativos, mas baixa de identificar verdadeiros positivos.",
          "O modelo está classificando corretamente todas as classes.",
          "O modelo não está conseguindo distinguir entre classes com precisão.",
          "O modelo tem viés alto e variância baixa."
        ],
        correta: "O modelo tem alta capacidade de identificar verdadeiros negativos, mas baixa de identificar verdadeiros positivos."
      },
      {
        id: "q13",
        texto: "O que é mais importante considerar ao testar a generalização de um modelo de AI?",
        alternativas: [
          "Se o modelo foi treinado com o maior número possível de dados.",
          "Se o modelo consegue manter desempenho aceitável com novos dados.",
          "Se o modelo tem explicações visuais de seus resultados.",
          "Se o modelo usa algoritmos supervisionados ou não supervisionados."
        ],
        correta: "Se o modelo consegue manter desempenho aceitável com novos dados."
      },
      {
        id: "q14",
        texto: "Em qual das situações abaixo o uso de técnicas de geração de dados sintéticos seria MAIS apropriado?",
        alternativas: [
          "Quando o volume de dados de produção é muito grande.",
          "Quando os dados originais são altamente confidenciais ou escassos.",
          "Quando os modelos de AI são de aprendizado não supervisionado.",
          "Quando o sistema não precisa ser treinado novamente."
        ],
        correta: "Quando os dados originais são altamente confidenciais ou escassos."
      },
      {
        id: "q15",
        texto: "Qual é o papel principal de um testador em um projeto que inclui sistemas baseados em AI?",
        alternativas: [
          "Desenvolver algoritmos de machine learning para melhorar a acurácia.",
          "Garantir que o modelo use apenas dados estruturados e rotulados.",
          "Testar o comportamento do sistema e levantar riscos relacionados à AI.",
          "Ajustar hiperparâmetros durante o treinamento do modelo."
        ],
        correta: "Testar o comportamento do sistema e levantar riscos relacionados à AI."
      },
      {
        id: "q16",
        texto: "Qual das seguintes abordagens de teste é MAIS apropriada para verificar se um sistema de AI está tomando decisões justas?",
        alternativas: [
          "Executar testes de carga sob diferentes condições de rede.",
          "Verificar se há correlação entre variáveis sensíveis e os resultados.",
          "Revisar o código-fonte do sistema de AI.",
          "Executar o sistema com dados gerados aleatoriamente."
        ],
        correta: "Verificar se há correlação entre variáveis sensíveis e os resultados."
      },
      {
        id: "q17",
        texto: "Durante o desenvolvimento de um sistema de classificação de candidatos, é identificado que o modelo apresenta um viés de gênero. Qual é a MELHOR ação a ser tomada pelo time de testes?",
        alternativas: [
          "Solicitar a substituição do algoritmo por um mais rápido.",
          "Recolher mais dados exclusivamente do grupo prejudicado.",
          "Alertar as partes interessadas sobre o risco e colaborar na mitigação.",
          "Ignorar o viés se ele não comprometer a performance geral."
        ],
        correta: "Alertar as partes interessadas sobre o risco e colaborar na mitigação."
      },
      {
        id: "q18",
        texto: "Qual é o objetivo principal da explicabilidade em sistemas de AI?",
        alternativas: [
          "Melhorar o tempo de resposta do sistema.",
          "Reduzir o custo computacional do treinamento.",
          "Aumentar a confiança dos usuários e facilitar auditorias.",
          "Eliminar a necessidade de testes tradicionais."
        ],
        correta: "Aumentar a confiança dos usuários e facilitar auditorias."
      },
      {
        id: "q19",
        texto: "Você está testando um sistema que recomenda tratamentos médicos. Qual é o MELHOR motivo para testar a explicabilidade desse sistema?",
        alternativas: [
          "Para garantir que os dados de entrada sejam criptografados.",
          "Para permitir que os usuários entendam e confiem nas recomendações.",
          "Para reduzir o número de falsos positivos no diagnóstico.",
          "Para melhorar a velocidade de resposta do sistema."
        ],
        correta: "Para permitir que os usuários entendam e confiem nas recomendações."
      },
      {
        id: "q20",
        texto: "Qual dos seguintes conceitos está MAIS relacionado à capacidade do sistema baseado em AI de justificar suas decisões em linguagem natural?",
        alternativas: [
          "Auditabilidade",
          "Rastreabilidade",
          "Explicabilidade",
          "Desempenho"
        ],
        correta: "Explicabilidade"
      },
      {
        id: "q21",
        texto: "Qual das seguintes declarações descreve CORRETAMENTE uma medida de cobertura de teste para redes neurais?",
        alternativas: [
          "A cobertura de mudança de valor é baseada no fato de que os neurônios individuais são considerados como afetando a saída geral da rede neural",
          "A cobertura do limite é baseada em neurônios que emitem um valor de ativação maior que um valor pré-definido entre zero e um",
          "A cobertura de neurônios é uma medida da proporção de neurônios que são ativados a qualquer momento durante os testes",
          "A cobertura de mudança de sinal mede a cobertura dos neurônios que produzem tanto valores de ativação positivos, negativos e zero"
        ],
        correta: "A cobertura de neurônios é uma medida da proporção de neurônios que são ativados a qualquer momento durante os testes"
      },
      {
        id: "q22",
        texto: "Qual dos seguintes requisitos para um sistema baseado em AI é o MAIS susceptível de causar um desafio significativo nos testes?",
        alternativas: [
          "O sistema deve ser mais preciso do que o sistema que está substituindo",
          "O componente de AI no sistema deve ter 100% de precisão",
          "Um operador humano deve ser capaz de anular o sistema em 1 segundo",
          "O sistema deve imitar as emoções humanas de um típico jogador de jogo"
        ],
        correta: "O componente de AI no sistema deve ter 100% de precisão"
      },
      {
        id: "q23",
        texto: "Qual dos seguintes é um fator associado aos dados de teste que pode tornar difícil o teste de sistemas baseados em AI?",
        alternativas: [
          "Obtenção de grandes dados com alta velocidade",
          "Obtenção de dados a partir de uma única fonte",
          "Obtenção de dados separadamente dos cientistas de dados",
          "Obtenção de dados a partir de websites públicos"
        ],
        correta: "Obtenção de dados separadamente dos cientistas de dados"
      },
      {
        id: "q24",
        texto: "Por que a precisão das decisões humanas seria considerada nos testes, assim como a precisão dos sistemas baseados em AI?",
        alternativas: [
          "As decisões humanas intuitivas podem ser tomadas mais rapidamente do que um sistema baseado em AI correspondente em algumas situações",
          "Decisões antiéticas podem ser tomadas por seres humanos, bem como por sistemas baseados em AI",
          "A precisão das decisões humanas não é relevante para testar sistemas baseados em AI",
          "As decisões humanas podem ser de qualidade inferior quando foram recomendadas por um sistema baseado em AI"
        ],
        correta: "Decisões antiéticas podem ser tomadas por seres humanos, bem como por sistemas baseados em AI"
      },
      {
        id: "q25",
        texto: "Uma solução de cobrança de pedágio baseada em ML determina o tipo de veículos que chegam das imagens capturadas por uma câmera. Há diferentes tipos de câmeras disponíveis, e as imagens precisam estar em formato JPEG com 320x480 pixels. O sistema deve ser testado quanto à precisão desejada e vulnerabilidades. Qual o conjunto MAIS apropriado de testes?",
        alternativas: [
          "Testes de desvio de conceito e escalabilidade",
          "Testes contraditórios e de pipeline de dados",
          "Teste de imparcialidade e de escalabilidade",
          "Teste de regressão e de usabilidade"
        ],
        correta: "Testes contraditórios e de pipeline de dados"
      },  
      {
        id: "q26",
        texto: "Em qual das fases do ciclo de vida da AI o teste de imparcialidade é MAIS relevante?",
        alternativas: [
          "Implantação",
          "Coleta de dados",
          "Retreinamento",
          "Validação do modelo"
        ],
        correta: "Coleta de dados"
      },
      {
        id: "q27",
        texto: "Ao testar um sistema de IA que gera imagens a partir de texto, qual abordagem MELHOR ajuda a avaliar sua precisão?",
        alternativas: [
          "Executar testes de carga com muitos usuários simultâneos",
          "Analisar se a imagem gerada corresponde fielmente à descrição textual",
          "Medir o tempo de geração da imagem",
          "Verificar se os nomes dos arquivos seguem o padrão estabelecido"
        ],
        correta: "Analisar se a imagem gerada corresponde fielmente à descrição textual"
      },
      {
        id: "q28",
        texto: "Qual é a principal razão para usar um conjunto de validação separado durante o treinamento de modelos de AI?",
        alternativas: [
          "Melhorar a explicabilidade do modelo",
          "Verificar a imparcialidade dos dados de entrada",
          "Avaliar o desempenho do modelo antes do teste final",
          "Aumentar o tempo de treinamento"
        ],
        correta: "Avaliar o desempenho do modelo antes do teste final"
      },
      {
        id: "q29",
        texto: "Qual técnica pode ser aplicada para testar a robustez de um modelo de visão computacional?",
        alternativas: [
          "Reduzir o número de camadas na rede neural",
          "Aplicar ruído adversarial nas imagens de entrada",
          "Executar o modelo com dados totalmente sintéticos",
          "Alterar a taxa de aprendizado durante o teste"
        ],
        correta: "Aplicar ruído adversarial nas imagens de entrada"
      },
      {
        id: "q30",
        texto: "Qual das opções descreve MELHOR um benefício da segmentação de dados por grupo demográfico durante os testes?",
        alternativas: [
          "Aumentar o número de métricas coletadas",
          "Eliminar completamente o viés do modelo",
          "Melhorar o desempenho computacional do sistema",
          "Detectar possíveis desigualdades no comportamento do modelo"
        ],
        correta: "Detectar possíveis desigualdades no comportamento do modelo"
      },          
      {
        id: "q31",
        texto: "Qual das métricas abaixo é mais apropriada para avaliar um modelo de classificação quando há um grande desbalanceamento entre as classes?",
        alternativas: [
          "Precisão (Accuracy)",
          "Taxa de erro",
          "Matriz de confusão",
          "F1-Score"
        ],
        correta: "F1-Score"
      },
      {
        id: "q32",
        texto: "Durante a avaliação de um sistema de AI, você observa que ele sempre classifica um determinado grupo como negativo. Qual técnica pode ajudar a identificar esse tipo de problema?",
        alternativas: [
          "Testes de stress",
          "Análise de sensibilidade",
          "Teste de imparcialidade (Fairness testing)",
          "Validação cruzada"
        ],
        correta: "Teste de imparcialidade (Fairness testing)"
      },
      {
        id: "q33",
        texto: "Qual é o papel da validação cruzada em projetos de AI?",
        alternativas: [
          "Reduzir o tempo de inferência do modelo em produção",
          "Garantir que o modelo seja explicável por humanos",
          "Avaliar a estabilidade do modelo com diferentes subconjuntos de dados",
          "Escolher a melhor arquitetura de rede neural"
        ],
        correta: "Avaliar a estabilidade do modelo com diferentes subconjuntos de dados"
      },
      {
        id: "q34",
        texto: "Qual das opções é um exemplo de viés de automação?",
        alternativas: [
          "Confiar excessivamente nas decisões tomadas por sistemas automatizados",
          "Automatizar tarefas sem supervisão humana",
          "Implementar sistemas com baixa explicabilidade",
          "Utilizar dados com variância muito alta"
        ],
        correta: "Confiar excessivamente nas decisões tomadas por sistemas automatizados"
      },
      {
        id: "q35",
        texto: "Qual das opções a seguir é uma preocupação típica em relação ao uso de dados sintéticos para treinamento de AI?",
        alternativas: [
          "Baixo custo de aquisição",
          "Alta disponibilidade",
          "Desbalanceamento das classes",
          "Representatividade limitada dos dados reais"
        ],
        correta: "Representatividade limitada dos dados reais"
      },
      {
        id: "q36",
        texto: "Qual objetivo é mais compatível com o uso de técnicas de interpretabilidade local (como LIME ou SHAP)?",
        alternativas: [
          "Explicar como o modelo geral toma decisões, de forma global",
          "Aumentar a precisão durante o treinamento",
          "Reduzir o viés nos dados de entrada",
          "Explicar por que o modelo tomou uma decisão específica"
        ],
        correta: "Explicar por que o modelo tomou uma decisão específica"
      },
      {
        id: "q37",
        texto: "Qual das opções é um exemplo de técnica adversarial em testes de AI?",
        alternativas: [
          "Fornecer entradas levemente alteradas para enganar o modelo",
          "Repetir testes unitários com diferentes seeds",
          "Reduzir a taxa de aprendizado durante o treinamento",
          "Avaliar métricas de desempenho com dados limpos"
        ],
        correta: "Fornecer entradas levemente alteradas para enganar o modelo"
      },
      {
        id: "q38",
        texto: "O que MELHOR descreve um 'oráculo de teste' em contextos de AI?",
        alternativas: [
          "Um algoritmo de otimização usado para encontrar hiperparâmetros",
          "Um conjunto de regras que define os dados de treinamento",
          "Uma fonte confiável para verificar se a saída do sistema está correta",
          "Um sistema de logging usado para rastrear decisões do modelo"
        ],
        correta: "Uma fonte confiável para verificar se a saída do sistema está correta"
      },
      {
        id: "q39",
        texto: "Você observa que um modelo tem excelente desempenho em ambientes de teste, mas baixo desempenho em produção. Qual é a explicação MAIS provável?",
        alternativas: [
          "A versão de produção usa mais dados",
          "O modelo não foi treinado com dados representativos do ambiente real",
          "O modelo está usando uma taxa de aprendizado muito alta",
          "Os dados de produção têm menos ruído"
        ],
        correta: "O modelo não foi treinado com dados representativos do ambiente real"
      },
      {
        id: "q40",
        texto: "Ao testar um chatbot com AI, qual seria uma prioridade de teste relacionada à experiência do usuário?",
        alternativas: [
          "Minimizar o uso de CPU durante inferência",
          "Garantir que o bot responda de forma natural e coerente",
          "Reduzir o número de intents pré-programadas",
          "Remover completamente qualquer resposta imprecisa"
        ],
        correta: "Garantir que o bot responda de forma natural e coerente"
      },      
      {
        id: "q41",
        texto: `Um sistema de busca de telefones celulares baseado em AI fornece uma lista de telefones que acredita serem os mais adequados para o usuário com base em seu uso anterior e suas preferências.
        
      Considere o seguinte caso de teste de origem, usado com testes metamórficos:
      
      Preferências:
      • Preço: $200–$300
      • Câmera 3D: indiferente
      • Tamanho de tela: grande
      • OS: Android ou iOS
      • Bateria: indiferente
      
      Resultado esperado:
      • Telefones recomendados: SH_X1, SH_M2, SH_M3, CN_100x, CN_100xs
      
      E os dois testes de acompanhamento:
      
      T1 — mesma entrada do teste original, mas com preferência por câmera 3D: sim  
      T2 — mesma entrada do teste original, mas com preferência por câmera 3D: não
      
      Qual das seguintes alternativas representa a MELHOR lista de telefones recomendados para os testes T1 e T2?`,
        alternativas: [
          "T1: SH_X1, SH_M2; T2: CN_100x, CN_100xs",
          "T1: SH_M2, SH_M3, CN_100xs; T2: SH_X1, CN_100x",
          "T1: SH_X1, SH_M2, SH_M3, CN_100x, CN_100xs; T2: SH_X1, SH_M2, SH_M3",
          "T1: SH_X1, SH_M2, SH_M3, CN_100x, CN_100xs; T2: SH_X1, SH_M2, SH_M3, CN_100x, CN_100xs"
        ],
        correta: "T1: SH_M2, SH_M3, CN_100xs; T2: SH_X1, CN_100x"
      },      
      {
        id: "q42",
        texto: "Qual das seguintes declarações sobre AI é a MAIS provável que seja CORRETA?",
        alternativas: [
          "Um robô autônomo que pode atuar como trabalhador em uma casa, loja ou escritório é um exemplo de AI geral",
          "Um robô que exibe níveis de habilidade similares aos de um humano é considerado como tendo alcançado a singularidade",
          "Os sistemas baseados em AI que suportam uma série de funções de gerenciamento de testes são considerados como possuindo AI geral",
          "Um sistema baseado em AI que não pode acessar a Internet é considerado como apresentando AI estreita"
        ],
        correta: "Um robô autônomo que pode atuar como trabalhador em uma casa, loja ou escritório é um exemplo de AI geral"
      },
      {
        id: "q43",
        texto: "Qual das seguintes declarações é a mais provável que descreva um sistema convencional (em oposição a um sistema baseado em AI)?",
        alternativas: [
          "O sistema designa os clientes em grupos, com base em seus padrões históricos de compra",
          "O sistema controla a frenagem do carro em função de sua velocidade",
          "O sistema se ensinou a reconhecer palavras diferentes ouvindo gravações",
          "O sistema detecta anomalias a partir de sua experiência de ver anomalias em muitos raios X"
        ],
        correta: "O sistema controla a frenagem do carro em função de sua velocidade"
      },
      {
        id: "q44",
        texto: "Qual das seguintes opções NÃO é uma estrutura usada para desenvolver software baseado em AI?",
        alternativas: [
          "scikit-learn",
          "CNTK",
          "MxNet",
          "EZPy-AI"
        ],
        correta: "EZPy-AI"
      },
      {
        id: "q45",
        texto: "Qual das seguintes declarações é a mais provável de descrever um sistema que inclui o uso de AI como um serviço (IAaaS)?",
        alternativas: [
          "O classificador de imagem identifica defeitos nos invólucros do giroscópio produzido pela empresa e foi construído utilizando uma abordagem de aprendizagem de transferência para que seja de alta precisão",
          "O sistema de direção de veículos subaquáticos baseado em AI utiliza um componente de terceiros para evitar obstáculos baseado em árvores de decisão e otimização Bayesiana",
          "O verificador do contrato usa um algoritmo exclusivo para determinar os níveis de responsabilidade legal, mas a parte do preço do contrato é verificada separadamente por um componente genérico de preço de AI do contrato",
          "O sistema de preços de aluguel de carros é construído usando AI para suportar um algoritmo baseado na demanda e é hospedado na nuvem e disponibilizado para todos os escritórios de aluguel de carros da empresa"
        ],
        correta: "O sistema de preços de aluguel de carros é construído usando AI para suportar um algoritmo baseado na demanda e é hospedado na nuvem e disponibilizado para todos os escritórios de aluguel de carros da empresa"
      },     
      {
        id: "q46",
        texto: "Você está revisando os componentes de um sistema baseado em AI com base nos princípios éticos do ISTQB®. Qual das seguintes situações representa uma preocupação relacionada à autonomia?",
        alternativas: [
          "O sistema bloqueia uma funcionalidade para determinados usuários sem explicar o motivo",
          "O sistema não permite que o usuário desfaça uma decisão automatizada",
          "O sistema coleta dados sem o consentimento explícito",
          "O sistema falha ao identificar viés nos dados de entrada"
        ],
        correta: "O sistema não permite que o usuário desfaça uma decisão automatizada"
      },
      {
        id: "q47",
        texto: "Qual das alternativas é um exemplo de explicabilidade global em sistemas baseados em AI?",
        alternativas: [
          "Mostrar o histórico completo de decisões feitas pelo sistema para um caso específico",
          "Utilizar LIME para explicar por que uma decisão foi tomada individualmente",
          "Demonstrar, de forma compreensível, como o modelo em geral chega a decisões",
          "Permitir que o usuário veja os pesos da rede neural para cada entrada"
        ],
        correta: "Demonstrar, de forma compreensível, como o modelo em geral chega a decisões"
      },
      {
        id: "q48",
        texto: "Você está testando um sistema de recomendação de músicas. Ele recomenda playlists diferentes para perfis com uma única diferença: um usuário é homem e outro é mulher. Qual preocupação de teste é mais relevante aqui?",
        alternativas: [
          "Desempenho",
          "Viés",
          "Usabilidade",
          "Precisão"
        ],
        correta: "Viés"
      },
      {
        id: "q49",
        texto: "Qual das seguintes técnicas de teste é mais adequada quando não há oráculo de teste confiável para comparar os resultados esperados de um sistema baseado em AI?",
        alternativas: [
          "Teste de regressão",
          "Teste back-to-back",
          "Teste A/B",
          "Teste de caixa branca"
        ],
        correta: "Teste back-to-back"
      },
      {
        id: "q50",
        texto: "Você está avaliando um classificador baseado em AI que identifica fraudes em transações bancárias. O custo de um falso negativo (fraude não detectada) é muito alto. Qual métrica de desempenho deveria ser priorizada?",
        alternativas: [
          "Precisão",
          "Acurácia",
          "Recall",
          "F1-Score"
        ],
        correta: "Recall"
      },    
      {
        id: "q51",
        texto: "Você está revisando os componentes de um sistema baseado em AI com base nos princípios éticos do ISTQB®. Qual das seguintes situações representa uma preocupação relacionada à autonomia?",
        alternativas: [
          "O sistema bloqueia uma funcionalidade para determinados usuários sem explicar o motivo",
          "O sistema não permite que o usuário desfaça uma decisão automatizada",
          "O sistema coleta dados sem o consentimento explícito",
          "O sistema falha ao identificar viés nos dados de entrada"
        ],
        correta: "O sistema não permite que o usuário desfaça uma decisão automatizada"
      },
      {
        id: "q52",
        texto: "Qual das alternativas é um exemplo de explicabilidade global em sistemas baseados em AI?",
        alternativas: [
          "Mostrar o histórico completo de decisões feitas pelo sistema para um caso específico",
          "Utilizar LIME para explicar por que uma decisão foi tomada individualmente",
          "Demonstrar, de forma compreensível, como o modelo em geral chega a decisões",
          "Permitir que o usuário veja os pesos da rede neural para cada entrada"
        ],
        correta: "Demonstrar, de forma compreensível, como o modelo em geral chega a decisões"
      },
      {
        id: "q53",
        texto: "Você está testando um sistema de recomendação de músicas. Ele recomenda playlists diferentes para perfis com uma única diferença: um usuário é homem e outro é mulher. Qual preocupação de teste é mais relevante aqui?",
        alternativas: [
          "Desempenho",
          "Viés",
          "Usabilidade",
          "Precisão"
        ],
        correta: "Viés"
      },
      {
        id: "q54",
        texto: "Qual das seguintes técnicas de teste é mais adequada quando não há oráculo de teste confiável para comparar os resultados esperados de um sistema baseado em AI?",
        alternativas: [
          "Teste de regressão",
          "Teste back-to-back",
          "Teste A/B",
          "Teste de caixa branca"
        ],
        correta: "Teste back-to-back"
      },
      {
        id: "q55",
        texto: "Você está avaliando um classificador baseado em AI que identifica fraudes em transações bancárias. O custo de um falso negativo (fraude não detectada) é muito alto. Qual métrica de desempenho deveria ser priorizada?",
        alternativas: [
          "Precisão",
          "Acurácia",
          "Recall",
          "F1-Score"
        ],
        correta: "Recall"
      },    
      {
        id: "q56",
        texto: "Qual das seguintes afirmações é um exemplo de diferença entre um ambiente de teste para sistemas baseados em AI e um ambiente de teste para sistemas convencionais?",
        alternativas: [
          "Ambientes de teste para sistemas baseados em AI podem exigir algum mecanismo para determinar como uma determinada decisão é tomada",
          "Os ambientes de teste para sistemas baseados em AI necessitam de simuladores e ambientes virtuais, enquanto os sistemas convencionais não necessitam destes",
          "Os ambientes de teste para sistemas baseados em AI precisam de grandes quantidades de dados, enquanto os sistemas convencionais não precisam de grandes quantidades de dados",
          "As GPUs são necessárias para ambientes de teste de sistemas baseados em IA, enquanto os sistemas convencionais não precisam delas"
        ],
        correta: "Ambientes de teste para sistemas baseados em AI podem exigir algum mecanismo para determinar como uma determinada decisão é tomada"
      },
      {
        id: "q57",
        texto: "Em qual das seguintes situações a AI seria mais útil na categorização de novos defeitos?",
        alternativas: [
          "Um pequeno número de defeitos requer a categorização em uma nova aplicação",
          "Muitos defeitos são relatados em uma pequena aplicação",
          "Os dados mínimos são fornecidos em relatórios de defeitos típicos",
          "Uma nova equipe de desenvolvimento precisa conhecer o desenvolvedor mais apropriado para corrigir um defeito"
        ],
        correta: "Muitos defeitos são relatados em uma pequena aplicação"
      },
      {
        id: "q58",
        texto: "Qual dos seguintes é uma ferramenta de AI MAIS provável de ser usada como base para gerar casos de teste funcional?",
        alternativas: [
          "Uma carta de teste",
          "Uma imagem do sistema como um diagrama de fluxo",
          "Logs de servidores Web",
          "Relatórios de quedas"
        ],
        correta: "Logs de servidores Web"
      },
      {
        id: "q59",
        texto: "Qual das seguintes opções declara CORRETAMENTE como uma ferramenta baseada em AI pode realizar a otimização de conjuntos de testes de regressão?",
        alternativas: [
          "Analisando os resultados dos testes falsos positivos",
          "Analisando informações de atividades de teste anteriores",
          "Usando algoritmos genéticos para criar casos de teste",
          "Atualizando os resultados esperados para combater o desvio do conceito"
        ],
        correta: "Analisando informações de atividades de teste anteriores"
      },
      {
        id: "q60",
        texto: "Qual das seguintes opções declara CORRETAMENTE como uma ferramenta baseada em AI pode realizar a previsão de defeitos?",
        alternativas: [
          "Usando linguagem natural para perguntar aos desenvolvedores onde irão ocorrer os defeitos",
          "Analisando as causas dos defeitos levantados sobre uma base de código similar",
          "Analisando os falsos defeitos positivos",
          "Código de varredura para identificar defeitos usando regras"
        ],
        correta: "Analisando as causas dos defeitos levantados sobre uma base de código similar"
      },          
      {
        id: "q61",
        texto: "Qual das seguintes afirmações declara CORRETAMENTE como uma ferramenta baseada em AI pode realizar a otimização de conjuntos de testes de regressão?",
        alternativas: [
          "Analisando os resultados dos testes falsos positivos",
          "Analisando informações de atividades de teste anteriores",
          "Usando algoritmos genéticos para criar casos de teste",
          "Atualizando os resultados esperados para combater o desvio do conceito"
        ],
        correta: "Analisando informações de atividades de teste anteriores"
      },
      {
        id: "q62",
        texto: "Qual das seguintes opções declara CORRETAMENTE como uma ferramenta baseada em AI pode realizar a previsão de defeitos?",
        alternativas: [
          "Usando linguagem natural para perguntar aos desenvolvedores onde irão ocorrer os defeitos",
          "Analisando as causas dos defeitos levantados sobre uma base de código similar",
          "Analisando os falsos defeitos positivos",
          "Código de varredura para identificar defeitos usando regras."
        ],
        correta: "Analisando as causas dos defeitos levantados sobre uma base de código similar"
      },
      {
        id: "q63",
        texto: "Você está avaliando um sistema que utiliza reconhecimento facial para liberar o acesso a um prédio. Um testador observa que usuários de um grupo étnico específico têm maior taxa de falha na autenticação. Qual a MELHOR ação para o testador tomar?",
        alternativas: [
          "Reportar como um problema de desempenho do sistema",
          "Registrar como um bug e seguir com testes funcionais",
          "Levantar como um risco relacionado à imparcialidade do modelo",
          "Ignorar o incidente se os usuários puderem tentar novamente"
        ],
        correta: "Levantar como um risco relacionado à imparcialidade do modelo"
      },
      

{
    id: "q64",
    texto: "Um sistema de AI para recomendação de produtos foi testado com sucesso em ambiente de homologação, mas seu desempenho caiu significativamente após o lançamento. Qual das causas abaixo é a mais provável?",
    alternativas: [
      "O sistema está usando uma versão diferente do algoritmo de recomendação",
      "O sistema foi submetido a sobrecarga de usuários",
      "Os dados em produção têm distribuição diferente dos dados de teste",
      "As métricas de desempenho não foram calculadas corretamente"
    ],
    correta: "Os dados em produção têm distribuição diferente dos dados de teste"
  },
  {
    id: "q65",
    texto: "Qual das opções abaixo representa um desafio típico em testes de explicabilidade?",
    alternativas: [
      "Identificar se o modelo precisa ser requalificado após atualizações de dados",
      "Validar se os logs de auditoria estão sendo salvos corretamente",
      "Avaliar se as justificativas do modelo são compreensíveis por especialistas",
      "Calcular o número de falsos positivos e falsos negativos"
    ],
    correta: "Avaliar se as justificativas do modelo são compreensíveis por especialistas"
  },
  {
    id: "q66",
    texto: "<strong>Durante o treinamento de um modelo de AI, observou-se alta acurácia em todos os subconjuntos de validação, mas queda no ambiente real. Isso é mais provavelmente um sintoma de:</strong>",
    alternativas: [
      "Viés de confirmação",
      "Desvio de conceito (concept drift)",
      "Sobreajuste (overfitting)",
      "Acurácia inflada por duplicatas"
    ],
    correta: "Desvio de conceito (concept drift)"
  },
  {
    id: "q67",
    texto: "<strong>Em um projeto que usa AI para análise de sentimentos, você deseja medir a confiança do modelo em suas próprias previsões. Qual métrica ou abordagem é mais adequada?</strong>",
    alternativas: [
      "F1-score",
      "Curva ROC",
      "Probabilidade preditiva (confidence score)",
      "Intervalo de confiança estatístico dos dados de entrada"
    ],
    correta: "Probabilidade preditiva (confidence score)"
  },  
  ];
