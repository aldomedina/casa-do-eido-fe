import { renameObjectKeysWithPrefix } from "../../../utils";

const acomodacoes = {
  "p-1":
    "A casa possui 1 loft, 2 suites e 3 quartos sendo ideal para viajantes que apreciam privacidade e tranquilidade. Aos hóspedes é oferecida uma experiência de hospedagem íntima, muito única e exclusiva, combinação da natureza, do tradicional, da cultura e o conforto da modernidade. Todos estes alojamentos são diferentes mas compartilham as mesmas vibraçõesluxo descontraído, desenhados para relaxar, recarregar e desfrutar ao máximo.",
  "p-2":
    "Todas as acomodações possuem casas de banho privadas, cada uma com a sua característica singular. Os pisos e tetos de madeira evocam a tradição e conforto. Alguns móveis e peças originais foram restaurados e complementados com outros mais contemporâneas, criando-se um espaço em equilíbrio com a arquitetura tradicional. Estes foram pensados para criar um ambiente simples e harmonioso, sofisticado mas descontraído, em que se sinta relaxado e perfeitamente confortável na sua estadia.",
  "loft-title": "loft",
  "loft-content":
    "Conhecida também por Casa do Capitão pelos vizinhos, a Casa do Eido – sustainable living & nature experiences tem sido, desde gerações, uma casa de família e, agora, um espaço de refúgio e vivências, onde pode fazer uma pausa, desligar e reconetar.",
  "suites-title": "suites",
  "suites-content":
    "As suítes, espaçosas e serenas, são únicas. Cada uma possui a sua sala privada, dotada de TV, um sofá, máquina de café e variedade de chás. Poderá descansar, ler um livro ou fazer uma sesta no espaçoso e confortável sofá. Uma atmosfera tranquila e reconfortante para uma experiência exclusiva e íntima. As casas de banho das suites têm uma banheira vitoriana, ideal para um banho relaxante, oferecendo uma experiência de luxo ainda mais romântica",
  "quartos-title": "quartos",
  "quartos-content":
    "Os quartos, numa fusão entre a arquitetura tradicional e o conforto moderno, têm cada um, um design de traços simples e únicos, mas em comum a procura do conforto e aconchego.",
  "features-entrada-privada": "Entrada privada",
  "features-vista": "Vista para a montanha",
  "features-cafe": "Máquina de café",
  "features-kitchenette": "Kitchenette equipada",
  "features-vitoriana": "Banheira vitoriana",
  "features-area-estar": "Área de estar",
  "features-tv-plano": "Televisão de ecrã plano",
};

export default renameObjectKeysWithPrefix(acomodacoes, "acomodacoes-");
