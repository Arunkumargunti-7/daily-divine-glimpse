
import { Cross } from "lucide-react";

interface FooterProps {
  language: 'en' | 'es';
}

const Footer = ({ language }: FooterProps) => {
  return (
    <footer className="py-6 w-full flex flex-col items-center justify-center">
      <div className="text-center mb-4">
        <p className="text-lg font-large text-foreground font-playfair">
          {language === 'en' 
            ? "God bless you! Have a Wonderful day!!" 
            : "¡Dios te bendiga! ¡¡Ten un día maravilloso!!"}
        </p>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {/*<Cross className="h-4 w-4" />*/}
        <p>© {new Date().getFullYear()} {language === 'en' ? 'Daily Divine Glimpse' : 'Vislumbre Divino Diario'}</p>
      </div>
    </footer>
  );
};

export default Footer;
