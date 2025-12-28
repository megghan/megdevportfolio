export function Hero() {
  return (
    // Removi h-screen fixo para evitar cortar conteúdo em telas pequenas. Use min-h-screen.
    <div className="min-h-screen w-full flex items-center justify-center">
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 py-2 md:py-0 gap-10 md:gap-20">
        
        {/* TEXTO: Em mobile ocupa 100%, em desktop 1/2 da tela */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-accent-glow font-heading font-extrabold text-5xl md:text-6xl uppercase">
            <span className="text-fuchsia-500">FullStack</span>
          </h2>
          
          {/* Ajustei o texto grande para ser fluido com tamanhos diferentes por tela */}
          <h2 className="text-text-secondary font-heading font-extrabold text-6xl sm:text-7xl md:text-[96px] leading-none md:pl-8 md:-mt-6 uppercase">
            developer
          </h2>
          
          <p className="max-w-[542px] pt-5 text-text-main mt-6 text-lg md:text-xl">
            Olá, eu sou a Megghan. Sou uma desenvolvedora júnior apaixonada por tecnologia sustentável e café. 
            Uso minhas habilidades para construir coisas que tornem a nossa vida mais fácil. Um código por vez.
          </p>

          <p className="max-w-[542px] pt-5 text-muted-foreground text-lg md:text-xl leading-relaxed">
            Vinda do universo da <span className="text-primary font-semibold">Matemática</span>, troquei as fórmulas abstratas pela construção de soluções reais. Hoje, aplico meu raciocínio analítico para transformar lógica pura em interfaces fluidas e backends eficientes.
            </p>
          
          <div className="relative group mt-12 overflow-hidden rounded-full p-0.5">
            {/* A borda animada (o neon que gira) */}
            <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#DE68FB_0%,#3b82f6_50%,#DE68FB_100%)] group-hover:animate-[spin_1.5s_linear_infinite]" />
            
            <button className="relative flex h-16 w-64 items-center justify-center rounded-full glass-effect text-white font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Entre em contato
                <span className="text-accent-glow">→</span>
              </span>
            </button>
          </div>
    
        </div>

        {/* IMAGEM CIRCULAR COM NEON 10/10 NO HOVER */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end">
  <div className="group relative p-1 inline-flex items-center justify-center overflow-hidden rounded-full">
    
    {/* CAMADA DO NEON (Gira em círculo agora) */}
    <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] 
                    bg-[conic-gradient(from_90deg_at_50%_50%,#DE68FB_0%,#3b82f6_50%,#DE68FB_100%)] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
    />

    {/* CONTAINER DA IMAGEM (Círculo interno) */}
    <div className="relative rounded-full p-0.75 bg-[#1C1A22] z-10">
      <img 
        src="./dev.jpeg" 
        alt="Avatar Megghan" 
        className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full 
                   grayscale-10 group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
      />
    </div>
    
    {/* GLOW EXTERNO (Aura roxa) */}
    <div className="absolute inset-0 bg-accent-glow/5 blur-3xl rounded-full 
                    group-hover:bg-accent-glow/20 transition-all duration-500 -z-10">
        </div>
    </div>
    </div>

      </section>
    </div>
  );
}