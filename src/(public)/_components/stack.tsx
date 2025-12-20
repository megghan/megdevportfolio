import { 
  FileCode, 
  Globe, 
  Layers, 
  Layout, 
  Palette, 
  Terminal 
} from "lucide-react"; // Usando ícones da lucide que você já tem

const TECHS = [
  { nome: "React", icon: <Globe />, cor: "hover:text-cyan-400" },
  { nome: "TypeScript", icon: <FileCode />, cor: "hover:text-blue-500" },
  { nome: "Tailwind", icon: <Palette />, cor: "hover:text-teal-400" },
  { nome: "Node.js", icon: <Terminal />, cor: "hover:text-green-500" },
  { nome: "Next.js", icon: <Layers />, cor: "hover:text-white" },
  { nome: "Shadcn UI", icon: <Layout />, cor: "hover:text-slate-200" },
];

export function Technologies() {
  return (
    <section className="py-20 px-6 flex justify-center bg-transparent">
      <div className="w-full max-w-7xl">
        <h2 className="text-text-secondary font-heading text-4xl md:text-5xl font-extrabold mb-12 uppercase italic">
          Tech <span className="text-accent-glow text-3xl">Stack</span>
        </h2>

        {/* Grid de Tecnologias */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {TECHS.map((tech) => (
            <div 
              key={tech.nome}
              className={`flex flex-col items-center justify-center p-8 bg-slate-900/80 border border-white/5 rounded-2xl transition-all duration-300 group ${tech.cor} hover:border-current hover:bg-slate-900/80`}
            >
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-125">
                {tech.icon}
              </div>
              <span className="font-sans font-bold text-sm uppercase tracking-wider text-slate-400 group-hover:text-white">
                {tech.nome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}