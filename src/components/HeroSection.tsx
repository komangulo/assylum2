import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };
  
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center">
      <div className="absolute inset-0 bg-white/90" />
      
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <div onClick={handleHomeClick} className="cursor-pointer">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 leading-tight text-black font-sans">
              ASSYLUM
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-red-600 mb-8 tracking-wider">
              {t('submissive')}
            </h2>
          </div>
        </div>
        
        <div className="text-black mb-12">
          <p className="text-xl md:text-2xl mb-6 font-light tracking-wide">
            {t('heroTitle')}
          </p>
          <p className="text-red-600 mb-8 text-base font-medium">
            {t('ageWarning')}
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white text-xl px-16 py-6 rounded-sm border-2 border-red-600 hover:border-red-700 transition-all duration-300 transform hover:scale-105 font-sans font-bold tracking-wider"
            onClick={onEnter}
          >
            {t('enterSite')}
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="text-xs text-gray-600 space-y-1">
          <p>AVISO DE CUMPLIMIENTO 18 U.S.C. 2257</p>
          <p>Todas las personas tenían al menos 18 años al momento de la producción.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
