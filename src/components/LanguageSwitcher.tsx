import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="text-yellow-400 hover:bg-yellow-500/10 hover:text-yellow-300 transition-colors"
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <div className="flex items-center gap-2">
        <Globe className="h-5 w-5" />
        <span className="font-mono text-sm">{language.toUpperCase()}</span>
      </div>
    </Button>
  );
};

export default LanguageSwitcher;
