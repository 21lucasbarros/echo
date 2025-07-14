import Article from "./ui/article";
import type { ArticleProps } from "./ui/article";

const news: ArticleProps[] = [
  {
    borderColor: "border-[#ff4f0f]",
    type: "REFLEXÃO #001",
    title: "A Estética do Invisível",
    resume:
      "Há algo poderoso no que não se vê, no que se sente. A verdadeira elegância não grita, ela sussurra. Como Jerry Lorenzo constrói narrativas através de silhuetas, nós construímos através de momentos.",
    link: "https://example.com/a-estetica-do-invisivel",
  },
  {
    borderColor: "border-[#075b5e]",
    type: "CULTURA #002",
    title: "O Retorno de um Silêncio Inquebrável",
    resume:
      "Mais que uma banda, o Oasis foi a trilha de uma geração inquieta. Seu retorno não é apenas musical — é simbólico. É o reencontro com uma voz que nunca deixou de ecoar nas entrelinhas da cultura pop britânica.",
  },
  {
    borderColor: "border-[#7d0a0a]",
    type: "Futebol #001",
    title: "Como Joan Laporta Transformou Dívida em Oportunidade",
    resume:
      "Com o respaldo de Goldman Sachs e JP Morgan, Joan Laporta transformou uma dívida imediata em uma estratégia de longo prazo. O Barcelona trocou urgência por fôlego financeiro, mantendo ambição e elegância.",
    link: "https://example.com/visao-de-longo-prazo",
  },
  {
    borderColor: "border-[#443627]",
    type: "CULTURA #003",
    title: "Kojima: Entre o Cinema e o Videogame",
    resume:
      "Hideo Kojima não cria apenas jogos — ele arquiteta experiências narrativas que fundem cinema, filosofia e interatividade. Com Death Stranding 2, ele mais uma vez transforma o videogame em linguagem de autor, reunindo um elenco digno de Hollywood e explorando até o limite o potencial do meio. Não é entretenimento. É visão criativa em seu estado mais puro.",
    link: "https://example.com/kojima-cinema-e-videogame",
  },
];

export default function Editorial() {
  return (
    <section id="editorial" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">EDITORIAL</h2>
            <div className="space-y-8">
              {news.map((item, index) => (
                <Article
                  borderColor={item.borderColor}
                  key={index}
                  type={item.type}
                  title={item.title}
                  resume={item.resume}
                  link={item.link}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-[4/3] bg-neutral-900" />
            <div className="aspect-square bg-amber-100" />
          </div>
        </div>
        <a
          href="#"
          className="inline-block mt-5 text-lg font-medium text-zinc-800 hover:underline transition-colors"
          aria-label="Ver todos os artigos"
        >
          Ver todos os artigos
        </a>
      </div>
    </section>
  );
}
