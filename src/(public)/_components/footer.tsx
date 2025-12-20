import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer id="contato" className="w-full py-12 px-6 border-t border-white/5 bg-transparent mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Info de Contato */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold uppercase italic text-zinc">Vamos conversar?</h2>
          <a 
            href="mailto:adevmeg@gmail.com" 
            className="text-accent-glow hover:underline text-lg font-medium block mt-2"
          >
            adevmeg@gmail.com
          </a>
        </div>

        {/* Links Sociais */}
        <div className="flex gap-6">
          <a href="https://github.com/megghan" className="hover:text-accent-glow transition-colors">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/megghan/" className="hover:text-accent-glow transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:adevmeg@gmail.com" className="hover:text-accent-glow transition-colors">
            <Mail size={28} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-slate-500 text-xs uppercase tracking-widest text-center md:text-right">
          <p>© {anoAtual} - Megghan Agnes</p>
          <p>Built with React & Tailwind</p>
        </div>

      </div>
    </footer>
  );
}