import { useParams, Link } from "react-router-dom";
import { actresses } from "@/data/actresses";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ActressProfile = () => {
  const { id } = useParams<{ id: string }>();
  const actress = actresses.find(a => 
    a.id.toString() === id || a.name.toLowerCase().replace(/\s+/g, '-') === id
  );

  const { t } = useLanguage();

  if (!actress) {
    return (
      <div className="min-h-screen bg-black text-yellow-400 p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">{t('actressNotFound')}</h1>
        <Link to="/">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
            {t('backToGallery')}
          </Button>
        </Link>
      </div>
    );
  }

  const formattedDate = format(actress.publishedDate, 'MMMM d, yyyy');
  const language = `English - ${actress.nationality}`;
  const firstName = actress.name.split(' ')[0];
  const nationality = actress.nationality;

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button 
              variant="outline" 
              className="bg-transparent border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              ← {t('backToGallery')}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <img 
                src={actress.image} 
                alt={actress.name}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Title and Basic Info */}
              <div>
                <h1 className="text-3xl font-bold text-red-600 mb-2">{actress.name}</h1>
                <div className="text-gray-700 space-y-1 text-sm">
                  <p>{t('nationality')}: {nationality}</p>
                  <p>{t('published')}: {formattedDate} | {t('length')}: 16 {t('minutes')} | {t('language')}: {language}</p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-50 p-4 border border-gray-200 rounded">
                <p className="text-gray-800 mb-4">
                  Chica {nationality.toLowerCase()}, {actress.name} tiene una audición conmigo.
                  Responderá preguntas generales sobre su vida, fantasías sexuales y experiencia.
                </p>
                <p className="text-red-600 font-bold text-lg">¡{actress.name} en acción!</p>
              </div>

              {/* Main Content */}
              <div className="text-gray-800 text-sm space-y-4">
                <p className="text-red-600 font-semibold">{actress.name}</p>
                <p>
                  Hay algo que decir sobre la visibilidad. Cuando ves personas en ciertos entornos que te atraen —en películas o ciertos trabajos—, eso se convierte en una posibilidad más vívida, como "esto podría ser tú". Bueno, amigos, el porno no es diferente, y en PSS somos muy conscientes de ello. Una parte significativa de nuestras SubSluts vienen a nosotras porque ven el respeto que les damos a nuestras modelos. Aunque las llamamos sumisas, nuestras queridas SubSluts tienen voz y agencia sobre el trabajo que hacen aquí con nosotras, y eso realmente mejora el contenido. ¿Por qué decimos todo esto? PSS lleva MUCHO tiempo aquí —el sitio en sí ya es mayor de edad en todo el mundo desde el año pasado—. Así que no debería sorprender cuando una SubSlut es de hecho más joven que la propia PascalsSubSluts. {firstName} es una de esas chicas. Tiene todo lo necesario —un "éxito" en todos los sentidos—. Además de todo eso, también tiene un entusiasmo real por el trabajo.
                </p>
                <p>
                  De hecho, muchas de nuestras SubSluts tienen este "joie de vivre" en su trabajo, porque ven a PSS como un lugar seguro donde sus deseos sumisos pueden ser satisfechos libremente. Claro, cuando se quitan la ropa, quedan absolutamente destrozadas, pero solo podemos lograr eso hablando con estas chicas de antemano para asegurarnos de que realmente les guste y que de hecho quieran ser destrozadas por una polla. Así que, disfruta del regreso de {firstName} a PSS esta semana, recibiendo su propia sesión personalizada. No es solo suerte que tantas de estas chicas malvadas lleguen a PSS como lo hacen. Ponemos mucho corazón en respetar a estas perras, porque realmente lo hacemos, y ellas lo ven.
                </p>
                <p className="text-red-600 font-semibold">
                  Conoce a las sumisas aquí primero
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-4">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 text-lg">
                  {t('watchFullVideo')}
                </Button>
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700">
                  {t('addToFavorites')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActressProfile;
