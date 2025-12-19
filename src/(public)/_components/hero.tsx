export function Hero (){
    return(
        <div className="h-screen mt-1">
            <section className="gap-20 pt-32 flex flex-row items-center justify-between w-full max-w-7xl px-4">
                <div className="w-[610px]">
                    <h2 className="text-accent-glow font-heading font-extrabold text-6xl">FullStack</h2>
                    <h2 className="text-text-secondary font-heading font-extrabold text-[96px]
                                    pl-[33px] mt-[-40px]">developer</h2>
                    <p className="w-[542px] text-text-main">Olá, eu sou a Megghan. Sou uma desenvolvedora júnior  apaixonada por tecnologia sustentável e café. Uso minhas habilidades para construir coisas que tornem a nossa vida mais fácil. Um código por vez.</p>
                    <button className="text-text-main mt-20 font-sans rounded-[50px] bg-slate-400 h-16 w-60 italic border-white">
                        Entre em contato!</button>
                </div>
                <div className="w-[610px]">
                    <img src="./dev.jpeg" alt ="Avatar/foto de perfil" className="mr-[140px] w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-accent-glow/50"></img>
                    
                </div>
            </section>
        </div>
    )
}