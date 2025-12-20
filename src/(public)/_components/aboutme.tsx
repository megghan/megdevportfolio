export function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6 flex justify-center bg-transparent">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Lado do Texto */}
        <div className="space-y-6">
          <h2 className="text-text-secondary font-heading text-4xl md:text-5xl font-extrabold uppercase italic">
            Sobre <span className="text-accent-glow">Megghan</span>
          </h2>
          <div className="space-y-4 text-text-main text-lg leading-relaxed">
            <p>
              Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam 
              por baixo do capô. Hoje, como desenvolvedora FullStack, foco em criar interfaces que não 
              são apenas bonitas, mas funcionais e acessíveis.
            </p>
            <p>
              Acredito que a tecnologia deve ser uma ferramenta para o bem. Por isso, me interesso muito 
              por <span className="font-bold">desenvolvimento sustentável</span> e como o código pode ajudar a otimizar o uso de recursos no mundo real.
            </p>
            <p className="italic text-accent-glow">
              "Café no sistema, código na tela e o mundo um pouco mais verde."
            </p>
          </div>
        </div>

        {/* Lado das Curiosidades/Status */}
        <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 space-y-6">
          <h3 className="text-white font-bold uppercase tracking-widest text-sm">Status Atual</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-sm">Disponível para novos projetos e colaborações.</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-accent-glow" />
              <p className="text-sm">Estudando: Next.js e Performance Web.</p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/10">
            <p className="text-xs uppercase text-slate-500 font-bold mb-4">Interesses</p>
            <div className="flex flex-wrap gap-3">
              {["☕ Café Especial", "🌿 Sustentabilidade", "🎮 Games", "📚 Leitura"].map(item => (
                <span key={item} className="px-4 py-2 bg-white/5 rounded-full text-xs border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}