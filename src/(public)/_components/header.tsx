import { Menu } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle 
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle"; // Certifique-se de que o caminho está correto

export function Header() {
  return (
    <header className="h-20 w-full px-6 flex flex-row items-center justify-between uppercase font-sans text-accent-header border-b">
      
      {/* LOGO */}
      <div className="font-extrabold text-[24px] md:text-[32px] leading-tight shrink-0">
        <h2>Megghan</h2>
        <h2>Agnes</h2>
      </div>

      {/* CONTAINER DE NAVEGAÇÃO E TEMA */}
      <div className="flex items-center gap-4 md:gap-14">
        
        {/* MENU DESKTOP: visível apenas em telas grandes */}
        <nav className="hidden md:flex">
          <ul className="flex flex-row gap-14 font-semibold text-2xl">
            <li><a href="#projetos" className="hover:text-primary transition-colors">Projetos</a></li>
            <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
            <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
          </ul>
        </nav>

        {/* BOTÃO DE TEMA: visível em todos os tamanhos */}
        <ModeToggle />

        {/* MENU MOBILE: visível apenas em telas pequenas */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 outline-none">
                <Menu size={32} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetTitle className="text-left mb-8 uppercase font-bold">Menu</SheetTitle>
              <nav className="flex flex-col gap-8 items-start mt-10">
                <a href="#projetos" className="text-2xl font-semibold uppercase hover:text-primary">Projetos</a>
                <a href="#sobre" className="text-2xl font-semibold uppercase hover:text-primary">Sobre</a>
                <a href="#contato" className="text-2xl font-semibold uppercase hover:text-primary">Contato</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
    </header>
  );
}