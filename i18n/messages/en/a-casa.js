import { renameObjectKeysWithPrefix } from "../../../utils";

const aCasa = {
  "p-1":
    "A Casa do Eido - sustainable living & nature experiences conhecida também na aldeia e arredores, como a Casa do Capitão, foi desde gerações, uma casa de família. Quando em pequenas Ana e Rosa passavam ali longas horas da sua infância, não pensavam então que esta seria no futuro, não apenas a sua casa, mas o seu projeto de vida. Depois de um longo e cuidado processo de remodelação, dá-se em 2014 a abertura da Casa do Eido.",
  "p-2":
    "Mais que um local de hospedagem, a Casa do Eido foi desde logo pensada simultaneamente como um espaço de refúgio e de vivências. Fazer uma pausa, desligar e reconectar. O tempo flui suavemente aqui. Viver a natureza, respirar o ar puro e limpo, sentir o silêncio, a tranquilidade e o conforto. Aqui, cada recanto foi pensado para ser único, para que cada experiência seja única, num ambiente de luxo descontraído",
  sustentabilidade: "sustainability",
  "p-s-1":
    "Desde do princípio que a sustentabilidade foi pensada como um elemento fundamental e de base do projeto: nos materiais utilizados no restauro, como a madeira, granito e cortiça, nas formas de obtenção de energia - solar e biomassa. Valorizando e potenciando a economia local, a reconstrução foi feita com a colaboração de carpinteiros e construtores da região. Cutelaria, pratos, cadeiras, mesas, mobília de quartos, roupa de mesa, cama e banho e amenidades - todos maioritariamente fabricados em Portugal. Muitos produzidos unicamente para a Casa do Eido. Alguns cuidadosamente recuperados.",
  "p-s-2":
    "A sustentabilidade está igualmente presente no modo de vida. Aqui preservam-se tradições e experienciam-se novos sabores, cheiros e vivências. A apanha da castanha e da noz no outono, os ovos recolhidos diariamente, os enchidos preparados no tempo frio para degustar meses mais tarde, o pão quente de milho e centeio cozinhado no forno a lenha. Na temporada mais quente, os pomares e hortas da família enchem-se de frutas e legumes frescos que são utilizados no pequeno almoço e nas outras refeições servidas na casa. Acreditando no valor e potencial económico do local, a casa do eido conta e dá preferência aos",
};

export default renameObjectKeysWithPrefix(aCasa, "a-casa-");
