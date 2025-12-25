const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    respostas: [
      "Brasília", // correta
      "Rio de Janeiro",
      "São Paulo",
      "Salvador",
    ],
    correta: 0,
  },
  {
    pergunta: "Quem escreveu 'Dom Casmurro'?",
    respostas: [
      "Machado de Assis", // correta
      "José de Alencar",
      "Carlos Drummond de Andrade",
      "Clarice Lispector",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior planeta do Sistema Solar?",
    respostas: [
      "Júpiter", // correta
      "Terra",
      "Saturno",
      "Marte",
    ],
    correta: 0,
  },
  {
    pergunta: "Em que continente fica o Egito?",
    respostas: [
      "África", // correta
      "Ásia",
      "Europa",
      "América",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o elemento químico representado por 'O'?",
    respostas: [
      "Oxigênio", // correta
      "Ouro",
      "Osmio",
      "Óxido",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o menor país do mundo?",
    respostas: [
      "Vaticano", // correta
      "Mônaco",
      "San Marino",
      "Liechtenstein",
    ],
    correta: 0,
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: [
      "Leonardo da Vinci", // correta
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o rio mais extenso do mundo?",
    respostas: [
      "Nilo", // correta
      "Amazonas",
      "Yangtzé",
      "Mississippi",
    ],
    correta: 0,
  },
  {
    pergunta: "Quem foi o primeiro homem a pisar na Lua?",
    respostas: [
      "Neil Armstrong", // correta
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Michael Collins",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o símbolo químico do ouro?",
    respostas: [
      "Au", // correta
      "Ag",
      "O",
      "Gd",
    ],
    correta: 0,
  },
  {
    pergunta: "Em que ano o Brasil foi descoberto?",
    respostas: [
      "1500", // correta
      "1492",
      "1822",
      "1889",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o animal símbolo da Austrália?",
    respostas: [
      "Canguru", // correta
      "Leão",
      "Urso Panda",
      "Girafa",
    ],
    correta: 0,
  },
  {
    pergunta: "Quem descobriu a gravidade?",
    respostas: [
      "Isaac Newton", // correta
      "Albert Einstein",
      "Galileu Galilei",
      "Nikola Tesla",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior oceano do planeta?",
    respostas: [
      "Oceano Pacífico", // correta
      "Oceano Atlântico",
      "Oceano Índico",
      "Oceano Ártico",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o idioma mais falado no mundo?",
    respostas: [
      "Mandarim", // correta
      "Inglês",
      "Espanhol",
      "Hindi",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o país mais populoso do mundo?",
    respostas: [
      "China",
      "Índia", // correta
      "Estados Unidos",
      "Indonésia",
    ],
    correta: 1,
  },
  {
    pergunta: "Quem foi o criador da teoria da relatividade?",
    respostas: [
      "Albert Einstein", // correta
      "Isaac Newton",
      "Stephen Hawking",
      "Marie Curie",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior mamífero do mundo?",
    respostas: [
      "Baleia-azul", // correta
      "Elefante africano",
      "Girafa",
      "Hipopótamo",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o principal ingrediente do guacamole?",
    respostas: [
      "Abacate", // correta
      "Tomate",
      "Cebola",
      "Alface",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o planeta mais próximo do Sol?",
    respostas: [
      "Mercúrio", // correta
      "Vênus",
      "Terra",
      "Marte",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior deserto do mundo?",
    respostas: [
      "Deserto do Saara", // correta
      "Deserto de Gobi",
      "Deserto da Antártida",
      "Deserto de Kalahari",
    ],
    correta: 0,
  },
  {
    pergunta: 'Quem escreveu "O Pequeno Príncipe"?',
    respostas: [
      "Antoine de Saint-Exupéry", // correta
      "J.K. Rowling",
      "Machado de Assis",
      "Monteiro Lobato",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior osso do corpo humano?",
    respostas: [
      "Fêmur", // correta
      "Tíbia",
      "Úmero",
      "Rádio",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior arquipélago do mundo?",
    respostas: [
      "Indonésia", // correta
      "Filipinas",
      "Maldivas",
      "Japão",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o maior país do mundo em extensão territorial?",
    respostas: [
      "Rússia", // correta
      "Canadá",
      "China",
      "Estados Unidos",
    ],
    correta: 0,
  },
  {
    pergunta: "Quem pintou o teto da Capela Sistina?",
    respostas: [
      "Michelangelo", // correta
      "Leonardo da Vinci",
      "Rafael",
      "Donatello",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o menor osso do corpo humano?",
    respostas: [
      "Estribo", // correta
      "Martelo",
      "Bigorna",
      "Falange",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior lago de água doce do mundo?",
    respostas: [
      "Lago Superior", // correta
      "Lago Vitória",
      "Lago Baikal",
      "Lago Tanganica",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior continente do mundo?",
    respostas: [
      "Ásia", // correta
      "África",
      "Europa",
      "América",
    ],
    correta: 0,
  },
  {
    pergunta: "Quem foi o primeiro presidente do Brasil?",
    respostas: [
      "Deodoro da Fonseca", // correta
      "Getúlio Vargas",
      "Juscelino Kubitschek",
      "Floriano Peixoto",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior animal terrestre?",
    respostas: [
      "Elefante africano", // correta
      "Rinoceronte",
      "Girafa",
      "Hipopótamo",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior órgão do corpo humano?",
    respostas: [
      "Pele", // correta
      "Coração",
      "Fígado",
      "Pulmão",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o maior planeta rochoso do Sistema Solar?",
    respostas: [
      "Terra", // correta
      "Marte",
      "Vênus",
      "Mercúrio",
    ],
    correta: 0,
  },
  {
    pergunta: "Quem foi o inventor do avião?",
    respostas: [
      "Santos Dumont", // correta
      "Irmãos Wright",
      "Leonardo da Vinci",
      "Graham Bell",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior país da América do Sul?",
    respostas: [
      "Brasil", // correta
      "Argentina",
      "Colômbia",
      "Peru",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior arquipélago do Brasil?",
    respostas: [
      "Marajó", // correta
      "Fernando de Noronha",
      "Abrolhos",
      "Ilhabela",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o maior estado brasileiro em extensão territorial?",
    respostas: [
      "Amazonas", // correta
      "Pará",
      "Mato Grosso",
      "Bahia",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o menor estado do Brasil?",
    respostas: [
      "Sergipe", // correta
      "Alagoas",
      "Rio de Janeiro",
      "Espírito Santo",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio do Brasil?",
    respostas: [
      "Amazonas", // correta
      "São Francisco",
      "Tocantins",
      "Paraná",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a moeda oficial do Japão?",
    respostas: [
      "Iene", // correta
      "Won",
      "Yuan",
      "Dólar",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior deserto do Brasil?",
    respostas: [
      "Lençóis Maranhenses", // correta
      "Deserto do Atacama",
      "Deserto do Saara",
      "Deserto de Gobi",
    ],
    correta: 0,
  },
  {
    pergunta: "Quem foi o primeiro homem a viajar ao espaço?",
    respostas: [
      "Yuri Gagarin", // correta
      "Neil Armstrong",
      "Buzz Aldrin",
      "John Glenn",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior arquipélago do mundo?",
    respostas: [
      "Indonésia", // correta
      "Filipinas",
      "Maldivas",
      "Japão",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior animal do mundo?",
    respostas: [
      "Baleia-azul", // correta
      "Elefante africano",
      "Tubarão-branco",
      "Girafa",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior felino do mundo?",
    respostas: [
      "Tigre", // correta
      "Leão",
      "Leopardo",
      "Onça-pintada",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior peixe do mundo?",
    respostas: [
      "Tubarão-baleia", // correta
      "Baleia-azul",
      "Tubarão-branco",
      "Atum",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior anfíbio do mundo?",
    respostas: [
      "Salamandra-gigante-da-China", // correta
      "Sapo-cururu",
      "Rã-touro",
      "Axolote",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior inseto do mundo?",
    respostas: [
      "Weta gigante", // correta
      "Besouro-titã",
      "Barata-gigante",
      "Libélula-gigante",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior pássaro do mundo?",
    respostas: [
      "Avestruz", // correta
      "Águia",
      "Condor",
      "Emu",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior réptil do mundo?",
    respostas: [
      "Crocodilo-de-água-salgada", // correta
      "Jiboia",
      "Tartaruga-gigante",
      "Jacaré-açu",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior roedor do mundo?",
    respostas: [
      "Capivara", // correta
      "Castor",
      "Rato-do-bambu",
      "Paca",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior primata do mundo?",
    respostas: [
      "Gorila", // correta
      "Chimpanzé",
      "Orangotango",
      "Macaco-prego",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior crustáceo do mundo?",
    respostas: [
      "Caranguejo-aranha-gigante", // correta
      "Lagosta",
      "Camarão-gigante",
      "Caranguejo-uçá",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior molusco do mundo?",
    respostas: [
      "Lula-colossal", // correta
      "Polvo-gigante",
      "Caramujo-gigante",
      "Ostra-gigante",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior vulcão do mundo?",
    respostas: [
      "Mauna Loa", // correta
      "Etna",
      "Vesúvio",
      "Krakatoa",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior arquipélago do Brasil?",
    respostas: [
      "Marajó", // correta
      "Fernando de Noronha",
      "Abrolhos",
      "Ilhabela",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior parque nacional do Brasil?",
    respostas: [
      "Parque Nacional do Tumucumaque", // correta
      "Parque Nacional do Iguaçu",
      "Parque Nacional da Chapada Diamantina",
      "Parque Nacional dos Lençóis Maranhenses",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior bioma do Brasil?",
    respostas: [
      "Amazônia", // correta
      "Cerrado",
      "Caatinga",
      "Mata Atlântica",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior estádio do Brasil?",
    respostas: [
      "Maracanã", // correta
      "Morumbi",
      "Mineirão",
      "Beira-Rio",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior aeroporto do Brasil?",
    respostas: [
      "Aeroporto de Guarulhos", // correta
      "Aeroporto de Congonhas",
      "Aeroporto do Galeão",
      "Aeroporto de Brasília",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior porto do Brasil?",
    respostas: [
      "Porto de Santos", // correta
      "Porto de Paranaguá",
      "Porto de Itajaí",
      "Porto de Suape",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior shopping center do Brasil?",
    respostas: [
      "Centro Comercial Aricanduva", // correta
      "Shopping Eldorado",
      "Shopping Iguatemi",
      "Shopping Recife",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior festival popular do Brasil?",
    respostas: [
      "Carnaval", // correta
      "Festa Junina",
      "Oktoberfest",
      "Parintins",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior escritor brasileiro?",
    respostas: [
      "Machado de Assis", // correta
      "Carlos Drummond de Andrade",
      "Clarice Lispector",
      "Jorge Amado",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior compositor brasileiro?",
    respostas: [
      "Tom Jobim", // correta
      "Chico Buarque",
      "Caetano Veloso",
      "Gilberto Gil",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior cantor brasileiro?",
    respostas: [
      "Roberto Carlos", // correta
      "Caetano Veloso",
      "Gilberto Gil",
      "Chico Buarque",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior jogador de futebol do Brasil?",
    respostas: [
      "Pelé", // correta
      "Zico",
      "Romário",
      "Ronaldo",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o maior time de futebol do Brasil em títulos nacionais?",
    respostas: [
      "Palmeiras", // correta
      "Flamengo",
      "Corinthians",
      "São Paulo",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior campeão da Copa do Mundo?",
    respostas: [
      "Brasil", // correta
      "Alemanha",
      "Itália",
      "Argentina",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior estádio de futebol do mundo?",
    respostas: [
      "Rungrado 1º de Maio", // correta
      "Maracanã",
      "Camp Nou",
      "Wembley",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior país da África?",
    respostas: [
      "Argélia", // correta
      "Nigéria",
      "Egito",
      "África do Sul",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior país da Europa?",
    respostas: [
      "Rússia", // correta
      "França",
      "Alemanha",
      "Espanha",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior país da Ásia?",
    respostas: [
      "China", // correta
      "Índia",
      "Rússia",
      "Japão",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior país da América do Norte?",
    respostas: [
      "Canadá", // correta
      "Estados Unidos",
      "México",
      "Groenlândia",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior país da América Central?",
    respostas: [
      "Nicarágua", // correta
      "Costa Rica",
      "Panamá",
      "Honduras",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior país da Oceania?",
    respostas: [
      "Austrália", // correta
      "Nova Zelândia",
      "Papua-Nova Guiné",
      "Fiji",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior lago da África?",
    respostas: [
      "Lago Vitória", // correta
      "Lago Tanganica",
      "Lago Malawi",
      "Lago Chade",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior lago da América do Sul?",
    respostas: [
      "Lago Titicaca", // correta
      "Lago Maracaibo",
      "Lagoa dos Patos",
      "Lagoa Mirim",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior lago da América do Norte?",
    respostas: [
      "Lago Superior", // correta
      "Lago Michigan",
      "Lago Huron",
      "Lago Erie",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior lago da Europa?",
    respostas: [
      "Lago Ladoga", // correta
      "Lago Onega",
      "Lago Genebra",
      "Lago Balaton",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior lago da Ásia?",
    respostas: [
      "Mar Cáspio", // correta
      "Lago Baikal",
      "Lago Aral",
      "Lago Toba",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior lago da Oceania?",
    respostas: [
      "Lago Eyre", // correta
      "Lago Taupo",
      "Lago Murray",
      "Lago Burley Griffin",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da África?",
    respostas: [
      "Nilo", // correta
      "Congo",
      "Níger",
      "Zambeze",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Ásia?",
    respostas: [
      "Yangtzé", // correta
      "Ganges",
      "Mekong",
      "Amarelo",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Europa?",
    respostas: [
      "Volga", // correta
      "Danúbio",
      "Reno",
      "Tâmisa",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da América do Norte?",
    respostas: [
      "Mississippi", // correta
      "Missouri",
      "Colorado",
      "Colúmbia",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Oceania?",
    respostas: [
      "Murray", // correta
      "Darling",
      "Lachlan",
      "Cooper Creek",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da América Central?",
    respostas: [
      "Usumacinta", // correta
      "Motagua",
      "San Juan",
      "Lempa",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio do Brasil?",
    respostas: [
      "Amazonas", // correta
      "São Francisco",
      "Tocantins",
      "Paraná",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Argentina?",
    respostas: [
      "Paraná", // correta
      "Uruguai",
      "Colorado",
      "Salado",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio do México?",
    respostas: [
      "Rio Bravo", // correta
      "Lerma",
      "Balsas",
      "Usumacinta",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio do Canadá?",
    respostas: [
      "Rio Mackenzie", // correta
      "Rio São Lourenço",
      "Rio Fraser",
      "Rio Yukon",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Rússia?",
    respostas: [
      "Lena", // correta
      "Volga",
      "Ob",
      "Ienissei",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da China?",
    respostas: [
      "Yangtzé", // correta
      "Amarelo",
      "Mekong",
      "Huai",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Índia?",
    respostas: [
      "Ganges", // correta
      "Brahmaputra",
      "Godavari",
      "Yamuna",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Austrália?",
    respostas: [
      "Murray", // correta
      "Darling",
      "Lachlan",
      "Cooper Creek",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da África do Sul?",
    respostas: [
      "Orange", // correta
      "Limpopo",
      "Vaal",
      "Tugela",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da França?",
    respostas: [
      "Loire", // correta
      "Sena",
      "Ródano",
      "Garonne",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Alemanha?",
    respostas: [
      "Reno", // correta
      "Elba",
      "Danúbio",
      "Oder",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Itália?",
    respostas: [
      "Pó", // correta
      "Tibre",
      "Arno",
      "Adige",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Espanha?",
    respostas: [
      "Ebro", // correta
      "Tajo",
      "Guadalquivir",
      "Duero",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio de Portugal?",
    respostas: [
      "Tejo", // correta
      "Douro",
      "Guadiana",
      "Mondego",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio do Egito?",
    respostas: [
      "Nilo", // correta
      "Nilo Azul",
      "Nilo Branco",
      "Atbara",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio do Japão?",
    respostas: [
      "Shinano", // correta
      "Tone",
      "Ishikari",
      "Kiso",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Inglaterra?",
    respostas: [
      "Tâmisa", // correta
      "Severn",
      "Trent",
      "Ouse",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Escócia?",
    respostas: [
      "Tay", // correta
      "Clyde",
      "Spey",
      "Dee",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Irlanda?",
    respostas: [
      "Shannon", // correta
      "Liffey",
      "Boyne",
      "Barrow",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Nova Zelândia?",
    respostas: [
      "Waikato", // correta
      "Clutha",
      "Rangitata",
      "Waimakariri",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Venezuela?",
    respostas: [
      "Orinoco", // correta
      "Caroni",
      "Apure",
      "Meta",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Colômbia?",
    respostas: [
      "Magdalena", // correta
      "Cauca",
      "Guaviare",
      "Putumayo",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio do Peru?",
    respostas: [
      "Ucayali", // correta
      "Marañón",
      "Amazonas",
      "Putumayo",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio do Chile?",
    respostas: [
      "Loa", // correta
      "Bío-Bío",
      "Maipo",
      "Baker",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Bolívia?",
    respostas: [
      "Madeira", // correta
      "Beni",
      "Mamore",
      "Pilcomayo",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio do Paraguai?",
    respostas: [
      "Paraguai", // correta
      "Paraná",
      "Pilcomayo",
      "Apa",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio do Uruguai?",
    respostas: [
      "Uruguai", // correta
      "Negro",
      "Yí",
      "Cuareim",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior rio da Argentina?",
    respostas: [
      "Paraná", // correta
      "Uruguai",
      "Colorado",
      "Salado",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual país inventou o papel?",
    respostas: ["Egito", "Grécia", "China", "Índia"],
    correta: 2,
  },
  {
    pergunta: "Quantos corações tem um polvo?",
    respostas: ["1", "2", "3", "4"],
    correta: 2,
  },
  {
    pergunta: "Qual é a capital da Nova Zelândia?",
    respostas: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
    correta: 2,
  },
  {
    pergunta: "Qual metal é líquido em temperatura ambiente?",
    respostas: ["Chumbo", "Mercúrio", "Estanho", "Prata"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do medo de altura?",
    respostas: ["Claustrofobia", "Agorafobia", "Acrofobia", "Hidrofobia"],
    correta: 2,
  },
  {
    pergunta: "Quantas cores tem o arco-íris?",
    respostas: ["5", "6", "7", "8"],
    correta: 2,
  },
  {
    pergunta: "Qual país tem o maior número de ilhas?",
    respostas: ["Indonésia", "Filipinas", "Noruega", "Suécia"],
    correta: 3,
  },
  {
    pergunta: "Qual é o menor país do mundo?",
    respostas: ["Mônaco", "San Marino", "Vaticano", "Liechtenstein"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome do processo de transformação da água em vapor?",
    respostas: ["Fusão", "Condensação", "Evaporação", "Sublimação"],
    correta: 2,
  },
  {
    pergunta: "Quem escreveu 'A Divina Comédia'?",
    respostas: ["Maquiavel", "Dante Alighieri", "Petrarca", "Boccaccio"],
    correta: 1,
  },
  {
    pergunta: "Qual é o maior animal que já existiu na Terra?",
    respostas: ["Dinossauro", "Megalodon", "Baleia-azul", "Titanossauro"],
    correta: 2,
  },
  {
    pergunta: "Qual é o ponto mais alto da África?",
    respostas: ["Monte Atlas", "Monte Kilimanjaro", "Monte Elbrus", "Monte Kenya"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do maior osso do corpo humano?",
    respostas: ["Tíbia", "Fêmur", "Úmero", "Rádio"],
    correta: 1,
  },
  {
    pergunta: "Qual é a capital da Coreia do Sul?",
    respostas: ["Busan", "Seul", "Incheon", "Daegu"],
    correta: 1,
  },
  {
    pergunta: "Qual planeta tem mais luas?",
    respostas: ["Júpiter", "Saturno", "Urano", "Netuno"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do maior vulcão do mundo?",
    respostas: ["Etna", "Krakatoa", "Mauna Loa", "Vesúvio"],
    correta: 2,
  },
  {
    pergunta: "Qual é a língua oficial da Áustria?",
    respostas: ["Inglês", "Francês", "Alemão", "Holandês"],
    correta: 2,
  },
  {
    pergunta: "Qual animal dorme em pé?",
    respostas: ["Vaca", "Cavalo", "Elefante", "Girafa"],
    correta: 1,
  },
  {
    pergunta: "Qual é a capital da Colômbia?",
    respostas: ["Medellín", "Cali", "Bogotá", "Cartagena"],
    correta: 2,
  },
  {
    pergunta: "Qual é o maior deserto quente do mundo?",
    respostas: ["Gobi", "Saara", "Atacama", "Kalahari"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do inventor do telefone?",
    respostas: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Marconi"],
    correta: 2,
  },
  {
    pergunta: "Qual país sediou as Olimpíadas de 2016?",
    respostas: ["China", "Brasil", "Reino Unido", "Japão"],
    correta: 1,
  },
  {
    pergunta: "Qual é a capital da Suíça?",
    respostas: ["Zurique", "Genebra", "Berna", "Lucerna"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome do maior lago da África?",
    respostas: ["Tanganica", "Vitória", "Malawi", "Chade"],
    correta: 1,
  },
  {
    pergunta: "Qual gás é essencial para a respiração humana?",
    respostas: ["Nitrogênio", "Oxigênio", "Hélio", "Hidrogênio"],
    correta: 1,
  },
  {
    pergunta: "Qual país tem a maior produção de café do mundo?",
    respostas: ["Vietnã", "Colômbia", "Brasil", "Etiópia"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome do maior planeta anão?",
    respostas: ["Plutão", "Ceres", "Eris", "Haumea"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome do movimento da Terra ao redor do Sol?",
    respostas: ["Rotação", "Translação", "Precessão", "Inclinação"],
    correta: 1,
  },
  {
    pergunta: "Qual país é famoso pelos moinhos de vento?",
    respostas: ["Alemanha", "Bélgica", "Holanda", "Suécia"],
    correta: 2,
  },
  {
    pergunta: "Qual é a capital da Noruega?",
    respostas: ["Estocolmo", "Helsinque", "Oslo", "Copenhague"],
    correta: 2,
  },
  {
    pergunta: "Quantos dentes tem um ser humano adulto?",
    respostas: ["28", "30", "32", "34"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome da ciência que estuda os terremotos?",
    respostas: ["Geologia", "Sismologia", "Meteorologia", "Vulcanologia"],
    correta: 1,
  },
  {
    pergunta: "Qual é o maior animal terrestre carnívoro?",
    respostas: ["Leão", "Urso-pardo", "Tigre", "Urso-polar"],
    correta: 3,
  },
  {
    pergunta: "Qual país tem mais títulos da Copa do Mundo?",
    respostas: ["Alemanha", "Itália", "Argentina", "Brasil"],
    correta: 3,
  },
  {
    pergunta: "Qual é a capital da Finlândia?",
    respostas: ["Oslo", "Estocolmo", "Helsinque", "Tallinn"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome do maior recife de corais do mundo?",
    respostas: ["Recife de Belize", "Grande Barreira de Coral", "Recife das Maldivas", "Recife Vermelho"],
    correta: 1,
  },
  {
    pergunta: "Qual é o país de origem do tango?",
    respostas: ["Uruguai", "Argentina", "Brasil", "Chile"],
    correta: 1,
  },
  {
    pergunta: "Qual é a capital da Islândia?",
    respostas: ["Reykjavík", "Oslo", "Helsinque", "Copenhague"],
    correta: 0,
  },
  {
    pergunta: "Qual é o nome do maior rio da Europa?",
    respostas: ["Danúbio", "Volga", "Reno", "Sena"],
    correta: 1,
  },
  {
    pergunta: "Qual é o país mais populoso da África?",
    respostas: ["Egito", "África do Sul", "Nigéria", "Etiópia"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome do maior oceano em profundidade?",
    respostas: ["Atlântico", "Índico", "Ártico", "Pacífico"],
    correta: 3,
  },
  {
    pergunta: "Qual é a capital da Hungria?",
    respostas: ["Viena", "Praga", "Budapeste", "Bratislava"],
    correta: 2,
  },
  {
    pergunta: "Qual é o país mais antigo ainda existente?",
    respostas: ["China", "Egito", "Japão", "Grécia"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome da camada mais externa da Terra?",
    respostas: ["Manto", "Núcleo", "Crosta", "Litosfera"],
    correta: 2,
  },
  {
    pergunta: "Qual é a capital da Irlanda?",
    respostas: ["Belfast", "Dublin", "Cork", "Galway"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do maior arquipélago vulcânico do mundo?",
    respostas: ["Havaí", "Canárias", "Galápagos", "Indonésia"],
    correta: 3,
  },
  {
    pergunta: "Qual país é conhecido como o berço da democracia?",
    respostas: ["Itália", "Grécia", "França", "Egito"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do maior felino do mundo?",
    respostas: ["Leão", "Tigre", "Onça-pintada", "Leopardo"],
    correta: 1,
  },
  {
    pergunta: "Qual é o país de origem do sushi?",
    respostas: ["China", "Coreia do Sul", "Japão", "Tailândia"],
    correta: 2,
  },
  {
    pergunta: "Qual é o maior mamífero terrestre?",
    respostas: ["Rinoceronte", "Elefante africano", "Hipopótamo", "Búfalo"],
    correta: 1,
  },
  {
    pergunta: "Qual é a capital da Escócia?",
    respostas: ["Glasgow", "Edimburgo", "Aberdeen", "Dundee"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do processo de congelamento da água?",
    respostas: ["Fusão", "Evaporação", "Solidificação", "Condensação"],
    correta: 2,
  },
  {
    pergunta: "Qual país é conhecido pelo chocolate?",
    respostas: ["Bélgica", "Brasil", "México", "Canadá"],
    correta: 0,
  },
  {
    pergunta: "Quantos planetas existem no sistema solar?",
    respostas: ["7", "8", "9", "10"],
    correta: 1,
  },
  {
    pergunta: "Qual é o maior pássaro do mundo?",
    respostas: ["Avestruz", "Águia", "Condor", "Emu"],
    correta: 0,
  },
  {
    pergunta: "Qual é a capital da Turquia?",
    respostas: ["Istambul", "Ancara", "Esmirna", "Antália"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome da estrela mais próxima da Terra?",
    respostas: ["Sírius", "Alfa Centauri", "Proxima Centauri", "Sol"],
    correta: 3,
  },
  {
    pergunta: "Qual país tem o formato de uma bota?",
    respostas: ["Portugal", "Itália", "Grécia", "Espanha"],
    correta: 1,
  },
  {
    pergunta: "Qual é o maior réptil do mundo?",
    respostas: ["Crocodilo-do-nilo", "Jacaré-açu", "Crocodilo-marinho", "Dragão-de-komodo"],
    correta: 2,
  },
  {
    pergunta: "Qual é a capital do Peru?",
    respostas: ["Cusco", "Lima", "Arequipa", "Trujillo"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do fenômeno de chuva congelada?",
    respostas: ["Granizo", "Neve", "Geada", "Orvalho"],
    correta: 0,
  },
  {
    pergunta: "Qual é o idioma oficial do Irã?",
    respostas: ["Árabe", "Turco", "Persa", "Curdo"],
    correta: 2,
  },
  {
    pergunta: "Qual é o maior animal voador atual?",
    respostas: ["Águia-real", "Albatroz", "Condor-andino", "Morcego-gigante"],
    correta: 1,
  },
  {
    pergunta: "Qual é a capital da Tailândia?",
    respostas: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"],
    correta: 0,
  },
  {
    pergunta: "Qual é o nome da ciência que estuda os climas?",
    respostas: ["Meteorologia", "Climatologia", "Geografia", "Astronomia"],
    correta: 1,
  },
  {
    pergunta: "Qual país tem mais vulcões ativos?",
    respostas: ["Japão", "Indonésia", "Chile", "Islândia"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do maior golfo do mundo?",
    respostas: ["Golfo do México", "Golfo Pérsico", "Golfo da Califórnia", "Golfo de Bengala"],
    correta: 3,
  },
  {
    pergunta: "Qual é a capital da Venezuela?",
    respostas: ["Maracaibo", "Valência", "Caracas", "Barquisimeto"],
    correta: 2,
  },
  {
    pergunta: "Qual metal é usado principalmente em latas de refrigerante?",
    respostas: ["Aço", "Ferro", "Alumínio", "Estanho"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome do maior deserto da América do Sul?",
    respostas: ["Patagônico", "Atacama", "Sechura", "Monte"],
    correta: 1,
  },
  {
    pergunta: "Qual é o país mais visitado do mundo?",
    respostas: ["Estados Unidos", "Espanha", "França", "Itália"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome da maior floresta tropical do mundo?",
    respostas: ["Congo", "Mata Atlântica", "Floresta Amazônica", "Bornéu"],
    correta: 2,
  },
  {
    pergunta: "Qual é a capital da República Tcheca?",
    respostas: ["Viena", "Praga", "Brno", "Bratislava"],
    correta: 1,
  },
  {
    pergunta: "Qual é o animal símbolo da Austrália?",
    respostas: ["Canguru", "Coala", "Emu", "Dingo"],
    correta: 0,
  },
  {
    pergunta: "Qual é o nome do maior oceano em área?",
    respostas: ["Atlântico", "Índico", "Pacífico", "Ártico"],
    correta: 2,
  },
  {
    pergunta: "Qual país é famoso pelas pirâmides?",
    respostas: ["México", "Peru", "Egito", "Sudão"],
    correta: 2,
  },
  {
    pergunta: "Qual é a capital do Chile?",
    respostas: ["Valparaíso", "Santiago", "Concepción", "La Serena"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome da linha imaginária que divide a Terra em hemisférios norte e sul?",
    respostas: ["Trópico de Câncer", "Trópico de Capricórnio", "Linha do Equador", "Meridiano de Greenwich"],
    correta: 2,
  },
  {
    pergunta: "Qual é o maior inseto do mundo?",
    respostas: ["Besouro-golias", "Louva-a-deus", "Borboleta-monarca", "Formiga-bala"],
    correta: 0,
  },
  {
    pergunta: "Qual é a capital da Bulgária?",
    respostas: ["Sófia", "Plovdiv", "Varna", "Burgas"],
    correta: 0,
  },
  {
    pergunta: "Qual é o nome do maior satélite de Júpiter?",
    respostas: ["Europa", "Io", "Calisto", "Ganimedes"],
    correta: 3,
  },
  {
    pergunta: "Qual país é considerado o berço dos Jogos Olímpicos?",
    respostas: ["Itália", "Grécia", "França", "Egito"],
    correta: 1,
  },
  {
    pergunta: "Qual é a capital da Croácia?",
    respostas: ["Split", "Zagreb", "Dubrovnik", "Rijeka"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do maior rio da Ásia?",
    respostas: ["Yangtzé", "Ganges", "Mekong", "Indo"],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior felino das Américas?",
    respostas: ["Puma", "Jaguar", "Leopardo", "Guepardo"],
    correta: 1,
  },
  {
    pergunta: "Qual é a capital da Malásia?",
    respostas: ["Bangkok", "Singapura", "Kuala Lumpur", "Hanoi"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome do maior mar fechado do mundo?",
    respostas: ["Mar Negro", "Mar Vermelho", "Mar Cáspio", "Mar Morto"],
    correta: 2,
  },
  {
    pergunta: "Qual país é famoso pela Torre Eiffel?",
    respostas: ["Itália", "Bélgica", "França", "Suíça"],
    correta: 2,
  },
  {
    pergunta: "Qual é o maior arquipélago do Pacífico?",
    respostas: ["Filipinas", "Indonésia", "Havaí", "Fiji"],
    correta: 1,
  },
  {
    pergunta: "Qual é a capital da Eslováquia?",
    respostas: ["Viena", "Praga", "Bratislava", "Budapeste"],
    correta: 2,
  },
  {
    pergunta: "Qual é o nome do maior peixe do mundo?",
    respostas: ["Tubarão-branco", "Tubarão-martelo", "Tubarão-baleia", "Atum-azul"],
    correta: 2,
  },
  {
    pergunta: "Qual país é conhecido como Terra do Fogo?",
    respostas: ["Chile", "Argentina", "Islândia", "Canadá"],
    correta: 1,
  },
  {
    pergunta: "Qual é a capital do Marrocos?",
    respostas: ["Casablanca", "Rabat", "Marrakesh", "Tânger"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome da maior ilha do mundo?",
    respostas: ["Austrália", "Groenlândia", "Nova Guiné", "Borneo"],
    correta: 1,
  },
  {
    pergunta: "Qual país é famoso pela Ópera de Sydney?",
    respostas: ["Nova Zelândia", "Austrália", "Reino Unido", "Canadá"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do maior rio da América do Norte?",
    respostas: ["Mississippi", "Colorado", "Yukon", "Columbia"],
    correta: 0,
  },
];

// Tipo para uma pergunta
export type Pergunta = {
  pergunta: string;
  respostas: string[];
  correta: number;
};

// Exportação nomeada
export { perguntas };

// Exportação padrão
export default perguntas;