

//A INTERFACE
interface Projeto {
  id: number;
  titulo: string;
  subtitulo: string;
  imagem: string;
  tags: string[];
  link: string;
}

//LISTA DE DADOS
const MEUS_PROJETOS: Projeto[] = [
  {
    id: 1,
    titulo: "Conecta +",
    subtitulo: "Plataforma de Acessibilidade e Cidades Inteligentes",
    imagem: "./projetos/CONECTA.jpeg", 
    tags: ["Next.js","NeonBD", "Prisma ORM","Typescript"],
    link: "https://github.com/megghan/smart-city"
  },
  {
    id: 2,
    titulo: "Solaris",
    subtitulo: "Análises estatísticas e gerar insights sobre o desempenho de painéis solares.",
    imagem: "./projetos/SOLARIS.jpeg",
    tags: ["React", "Power BI"],
    link: "https://github.com/megghan/Micro-SaaS-Solar"
  }
];

//O COMPONENTE DO CARD (Molde)
function CardProjeto({ projeto }: { projeto: Projeto }) {
  return (
    <div className="bg-slate-900/80 rounded-3xl border border-white/10 hover:border-accent-glow transition-all group p-3">
      <div className="overflow-hidden rounded-xl mb-4">
        <img 
          src={projeto.imagem} 
          alt={projeto.titulo} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
      <span className="text-accent-glow text-sm font-bold uppercase tracking-wider">
        {projeto.subtitulo}
      </span>
      <h3 className="text-2xl font-bold text-white mt-2 italic uppercase">
        {projeto.titulo}
      </h3>
      <a 
        href={projeto.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block mt-4 text-accent-glow hover:text-white transition-colors font-bold"
      >
        VER PROJETO →
      </a>
      <div className="flex flex-wrap gap-2 mt-4">
        {projeto.tags.map(tag => (
          <span key={tag} className="text-[10px] bg-white/10 border border-white/10 px-2 py-1 rounded uppercase text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// 4. A SEÇÃO PRINCIPAL
export function Projetos() {
  return (
    <section id="projetos" className="py-24 px-6 flex justify-center bg-transparent">
      <div className="w-full max-w-7xl">
        <h2 className="text-text-secondary font-heading text-5xl font-extrabold mb-12 uppercase italic">
          Projetos <span className="text-accent-glow">_</span>
        </h2>

        {/* GRID RESPONSIVA: 1 col no mobile, 2 no tablet, 3 no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* USANDO O NOME CORRETO: MEUS_PROJETOS e CardProjeto */}
          {MEUS_PROJETOS.map((item) => (
            <CardProjeto key={item.id} projeto={item} />
          ))}
        </div>
      </div>
    </section>
  );
}