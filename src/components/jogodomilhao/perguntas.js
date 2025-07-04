const perguntas = [
  {
    pergunta: 'Qual é a capital do Brasil?',
    respostas: [
      'Brasília', // correta
      'Rio de Janeiro',
      'São Paulo',
      'Salvador',
    ],
    correta: 0,
  },
  {
    pergunta: "Quem escreveu 'Dom Casmurro'?",
    respostas: [
      'Machado de Assis', // correta
      'José de Alencar',
      'Carlos Drummond de Andrade',
      'Clarice Lispector',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior planeta do Sistema Solar?',
    respostas: [
      'Júpiter', // correta
      'Terra',
      'Saturno',
      'Marte',
    ],
    correta: 0,
  },
  {
    pergunta: 'Em que continente fica o Egito?',
    respostas: [
      'África', // correta
      'Ásia',
      'Europa',
      'América',
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o elemento químico representado por 'O'?",
    respostas: [
      'Oxigênio', // correta
      'Ouro',
      'Osmio',
      'Óxido',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o menor país do mundo?',
    respostas: [
      'Vaticano', // correta
      'Mônaco',
      'San Marino',
      'Liechtenstein',
    ],
    correta: 0,
  },
  {
    pergunta: 'Quem pintou a Mona Lisa?',
    respostas: [
      'Leonardo da Vinci', // correta
      'Pablo Picasso',
      'Vincent van Gogh',
      'Michelangelo',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o rio mais extenso do mundo?',
    respostas: [
      'Nilo', // correta
      'Amazonas',
      'Yangtzé',
      'Mississippi',
    ],
    correta: 0,
  },
  {
    pergunta: 'Quem foi o primeiro homem a pisar na Lua?',
    respostas: [
      'Neil Armstrong', // correta
      'Buzz Aldrin',
      'Yuri Gagarin',
      'Michael Collins',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o símbolo químico do ouro?',
    respostas: [
      'Au', // correta
      'Ag',
      'O',
      'Gd',
    ],
    correta: 0,
  },
  {
    pergunta: 'Em que ano o Brasil foi descoberto?',
    respostas: [
      '1500', // correta
      '1492',
      '1822',
      '1889',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o animal símbolo da Austrália?',
    respostas: [
      'Canguru', // correta
      'Leão',
      'Urso Panda',
      'Girafa',
    ],
    correta: 0,
  },
  {
    pergunta: 'Quem descobriu a gravidade?',
    respostas: [
      'Isaac Newton', // correta
      'Albert Einstein',
      'Galileu Galilei',
      'Nikola Tesla',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior oceano do planeta?',
    respostas: [
      'Oceano Pacífico', // correta
      'Oceano Atlântico',
      'Oceano Índico',
      'Oceano Ártico',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o idioma mais falado no mundo?',
    respostas: [
      'Mandarim', // correta
      'Inglês',
      'Espanhol',
      'Hindi',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o país mais populoso do mundo?',
    respostas: [
      'China',
      'Índia', // correta
      'Estados Unidos',
      'Indonésia',
    ],
    correta: 1,
  },
  {
    pergunta: 'Quem foi o criador da teoria da relatividade?',
    respostas: [
      'Albert Einstein', // correta
      'Isaac Newton',
      'Stephen Hawking',
      'Marie Curie',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior mamífero do mundo?',
    respostas: [
      'Baleia-azul', // correta
      'Elefante africano',
      'Girafa',
      'Hipopótamo',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o principal ingrediente do guacamole?',
    respostas: [
      'Abacate', // correta
      'Tomate',
      'Cebola',
      'Alface',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o planeta mais próximo do Sol?',
    respostas: [
      'Mercúrio', // correta
      'Vênus',
      'Terra',
      'Marte',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior deserto do mundo?',
    respostas: [
      'Deserto do Saara', // correta
      'Deserto de Gobi',
      'Deserto da Antártida',
      'Deserto de Kalahari',
    ],
    correta: 0,
  },
  {
    pergunta: 'Quem escreveu "O Pequeno Príncipe"?',
    respostas: [
      'Antoine de Saint-Exupéry', // correta
      'J.K. Rowling',
      'Machado de Assis',
      'Monteiro Lobato',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior osso do corpo humano?',
    respostas: [
      'Fêmur', // correta
      'Tíbia',
      'Úmero',
      'Rádio',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior arquipélago do mundo?',
    respostas: [
      'Indonésia', // correta
      'Filipinas',
      'Maldivas',
      'Japão',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior país do mundo em extensão territorial?',
    respostas: [
      'Rússia', // correta
      'Canadá',
      'China',
      'Estados Unidos',
    ],
    correta: 0,
  },
  {
    pergunta: 'Quem pintou o teto da Capela Sistina?',
    respostas: [
      'Michelangelo', // correta
      'Leonardo da Vinci',
      'Rafael',
      'Donatello',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o menor osso do corpo humano?',
    respostas: [
      'Estribo', // correta
      'Martelo',
      'Bigorna',
      'Falange',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior lago de água doce do mundo?',
    respostas: [
      'Lago Superior', // correta
      'Lago Vitória',
      'Lago Baikal',
      'Lago Tanganica',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior continente do mundo?',
    respostas: [
      'Ásia', // correta
      'África',
      'Europa',
      'América',
    ],
    correta: 0,
  },
  {
    pergunta: 'Quem foi o primeiro presidente do Brasil?',
    respostas: [
      'Deodoro da Fonseca', // correta
      'Getúlio Vargas',
      'Juscelino Kubitschek',
      'Floriano Peixoto',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior animal terrestre?',
    respostas: [
      'Elefante africano', // correta
      'Rinoceronte',
      'Girafa',
      'Hipopótamo',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior órgão do corpo humano?',
    respostas: [
      'Pele', // correta
      'Coração',
      'Fígado',
      'Pulmão',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior planeta rochoso do Sistema Solar?',
    respostas: [
      'Terra', // correta
      'Marte',
      'Vênus',
      'Mercúrio',
    ],
    correta: 0,
  },
  {
    pergunta: 'Quem foi o inventor do avião?',
    respostas: [
      'Santos Dumont', // correta
      'Irmãos Wright',
      'Leonardo da Vinci',
      'Graham Bell',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior país da América do Sul?',
    respostas: [
      'Brasil', // correta
      'Argentina',
      'Colômbia',
      'Peru',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior arquipélago do Brasil?',
    respostas: [
      'Marajó', // correta
      'Fernando de Noronha',
      'Abrolhos',
      'Ilhabela',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior estado brasileiro em extensão territorial?',
    respostas: [
      'Amazonas', // correta
      'Pará',
      'Mato Grosso',
      'Bahia',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o menor estado do Brasil?',
    respostas: [
      'Sergipe', // correta
      'Alagoas',
      'Rio de Janeiro',
      'Espírito Santo',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio do Brasil?',
    respostas: [
      'Amazonas', // correta
      'São Francisco',
      'Tocantins',
      'Paraná',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é a moeda oficial do Japão?',
    respostas: [
      'Iene', // correta
      'Won',
      'Yuan',
      'Dólar',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior deserto do Brasil?',
    respostas: [
      'Lençóis Maranhenses', // correta
      'Deserto do Atacama',
      'Deserto do Saara',
      'Deserto de Gobi',
    ],
    correta: 0,
  },
  {
    pergunta: 'Quem foi o primeiro homem a viajar ao espaço?',
    respostas: [
      'Yuri Gagarin', // correta
      'Neil Armstrong',
      'Buzz Aldrin',
      'John Glenn',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior arquipélago do mundo?',
    respostas: [
      'Indonésia', // correta
      'Filipinas',
      'Maldivas',
      'Japão',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior animal do mundo?',
    respostas: [
      'Baleia-azul', // correta
      'Elefante africano',
      'Tubarão-branco',
      'Girafa',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior felino do mundo?',
    respostas: [
      'Tigre', // correta
      'Leão',
      'Leopardo',
      'Onça-pintada',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior peixe do mundo?',
    respostas: [
      'Tubarão-baleia', // correta
      'Baleia-azul',
      'Tubarão-branco',
      'Atum',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior anfíbio do mundo?',
    respostas: [
      'Salamandra-gigante-da-China', // correta
      'Sapo-cururu',
      'Rã-touro',
      'Axolote',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior inseto do mundo?',
    respostas: [
      'Weta gigante', // correta
      'Besouro-titã',
      'Barata-gigante',
      'Libélula-gigante',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior pássaro do mundo?',
    respostas: [
      'Avestruz', // correta
      'Águia',
      'Condor',
      'Emu',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior réptil do mundo?',
    respostas: [
      'Crocodilo-de-água-salgada', // correta
      'Jiboia',
      'Tartaruga-gigante',
      'Jacaré-açu',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior roedor do mundo?',
    respostas: [
      'Capivara', // correta
      'Castor',
      'Rato-do-bambu',
      'Paca',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior primata do mundo?',
    respostas: [
      'Gorila', // correta
      'Chimpanzé',
      'Orangotango',
      'Macaco-prego',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior crustáceo do mundo?',
    respostas: [
      'Caranguejo-aranha-gigante', // correta
      'Lagosta',
      'Camarão-gigante',
      'Caranguejo-uçá',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior molusco do mundo?',
    respostas: [
      'Lula-colossal', // correta
      'Polvo-gigante',
      'Caramujo-gigante',
      'Ostra-gigante',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior vulcão do mundo?',
    respostas: [
      'Mauna Loa', // correta
      'Etna',
      'Vesúvio',
      'Krakatoa',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior arquipélago do Brasil?',
    respostas: [
      'Marajó', // correta
      'Fernando de Noronha',
      'Abrolhos',
      'Ilhabela',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior parque nacional do Brasil?',
    respostas: [
      'Parque Nacional do Tumucumaque', // correta
      'Parque Nacional do Iguaçu',
      'Parque Nacional da Chapada Diamantina',
      'Parque Nacional dos Lençóis Maranhenses',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior bioma do Brasil?',
    respostas: [
      'Amazônia', // correta
      'Cerrado',
      'Caatinga',
      'Mata Atlântica',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior estádio do Brasil?',
    respostas: [
      'Maracanã', // correta
      'Morumbi',
      'Mineirão',
      'Beira-Rio',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior aeroporto do Brasil?',
    respostas: [
      'Aeroporto de Guarulhos', // correta
      'Aeroporto de Congonhas',
      'Aeroporto do Galeão',
      'Aeroporto de Brasília',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior porto do Brasil?',
    respostas: [
      'Porto de Santos', // correta
      'Porto de Paranaguá',
      'Porto de Itajaí',
      'Porto de Suape',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior shopping center do Brasil?',
    respostas: [
      'Centro Comercial Aricanduva', // correta
      'Shopping Eldorado',
      'Shopping Iguatemi',
      'Shopping Recife',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior festival popular do Brasil?',
    respostas: [
      'Carnaval', // correta
      'Festa Junina',
      'Oktoberfest',
      'Parintins',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior escritor brasileiro?',
    respostas: [
      'Machado de Assis', // correta
      'Carlos Drummond de Andrade',
      'Clarice Lispector',
      'Jorge Amado',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior compositor brasileiro?',
    respostas: [
      'Tom Jobim', // correta
      'Chico Buarque',
      'Caetano Veloso',
      'Gilberto Gil',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior cantor brasileiro?',
    respostas: [
      'Roberto Carlos', // correta
      'Caetano Veloso',
      'Gilberto Gil',
      'Chico Buarque',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior jogador de futebol do Brasil?',
    respostas: [
      'Pelé', // correta
      'Zico',
      'Romário',
      'Ronaldo',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior time de futebol do Brasil em títulos nacionais?',
    respostas: [
      'Palmeiras', // correta
      'Flamengo',
      'Corinthians',
      'São Paulo',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior campeão da Copa do Mundo?',
    respostas: [
      'Brasil', // correta
      'Alemanha',
      'Itália',
      'Argentina',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior estádio de futebol do mundo?',
    respostas: [
      'Rungrado 1º de Maio', // correta
      'Maracanã',
      'Camp Nou',
      'Wembley',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior país da África?',
    respostas: [
      'Argélia', // correta
      'Nigéria',
      'Egito',
      'África do Sul',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior país da Europa?',
    respostas: [
      'Rússia', // correta
      'França',
      'Alemanha',
      'Espanha',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior país da Ásia?',
    respostas: [
      'China', // correta
      'Índia',
      'Rússia',
      'Japão',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior país da América do Norte?',
    respostas: [
      'Canadá', // correta
      'Estados Unidos',
      'México',
      'Groenlândia',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior país da América Central?',
    respostas: [
      'Nicarágua', // correta
      'Costa Rica',
      'Panamá',
      'Honduras',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior país da Oceania?',
    respostas: [
      'Austrália', // correta
      'Nova Zelândia',
      'Papua-Nova Guiné',
      'Fiji',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior lago da África?',
    respostas: [
      'Lago Vitória', // correta
      'Lago Tanganica',
      'Lago Malawi',
      'Lago Chade',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior lago da América do Sul?',
    respostas: [
      'Lago Titicaca', // correta
      'Lago Maracaibo',
      'Lagoa dos Patos',
      'Lagoa Mirim',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior lago da América do Norte?',
    respostas: [
      'Lago Superior', // correta
      'Lago Michigan',
      'Lago Huron',
      'Lago Erie',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior lago da Europa?',
    respostas: [
      'Lago Ladoga', // correta
      'Lago Onega',
      'Lago Genebra',
      'Lago Balaton',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior lago da Ásia?',
    respostas: [
      'Mar Cáspio', // correta
      'Lago Baikal',
      'Lago Aral',
      'Lago Toba',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior lago da Oceania?',
    respostas: [
      'Lago Eyre', // correta
      'Lago Taupo',
      'Lago Murray',
      'Lago Burley Griffin',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da África?',
    respostas: [
      'Nilo', // correta
      'Congo',
      'Níger',
      'Zambeze',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Ásia?',
    respostas: [
      'Yangtzé', // correta
      'Ganges',
      'Mekong',
      'Amarelo',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Europa?',
    respostas: [
      'Volga', // correta
      'Danúbio',
      'Reno',
      'Tâmisa',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da América do Norte?',
    respostas: [
      'Mississippi', // correta
      'Missouri',
      'Colorado',
      'Colúmbia',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Oceania?',
    respostas: [
      'Murray', // correta
      'Darling',
      'Lachlan',
      'Cooper Creek',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da América Central?',
    respostas: [
      'Usumacinta', // correta
      'Motagua',
      'San Juan',
      'Lempa',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio do Brasil?',
    respostas: [
      'Amazonas', // correta
      'São Francisco',
      'Tocantins',
      'Paraná',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Argentina?',
    respostas: [
      'Paraná', // correta
      'Uruguai',
      'Colorado',
      'Salado',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio do México?',
    respostas: [
      'Rio Bravo', // correta
      'Lerma',
      'Balsas',
      'Usumacinta',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio do Canadá?',
    respostas: [
      'Rio Mackenzie', // correta
      'Rio São Lourenço',
      'Rio Fraser',
      'Rio Yukon',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Rússia?',
    respostas: [
      'Lena', // correta
      'Volga',
      'Ob',
      'Ienissei',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da China?',
    respostas: [
      'Yangtzé', // correta
      'Amarelo',
      'Mekong',
      'Huai',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Índia?',
    respostas: [
      'Ganges', // correta
      'Brahmaputra',
      'Godavari',
      'Yamuna',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Austrália?',
    respostas: [
      'Murray', // correta
      'Darling',
      'Lachlan',
      'Cooper Creek',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da África do Sul?',
    respostas: [
      'Orange', // correta
      'Limpopo',
      'Vaal',
      'Tugela',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da França?',
    respostas: [
      'Loire', // correta
      'Sena',
      'Ródano',
      'Garonne',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Alemanha?',
    respostas: [
      'Reno', // correta
      'Elba',
      'Danúbio',
      'Oder',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Itália?',
    respostas: [
      'Pó', // correta
      'Tibre',
      'Arno',
      'Adige',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Espanha?',
    respostas: [
      'Ebro', // correta
      'Tajo',
      'Guadalquivir',
      'Duero',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio de Portugal?',
    respostas: [
      'Tejo', // correta
      'Douro',
      'Guadiana',
      'Mondego',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio do Egito?',
    respostas: [
      'Nilo', // correta
      'Nilo Azul',
      'Nilo Branco',
      'Atbara',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio do Japão?',
    respostas: [
      'Shinano', // correta
      'Tone',
      'Ishikari',
      'Kiso',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Inglaterra?',
    respostas: [
      'Tâmisa', // correta
      'Severn',
      'Trent',
      'Ouse',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Escócia?',
    respostas: [
      'Tay', // correta
      'Clyde',
      'Spey',
      'Dee',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Irlanda?',
    respostas: [
      'Shannon', // correta
      'Liffey',
      'Boyne',
      'Barrow',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Nova Zelândia?',
    respostas: [
      'Waikato', // correta
      'Clutha',
      'Rangitata',
      'Waimakariri',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Venezuela?',
    respostas: [
      'Orinoco', // correta
      'Caroni',
      'Apure',
      'Meta',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Colômbia?',
    respostas: [
      'Magdalena', // correta
      'Cauca',
      'Guaviare',
      'Putumayo',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio do Peru?',
    respostas: [
      'Ucayali', // correta
      'Marañón',
      'Amazonas',
      'Putumayo',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio do Chile?',
    respostas: [
      'Loa', // correta
      'Bío-Bío',
      'Maipo',
      'Baker',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Bolívia?',
    respostas: [
      'Madeira', // correta
      'Beni',
      'Mamore',
      'Pilcomayo',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio do Paraguai?',
    respostas: [
      'Paraguai', // correta
      'Paraná',
      'Pilcomayo',
      'Apa',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio do Uruguai?',
    respostas: [
      'Uruguai', // correta
      'Negro',
      'Yí',
      'Cuareim',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é o maior rio da Argentina?',
    respostas: [
      'Paraná', // correta
      'Uruguai',
      'Colorado',
      'Salado',
    ],
    correta: 0,
  },
];

export default perguntas;
