
import { Button } from '@/components/ui/button';
import { Sun, Book, Cross } from 'lucide-react';

{/*type Language = 'en' | 'es';*/}

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  return (
    <header className="w-full py-4 px-6 md:px-8 flex justify-between items-center sacred-gradient">
      <div className="flex items-center gap-3">
        {/*<Cross className="h-6 w-6 text-spiritual-dark" />*/}
        <h1 className="text-5xl font-bold text-spiritual-dark font-playfair">
          {language === 'en' ? 'Peace Verses' : 'Versos de Paz'}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        {/*<Button 
          variant="ghost" 
          size="sm" 
          className={`text-sm ${language === 'en' ? 'bg-spiritual/20' : ''}`}
          onClick={() => onLanguageChange('en')}
        >
          EN
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`text-sm ${language === 'es' ? 'bg-spiritual/20' : ''}`}
          onClick={() => onLanguageChange('es')}
        >
          ES
        </Button>*/}
      </div>
    </header>
  );
};

export default Header;

