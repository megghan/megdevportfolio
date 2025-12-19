export function Header (){
    return(
        <div className="h-20 pb-1 text-accent-header uppercase flex flex-row
                        gap-14 items-center font-sans">
            <div className="font-extrabold text-[32px]">
                <h2>MEgghan</h2>
                <h2>Agnes</h2>
            </div>
            <div>
                <ul className="flex flex-row gap-14 font-semibold text-2xl">
                    <li><a href="#projetos">Projetos</a></li>
                    <li>Sobre</li>
                    <li>contato</li>
                </ul>
            </div>
        </div>
    )
}