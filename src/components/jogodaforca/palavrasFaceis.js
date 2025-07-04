const palavrasFaceis = [
  { palavra: 'CACHORRO', dica: 'Animal de estimação que late' },
  { palavra: 'GATO', dica: 'Animal de estimação que mia' },
  { palavra: 'BANANA', dica: 'Fruta amarela e curva' },
  { palavra: 'CARRO', dica: 'Veículo de quatro rodas' },
  { palavra: 'ESCOLA', dica: 'Lugar de estudar' },
  { palavra: 'PRAIA', dica: 'Lugar com areia e mar' },
  { palavra: 'BOLA', dica: 'Objeto usado em esportes como futebol' },
  { palavra: 'LIVRO', dica: 'Objeto para ler histórias' },
  { palavra: 'SAPATO', dica: 'Usado nos pés para caminhar' },
  { palavra: 'CAMISA', dica: 'Roupa para a parte de cima do corpo' },
  { palavra: 'PIZZA', dica: 'Comida italiana redonda' },
  { palavra: 'SORVETE', dica: 'Doce gelado, ótimo no verão' },
  { palavra: 'AVIÃO', dica: 'Meio de transporte que voa' },
  { palavra: 'FLORESTA', dica: 'Lugar com muitas árvores' },
  { palavra: 'CADERNO', dica: 'Usado para escrever na escola' },
  { palavra: 'JANELA', dica: 'Abertura na parede para ver fora' },
  { palavra: 'CAMA', dica: 'Onde dormimos' },
  { palavra: 'ABACAXI', dica: 'Fruta tropical com coroa' },
  { palavra: 'BICICLETA', dica: 'Meio de transporte de duas rodas' },
  { palavra: 'CHUVA', dica: 'Água que cai do céu' },
  { palavra: 'DENTE', dica: 'Usado para mastigar' },
  { palavra: 'ELEFANTE', dica: 'Maior animal terrestre' },
  { palavra: 'FANTASMA', dica: 'Assombra casas em histórias' },
  { palavra: 'GIRASSOL', dica: 'Flor amarela que segue o sol' },
  { palavra: 'HOSPITAL', dica: 'Lugar para cuidar da saúde' },
  { palavra: 'IGREJA', dica: 'Lugar de oração' },
  { palavra: 'JORNAL', dica: 'Traz notícias todos os dias' },
  { palavra: 'LAGARTO', dica: 'Réptil de corpo comprido' },
  { palavra: 'MACACO', dica: 'Animal que gosta de bananas' },
  { palavra: 'NAVIO', dica: 'Transporte marítimo grande' },
  { palavra: 'OCULOS', dica: 'Usado para enxergar melhor' },
  { palavra: 'PAPEL', dica: 'Usado para escrever ou desenhar' },
  { palavra: 'QUADRO', dica: 'Pode ser negro ou de pintura' },
  { palavra: 'RATO', dica: 'Roedor pequeno' },
  { palavra: 'SAPO', dica: 'Anfíbio que pula' },
  { palavra: 'TIGRE', dica: 'Felino listrado' },
  { palavra: 'URSO', dica: 'Animal grande e peludo' },
  { palavra: 'VIOLAO', dica: 'Instrumento musical de cordas' },
  { palavra: 'XADREZ', dica: 'Jogo de tabuleiro com peças' },
  { palavra: 'ZEBRA', dica: 'Animal listrado preto e branco' },
  { palavra: 'AMARELO', dica: 'Cor do sol' },
  { palavra: 'BOMBA', dica: 'Explosivo perigoso' },
  { palavra: 'CINEMA', dica: 'Lugar para ver filmes' },
  { palavra: 'DADO', dica: 'Cubo usado em jogos' },
  { palavra: 'ESCADA', dica: 'Serve para subir ou descer' },
  { palavra: 'FACA', dica: 'Usada para cortar alimentos' },
  { palavra: 'GELADO', dica: 'Muito frio' },
  { palavra: 'HOMEM', dica: 'Adulto do sexo masculino' },
  { palavra: 'ILHA', dica: 'Terra cercada de água' },
  { palavra: 'JARDIM', dica: 'Lugar com flores e plantas' },
  { palavra: 'LIMAO', dica: 'Fruta azeda e verde' },
  { palavra: 'MELANCIA', dica: 'Fruta grande e vermelha por dentro' },
  { palavra: 'NOITE', dica: 'Período escuro do dia' },
  { palavra: 'OLHO', dica: 'Usado para enxergar' },
  { palavra: 'PATO', dica: 'Ave que faz quack' },
  { palavra: 'QUEIJO', dica: 'Feito de leite, vai na pizza' },
  { palavra: 'RUA', dica: 'Onde passam carros e pessoas' },
  { palavra: 'SOL', dica: 'Estrela que ilumina o dia' },
  { palavra: 'TAMPA', dica: 'Serve para fechar potes' },
  { palavra: 'URUBU', dica: 'Ave que come carniça' },
  { palavra: 'VACA', dica: 'Animal que dá leite' },
  { palavra: 'WIFI', dica: 'Internet sem fio' },
  { palavra: 'XICARA', dica: 'Usada para tomar café' },
  { palavra: 'ZANGAO', dica: 'Inseto parecido com abelha' },
  { palavra: 'ALFACE', dica: 'Folha verde da salada' },
  { palavra: 'BONECA', dica: 'Brinquedo de criança' },
  { palavra: 'CAVALO', dica: 'Animal usado para montar' },
  { palavra: 'DENTE', dica: 'Parte da boca' },
  { palavra: 'ESCOVA', dica: 'Usada para pentear cabelo' },
  { palavra: 'FITA', dica: 'Tira fina de tecido ou plástico' },
  { palavra: 'GATO', dica: 'Animal doméstico que mia' },
  { palavra: 'HEROI', dica: 'Salva pessoas em perigo' },
  { palavra: 'INVERNO', dica: 'Estação mais fria' },
  { palavra: 'JACARE', dica: 'Réptil de boca grande' },
  { palavra: 'LUA', dica: 'Satélite natural da Terra' },
  { palavra: 'MORANGO', dica: 'Fruta vermelha pequena' },
  { palavra: 'NINHO', dica: 'Casa de passarinho' },
  { palavra: 'OVO', dica: 'Sai da galinha' },
  { palavra: 'PATO', dica: 'Ave aquática' },
  { palavra: 'QUADRA', dica: 'Espaço para esportes' },
  { palavra: 'RAPOSA', dica: 'Animal astuto' },
  { palavra: 'SAPATO', dica: 'Usado nos pés' },
  { palavra: 'TAMANDUA', dica: 'Animal que come formigas' },
  { palavra: 'URSO', dica: 'Animal grande e peludo' },
  { palavra: 'VASSOURA', dica: 'Usada para varrer' },
  { palavra: 'XAXIM', dica: 'Tipo de planta' },
  { palavra: 'ZEBRA', dica: 'Animal africano listrado' },
  { palavra: 'ABACATE', dica: 'Fruta verde por fora e amarela por dentro' },
  { palavra: 'BOLACHA', dica: 'Doce crocante' },
  { palavra: 'CENOURA', dica: 'Legume laranja' },
  { palavra: 'DADO', dica: 'Cubo de jogo' },
  { palavra: 'ESCUDO', dica: 'Protege em batalhas' },
  { palavra: 'FANTOCHE', dica: 'Boneco de mão' },
  { palavra: 'GIRAFA', dica: 'Animal de pescoço longo' },
  { palavra: 'HIPOPOTAMO', dica: 'Animal grande de rio' },
  { palavra: 'IGLU', dica: 'Casa de gelo' },
  { palavra: 'JORNAL', dica: 'Traz notícias' },
  { palavra: 'LAGARTIXA', dica: 'Réptil pequeno de parede' },
  { palavra: 'MEL', dica: 'Doce feito por abelhas' },
  { palavra: 'NAVALHA', dica: 'Lâmina de barbear' },
  { palavra: 'OCULOS', dica: 'Ajuda a enxergar' },
  { palavra: 'PIPOCA', dica: 'Milho estourado' },
  { palavra: 'QUILO', dica: 'Unidade de peso' },
  { palavra: 'RINOCERONTE', dica: 'Animal com chifre no nariz' },
  { palavra: 'SALADA', dica: 'Mistura de folhas e legumes' },
  { palavra: 'TOMATE', dica: 'Fruta vermelha usada em salada' },
  { palavra: 'URNA', dica: 'Usada em eleições' },
  { palavra: 'VIOLETA', dica: 'Flor roxa' },
  { palavra: 'XAROPE', dica: 'Remédio líquido' },
  { palavra: 'ZANGAO', dica: 'Inseto macho da abelha' },
  { palavra: 'ANEL', dica: 'Jóia para o dedo' },
  { palavra: 'BEXIGA', dica: 'Balão de festa' },
  { palavra: 'CACHIMBO', dica: 'Usado para fumar' },
  { palavra: 'DROMEDARIO', dica: 'Camelo de uma corcova' },
  { palavra: 'ESCORPIAO', dica: 'Animal com ferrão' },
  { palavra: 'FOLHA', dica: 'Parte da árvore' },
  { palavra: 'GALO', dica: 'Canta ao amanhecer' },
  { palavra: 'HIDRANTE', dica: 'Serve para apagar incêndio' },
  { palavra: 'IMAGEM', dica: 'Representação visual' },
  { palavra: 'JUBA', dica: 'Cabelo do leão' },
  { palavra: 'LENTE', dica: 'Parte do óculos' },
  { palavra: 'MOLA', dica: 'Objeto que estica e volta' },
  { palavra: 'NARIZ', dica: 'Usado para cheirar' },
  { palavra: 'OURO', dica: 'Metal precioso amarelo' },
  { palavra: 'PATO', dica: 'Ave aquática' },
  { palavra: 'QUADRO', dica: 'Objeto pendurado na parede' },
  { palavra: 'RUA', dica: 'Via pública' },
  { palavra: 'SAPATO', dica: 'Usado nos pés' },
  { palavra: 'TIGELA', dica: 'Tigela para sopa' },
  { palavra: 'URSO', dica: 'Animal grande' },
  { palavra: 'VACA', dica: 'Animal que dá leite' },
  { palavra: 'XADREZ', dica: 'Jogo de tabuleiro' },
  { palavra: 'ZEBRA', dica: 'Animal africano listrado' },
];

export default palavrasFaceis;
