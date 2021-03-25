import { renameObjectKeysWithPrefix } from "../../../utils";

const experiencias = {
  "p-1":
    "Nos dias quentes, mergulhe na água revigorante da piscina, salgada e livre de cloro. O ambiente é envolvido pela quietude e aromas do jardim, e pelo chilrear dos pássaros. Relaxe ao sol embalado pelo som calmante da água da nascente que corre continuamente. Existem recantos, terraços e pátios espalhados pela casa, pensados como refúgios para quem pretende a privacidade e tranquilidade.",
  "p-2":
    "O Espigueiro é um deles. Onde no passado se secavam os cereais da família, hoje as vivências são outras. Pode recostarse na cama e sentir a brisa fresca por entre as frestas e deleitar-se com a vista para as montanhas e piscina, ler ou simplesmente fazer uma sesta.",
  "p-3":
    "Na Adega, especialmente aprazível nas tórridas tardes estivais, poderá ler um livro da pequena biblioteca, jogar um jogo de tabuleiro, tocar uma música na viola, desfrutar um copo de",
  "card-1-title": "PEQUENO ALMOÇO",
  "card-1-p-1":
    "O pequeno almoço em dias ensolarados pode ser desfrutado no terraço com vista para a piscina. Servido das 8h às 11h terá tempo para pausadamente saborear um delicioso refeição caseira. O aroma do café acabado de preparar ou o bolo recém feito ainda a fumegar convidam a que se inicie o festim.",
  "card-1-p-2":
    "Os ingredientes são biológicos e locais: deliciosos ovos das nossas galinhas, compotas caseiras, mel do Gerês, iogurte e frutas frescas diversas, colhidas maioritariamente nos nossos pomares. O pão de diferentes variedades exige a manteiga caseira, o presunto e chouriços curados durante o inverno ou os magníficos queijos portugueses.",
  "card-1-p-3":
    "Sumos frescos, chás, e café acompanham o repasto. Existem também diversas opções vegetarianas e veganas: granolas, bebidas vegetais e manteigas de frutos secos e sementes - de amendoim, amêndoa, caju - são alguns dos exemplos. Agora sim, está preparado para o seu dia!",
  "card-2-title": "OUTRAS REFEIÇÕES",
  "card-2-p-1":
    "Durante o dia poderá pedir uma refeição ligeira - petiscos, salada ou sanduíche - ou uma bebida fresca - um sumo de fruta ou um cocktail artesanal. Deleite-se com um único e refrescante vinho verde, uma sangria, ou um vinho do Porto.",
  "card-2-p-2":
    "Se lhe apetecer passear podemos também preparar uma cesta de piquenique ou uma merenda para levar para um dos trilhos. À disposição está também o Honesty Bar onde pode desfrutar uma bebida sempre que o desejar.",
  "card-2-p-3":
    "À noite é possível sob pedido antecipado , reservar o jantar, uma opção de matiz tradicional ou vegetariana, mas ambas baseadas nos pilares locais, biológicos, frescos, sazonais.",
};

export default renameObjectKeysWithPrefix(experiencias, "experiencias-");
