import { ODSTarget } from '../types/ods';

export const ODS10_TARGETS: ODSTarget[] = [
  {
    id: '10.1',
    numberLabel: 'Meta 10.1',
    officialTitle: 'Crescimento da Renda dos 40% Mais Pobres Acima da Média Nacional',
    solutionName: 'Programa Cresce 40+',
    subtitle: 'Estratégia integrada para promover o crescimento sustentado da renda dos 40% mais pobres acima da média nacional.',
    scope: 'Nacional (Brasil)',
    category: ['nacional', 'renda_trabalho'],
    badgeColor: 'rose',
    icon: 'TrendingUp',

    officialTargetText: 'Alcançar e sustentar progressivamente o crescimento da renda dos 40% da população de mais baixa renda a uma taxa maior que a média nacional até 2030.',
    officialIndicator: 'Indicador 10.1.1 — Taxas de crescimento do rendimento ou despesa per capita entre os 40% da base e a população total.',
    
    executiveSummary: 'A presente proposta técnica formula o Programa Cresce 40+, uma política pública estruturante orientada ao cumprimento rigoroso da Meta 10.1 dos Objetivos de Desenvolvimento Sustentável (ODS 10) no Brasil até 2030. Diante de um cenário em que a desigualdade de renda decorre da informalidade, de empregos de baixa produtividade e de barreiras estruturais de acesso ao mercado de trabalho, o programa articula proteção de renda com transição suave, qualificação técnica vinculada à demanda, estímulo ao emprego formal, produtividade de pequenos negócios e superação de barreiras territoriais e sociais.',
    
    normativeFramework: [
      'Constituição Federal de 1988 — Princípios fundamentais da erradicação da pobreza e redução das desigualdades (Art. 3º)',
      'Cadastro Único para Programas Sociais do Governo Federal (CadÚnico)',
      'Sistema Único de Assistência Social (SUAS) e Sistema Nacional de Emprego (SINE)',
      'Diretrizes de Qualificação e Inclusão Produtiva do MDS e MTE'
    ],

    diagnosis: {
      overview: 'No Brasil, a estagnação relativa da base da pirâmide distributiva decorre de múltiplos fatores econômicos e estruturais que bloqueiam a mobilidade social ascendente:',
      bulletPoints: [
        {
          title: 'Informalidade e Subutilização',
          text: 'Em 2024, a taxa de desocupação anual situou-se em 6,6%, mas a taxa de subutilização da força de trabalho atingiu 16,2% e a taxa de informalidade foi de 39,0%, mantendo dezenas de milhões de trabalhadores sem garantias trabalhistas e sob remunerações instáveis (IBGE, PNAD Contínua 2024).'
        },
        {
          title: 'Disparidade de Rendimento Domiciliar',
          text: 'Embora o rendimento médio domiciliar per capita nacional tenha alcançado R$ 2.069 em 2024, a distribuição permanece altamente concentrada, deixando o estrato dos 40% inferiores em níveis críticos de subsistência.'
        },
        {
          title: 'Barreiras de Acesso e Exclusão',
          text: 'Escassez severa de vagas em creches públicas nas periferias, transporte coletivo deficiente e oneroso, exclusão digital e desalinhamento entre cursos de qualificação e as demandas reais do mercado local perpetuam a armadilha da baixa renda, afetando sobretudo mulheres, jovens e negros.'
        }
      ],
      keyStats: [
        { value: '39,0%', label: 'Taxa de Informalidade no Brasil (2024)', source: 'IBGE / PNAD' },
        { value: '16,2%', label: 'Subutilização da Força de Trabalho', source: 'IBGE' },
        { value: 'R$ 2.069', label: 'Rendimento Médio Per Capita Nacional', source: 'PNAD 2024' },
        { value: '≥ +1,5 p.p.', label: 'Meta de Crescimento Superior da Base/ano', source: 'Meta 2030' }
      ]
    },

    pillars: [
      {
        number: 1,
        title: 'Proteção de Renda e Transição Gradual',
        summary: 'Manter a proteção social para famílias vulneráveis e instituir regras de transição suave quando houver aumento do rendimento do trabalho, evitando o cancelamento abrupto de benefícios sociais.'
      },
      {
        number: 2,
        title: 'Emprego Formal e Progressão Salarial',
        summary: 'Mapear vagas e setores em expansão regional, conectar diretamente os trabalhadores da base a essas oportunidades e conceder incentivos temporários a empresas que contratem e promovam a progressão desse público.'
      },
      {
        number: 3,
        title: 'Qualificação Profissional Alinhada à Demanda',
        summary: 'Oferecer cursos gratuitos e modulares estruturados a partir das demandas concretas das empresas locais, garantindo auxílio-transporte/alimentação e acompanhamento pós-conclusão por 6 a 12 meses.'
      },
      {
        number: 4,
        title: 'Produtividade e Apoio aos Pequenos Negócios',
        summary: 'Oferecer capacitação técnica em gestão financeira, precificação, marketing digital e controle de estoque, viabilizando acesso desburocratizado a microcrédito produtivo e a compras públicas governamentais.'
      },
      {
        number: 5,
        title: 'Remoção de Barreiras Estruturais',
        summary: 'Expandir vagas em creches e educação infantil em período integral nos bairros periféricos, melhorar linhas de transporte interbairros e universalizar o acesso à conectividade digital.'
      },
      {
        number: 6,
        title: 'Desenvolvimento Econômico Local e Cooperativismo',
        summary: 'Identificar arranjos produtivos locais com potencial de expansão, estimulando pequenos produtores rurais, redes de economia solidária e cooperativas de trabalho.'
      }
    ],

    operationalMechanisms: {
      description: 'A execução do programa segue um ciclo operacional contínuo estruturado em sete fases integradas:',
      stages: [
        {
          step: 'Fase 1',
          title: 'Identificação Territorial',
          description: 'Mapeamento e seleção dos territórios e famílias prioritárias com apoio do Cadastro Único e dados georreferenciados do IBGE.'
        },
        {
          step: 'Fase 2',
          title: 'Diagnóstico Individualizado',
          description: 'Levantamento multidimensional das competências, nível de escolaridade, composição familiar e principais barreiras enfrentadas pelo trabalhador.'
        },
        {
          step: 'Fase 3',
          title: 'Plano Individual de Autonomia',
          description: 'Pactuação de um plano de desenvolvimento profissional (emprego formal, qualificação técnica, empreendedorismo ou ação mista).'
        },
        {
          step: 'Fase 4',
          title: 'Suporte Integrado',
          description: 'Concessão de apoio social, creches e suporte de locomoção durante todo o período de formação e inserção.'
        },
        {
          step: 'Fase 5',
          title: 'Inserção Econômica Ativa',
          description: 'Encaminhamento direto para vagas abertas em empresas parceiras ou suporte técnico para formalização e financiamento de microempreendimentos.'
        },
        {
          step: 'Fase 6',
          title: 'Acompanhamento Longitudinal',
          description: 'Monitoramento contínuo da permanência no emprego, estabilidade e evolução da remuneração por pelo menos 12 meses.'
        },
        {
          step: 'Fase 7',
          title: 'Avaliação e Ajustes de Impacto',
          description: 'Comparação sistemática do crescimento da renda dos participantes com a média nacional, corrigindo ações de baixo rendimento.'
        }
      ]
    },

    governance: {
      governanceSummary: 'Comitê interministerial coordenado por Desenvolvimento e Assistência Social (MDS), Trabalho e Emprego (MTE), Educação (MEC), Desenvolvimento Econômico e Planejamento, em cooperação com Estados, Municípios, Sistema S, Universidades e OSCs.',
      stakeholders: ['MDS', 'MTE', 'MEC', 'Governos Estaduais', 'Prefeituras', 'Sistema S', 'Universidades Públicas', 'Sociedade Civil'],
      timeline: [
        { period: '2026', actions: 'Definição da linha de base estatística, padronização metodológica, integração de dados e seleção dos municípios-piloto.' },
        { period: '2027', actions: 'Execução dos projetos-piloto nos polos metropolitanos e regionais, com realização da primeira avaliação rigorosa de impacto.' },
        { period: '2028', actions: 'Expansão nacional das modalidades que comprovarem alta eficácia na geração e sustentação de renda.' },
        { period: '2029', actions: 'Correção de desvios operacionais e alocação de reforço financeiro nos territórios com maior defasagem distributiva.' },
        { period: '2030', actions: 'Avaliação final consolidada dos indicadores da Meta 10.1 e institucionalização definitiva do programa na legislação permanente.' }
      ]
    },

    kpis: {
      table: [
        { indicator: 'Crescimento da renda dos 40% inferiores vs. Média Nacional', meta2028_2029: 'Taxa de crescimento superior à média', meta2030: 'Vantagem de crescimento sustentada ≥ 1,5 p.p. ao ano' },
        { indicator: 'Famílias prioritárias com Plano de Autonomia concluído', meta2028_2029: '≥ 70% das famílias cadastradas', meta2030: '≥ 85% das famílias cadastradas' },
        { indicator: 'Participantes encaminhados para emprego formal ou qualificação', meta2028_2029: '≥ 65% dos atendidos', meta2030: '≥ 75% dos atendidos' },
        { indicator: 'Taxa de acompanhamento e retenção ativa após atendimento', meta2028_2029: '≥ 70% dos participantes', meta2030: '≥ 85% dos participantes' }
      ],
      complementaryIndicators: [
        'Variação da renda real média e mediana dos 40% da base',
        'Evolução das taxas de formalização do emprego',
        'Retenção nos postos de trabalho após 6 e 12 meses',
        'Taxa de conclusão de cursos profissionalizantes',
        'Crescimento do faturamento de microempreendimentos atendidos',
        'Ampliação de vagas em creches nas periferias',
        'Redução das assimetrias distributivas por raça/cor, gênero e localização'
      ]
    },

    riskManagement: [
      { risk: 'Baixa Absorção no Mercado de Trabalho', mitigation: 'Condicionar integralmente a oferta de cursos de formação às vagas reais abertas em parceria com federações de comércio e indústria locais.' },
      { risk: 'Desestímulo por Interrupção de Benefícios', mitigation: 'Instituição legislativa de mecanismos automáticos de transição gradual que assegurem estabilidade financeira à família.' },
      { risk: 'Desatualização Cadastral', mitigation: 'Integração algorítmica contínua entre o Cadastro Único, o e-Social, o CAGED e a Receita Federal.' },
      { risk: 'Concentração Regional', mitigation: 'Alocação obrigatória de cotas orçamentárias mínimas para regiões com menores índices de desenvolvimento humano.' }
    ],

    conclusion: 'O Programa Cresce 40+ transforma a Meta 10.1 em um plano de ação governamental concreto, escalável e passível de verificação independente. Ao conciliar a salvaguarda de renda com a expansão da produtividade e a superação de barreiras estruturais de inserção no trabalho digno, a proposta garante que a expansão econômica resulte em efetiva convergência de renda, assegurando a redução consistente da desigualdade social até 2030.',
    sources: [
      'ONU Brasil — Objetivo de Desenvolvimento Sustentável 10: Redução das Desigualdades',
      'UN Stats — SDG Indicators Database: Metadata Target 10.1 (Indicator 10.1.1)',
      'IBGE — Síntese de Indicadores Sociais e PNAD Contínua 2024',
      'IBGE — Rendimento Domiciliar Per Capita 2024 para o Brasil e Unidades da Federação',
      'IPEA — Cadernos ODS: Objetivo 10 — Reduzir a Desigualdade Dentro dos Países e Entre Eles',
      'Ministério do Desenvolvimento e Assistência Social (MDS) — Diretrizes de Inclusão Produtiva'
    ]
  },
  {
    id: '10.2',
    numberLabel: 'Meta 10.2',
    officialTitle: 'Inclusão Social, Econômica e Política Universal',
    solutionName: 'Estratégia Nacional de Inclusão Universal e Empoderamento Social',
    subtitle: 'Plano multissetorial para garantir igualdade de oportunidades, acessibilidade, combate à discriminação e inclusão de grupos vulneráveis.',
    scope: 'Nacional (Brasil)',
    category: ['nacional', 'direitos_inclusao'],
    badgeColor: 'amber',
    icon: 'Users',

    officialTargetText: 'Empoderar e promover a inclusão social, econômica e política de todos, independentemente da idade, gênero, deficiência, raça, etnia, origem, religião, condição econômica ou outra, até 2030.',
    officialIndicator: 'Indicador 10.2.1 — Proporção de pessoas vivendo abaixo de 50% do rendimento mediano, desagregado por sexo, idade e pessoas com deficiência.',

    executiveSummary: 'A presente proposta técnica estabelece a Estratégia Nacional de Inclusão Universal para viabilizar a implementação da Meta 10.2 do ODS 10 no Brasil até 2030. Reconhecendo que a igualdade não se atinge pelo mero tratamento formal idêntico, a proposta estrutura ações direcionadas para eliminar barreiras específicas em educação, trabalho digno, representação política, acessibilidade arquitetônica e digital, e proteção social para grupos historicamente marginalizados.',

    normativeFramework: [
      'Constituição Federal de 1988 — Art. 3º (Sociedade livre, justa e solidária; erradicação de preconceitos)',
      'Lei nº 13.146/2015 — Estatuto da Pessoa com Deficiência e normas de Desenho Universal',
      'Lei nº 12.288/2010 — Estatuto da Igualdade Racial',
      'Diretrizes Internacionais de Direitos Humanos da ONU'
    ],

    diagnosis: {
      overview: 'A exclusão social e a desigualdade no Brasil manifestam-se em múltiplas dimensões que se reforçam mutuamente:',
      bulletPoints: [
        {
          title: 'Barreiras Educacionais e Evasão',
          text: 'Déficits na qualidade do ensino público em áreas vulneráveis, carência de materiais adaptados e tecnologias assistivas, e preconceitos no ambiente escolar elevam o abandono entre jovens de baixa renda, negros e com deficiência.'
        },
        {
          title: 'Desigualdade no Mercado de Trabalho',
          text: 'Vieses discriminatórios em processos seletivos e escassez de oportunidades de primeiro emprego e aprendizagem técnica, gerando segregação ocupacional e limitando a autonomia econômica de mulheres e minorias.'
        },
        {
          title: 'Déficit de Acessibilidade e Mobilidade',
          text: 'Ausência generalizada de infraestrutura baseada no desenho universal em prédios públicos, calçadas, transportes e plataformas digitais, isolando pessoas com deficiência e idosos.'
        },
        {
          title: 'Sub-representação e Exclusão Digital',
          text: 'Baixa presença de grupos vulnerabilizados em conselhos participativos e audiências públicas, agravada pela falta de equipamentos e letramento para acesso a serviços digitais.'
        }
      ],
      keyStats: [
        { value: '≥ 90%', label: 'Conformidade de Acessibilidade em Prédios Públicos', source: 'Meta 2030' },
        { value: '≥ 70%', label: 'Inserção Formal de PcD e Grupos Minoritários', source: 'Meta 2030' },
        { value: '-30%', label: 'Redução da População com Renda < 50% Mediana', source: 'Indicador 10.2.1' },
        { value: '100%', label: 'Casos de Discriminação Acolhidos e Encaminhados', source: 'Protocolo Nacional' }
      ]
    },

    pillars: [
      {
        number: 1,
        title: 'Políticas Públicas Inclusivas e Focadas',
        summary: 'Elaboração e monitoramento de programas públicos direcionados a grupos com histórico de exclusão, alinhando direitos e oportunidades.'
      },
      {
        number: 2,
        title: 'Educação Inclusiva, Acessível e Equitativa',
        summary: 'Bolsas, materiais adaptados, tecnologias assistivas e combate permanente à evasão escolar e ao preconceito nas salas de aula.'
      },
      {
        number: 3,
        title: 'Oportunidades Econômicas e Trabalho Digno',
        summary: 'Primeiro emprego, estágios remunerados, formação técnica e fomento ao empreendedorismo inclusivo com fiscalização antidiscriminatória.'
      },
      {
        number: 4,
        title: 'Participação Política e Fortalecimento de Conselhos',
        summary: 'Criação e revitalização de conselhos comunitários, audiências descentralizadas e educação cívica para grupos sub-representados.'
      },
      {
        number: 5,
        title: 'Acessibilidade Universal e Desenho Universal',
        summary: 'Adequação compulsória de edifícios, transportes coletivos, espaços urbanos e canais digitais governamentais ao desenho universal.'
      },
      {
        number: 6,
        title: 'Proteção Social e Inclusão Digital Ampla',
        summary: 'Transferência de renda, moradia digna, saúde integral aliadas à democratização de internet de alta velocidade e letramento digital.'
      },
      {
        number: 7,
        title: 'Dados Desagregados e Parcerias Multissetoriais',
        summary: 'Estatísticas desagregadas por idade, gênero, raça/etnia, deficiência e renda para subsidiar decisões baseadas em evidências.'
      }
    ],

    operationalMechanisms: {
      description: 'A implementação apoia-se em um modelo integrado de gestão territorial em quatro eixos:',
      stages: [
        {
          step: 'Eixo 1',
          title: 'Centros Integrados de Cidadania e Acolhimento',
          description: 'Pontos de atendimento municipalizados para orientar cidadãos sobre acesso a direitos, assistência social e vagas de qualificação.'
        },
        {
          step: 'Eixo 2',
          title: 'Protocolo Unificado com Desenho Universal',
          description: 'Padronização em repartições públicas com atendimento presencial em Libras, materiais em Braille e interfaces web acessíveis.'
        },
        {
          step: 'Eixo 3',
          title: 'Canais Seguros de Denúncia e Apoio à Vítima',
          description: 'Canais integrados para apuração célere de discriminação, racismo, capacitismo e violência, com suporte psicossocial às vítimas.'
        },
        {
          step: 'Eixo 4',
          title: 'Rede de Parcerias Produtivas',
          description: 'Pactuação de compromissos com associações comerciais e empresas para abertura de vagas afirmativas e estágios inclusivos.'
        }
      ]
    },

    governance: {
      governanceSummary: 'Articulação compartilhada entre Ministérios dos Direitos Humanos, Igualdade Racial, Mulheres, MDS, MEC e Cidades, com Secretarias Estaduais, Defensorias Públicas e Movimentos Sociais.',
      stakeholders: ['MDHC', 'MIR', 'Ministério das Mulheres', 'MDS', 'MEC', 'Defensorias Públicas', 'Conselhos Comunitários'],
      timeline: [
        { period: '2026', actions: 'Mapeamento de vulnerabilidades territoriais, instituição de protocolos de acessibilidade e diretrizes de dados desagregados.' },
        { period: '2027', actions: 'Instalação dos primeiros Centros Integrados de Cidadania e plataformas de inclusão digital e qualificação.' },
        { period: '2028', actions: 'Expansão de programas de primeiro emprego inclusivo e auditoria nacional de acessibilidade em prédios e transportes.' },
        { period: '2029', actions: 'Fortalecimento de conselhos participativos e consolidação da rede de combate à discriminação institucional.' },
        { period: '2030', actions: 'Avaliação final dos indicadores da Meta 10.2 e consolidação do Plano como política de Estado permanente.' }
      ]
    },

    kpis: {
      table: [
        { indicator: 'Proporção da população com renda < 50% da mediana (Indicador 10.2.1)', meta2028_2029: 'Redução contínua em todos os grupos', meta2030: 'Redução de pelo menos 30% em relação à linha base' },
        { indicator: 'Taxa de inserção formal de PcD e grupos minoritários atendidos', meta2028_2029: '≥ 50% dos concluintes', meta2030: '≥ 70% dos concluintes' },
        { indicator: 'Índice de conformidade de acessibilidade em prédios e transportes', meta2028_2029: '≥ 65% das instalações avaliadas', meta2030: '≥ 90% das instalações públicas' },
        { indicator: 'Casos de discriminação acolhidos e encaminhados com suporte', meta2028_2029: '100% dos registros recebidos', meta2030: '100% com acompanhamento integral' }
      ]
    },

    riskManagement: [
      { risk: 'Fragmentação Institucional', mitigation: 'Criação de comitês gestores intersetoriais com reuniões mensais e metas compartilhadas entre secretarias.' },
      { risk: 'Subnotificação de Casos de Discriminação', mitigation: 'Lançamento de campanhas públicas multilíngues e fortalecimento de canais comunitários e anônimos.' },
      { risk: 'Restrições Orçamentárias para Obras de Acessibilidade', mitigation: 'Priorização de locais de alto fluxo público e utilização de fundos específicos de direitos difusos.' }
    ],

    conclusion: 'Alcançar a Meta 10.2 exige transcender a igualdade formal e reconhecer as assimetrias históricas. A Estratégia Nacional de Inclusão Universal combina medidas estruturais de educação, trabalho, acessibilidade, proteção social e participação política para garantir que ninguém seja deixado para trás.',
    sources: [
      'ONU Brasil — Objetivo de Desenvolvimento Sustentável 10: Redução das Desigualdades',
      'United Nations — Sustainable Development Goal 10: Reduced Inequalities',
      'UN Stats — SDG Indicators Database: Metadata Target 10.2 (Indicator 10.2.1)',
      'IPEA — Agenda 2030 ODS 10 e Diagnósticos de Inclusão Social no Brasil',
      'Presidência da República — Lei nº 13.146/2015 e Lei nº 12.288/2010'
    ]
  },
  {
    id: '10.3',
    numberLabel: 'Meta 10.3',
    officialTitle: 'Igualdade de Oportunidades e Eliminação de Leis e Práticas Discriminatórias',
    solutionName: 'Marco Nacional de Equidade, Justiça Fiscal e Integridade Institucional',
    subtitle: 'Estratégia integrada para eliminação de práticas discriminatórias, progressividade tributária, transparência policial e paridade de representação.',
    scope: 'Nacional (Brasil)',
    category: ['nacional', 'direitos_inclusao'],
    badgeColor: 'indigo',
    icon: 'Scale',

    officialTargetText: 'Garantir a igualdade de oportunidades e reduzir as desigualdades de resultados, inclusive por meio da eliminação de leis, políticas e práticas discriminatórias e da promoção de legislação, políticas e ações adequadas a este respeito.',
    officialIndicator: 'Indicador 10.3.1 — Proporção da população que relata ter sido pessoalmente vítima de discriminação ou assédio nos últimos 12 meses por motivos proibidos.',

    executiveSummary: 'A presente proposta formula o Marco Nacional de Equidade, Justiça Fiscal e Integridade Institucional para atender a Meta 10.3 do ODS 10. O documento enfrenta cinco gargalos críticos do cenário brasileiro: a regressividade da tributação sobre consumo, a concentração de gastos públicos no serviço da dívida, a violência institucional e letalidade policial contra a juventude negra, disparidades de gênero/raça no trabalho e sub-representação nos poderes Legislativo e Judiciário.',

    normativeFramework: [
      'Constituição Federal de 1988 — Arts. 3º e 5º (Igualdade formal e material)',
      'Lei nº 7.716/1989 — Crimes Resultantes de Preconceito de Raça ou de Cor',
      'Lei nº 14.611/2023 — Igualdade Salarial e Critérios Remuneratórios entre Mulheres e Homens',
      'Diretrizes e Jurisprudência do STF sobre Câmeras Corporais e Ações Afirmativas'
    ],

    diagnosis: {
      overview: 'A desigualdade estrutural brasileira apoia-se em mecanismos institucionais e econômicos consolidados:',
      bulletPoints: [
        {
          title: 'Regressividade Tributária',
          text: 'Arrecadação concentrada em impostos sobre consumo, onerando proporcionalmente mais os mais pobres, combinada com isenções históricas sobre lucros e dividendos para pessoas físicas.'
        },
        {
          title: 'Concentração de Gastos Públicos',
          text: 'Parcela substancial do orçamento estatal é absorvida pelo pagamento de juros da dívida, restringindo investimentos em saneamento básico, saúde e educação nas periferias.'
        },
        {
          title: 'Violência Institucional e Letalidade Policial',
          text: 'Jovens negros constituem a vasta maioria das vítimas de mortes decorrentes de intervenções policiais (Fórum Brasileiro de Segurança Pública), exigindo protocolos de transparência e responsabilização.'
        },
        {
          title: 'Segregação Salarial e Sub-representação',
          text: 'Mesmo com níveis idênticos de escolaridade, mulheres e pessoas negras recebem salários inferiores e enfrentam baixa representação nos quadros da magistratura e no Congresso Nacional.'
        }
      ],
      keyStats: [
        { value: '≥ 70%', label: 'Redução de Mortes em Ações com Câmeras Corporais', source: 'Meta 2030' },
        { value: '-50%', label: 'Redução de Relatos de Discriminação Pessoal', source: 'Meta 2030' },
        { value: '≤ 2%', label: 'Equidade Salarial de Gênero/Raça em Funções Iguais', source: 'Meta 2030' },
        { value: '+30%', label: 'Crescimento de Representação no Judiciário e Legislativo', source: 'Ações Afirmativas' }
      ]
    },

    pillars: [
      {
        number: 1,
        title: 'Reforma Tributária Progressiva e Justiça Fiscal',
        summary: 'Reduzir impostos sobre consumo de itens essenciais e ampliar a tributação sobre altas rendas, patrimônio e distribuição de dividendos.'
      },
      {
        number: 2,
        title: 'Reequilíbrio Orçamentário e Investimento Social Periférico',
        summary: 'Direcionar recursos prioritários para investimentos sociais (saneamento, creches, saúde nas periferias), estabelecendo metas orçamentárias transparentes.'
      },
      {
        number: 3,
        title: 'Transparência Policial, Câmeras Corporais e Controle da Força',
        summary: 'Implantação obrigatória de câmeras corporais (bodycams) em tempo integral, apuração célere de abusos e indenização às vítimas.'
      },
      {
        number: 4,
        title: 'Fiscalização Trabalhista e Penalização da Discriminação',
        summary: 'Aplicação da lei de igualdade salarial com multas pesadas e responsabilização jurídica para empresas que praticarem discriminação em vagas e salários.'
      },
      {
        number: 5,
        title: 'Ações Afirmativas e Paridade nos Espaços de Poder',
        summary: 'Fortalecimento de cotas no Judiciário/MP e regras eleitorais que assegurem financiamento proporcional para candidaturas de mulheres, negros e indígenas.'
      }
    ],

    operationalMechanisms: {
      description: 'Mecanismos operacionais combinam tecnologia, corregedorias independentes e controle fiscal:',
      stages: [
        {
          step: 'Mecanismo 1',
          title: 'Ouvidorias e Corregedorias Externas',
          description: 'Comitês com participação civil e auditoria independente das imagens de câmeras corporais e ocorrências de segurança pública.'
        },
        {
          step: 'Mecanismo 2',
          title: 'Auditoria Fiscal e Algorítmica da Igualdade Salarial',
          description: 'Cruzamento automatizado de dados de folhas de pagamento pelo Ministério do Trabalho para identificar disparidades salariais injustificadas.'
        },
        {
          step: 'Mecanismo 3',
          title: 'Painéis Públicos de Transparência Orçamentária e Social',
          description: 'Plataforma aberta discriminando gastos sociais territoriais, taxas de letalidade policial e cumprimento de cotas em órgãos públicos.'
        }
      ]
    },

    governance: {
      governanceSummary: 'Articulação entre Fazenda, Justiça, Segurança Pública, Trabalho, Igualdade Racial, Mulheres, Congresso Nacional, CNJ, Ministério Público e Defensorias.',
      stakeholders: ['Ministério da Fazenda', 'MJSP', 'MTE', 'MIR', 'CNJ', 'Ministério Público Federal', 'Defensorias Públicas'],
      timeline: [
        { period: '2026', actions: 'Regulamentação de câmeras corporais e início da fiscalização automatizada de igualdade salarial.' },
        { period: '2027', actions: 'Implementação da tributação progressiva sobre lucros/dividendos e revisão orçamentária social.' },
        { period: '2028', actions: 'Consolidação das cotas na magistratura e aplicação de penalidades a corporações discriminatórias.' },
        { period: '2029', actions: 'Expansão do financiamento eleitoral afirmativo e avaliação do impacto da redução de letalidade policial.' },
        { period: '2030', actions: 'Avaliação das metas do ODS 10.3 e consolidação de políticas de integridade institucional.' }
      ]
    },

    kpis: {
      table: [
        { indicator: 'Redução de relatos de discriminação pessoal (Indicador 10.3.1)', meta2028_2029: 'Redução de 25% frente à linha base', meta2030: 'Redução de pelo menos 50% nos índices' },
        { indicator: 'Letalidade em intervenções policiais com uso de câmeras', meta2028_2029: 'Redução de 40% nas ocorrências', meta2030: 'Redução de ≥ 70% nas mortes em operações' },
        { indicator: 'Equidade salarial de gênero e raça para funções equivalentes', meta2028_2029: 'Diferença média ≤ 10%', meta2030: 'Paridade plena (diferença ≤ 2% justificada)' },
        { indicator: 'Participação de negros, mulheres e indígenas no Judiciário/Legislativo', meta2028_2029: 'Crescimento de 30% na representação', meta2030: 'Atingimento de patamares representativos mínimos' }
      ]
    },

    riskManagement: [
      { risk: 'Resistência Corporativa ao Uso de Câmeras', mitigation: 'Penalidades disciplinares graves imediatas para o desligamento não justificado de equipamentos durante operações.' },
      { risk: 'Judicialização contra Cotas e Tributação', mitigation: 'Estruturação com estrito embasamento constitucional e jurisprudência pacificada do STF.' },
      { risk: 'Evasão Fiscal de Grandes Patrimônios', mitigation: 'Modernização da inteligência fiscal e cooperação internacional contra elisão fiscal e remessas ilegais.' }
    ],

    conclusion: 'O cumprimento da Meta 10.3 exige a erradicação decisiva das estruturas materiais e institucionais que perpetuam a desigualdade. Ao alinhar tributação progressiva, redirecionamento orçamentário para periferias, controle da atividade policial, punição à discriminação no trabalho e paridade de representação, o Brasil constrói as bases reais para igualdade efetiva de oportunidades até 2030.',
    sources: [
      'ONU Brasil — Objetivo de Desenvolvimento Sustentável 10: Redução das Desigualdades',
      'UN Stats — SDG Indicators Database: Metadata Target 10.3 (Indicator 10.3.1)',
      'Fórum Brasileiro de Segurança Pública — Anuário de Segurança Pública',
      'Ministério do Trabalho e Emprego — Relatórios da Lei de Igualdade Salarial',
      'Presidência da República — Lei nº 7.716/1989 e Lei nº 14.611/2023'
    ]
  },
  {
    id: '10.4',
    numberLabel: 'Meta 10.4',
    officialTitle: 'Políticas Fiscais, Salariais e de Proteção Social',
    solutionName: 'Pacto Internacional e Nacional para Redução das Desigualdades Fiscais, Salariais e Sociais',
    subtitle: 'Proposta técnica para promoção contínua da igualdade progressiva por meio de tributação justa, valorização do trabalho e pisos de proteção social.',
    scope: 'Global / Multilateral',
    category: ['global', 'renda_trabalho'],
    badgeColor: 'emerald',
    icon: 'BadgePercent',

    officialTargetText: 'Adotar políticas, especialmente fiscais, salariais e de proteção social, e alcançar progressivamente uma maior igualdade.',
    officialIndicator: 'Indicador 10.4.1 (Participação da renda do trabalho no PIB) & Indicador 10.4.2 (Impacto redistributivo fiscal sobre o Índice de Gini).',

    executiveSummary: 'A presente proposta técnica aborda a implementação da Meta 10.4 do ODS 10. O diagnóstico evidencia que a desigualdade decorre da redução relativa da renda do trabalho, de estruturas tributárias regressivas e de coberturas parciais de proteção social. A solução estrutura-se no Pacto Internacional e Nacional de Redistribuição, articulado em quatro pilares fundamentais de transformação socioeconômica.',

    normativeFramework: [
      'Convenções da Organização Internacional do Trabalho (OIT) sobre Salários Dignos e Seguridade Social',
      'Diretrizes de Assistência Técnica do Banco Mundial e FMI',
      'Constituição Federal de 1988 — Seguridade Social Universal e Salário Mínimo Real',
      'Princípios de Tributação Progressiva e Neutralidade Fiscal Compensatória'
    ],

    diagnosis: {
      overview: 'Desafios estruturais severos na distribuição de riqueza e renda:',
      bulletPoints: [
        {
          title: 'Queda na Participação do Trabalho no PIB',
          text: 'Em 2024, a participação global da renda do trabalho no PIB foi de 52,3%, abaixo dos 52,9% de 2015, demonstrando perda relativa do poder de compra frente aos ganhos do capital.'
        },
        {
          title: 'Regressividade Fiscal',
          text: 'Sistemas tributários excessivamente dependentes de impostos indiretos sobre consumo sobrecarregam famílias de menor renda e perpetuam a concentração patrimonial.'
        },
        {
          title: 'Déficits de Cobertura da Proteção Social',
          text: 'Grande parcela da população ainda carece de mecanismos estáveis contra desemprego, acidentes, invalidez ou velhice, gerando armadilhas de vulnerabilidade crônica.'
        }
      ],
      keyStats: [
        { value: '> 55,0%', label: 'Participação da Renda do Trabalho no PIB (Meta 2030)', source: 'Indicador 10.4.1' },
        { value: '-0,05 pts', label: 'Impacto Redistributivo sobre o Índice de Gini', source: 'Indicador 10.4.2' },
        { value: '≥ 90%', label: 'Cobertura do Piso de Proteção em Vulneráveis', source: 'Meta 2030' },
        { value: '52,3%', label: 'Participação Global do Trabalho no PIB (2024)', source: 'OIT' }
      ]
    },

    pillars: [
      {
        number: 1,
        title: 'Marco de Tributação Progressiva',
        summary: 'Ampliar tributos diretos incidentes sobre renda e grandes patrimônios, desonerando a cesta básica e bens de consumo essencial para maximizar o impacto redistributivo.'
      },
      {
        number: 2,
        title: 'Pacto de Valorização do Trabalho',
        summary: 'Reajuste do salário mínimo com reposição inflacionária mais ganhos de produtividade, fortalecimento da negociação coletiva e combate à precarização.'
      },
      {
        number: 3,
        title: 'Piso Global e Universal de Proteção Social',
        summary: 'Garantia de transferência mínima de renda, proteção à primeira infância, aposentadoria básica, auxílio por incapacidade e seguro-desemprego com requalificação.'
      },
      {
        number: 4,
        title: 'Observatório Internacional de Políticas Redistributivas (OIPR)',
        summary: 'Mecanismo sob a égide da ONU para monitorar índices de Gini pré e pós-tributos, relatórios salariais e promover cooperação técnica intergovernamental.'
      }
    ],

    operationalMechanisms: {
      description: 'A operacionalização ocorre mediante a integração de políticas salariais, orçamentárias e sociais:',
      stages: [
        {
          step: '1',
          title: 'Planos Nacionais de Convergência Fiscal',
          description: 'Medição precisa do impacto das alíquotas de impostos e transferências sociais sobre a redução da desigualdade.'
        },
        {
          step: '2',
          title: 'Coordenação Tripartite OIT-Governos-Sindicatos',
          description: 'Mesas de negociação permanentes para estabelecimento de pisos salariais setoriais e combate à precarização do trabalho.'
        },
        {
          step: '3',
          title: 'Mecanismo de Assistência Fiscal Suplementar',
          description: 'Financiamento concessional do Banco Mundial e FMI para países de menor capacidade fiscal implementarem seus pisos de proteção social.'
        }
      ]
    },

    governance: {
      governanceSummary: 'Coordenação tripartite internacional entre ONU, OIT, Banco Mundial, Ministérios da Fazenda, Trabalho, Assistência Social, IBGE/IPEA, Sindicatos e Empregadores.',
      stakeholders: ['ONU', 'OIT', 'Banco Mundial', 'Ministério da Fazenda', 'MTE', 'MDS', 'Centrais Sindicais'],
      timeline: [
        { period: '2026', actions: 'Instalação do Observatório de Políticas Redistributivas e lançamento das metas de progressividade fiscal.' },
        { period: '2027', actions: 'Adoção de políticas de valorização real do salário mínimo e integração dos sistemas de transferências de renda.' },
        { period: '2028', actions: 'Implementação plena de reformas tributárias progressivas e expansão dos pisos de proteção à infância e velhice.' },
        { period: '2029', actions: 'Revisão do impacto redistributivo sobre o índice de Gini e ampliação da assistência técnica internacional.' },
        { period: '2030', actions: 'Balanço final do ODS 10.4 e consolidação da participação da renda do trabalho acima de 55% do PIB.' }
      ]
    },

    kpis: {
      table: [
        { indicator: 'Participação da renda do trabalho no PIB (Indicador 10.4.1)', meta2028_2029: 'Recuperação para ≥ 53,5%', meta2030: 'Superar 55,0% da renda nacional' },
        { indicator: 'Impacto redistributivo fiscal sobre o Índice de Gini (Indicador 10.4.2)', meta2028_2029: 'Redução de pelo menos 0,05 pontos', meta2030: 'Redução expressiva e sustentada pós-tributos' },
        { indicator: 'Cobertura do Piso de Proteção Social em grupos vulneráveis', meta2028_2029: '≥ 75% da população vulnerável', meta2030: '≥ 90% da população vulnerável' },
        { indicator: 'Crescimento real do salário mínimo vs. Produtividade', meta2028_2029: 'Ganho real positivo sustentado', meta2030: 'Convergência do piso com as necessidades básicas' }
      ]
    },

    caseStudy: {
      title: 'Estudo de Caso — Brasil como Laboratório',
      description: 'O Brasil atua como referência para a Meta 10.4 devido à robustez de programas como Bolsa Família e a valorização do salário mínimo. O desafio atual consiste na reformulação da estrutura tributária regressiva, combinando a proteção social com um sistema tributário progressivo que amplie o impacto redistributivo sobre o Gini.'
    },

    riskManagement: [
      { risk: 'Desequilíbrio Fiscal', mitigation: 'Manter a neutralidade fiscal global mediante compensação: elevar a tributação de altas rendas para financiar desonerações e proteção social.' },
      { risk: 'Evasão e Fuga de Capitais', mitigation: 'Adoção de padrões internacionais de troca de informações tributárias e transparência financeira internacional.' }
    ],

    conclusion: 'A Meta 10.4 não se restringe a políticas assistenciais: ela transforma a relação entre tributação, trabalho e seguridade. Por meio de sistemas fiscais progressivos, valorização do trabalho e pisos de proteção social universais, o crescimento econômico torna-se o motor da redução sustentável da desigualdade.',
    sources: [
      'ONU Brasil — Objetivo de Desenvolvimento Sustentável 10: Redução das Desigualdades',
      'UN Stats — SDG Indicators Database: Metadata Target 10.4 (Indicators 10.4.1 & 10.4.2)',
      'Organização Internacional do Trabalho (OIT) — Global Wage Report & Labour Share of GDP',
      'IPEA — Cadernos ODS: Políticas Fiscais, Salariais e Proteção Social',
      'Banco Mundial — Social Protection and Fiscal Redistribution Systems'
    ]
  },
  {
    id: '10.5',
    numberLabel: 'Meta 10.5',
    officialTitle: 'Regulação, Estabilidade e Justiça no Sistema Financeiro Global',
    solutionName: 'Framework FISP (Financial Integrity, Stability & Progressive Inclusion)',
    subtitle: 'Modelo integrado para regulação prudencial, supervisão com tecnologia em tempo real, defesa do consumidor e combate a assimetrias financeiras.',
    scope: 'Global / Multilateral',
    category: ['global', 'financas_comercio'],
    badgeColor: 'sky',
    icon: 'Landmark',

    officialTargetText: 'Melhorar a regulação e o monitoramento dos mercados e instituições financeiras globais e fortalecer a implementação de tais regulações.',
    officialIndicator: 'Indicador 10.5.1 — Indicadores de Solidez Financeira (FSIs) supervisionados pelo FMI.',

    executiveSummary: 'A presente proposta técnica detalha o Framework FISP para operacionalizar a Meta 10.5 do ODS 10. A ausência de regulação adequada transfere o custo social de crises sistêmicas para as populações de menor renda, concentra o mercado de crédito, drena recursos públicos para o sistema bancário paralelo e paraísos fiscais, e dissemina o superendividamento por canais digitais desregulados. O Framework FISP estabelece cinco pilares para garantir higidez prudencial, tecnologia na fiscalização e inclusão produtiva.',

    normativeFramework: [
      'Acordo de Basileia III e Normas do Conselho de Estabilidade Financeira (FSB)',
      'Diretrizes de Supervisão e Regulação do Banco Central do Brasil e CMN',
      'Código de Defesa do Consumidor e Lei do Superendividamento (Lei 14.181/2021)',
      'Resoluções da UNCTAD sobre Regulação Financeira e Mercados Globais'
    ],

    diagnosis: {
      overview: 'As assimetrias do sistema financeiro geram impactos severos sobre a economia real e a distribuição de renda:',
      bulletPoints: [
        {
          title: 'Custo Social das Crises e Salvamentos Bancários',
          text: 'Colapsos no sistema financeiro desregulado desencadeiam recessões e arrocho fiscal, nos quais a sociedade e os serviços públicos arcam desproporcionalmente com os resgates de liquidez.'
        },
        {
          title: 'Concentração Bancária e Spread Elevado',
          text: 'O oligopólio de grandes instituições eleva artificialmente as taxas de juros, encarecendo e restringindo o acesso a capital de giro para MPMEs e produtores locais.'
        },
        {
          title: 'Shadow Banking e Evasão Fiscal',
          text: 'O crescimento do sistema bancário paralelo e fundos opacos desvia recursos vitais da base tributária de países em desenvolvimento.'
        },
        {
          title: 'Superendividamento Digital e Apostas Online',
          text: 'A proliferação desregulada de crédito rotativo de fácil contratação por aplicativos e plataformas de apostas online corroem a renda e a segurança alimentar familiar.'
        }
      ],
      keyStats: [
        { value: '< 1.500 pts', label: 'Índice HHI no Crédito (Mercado Desconcentrado)', source: 'Meta 2030' },
        { value: '-35%', label: 'Redução dos Spreads Bancários para MPMEs', source: 'Meta 2030' },
        { value: '≤ 20%', label: 'Comprometimento de Renda com Dívidas em Vulneráveis', source: 'Meta 2030' },
        { value: '≥ 25%', label: 'Participação das Cooperativas de Crédito', source: 'Meta 2030' }
      ]
    },

    pillars: [
      {
        number: 1,
        title: 'Bancos Seguros e Reservas Anticrise',
        summary: 'Colchões dinâmicos de capital contracíclico (Basileia III), fiscalização mandatória do shadow banking e inclusão do endividamento familiar nos FSIs do FMI.'
      },
      {
        number: 2,
        title: 'Fiscalização com Tecnologia e IA em Tempo Real (SupTech)',
        summary: 'Telemetria contínua por APIs para monitoramento diário da liquidez bancária pelo BACEN, algoritmos preditivos contra fraudes e sandboxes para criptoativos.'
      },
      {
        number: 3,
        title: 'Concorrência Justa e Finanças Solidárias',
        summary: 'Consolidação do Open Finance para portabilidade instantânea de crédito, fomento a cooperativas (Sicredi, Sicoob) e integração de moedas sociais ao PIX e Drex.'
      },
      {
        number: 4,
        title: 'Defesa do Consumidor e Prevenção do Superendividamento',
        summary: 'Tetos para juros rotativos de cartão e crediário digital, bloqueio de crédito para apostas online e auditoria de algoritmos contra vieses discriminatórios.'
      },
      {
        number: 5,
        title: 'Cooperação Fiscal Internacional e Tributação sobre Especulação',
        summary: 'Troca automática de dados fiscais entre bancos centrais contra paraísos fiscais e taxa sobre transações financeiras de alta velocidade (FTT).'
      }
    ],

    operationalMechanisms: {
      description: 'A operacionalização do Framework FISP articula supervisão direta e instrumentos concorrenciais:',
      stages: [
        {
          step: '1',
          title: 'Plataforma SupTech de Telemetria Contínua',
          description: 'Substituição de relatórios estáticos atrasados por canais automatizados via API entre instituições e a autoridade monetária.'
        },
        {
          step: '2',
          title: 'Portabilidade Aberta de Histórico de Crédito',
          description: 'Transferência da reputação financeira do cliente de forma transparente, permitindo que cooperativas e fintechs ofereçam taxas competitivas.'
        },
        {
          step: '3',
          title: 'Trava Regulatória de Crédito de Alto Risco',
          description: 'Bloqueio sistêmico de linhas de crédito automáticas pré-aprovadas para usuários em vulnerabilidade e veto a operações para jogos de azar.'
        }
      ]
    },

    governance: {
      governanceSummary: 'Liderança do Banco Central do Brasil, Conselho Monetário Nacional (CMN), CVM, Senacon, com participação do FMI, BIS e cooperativas de crédito.',
      stakeholders: ['Banco Central do Brasil', 'CMN', 'CVM', 'Senacon', 'FMI', 'BIS', 'Cooperativas (Sicredi/Sicoob)'],
      timeline: [
        { period: '2026–2027', phaseName: 'Fase 1: Proteção Imediata', actions: 'Modernização com SupTech e IA, tetos de juros rotativos, veto a crédito para apostas e expansão do Open Finance.' },
        { period: '2027–2028', phaseName: 'Fase 2: Fomento Regional', actions: 'Incentivo regulatório a cooperativas de crédito, auditoria de algoritmos de risco e integração de moedas sociais ao PIX/Drex.' },
        { period: '2028–2030', phaseName: 'Fase 3: Consolidação Global', actions: 'Cruzamento internacional contra offshores, colchões anticrise globais e indicadores de solidez centrados na renda familiar.' }
      ]
    },

    kpis: {
      table: [
        { indicator: 'Desconcentração Bancária (Índice HHI no crédito)', meta2028_2029: 'HHI ≤ 1.750 pontos', meta2030: 'HHI < 1.500 pontos (mercado desconcentrado)' },
        { indicator: 'Spread bancário para MPMEs', meta2028_2029: 'Redução de 20% frente a 2025', meta2030: 'Redução de pelo menos 35% nos spreads médios' },
        { indicator: 'Comprometimento de renda com dívidas não habitacionais', meta2028_2029: '≤ 25% da renda familiar', meta2030: '≤ 20% da renda das famílias vulneráveis' },
        { indicator: 'Participação das cooperativas de crédito na carteira nacional', meta2028_2029: '≥ 18% do total de crédito', meta2030: '≥ 25% da carteira de crédito produtivo' }
      ]
    },

    riskManagement: [
      { risk: 'Restrição Excessiva de Crédito', mitigation: 'Aplicação de regulação proporcional e modular conforme o porte e perfil de risco de cada instituição financeira.' },
      { risk: 'Falhas Tecnológicas e Alucinações em Modelos de IA', mitigation: 'Obrigatoriedade de supervisão humana permanente e validação em ambientes controlados de sandbox.' },
      { risk: 'Fuga de Capitais para Jurisdições Opacas', mitigation: 'Articulação em blocos multilaterais (G20 e BRICS) para imposição de normas globais uniformes de transparência fiscal.' }
    ],

    conclusion: 'O Framework FISP alinha a regulação prudencial à justiça distributiva. Ao coibir práticas predatórias, promover o cooperativismo, fiscalizar em tempo real e democratizar o crédito produtivo, o sistema financeiro torna-se o alicerce para a redução sustentável das desigualdades.',
    sources: [
      'Ipea — Cadernos ODS: Objetivo 10 — Reduzir a Desigualdade Dentro dos Países e Entre Eles',
      'International Monetary Fund (IMF) — Financial Soundness Indicators (FSIs) Specification',
      'UNCTAD — DGFF2016 SDG Goal 10.5: Financial Markets & Institutions Regulation',
      'Banco Central do Brasil — Autonomia, Inclusão Financeira, Estabilidade e Redução da Desigualdade',
      'Ipea / Unicamp — Basileia III: Concepção e Implementação no Brasil'
    ]
  },
  {
    id: '10.6',
    numberLabel: 'Meta 10.6',
    officialTitle: 'Voz e Representação do Sul Global nas Instituições Econômicas Mundiais',
    solutionName: 'Framework VOICE (Voice, Opportunity, Inclusion & Climate Equity)',
    subtitle: 'Proposta para reforma da governança financeira global, paridade decisória, desdolarização parcial e justiça climática.',
    scope: 'Global / Multilateral',
    category: ['global', 'financas_comercio'],
    badgeColor: 'violet',
    icon: 'Globe2',

    officialTargetText: 'Assegurar uma representação e voz mais forte dos países em desenvolvimento na tomada de decisões nas instituições econômicas e financeiras internacionais globais.',
    officialIndicator: 'Indicador 10.6.1 — Proporção de membros e direitos de voto pertencentes a países em desenvolvimento em organizações financeiras internacionais.',

    executiveSummary: 'A presente proposta técnica estrutura o Framework VOICE para atender à Meta 10.6 do ODS 10. Apesar de congregarem mais de 80% da população mundial e 75% dos membros do FMI e Banco Mundial, os países do Sul Global detêm historicamente menos de 40% do poder de voto, sofrem com sobretaxas punitivas de juros e arcam com custos desproporcionais de financiamento para transição climática. O Framework VOICE articula cinco pilares de reforma estrutural para instituir paridade e autonomia.',

    normativeFramework: [
      'Relatórios da UNCTAD sobre Governança Multilateral e Financiamento Sustentável',
      'Declarações e Posicionamentos do G20 sob Presidências de Países Emergentes (Brasil, África do Sul, Índia)',
      'Iniciativa de Bridgetown para Reforma da Arquitetura Financeira Internacional',
      'Estatutos e Revisões Gerais de Cotas do FMI e Grupo Banco Mundial'
    ],

    diagnosis: {
      overview: 'A governança econômica global padece de assimetrias históricas que enfraquecem as economias emergentes:',
      bulletPoints: [
        {
          title: 'Sub-representação Estrutural nos Votos',
          text: 'O Sul Global detém apenas cerca de 37% dos votos no FMI e 39% no Banco Mundial, permanecendo minoritário em todas as decisões estratégicas (OCDE, 2025).'
        },
        {
          title: 'Poder de Veto Concentrado',
          text: 'A exigência de 85% de aprovação para emendas fundamentais no FMI confere poder de veto unilateral exclusivo aos EUA (~16,5% dos votos), bloqueando reformas de cotas.'
        },
        {
          title: 'Sobretaxas Punitivas (IMF Surcharges)',
          text: 'Cobrança de tarifas adicionais sobre empréstimos de médio/longo prazo a nações endividadas, drenando bilhões de dólares que deveriam financiar saúde, educação e clima.'
        },
        {
          title: 'Custo Excessivo do Financiamento Climático',
          text: 'Países em desenvolvimento pagam spreads proibitivos para financiar a transição energética e enfrentam crises severas de solvência após desastres climáticos.'
        }
      ],
      keyStats: [
        { value: '≥ 50%', label: 'Poder de Voto do Sul Global (Paridade Decisória)', source: 'Meta 2030' },
        { value: '≥ 50%', label: 'Desembolsos dos MDBs em Moedas Locais', source: 'Meta 2030' },
        { value: '> US$ 30 bi', label: 'Recursos Poupados com Fim de Sobretaxas', source: 'Meta 2030' },
        { value: '3 assentos', label: 'Assentos Regionais Plenos no FSB e Basileia', source: 'Meta 2030' }
      ]
    },

    pillars: [
      {
        number: 1,
        title: 'Cotas Justas e Fim de Sobretaxas no FMI e Banco Mundial',
        summary: 'Revisão das fórmulas de cotas com base no PIB em PPC e população (> 50% dos votos ao Sul Global), ampliação dos Votos Básicos de 5,5% para 20% e extinção definitiva de sobretaxas.'
      },
      {
        number: 2,
        title: 'Fortalecimento de Bancos Regionais e Moedas Locais',
        summary: 'Expansão do NDB (Banco dos BRICS), desdolarização parcial com 30% a 50% dos financiamentos em moedas nacionais e fortalecimento de redes como CRA e FLAR.'
      },
      {
        number: 3,
        title: 'Otimização dos Bancos Multilaterais de Desenvolvimento (MDBs)',
        summary: 'Implementação do Marco CAF do G20, liberando até US$ 1 trilhão em crédito sem aportes adicionais, e canalização direta de Direitos Especiais de Saque (SDRs) ociosos.'
      },
      {
        number: 4,
        title: 'Justiça Climática e Alívio de Dívidas (Iniciativa de Bridgetown)',
        summary: 'Cláusulas de Suspensão de Dívida em Desastres Climáticos (CRDC) por até 2 anos e criação de mecanismo transparente de reestruturação sob a ONU.'
      },
      {
        number: 5,
        title: 'Democratização dos Fóruns Normativos e Fiscais Globais',
        summary: 'Transferência da governança tributária global da OCDE para a Convenção Tributária da ONU ("um país, um voto") e assentos no FSB e Comitê de Basileia para blocos regionais.'
      }
    ],

    operationalMechanisms: {
      description: 'Comparativo estrutural entre a governança tradicional e o Framework VOICE:',
      comparisons: [
        {
          dimension: 'Poder de Voto',
          currentModel: 'Maioria concentrada nos países do G7 (~58% dos votos)',
          proposedModel: 'Representação superior a 50% para o Sul Global com base em PPC e população'
        },
        {
          dimension: 'Poder de Veto',
          currentModel: 'Quórum de 85% (veto unilateral exclusivo dos EUA com ~16,5%)',
          proposedModel: 'Redução do quórum para 75%, extinguindo vetos unilaterais'
        },
        {
          dimension: 'Condicionalidades',
          currentModel: 'Austeridade fiscal cega e cortes em despesas sociais',
          proposedModel: 'Compromissos alinhados ao desenvolvimento sustentável e metas sociais'
        },
        {
          dimension: 'Moeda dos Empréstimos',
          currentModel: 'Hegemonia absoluta do dólar e euro gerando risco cambial severo',
          proposedModel: 'Emissão de 30% a 50% das operações em moedas locais e regionais'
        },
        {
          dimension: 'Governança Fiscal',
          currentModel: 'Decisões concentradas em clubes fechados de países ricos (OCDE)',
          proposedModel: 'Fórum universal, paritário e transparente na ONU (um país, um voto)'
        }
      ]
    },

    governance: {
      governanceSummary: 'Articulação entre Assembleia Geral da ONU, G20, BRICS, G77+China, NDB, Bancos Regionais de Desenvolvimento e Ministérios da Fazenda e Relações Exteriores.',
      stakeholders: ['ONU / UNCTAD', 'G20', 'BRICS', 'G77 + China', 'NDB', 'FMI', 'Banco Mundial', 'União Africana / CELAC'],
      timeline: [
        { period: '2026–2027', phaseName: 'Fase 1: Alívio Imediato', actions: 'Extinção das sobretaxas do FMI, inserção de cláusulas CRDC e repasse de US$ 100 bi em SDRs para bancos regionais.' },
        { period: '2027–2028', phaseName: 'Fase 2: Reforma e Desconcentração', actions: '17ª Revisão Geral de Cotas com fórmula em PPC, 40% de emissões em moeda local no NDB e início da Convenção Tributária da ONU.' },
        { period: '2028–2030', phaseName: 'Fase 3: Paridade Global', actions: 'Extinção de vetos unilaterais, ampliação dos Votos Básicos, assentos no FSB e consolidação do Fundo de Perdas e Danos Climáticos.' }
      ]
    },

    kpis: {
      table: [
        { indicator: 'Participação nos votos do Sul Global (Indicador 10.6.1)', meta2028_2029: '≥ 45% dos votos em FMI/Banco Mundial', meta2030: '≥ 50% dos votos totais (paridade decisória)' },
        { indicator: 'Proporção de contratos em moeda local nos MDBs', meta2028_2029: '≥ 30% da carteira ativa', meta2030: '≥ 50% do total de desembolsos' },
        { indicator: 'Recursos fiscais liberados por fim de sobretaxas e pausas', meta2028_2029: 'US$ 15 bilhões poupados', meta2030: '> US$ 30 bilhões reinvestidos em saúde/educação' },
        { indicator: 'Assentos de blocos regionais no FSB e Basileia', meta2028_2029: '3 assentos regionais plenos', meta2030: 'Representação formal paritária de todos os continentes' }
      ]
    },

    riskManagement: [
      { risk: 'Bloqueio Político por Países Avançados', mitigation: 'Articulação coordenada da bancada de países emergentes no G20, BRICS e Grupo dos 77 (G77 + China).' },
      { risk: 'Volatilidade Cambial em Moedas Locais', mitigation: 'Utilização de fundos de hedge cambial subsidiados e acordos de swap cambial entre bancos centrais.' }
    ],

    conclusion: 'O Framework VOICE estabelece as bases indispensáveis para democratizar a governança da economia mundial. Ao garantir voz paritária ao Sul Global, desarmar armadilhas de endividamento abusivo e promover o financiamento climático justo, a proposta cumpre integralmente a Meta 10.6.',
    sources: [
      'Ipea — Cadernos ODS: Objetivo 10 — Reduzir a Desigualdade Dentro dos Países e Entre Eles',
      'UNCTAD — DGFF2016 SDG Goal 10.6: Participation in International Financial Institutions',
      'OECD — Global Outlook on Financing for Sustainable Development (Multilateral Governance)',
      'Bretton Woods Project — IMF Quota Review & Putting Climate at the Core of Reform',
      'CEBRI — O G20 Brasileiro e a Reforma dos Bancos Multilaterais de Desenvolvimento'
    ]
  },
  {
    id: '10.7',
    numberLabel: 'Meta 10.7',
    officialTitle: 'Migração Segura, Ordenada, Regular e Responsável',
    solutionName: 'Projeto Rede Acolher',
    subtitle: 'Sistema integrado de atendimento, regularização documental e inclusão social para pessoas migrantes, refugiadas e apátridas.',
    scope: 'Municipal & Nacional',
    category: ['nacional', 'direitos_inclusao'],
    badgeColor: 'teal',
    icon: 'HeartHandshake',

    officialTargetText: 'Facilitar a migração e a mobilidade ordenada, segura, regular e responsável de pessoas, inclusive por meio da implementação de políticas de migração planejadas e bem geridas.',
    officialIndicator: 'Indicador 10.7.1 (Custo de recrutamento) & Indicador 10.7.2 (Número de países que implementam políticas migratórias bem geridas).',

    executiveSummary: 'A presente proposta técnica detalha o Projeto Rede Acolher, desenvolvido para viabilizar a implementação da Meta 10.7 do ODS 10 no contexto municipal e nacional. O projeto estrutura uma rede integrada de atendimento presencial e digital para acolher migrantes, refugiados e apátridas, concentrando serviços de regularização documental, intermediação de empregos, cursos de português, matrícula escolar, saúde, assistência social e proteção jurídica.',

    normativeFramework: [
      'Decreto Federal nº 12.657, de 7 de outubro de 2025 — Institui a Política Nacional de Migrações, Refúgio e Apatridia (PNMRA)',
      'Lei de Migração (Lei nº 13.445/2017) — Princípios de acolhimento e não criminalização',
      'Pacto Global para Migração Segura, Ordenada e Regular da ONU',
      'Convenção de Genebra de 1951 relativa ao Estatuto dos Refugiados'
    ],

    diagnosis: {
      overview: 'Ao ingressar e se fixar em um novo território, a população migrante depara-se com entraves severos:',
      bulletPoints: [
        {
          title: 'Desinformação e Barreiras Burocráticas',
          text: 'Dificuldades no acesso a orientações claras sobre trâmites de regularização migratória, emissão de CPF, carteira de trabalho e documentação civil básica.'
        },
        {
          title: 'Barreiras Linguísticas e Educacionais',
          text: 'Desconhecimento da língua portuguesa que obstaculiza o acesso a serviços públicos de saúde, matrículas escolares e integração comunitária.'
        },
        {
          title: 'Vulnerabilidade e Exploração Trabalhista',
          text: 'Inserção desprotegida na informalidade, sujeição a jornadas abusivas, fraudes trabalhistas e riscos de tráfico de pessoas decorrentes da falta de assistência jurídica.'
        },
        {
          title: 'Fragmentação no Atendimento Público',
          text: 'Falta de integração entre secretarias municipais (Saúde, Educação, Assistência Social), gerando atendimentos redundantes ou omissões no acolhimento.'
        }
      ],
      keyStats: [
        { value: '1.000', label: 'Migrantes e Refugiados Atendidos no Piloto/ano', source: 'Projeto Piloto' },
        { value: '700', label: 'Pessoas Orientadas e com Documentos Emitidos', source: 'Meta 12 meses' },
        { value: '300', label: 'Encaminhamentos Efetivos para Emprego Formal', source: 'Meta 12 meses' },
        { value: '≥ 80%', label: 'Índice de Satisfação dos Usuários Atendidos', source: 'Meta 12 meses' }
      ]
    },

    pillars: [
      {
        number: 1,
        title: 'Centros Municipais de Acolhimento e Integração',
        summary: 'Espaços físicos integrados onde equipes multidisciplinares prestam atendimento presencial humanizado e realizam a triagem individual das demandas.'
      },
      {
        number: 2,
        title: 'Plataforma Digital Acolher',
        summary: 'Sistema web e aplicativo móvel multilíngue para pré-cadastro, agendamento de atendimentos, emissão de alertas e prontuário de acolhimento.'
      },
      {
        number: 3,
        title: 'Rede Integrada de Serviços Especializados',
        summary: 'Matriz articulada cobrindo as 10 necessidades essenciais: documentação, trabalho, idioma, educação, saúde, assistência social, moradia, direitos, capacitação e cultura.'
      }
    ],

    operationalMechanisms: {
      description: 'Matriz integrada de serviços especializados para atender as 10 necessidades vitais do cidadão migrante:',
      customServicesTable: [
        { need: 'Documentação', service: 'Orientação jurídica e encaminhamento célere para regularização migratória e documentos civis (CPF, CTPS).' },
        { need: 'Emprego e Renda', service: 'Cadastro em banco de talentos profissional, oficinas de elaboração de currículos e encaminhamento a vagas formais.' },
        { need: 'Idioma', service: 'Oferta contínua de cursos gratuitos de língua portuguesa em horários flexíveis.' },
        { need: 'Educação', service: 'Orientação e garantia de matrícula de crianças, jovens e adultos na rede pública de ensino.' },
        { need: 'Saúde', service: 'Cadastramento no SUS, atendimento médico, vacinação e suporte de saúde mental.' },
        { need: 'Assistência Social', service: 'Inscrição no Cadastro Único e concessão de benefícios emergenciais e acompanhamento no CRAS/CREAS.' },
        { need: 'Moradia', service: 'Informações sobre programas habitacionais sociais, aluguel social e acolhimento institucional temporário.' },
        { need: 'Proteção e Direitos', service: 'Acompanhamento perante Defensorias Públicas contra exploração e trabalho análogo à escravidão.' },
        { need: 'Capacitação Profissional', service: 'Cursos técnicos profissionalizantes e oficinas práticas em parceria com instituições de ensino.' },
        { need: 'Informação e Cultura', service: 'Disponibilização de materiais multilíngues e realização de feiras e atividades interculturais.' }
      ],
      budgetPlan: [
        { item: 'Adequação e sinalização do espaço físico', cost: 'R$ 20.000' },
        { item: 'Computadores, rede e equipamentos', cost: 'R$ 15.000' },
        { item: 'Desenvolvimento e adaptação da plataforma digital multilíngue', cost: 'R$ 25.000' },
        { item: 'Materiais informativos, cartilhas e traduções', cost: 'R$ 8.000' },
        { item: 'Capacitação continuada da equipe de atendimento', cost: 'R$ 7.000' },
        { item: 'Campanhas públicas de divulgação e mobilização', cost: 'R$ 5.000' },
        { item: 'Recursos para oficinas, cursos e eventos culturais', cost: 'R$ 10.000' },
        { item: 'Reserva técnica operacional', cost: 'R$ 10.000' },
        { item: 'TOTAL ESTIMADO DO PROJETO-PILOTO MUNICIPAL', cost: 'R$ 100.000' }
      ]
    },

    governance: {
      governanceSummary: 'Comitê intersecretarial municipal (Assistência Social, Saúde, Educação, Desenvolvimento Econômico e Direitos Humanos) com Defensoria Pública, OIM/ACNUR e OSCs.',
      stakeholders: ['Prefeituras Municipais', 'Ministério da Justiça (PNMRA)', 'ACNUR / OIM', 'Defensoria Pública da União', 'CRAS / CREAS', 'Associações de Migrantes'],
      timeline: [
        { period: '1º–2º mês', phaseName: '1. Diagnóstico', actions: 'Levantamento do contingente migrante, mapeamento de demandas e diagnóstico de serviços existentes.' },
        { period: '3º–4º mês', phaseName: '2. Estruturação', actions: 'Adaptação do espaço físico, capacitação de equipe e desenvolvimento da plataforma digital.' },
        { period: '5º–8º mês', phaseName: '3. Projeto-Piloto', actions: 'Início dos atendimentos integrados, cursos de português e encaminhamentos a empresas parceiras.' },
        { period: '9º–12º mês', phaseName: '4. Expansão', actions: 'Avaliação dos indicadores de satisfação, ajustes operacionais e expansão para novos polos.' }
      ]
    },

    kpis: {
      table: [
        { indicator: 'Pessoas migrantes e refugiadas atendidas', meta2028_2029: '≥ 2.500 pessoas/ano', meta2030: '1.000 pessoas no piloto (expansão contínua)' },
        { indicator: 'Pessoas orientadas e encaminhadas para documentação', meta2028_2029: '≥ 80% dos atendidos', meta2030: '700 pessoas no primeiro ano' },
        { indicator: 'Pessoas encaminhadas para postos formais de trabalho', meta2028_2029: '≥ 40% dos aptos', meta2030: '300 pessoas no primeiro ano' },
        { indicator: 'Matrículas ativas em cursos gratuitos de português', meta2028_2029: '≥ 500 alunos', meta2030: '250 alunos no piloto' },
        { indicator: 'Casos de violação de direitos com acolhimento formal', meta2028_2029: '100% dos casos', meta2030: '100% dos casos registrados' }
      ]
    },

    riskManagement: [
      { risk: 'Restrição de Recursos Orçamentários', mitigation: 'Captação de fundos em editais de direitos humanos, cooperação internacional (ACNUR/OIM) e parcerias público-privadas.' },
      { risk: 'Barreiras Linguísticas e de Comunicação', mitigation: 'Atendimento presencial com mediadores culturais multilíngues e aplicativo móvel traduzido.' },
      { risk: 'Baixo Engajamento Inicial das Empresas', mitigation: 'Campanhas de sensibilização empresarial sobre responsabilidade social e diversidade produtiva.' },
      { risk: 'Preconceito e Xenofobia Local', mitigation: 'Palestras educativas em escolas públicas e realização de feiras e eventos culturais comunitários.' }
    ],

    conclusion: 'A Rede Acolher concretiza a Meta 10.7 ao demonstrar que a governança migratória sustentável depende da integração de serviços, da garantia documental e da criação de oportunidades reais de trabalho e estudo, protegendo a dignidade de quem migra e gerando coesão social.',
    sources: [
      'United Nations — Sustainable Development Goal 10: Reduced Inequalities',
      'Nações Unidas Brasil — Objetivo de Desenvolvimento Sustentável 10: Redução das Desigualdades',
      'United Nations — SDG Indicators Metadata: Target 10.7 (Safe, Orderly Migration)',
      'Ministério da Justiça e Segurança Pública — Diretrizes da PNMRA (Decreto nº 12.657/2025)',
      'ACNUR Brasil — Diretrizes para Integração Local de Refugiados'
    ]
  },
  {
    id: '10.a',
    numberLabel: 'Meta 10.a',
    officialTitle: 'Tratamento Especial e Diferenciado no Comércio Internacional',
    solutionName: 'Proposta Técnica de Reforma Normativa e Convergência Comercial na OMC',
    subtitle: 'Estratégia para modernização dos critérios de elegibilidade, transição suave de PMDs, capacitação digital e fomento à cooperação Sul-Sul.',
    scope: 'Global / Multilateral',
    category: ['global', 'financas_comercio'],
    badgeColor: 'blue',
    icon: 'Ship',

    officialTargetText: 'Implementar o princípio do tratamento especial e diferenciado (SDT) para países em desenvolvimento, em particular os países menos desenvolvidos, em conformidade com os acordos da Organização Mundial do Comércio.',
    officialIndicator: 'Indicador 10.a.1 — Proporção de linhas tarifárias aplicadas a importações de países em desenvolvimento com tarifa zero.',

    executiveSummary: 'A presente proposta aborda a implementação da Meta 10.a do ODS 10. O diagnóstico atual revela estagnação crítica: o crescimento per capita nos Países Menos Desenvolvidos (PMDs) limitou-se a 1% em 2024, enquanto sua participação no comércio global de serviços permanece abaixo de 1%. A estratégia estrutura-se em quatro pilares: reforma dos critérios de elegibilidade por necessidade demonstrável, transição suave (smooth transition) para graduados, facilitação de comércio digital e fortalecimento das cadeias regionais Sul-Sul.',

    normativeFramework: [
      'Cláusula de Habilitação (GATT/OMC, 1979) — Base jurídica do tratamento preferencial não recíproco',
      'Acordo sobre Facilitação de Comércio (TFA, Seção II) e Acordo sobre Agricultura',
      'Decisão Ministerial MC13 (2024) sobre o Suporte à Transição de PMDs Graduados',
      'Declaração de Maputo (MC14, Março de 2026) — Reafirmação do SDT como pilar multilateral'
    ],

    diagnosis: {
      overview: 'A análise dos indicadores comerciais de 2025 e 2026 demonstra a urgência de modernização do sistema:',
      bulletPoints: [
        {
          title: 'Estagnação Produtiva e Pobreza',
          text: 'O crescimento per capita nos PMDs foi de apenas 1% em 2024 (UNCTAD), com produtividade média 11 vezes inferior à dos países desenvolvidos e mais de 30% dos trabalhadores na extrema pobreza.'
        },
        {
          title: 'Marginalização nos Serviços e Hiato Digital',
          text: 'Menos de 1% das exportações globais de serviços provêm dos PMDs, evidenciando grave exclusão tecnológica.'
        },
        {
          title: 'Concentração de Ganhos e Efeito Precipício',
          text: 'Apenas 5 economias em desenvolvimento concentram a maioria dos ganhos do Sul Global; países que se graduam sofrem perda abrupta de tarifas preferenciais.'
        },
        {
          title: 'Janela de Oportunidade 2025–2026',
          text: 'A renúncia da China ao SDT em futuras negociações (2025) e a articulação Brasil-China no Conselho Geral da OMC abriram espaço para critérios objetivos.'
        }
      ],
      keyStats: [
        { value: '2,0%', label: 'Participação dos PMDs no Comércio Global (Meta 2030)', source: 'Meta 2030' },
        { value: '100%', label: 'Sucesso na Graduação de PMDs sem Recessão', source: 'Meta 2030' },
        { value: '-50%', label: 'Redução de Custos e Prazos Aduaneiros nos PMDs', source: 'Meta 2030' },
        { value: 'US$ 2,5 bi', label: 'Recursos Desembolsados pelo Fundo FMCCD', source: 'Meta 2030' }
      ]
    },

    pillars: [
      {
        number: 1,
        title: 'Reforma dos Critérios de Elegibilidade',
        summary: 'Substituição da autodeclaração por um Indicador Composto de Vulnerabilidade Comercial (ponderando PIB per capita, IDH, comércio e capacidade institucional) em 4 faixas escalonadas.'
      },
      {
        number: 2,
        title: 'Mecanismo de Transição Suave (Smooth Transition)',
        summary: 'Implementação da Decisão MC13, mantendo preferências por 3 anos pós-graduação com Janela de Acesso Graduado (desmame de 25%/ano) e salvaguardas climáticas.'
      },
      {
        number: 3,
        title: 'Assistência Técnica Digital e Facilitação de Comércio',
        summary: 'Criação do Fundo Multilateral de Capacitação Comercial Digital (FMCCD) de US$ 500 mi/ano para Single Window aduaneira e laboratórios de conformidade SPS/TBT.'
      },
      {
        number: 4,
        title: 'Cooperação Sul-Sul e Cadeias Regionais de Valor',
        summary: 'Revitalização do SGPC e Zonas de Facilitação Sul-Sul (ZFSS) inspiradas no paradigma do Acordo de Livre Comércio Continental Africano (AfCFTA).'
      }
    ],

    operationalMechanisms: {
      description: 'Mecanismos operacionais com foco na flexibilidade assimétrica e digitalização aduaneira:',
      stages: [
        {
          step: '1',
          title: 'Indicador Composto de Vulnerabilidade',
          description: 'Classificação objetiva em 4 faixas: PMD, País em Desenvolvimento em Transição, País Avançado e Desenvolvido, eliminando o free-riding.'
        },
        {
          step: '2',
          title: 'Janela de Acesso Graduado',
          description: 'Transição tarifária escalonada ao longo de 4 anos pós-graduação para evitar choques na balança de pagamentos.'
        },
        {
          step: '3',
          title: 'Single Window Digital nos Portos e Fronteiras',
          description: 'Padronização eletrônica de despachos aduaneiros financiada pelo Fundo FMCCD para reduzir tempos em até 50%.'
        }
      ]
    },

    governance: {
      governanceSummary: 'Comitê de Comércio e Desenvolvimento da OMC, UNCTAD, Banco Mundial, Comitê de Políticas de Desenvolvimento da ONU (CDP), e blocos regionais (União Africana, Mercosul, ASEAN).',
      stakeholders: ['OMC', 'UNCTAD', 'Banco Mundial', 'CDP / ONU', 'União Africana', 'Mercosul', 'ASEAN'],
      timeline: [
        { period: '2026–2027', phaseName: 'Fase 1', actions: 'Negociação dos critérios de necessidade demonstrável e ratificação formal na MC15 da OMC.' },
        { period: '2027–2028', phaseName: 'Fase 2', actions: 'Operacionalização do Fundo FMCCD e implementação da Janela de Acesso Graduado para novos graduados.' },
        { period: '2028–2030', phaseName: 'Fase 3', actions: 'Expansão das Zonas de Facilitação Sul-Sul e balanço da participação no comércio global.' }
      ]
    },

    kpis: {
      table: [
        { indicator: 'Participação dos PMDs no comércio mundial de mercadorias e serviços', meta2028_2029: 'Elevação para 1,5%', meta2030: 'Alcançar 2,0% do comércio global' },
        { indicator: 'Índice de sucesso na graduação de PMDs (sem recessão pós-graduação)', meta2028_2029: '100% dos graduados', meta2030: '100% com crescimento sustentado em 3 anos' },
        { indicator: 'Redução no tempo médio de liberação aduaneira nos PMDs', meta2028_2029: 'Redução de 30% no tempo', meta2030: 'Redução de 50% nos custos e prazos' },
        { indicator: 'Volume de recursos desembolsados pelo Fundo FMCCD', meta2028_2029: 'US$ 1 bilhão acumulado', meta2030: 'US$ 2,5 bilhões aplicados em infraestrutura' }
      ]
    },

    caseStudy: {
      title: 'Estudo de Caso — O Modelo AfCFTA',
      description: 'O Acordo de Livre Comércio Continental Africano (AfCFTA) prevê a eliminação de 90% das tarifas com prazos diferenciados (10 anos para PMDs versus 5 anos para os demais). O modelo comprova que a flexibilidade assimétrica é indispensável para a integração de economias desiguais.'
    },

    riskManagement: [
      { risk: 'Impasse Negocial na OMC', mitigation: 'Construção de acordos plurilaterais com adesão aberta caso o consenso estrito enfrente morosidade.' },
      { risk: 'Vulnerabilidade Pós-Graduação', mitigation: 'Aplicação compulsória do mecanismo de transição suave e salvaguardas econômicas emergenciais.' }
    ],

    conclusion: 'A Meta 10.a não representa caridade comercial, mas justiça econômica internacional. Ao substituir a autodeclaração arbitrária por critérios objetivos, blindar graduados contra choques de renda e fomentar a infraestrutura digital e a integração Sul-Sul, o comércio multilateral passa a operar como redutor das desigualdades globais.',
    sources: [
      'ONU — Agenda 2030 para o Desenvolvimento Sustentável: Meta 10.a',
      'OMC — Special and Differential Treatment Provisions (WT/COMTD/W/273)',
      'UNCTAD — The Least Developed Countries Report 2025',
      'OMC — MC13 LDC Graduation Decision (2024) e MC14 Maputo Declaration (2026)',
      'FGV / IBRE — Cenários do Comércio Exterior para Economias em Desenvolvimento'
    ]
  },
  {
    id: '10.b',
    numberLabel: 'Meta 10.b',
    officialTitle: 'Assistência Oficial ao Desenvolvimento e Fluxos Financeiros para Países Vulneráveis',
    solutionName: 'Plano Estratégico de Financiamento Concessional, Desriscamento e Soberania Nacional',
    subtitle: 'Direcionamento de fluxos financeiros, IED e assistência técnica para Estados com necessidades agudas em conformidade com seus planos nacionais.',
    scope: 'Global / Multilateral',
    category: ['global', 'financas_comercio'],
    badgeColor: 'cyan',
    icon: 'Coins',

    officialTargetText: 'Incentivar a assistência oficial ao desenvolvimento e fluxos financeiros, incluindo o investimento externo direto, para os Estados onde a necessidade é maior, em particular os países menos desenvolvidos, africanos, pequenos Estados insulares e países sem litoral, de acordo com seus planos e programas nacionais.',
    officialIndicator: 'Indicador 10.b.1 — Fluxos totais de recursos oficiais para o desenvolvimento (AOD, OOF e doações).',

    executiveSummary: 'A presente proposta técnica formula o Plano Estratégico de Financiamento Concessional, Desriscamento e Soberania Nacional para a Meta 10.b do ODS 10. O plano aborda a escassez crônica de liquidez e a assimetria na atração de capital privado, instituindo fundos de desriscamento multilateral (de-risking), conversão de dívida por preservação climática e social, e alinhamento obrigatório aos planos soberanos de cada país.',

    normativeFramework: [
      'Compromisso do Comitê de Assistência ao Desenvolvimento da OCDE (CAD/OCDE — meta de 0,7% do RNB)',
      'Agenda 2063 da União Africana e Programa de Ação de Doha para os LDCs',
      'Diretrizes de Financiamento Sustentável do PNUD e Banco Mundial',
      'Declarações da Conferência de Financiamento para o Desenvolvimento (FfD4)'
    ],

    diagnosis: {
      overview: 'As restrições de financiamento nos países mais vulneráveis decorrem de gargalos estruturais severos:',
      bulletPoints: [
        {
          title: 'Concentração Global do Investimento Estrangeiro',
          text: 'Menos de 3% de todo o Investimento Externo Direto (IED) global tem como destino os Países Menos Desenvolvidos e Pequenos Estados Insulares.'
        },
        {
          title: 'Prêmio de Risco Proibitivo',
          text: 'Taxas de juros de mercado e percepções de risco país inviabilizam obras de saneamento, eletrificação renovável e transporte onde a necessidade social é máxima.'
        },
        {
          title: 'Sobrecarga do Endividamento Externo',
          text: 'Empréstimos não concessionais passados consomem até 40% das receitas tributárias de países africanos e insulares no pagamento do serviço da dívida.'
        },
        {
          title: 'Condicionalidades Desalinhadas',
          text: 'Histórico de condicionalidades externas de austeridade que desrespeitam os Planos Nacionais de Desenvolvimento e enfraquecem saúde e educação locais.'
        }
      ],
      keyStats: [
        { value: '0,7% RNB', label: 'Meta Histórica de AOD pelos Doadores do CAD', source: 'Meta 2030' },
        { value: 'US$ 5 : 1', label: 'Alavancagem Privada por Dólar Público em Blended Finance', source: 'Meta 2030' },
        { value: '> US$ 50 bi', label: 'Alívio da Dívida via Swaps Climáticos/Sociais', source: 'Meta 2030' },
        { value: '100%', label: 'Projetos Conduzidos por Planos Nacionais Soberanos', source: 'Meta 2030' }
      ]
    },

    pillars: [
      {
        number: 1,
        title: 'Assistência Oficial ao Desenvolvimento (AOD) Concessional',
        summary: 'Compromisso com elevação de doações puras e empréstimos em condições altamente favorecidas (prazos estendidos e taxas nominais/nulas), impedindo o superendividamento.'
      },
      {
        number: 2,
        title: 'Mobilização de Investimento Externo Direto (IED) Sustentável',
        summary: 'Estruturação de Blended Finance para mobilizar fundos de pensão e fundos soberanos para energias limpas, conectividade digital, saneamento e indústria local.'
      },
      {
        number: 3,
        title: 'Alinhamento Estrito aos Planos e Prioridades Nacionais',
        summary: 'Respeito à soberania nacional, assegurando que todo projeto seja desenhado, liderado e executado em conformidade com o Plano Nacional de Desenvolvimento local.'
      },
      {
        number: 4,
        title: 'Focalização Geoestrutural nos Grupos Mais Vulneráveis',
        summary: 'Discriminação positiva no sistema financeiro internacional direcionada a LDCs, Países Africanos, SIDS (pequenas ilhas) e LLDCs (sem litoral).'
      }
    ],

    operationalMechanisms: {
      description: 'Quatro soluções estratégicas e operacionais essenciais:',
      coreSolutions: [
        'Mecanismo Global de Desriscamento (De-risking Frameworks): Fundos multilaterais de garantia contra riscos não comerciais respaldados pelo G20.',
        'Conversão de Dívida por Ação Climática e Social (Debt-for-Climate Swaps): Troca de amortizações de dívida externa por compromissos locais em moeda nacional para transição e reflorestamento.',
        'Reformulação das Condicionalidades dos Bancos Multilaterais: Expansão do poder de voto dos países tomadores e eliminação de austeridade cega em empréstimos de emergência.',
        'Parcerias de Transferência Tecnológica e Capacitação: Cláusulas contratuais obrigatórias de transferência de tecnologia e capacitação de mão de obra local.'
      ],
      stages: [
        { step: '1', title: 'Diagnóstico e Plano Nacional', description: 'Mapeamento de lacunas de infraestrutura e estruturação soberana da carteira de projetos.' },
        { step: '2', title: 'Estruturação Financeira Mista', description: 'Absorção de primeiras perdas (first-loss capital) por bancos multilaterais para viabilizar capital privado.' },
        { step: '3', title: 'Desembolso com Governança Local', description: 'Liberação vinculada a compras públicas locais e geração de empregos na comunidade receptora.' },
        { step: '4', title: 'Avaliação de Impacto Independente', description: 'Auditoria de impacto socioeconômico na erradicação da pobreza e conservação ambiental.' }
      ]
    },

    governance: {
      governanceSummary: 'Articulação entre OCDE/CAD, Nações Unidas (FfD), União Africana, Bancos Regionais de Desenvolvimento (AfDB, NDB, IDB) e Ministérios de Planejamento dos países receptores.',
      stakeholders: ['OCDE / CAD', 'ONU / FfD', 'União Africana', 'AfDB', 'Banco Mundial', 'Governos dos Países Receptores'],
      timeline: [
        { period: '2026–2027', actions: 'Lançamento dos fundos de garantia multilaterais de desriscamento e primeiros contratos de Debt-for-Climate Swaps.' },
        { period: '2027–2028', actions: 'Revisão de condicionalidades no Banco Mundial e ampliação de aportes concessionais para SIDS e LLDCs.' },
        { period: '2028–2030', actions: 'Expansão de Blended Finance em energia e saneamento e consolidação das metas de transferência tecnológica.' }
      ]
    },

    kpis: {
      table: [
        { indicator: 'Fluxos totais de AOD e financiamento para países vulneráveis', meta2028_2029: 'Aumento de 35% nos fluxos reais', meta2030: 'Atingir a meta histórica de 0,7% do RNB dos doadores' },
        { indicator: 'Volume de Investimento Privado mobilizado por Blended Finance', meta2028_2029: 'US$ 3 mobilizados por US$ 1 público', meta2030: 'US$ 5 mobilizados por US$ 1 concessional' },
        { indicator: 'Alívio do serviço da dívida via Swaps Climáticos/Sociais', meta2028_2029: 'US$ 20 bilhões convertidos', meta2030: '> US$ 50 bilhões reinvestidos localmente' },
        { indicator: 'Projetos executados sob liderança dos Planos Nacionais locais', meta2028_2029: '≥ 80% dos projetos aprovados', meta2030: '100% alinhados aos Planos Nacionais' }
      ]
    },

    riskManagement: [
      { risk: 'Desvio de Finalidade e Falhas de Governança', mitigation: 'Auditorias externas públicas obrigatórias e desembolsos por etapas condicionadas a metas cumpridas.' },
      { risk: 'Retração dos Orçamentos de AOD dos Países Ricos', mitigation: 'Ampliação da cooperação Sul-Sul e alavancagem de fundos privados institucionais via garantias públicas.' }
    ],

    conclusion: 'A Meta 10.b redireciona a arquitetura financeira global para assegurar que os fluxos de capital cheguem onde a vulnerabilidade humana e geográfica é mais aguda. Ao alinhar assistência concessional, garantias contra riscos, alívio de dívidas e soberania nacional, constrói-se uma parceria global sólida para erradicar as assimetrias entre nações.',
    sources: [
      'United Nations — Sustainable Development Goals Knowledge Platform: Target 10.b',
      'Nações Unidas Brasil — Metas e Indicadores do ODS 10',
      'UN Stats — SDG Indicators Global Database (Indicator 10.b.1)',
      'PNUD Global — Sustainable Development Goals & Financing Frameworks',
      'OECD/DAC — Development Co-operation Profiles & Blended Finance Reports'
    ]
  },
  {
    id: '10.c',
    numberLabel: 'Meta 10.c',
    officialTitle: 'Redução dos Custos de Transação de Remessas de Migrantes',
    solutionName: 'Plano Global de Interconexão Financeira e Tarifas Justas para Remessas Familiares',
    subtitle: 'Estratégia tecnológica e regulatória para atingir custos inferiores a 3% e erradicar corredores com taxas superiores a 5% até 2030.',
    scope: 'Global / Multilateral',
    category: ['global', 'financas_comercio'],
    badgeColor: 'purple',
    icon: 'Zap',

    officialTargetText: 'Até 2030, reduzir para menos de 3% os custos de transação de remessas dos migrantes e eliminar os corredores de remessas com custos superiores a 5%.',
    officialIndicator: 'Indicador 10.c.1 — Custos de remessas expressos em percentual do montante transferido (base de US$ 200).',

    executiveSummary: 'A presente proposta técnica estabelece o Plano Global de Interconexão Financeira e Tarifas Justas para Remessas Familiares para o cumprimento da Meta 10.c do ODS 10. Migrantes transferem anualmente mais de 800 bilhões de dólares para seus países de origem, superando a soma de IED e AOD recebidos por nações de baixa renda. A cobrança de taxas médias de 6% a 7% (e até 15% em corredores africanos) atua como uma taxa regressiva sobre a pobreza. A proposta substitui a intermediação bancária tradicional pela interconexão de sistemas instantâneos públicos (PIX, FedNow, SEPA, UPI), moedas digitais de bancos centrais (CBDCs) e regulação de tarifas transparentes.',

    normativeFramework: [
      'Princípios do Banco Mundial e Comitê de Pagamentos do BIS (CPMI) para Serviços de Remessas',
      'Diretrizes do G20 Roadmap for Enhancing Cross-Border Payments',
      'Resoluções da UNCTAD e Pacto Global de Migração sobre Inclusão Financeira',
      'Marcos Regulatórios de Pagamentos Instantâneos (PIX, FedNow, SEPA, UPI)'
    ],

    diagnosis: {
      overview: 'O mercado transfronteiriço de remessas enfrenta distorções estruturais e ineficiências técnicas:',
      bulletPoints: [
        {
          title: 'Oligopólio e Custo Elevado',
          text: 'O setor tradicional é dominado por grandes Empresas de Transferência de Dinheiro (MTOs) e bancos correspondentes que cobram taxas médias globais de 6% a 7%.'
        },
        {
          title: 'Corredores Abusivos',
          text: 'Em corredores com baixa concorrência e volume restrito (como na África Subsaariana e Pacífico), os custos totais atingem entre 10% e 15%.'
        },
        {
          title: 'Falta de Transparência e Spread Oculto',
          text: 'Práticas em que operadoras anunciam "taxa zero", mas embutem margens exorbitantes e opacas sobre a taxa de câmbio real.'
        },
        {
          title: 'Cadeia de Intermediação Lenta (SWIFT Tradicional)',
          text: 'O envio físico e bancário clássico atravessa até 5 intermediários, acumulando tarifas locais, taxas de conversão dupla e demorando dias para liquidação.'
        }
      ],
      keyStats: [
        { value: '< 3,0%', label: 'Custo Médio Global de Remessa (Meta 2030)', source: 'Indicador 10.c.1' },
        { value: '0%', label: 'Corredores com Custo Acima de 5% (Erradicação Total)', source: 'Meta 2030' },
        { value: '≥ 85%', label: 'Participação das Remessas Digitais Instantâneas', source: 'Meta 2030' },
        { value: '> US$ 35 bi', label: 'Economia Anual Preservada no Bolso das Famílias', source: 'Meta 2030' }
      ]
    },

    pillars: [
      {
        number: 1,
        title: 'Teto Percentual Médio Global (< 3%)',
        summary: 'Garantir que o custo total médio ponderado para transferência padrão de US$ 200 seja inferior a 3%, somando taxas de serviço e spread cambial.'
      },
      {
        number: 2,
        title: 'Eliminação de Corredores Abusivos (Teto < 5%)',
        summary: 'Intervenção regulatória prioritária em corredores de menor concorrência para garantir que nenhuma rota internacional cobre mais de 5%.'
      },
      {
        number: 3,
        title: 'Transparência Tarifária e Proteção ao Consumidor',
        summary: 'Obrigatoriedade de discriminação clara e prévia do valor líquido exato que o beneficiário receberá no destino em moeda local.'
      },
      {
        number: 4,
        title: 'Modernização Tecnológica e Inclusão Financeira Digital',
        summary: 'Transição das redes físicas para carteiras digitais seguras e contas de liquidação simplificadas para migrantes.'
      }
    ],

    operationalMechanisms: {
      description: 'Comparativo do modelo de remessas e quatro soluções estratégicas inovadoras:',
      comparisons: [
        { dimension: 'Início', currentModel: 'Migrante entrega dinheiro em espécie em balcão de MTO física', proposedModel: 'Transferência instantânea via aplicativo de smartphone ou carteira digital' },
        { dimension: 'Roteamento', currentModel: 'Repasse da MTO para banco comercial nacional', proposedModel: 'Conexão direta por barramento seguro de APIs entre sistemas públicos' },
        { dimension: 'Liquidação', currentModel: 'Rede de correspondentes bancários SWIFT (dupla conversão e taxas)', proposedModel: 'Liquidação em tempo real via CBDCs transfronteiriças (DLT) ou pontes PIX-SEPA' },
        { dimension: 'Destino', currentModel: 'Banco receptor processa crédito manual em dias úteis', proposedModel: 'Crédito instantâneo 24/7 na conta ou chave digital do beneficiário' },
        { dimension: 'Saque / Uso', currentModel: 'Familiar retira espécie em posto físico pagando tarifas locais adicionais', proposedModel: 'Disponibilidade imediata para pagamentos digitais ou saque sem custo abusivo' }
      ],
      coreSolutions: [
        'Integração Transfronteiriça de Pagamentos Instantâneos: Acordos entre Bancos Centrais para interoperar PIX (Brasil), FedNow (EUA), SEPA (UE) e UPI (Índia).',
        'Princípio da Proporcionalidade de Risco KYC/AML: Criação de "passaporte de identificação simplificada" e isenções burocráticas para pequenos valores (< US$ 200).',
        'Fim de Cláusulas de Exclusividade: Proibição jurídica de exclusividade entre MTOs e redes postais públicas, abrindo o mercado para fintechs.',
        'Plataformas Públicas Comparadoras de Tarifas: Ferramentas públicas gratuitas para comparação em tempo real de taxas e spreads em todos os corredores.'
      ]
    },

    governance: {
      governanceSummary: 'Articulação entre Bancos Centrais (BACEN, Federal Reserve, BCE, RBI), BIS/CPMI, Banco Mundial, UNCTAD e Ministérios da Fazenda e Relações Exteriores.',
      stakeholders: ['Bancos Centrais (BACEN, Fed, BCE, RBI)', 'BIS / CPMI', 'Banco Mundial', 'UNCTAD', 'Fintechs', 'Agências Postais Nacionais'],
      timeline: [
        { period: '2026–2027', actions: 'Proibição de exclusividade em agências postais, implantação de comparadores públicos e regulação KYC simplificada.' },
        { period: '2027–2028', actions: 'Lançamento dos primeiros acordos bilaterais de interconexão instantânea (PIX, FedNow, SEPA, UPI).' },
        { period: '2028–2030', actions: 'Redes de CBDCs transfronteiriças, eliminação de corredores > 5% e consolidação da média global < 3%.' }
      ]
    },

    kpis: {
      table: [
        { indicator: 'Custo médio global de remessa de US$ 200 (Indicador 10.c.1)', meta2028_2029: '≤ 4,0%', meta2030: '< 3,0% do valor total' },
        { indicator: 'Proporção de corredores internacionais com custo > 5%', meta2028_2029: '≤ 10% dos corredores', meta2030: '0% (eliminação total de corredores abusivos)' },
        { indicator: 'Participação das remessas digitais no volume total', meta2028_2029: '≥ 70% das transações', meta2030: '≥ 85% de liquidação digital instantânea' },
        { indicator: 'Economia direta anual gerada para famílias receptoras', meta2028_2029: '> US$ 20 bilhões ao ano', meta2030: '> US$ 35 bilhões anuais preservados' }
      ]
    },

    riskManagement: [
      { risk: 'Descumprimento de Normas de Prevenção à Lavagem de Dinheiro', mitigation: 'Inteligência algorítmica de risco proporcional focada no rastreamento de fluxos atípicos volumosos sem penalizar o usuário de subsistência.' },
      { risk: 'Resistência dos Monopólios Tradicionais', mitigation: 'Abertura mandatória das redes postais públicas e incentivo à entrada de fintechs e bancos comunitários.' }
    ],

    conclusion: 'A Meta 10.c restitui a dignidade financeira a milhões de trabalhadores migrantes. Ao quebrar o oligopólio de remessas, interoperar redes públicas de pagamento instantâneo e instituir transparência tarifária, a comunidade internacional garante que o fruto do trabalho chegue integralmente às famílias.',
    sources: [
      'United Nations — Sustainable Development Goals Knowledge Platform: Target 10.c',
      'UN Stats — SDG Indicators Database: Metadata Target 10.c (Indicator 10.c.1)',
      'World Bank — Remittance Prices Worldwide Database',
      'Bank for International Settlements (BIS) — CPMI Cross-Border Payments Roadmap',
      'Nações Unidas Brasil — Detalhamento dos ODS e Metas da Agenda 2030'
    ]
  }
];
