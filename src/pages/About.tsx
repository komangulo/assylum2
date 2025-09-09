import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/">
            <Button 
              variant="outline" 
              className="bg-transparent border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              ← {t('backToGallery')}
            </Button>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-black mb-8 text-center">
          ¿QUÉ ES <span className="text-red-600">ASSYLUM</span>?
        </h1>

        {/* Apply Now Button */}
        <div className="flex justify-center mb-12">
          <Link to="/contact">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
            >
              {t('applyNow')}
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none space-y-6 text-gray-800">
          <p className="text-lg">
            Bienvenidos a <span className="text-red-600 font-semibold">ASSYLUM</span>, el hogar de los videos de sexo más sucios, calientes y duros jamás filmados en Madrid. <span className="text-red-600 font-semibold">ASSYLUM</span>
          </p>
          
          <p>{t('about.about1')}</p>
          
          <p className="text-red-600 font-semibold">
            La Firma de ASSYLUM
          </p>
          
          <p>{t('about.about2')}</p>
          
          <p className="italic">
            {t('about.signature')}
          </p>
          
          {/* Reviews Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-black mb-6">
              RESEÑAS ENTUSIASTAS SOBRE ASSYLUM
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-600 pl-4">
                <p className="italic">"Todos tus deseos y necesidades pervertidas serán satisfechos. ASSYLUM todavía lo tiene y todavía puede encontrar a las chicas más sexys y crear magia para los miembros de su sitio."</p>
                <p className="text-red-600 mt-2 font-medium">- FreeOnes.com</p>
              </div>
              
              <div className="border-l-4 border-red-600 pl-4">
                <p className="italic">"ASSYLUM sigue creciendo e impresionándonos con su contenido caliente y atrevido."</p>
                <p className="text-red-600 mt-2 font-medium">- RabbitsReviews.com</p>
              </div>
              
              <div className="border-l-4 border-red-600 pl-4">
                <p className="italic">"¿Buscas porno duro? ¡Echa un vistazo a ASSYLUM!"</p>
                <p className="text-red-600 mt-2 font-medium">- TheBestPorn.com</p>
              </div>
              
              <div className="border-l-4 border-red-600 pl-4">
                <p className="italic">"{t('about.review4')}"</p>
                <p className="text-red-600 mt-2 font-medium">- HonestPornReviews.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
