import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getActressesForPage, TOTAL_PAGES, ActressData } from "@/data/actresses";
import { useLanguage } from "@/contexts/LanguageContext";

const MainContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const currentActresses = getActressesForPage(currentPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= TOTAL_PAGES) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(TOTAL_PAGES - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < TOTAL_PAGES - 1) {
      rangeWithDots.push('...', TOTAL_PAGES);
    } else {
      if (TOTAL_PAGES > 1) rangeWithDots.push(TOTAL_PAGES);
    }

    return rangeWithDots;
  };

  const handleActressClick = (actress: ActressData) => {
    navigate(`/actress/${actress.id}`);
  };

  return (
    <main className="flex-1 p-2 md:p-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="border-b border-yellow-400 pb-2 mb-6">
          <h1 className="text-3xl font-bold text-black mb-1">ASSYLUM</h1>
          <h2 className="text-xl text-red-600">SUBMISSIVE</h2>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {currentActresses.map((actress) => (
            <div 
              key={actress.id}
              className="group relative overflow-hidden bg-white border border-yellow-200 hover:border-yellow-500 transition-colors duration-300 shadow-sm"
              onClick={() => handleActressClick(actress)}
            >
              <div className="relative aspect-[3/4] w-full">
                <img
                  src={actress.image}
                  alt={actress.name}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                  <div className="w-full">
                    <h3 className="text-white font-medium text-sm truncate">{actress.name}</h3>
                    <p className="text-gray-200 text-xs">{actress.nationality}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {TOTAL_PAGES > 1 && (
          <div className="mt-8 flex justify-center items-center space-x-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 px-3 text-black border-gray-400 hover:bg-gray-100 hover:border-gray-500"
            >
              &lt;
            </Button>
            
            {getVisiblePages().map((page, index) => (
              <Button
                key={index}
                variant={page === currentPage ? "default" : "outline"}
                size="sm"
                className={`h-8 w-8 p-0 border-gray-400 ${
                  page === '...' 
                    ? 'text-black border-transparent cursor-default' 
                    : page === currentPage 
                      ? 'bg-red-600 text-white hover:bg-red-500 border-red-600' 
                      : 'text-black hover:bg-gray-100 hover:border-gray-500'
                }`}
                onClick={() => typeof page === 'number' && handlePageChange(page)}
                disabled={page === '...'}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === TOTAL_PAGES}
              className="h-8 px-3 text-black border-gray-400 hover:bg-gray-100 hover:border-gray-500"
            >
              &gt;
            </Button>
          </div>
        )}

        {/* New Content Section */}
        <div className="mt-12 space-y-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-red-600">Join the ward to see it all - ASSYLUM</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black">New:</h3>
            <h4 className="text-lg text-gray-800">Maid for Punishment--Full Cut</h4>
            
            <h3 className="text-xl font-semibold text-black mt-6">New Session:</h3>
            <h4 className="text-lg text-gray-800">Vow of Depravity</h4>
            
            <h3 className="text-xl font-semibold text-black mt-6">New Session:</h3>
            <h4 className="text-lg text-gray-800">Little Anal Serving Toy</h4>
            
            <h3 className="text-xl font-semibold text-black mt-6">New Session:</h3>
            <h4 className="text-lg text-gray-800">The Anal Soccer Mom & Her Inner Schoolgirl</h4>
            
            <h3 className="text-xl font-semibold text-black mt-6">New Session:</h3>
            <h4 className="text-lg text-gray-800">Odyssey of Ass and Filth</h4>
            
            <h3 className="text-xl font-semibold text-black mt-6">New:</h3>
            <h4 className="text-lg text-gray-800">Maid for Punishment--Full Cut</h4>
            
            <h3 className="text-xl font-semibold text-black mt-6">New Session:</h3>
            <h4 className="text-lg text-gray-800">Vow of Depravity</h4>
          </div>

          <div className="pt-8">
            <h3 className="text-xl font-semibold text-black mb-4">Sessions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Vow of Depravity",
                "Little Anal Serving Toy",
                "The Anal Soccer Mom & Her Inner...",
                "Odyssey of Ass and Filth",
                "BTS Roundtable: Hurt vs Harm in BDSM Porn",
                "Maid for Punishment--Full Cut",
                "Ass Not Done Yet 2",
                "The Psycho-ANAL-ysis of Rebel Rhyder",
                "Goddess of the Loo",
                "Anal Solace and Suffering",
                "Rebel Gets a Reward",
                "Kingdom of Ass & Pain Director's Cut",
                "The Ass Bead Game",
                "Anal Sadism Science Lab",
                "As In a Game of Ball",
                "Blind Little Anal Pleaser",
                "Anal Strip Search",
                "The Impossible Anal Journey",
                "Anal Serving Wench",
                "Piggie in a Dress",
                "SodoMate, the Filthy Anal Dating App",
                "Punished Lily",
                "Rebel on Collaboration, Subspace, and...",
                "Director's Cut: Little Anal Bug Girl",
                "Pressed Lily",
                "5 Days Later: chatting with Leah",
                "Elements of Submission",
                "Anal Quest for the Chalice of Sadistic...",
                "Director's Cut--Sadistic Sustenance",
                "Last Dance, In Chains",
                "Unnatural Dialogues Concerning...",
                "Of Purity and Filth",
                "In Deepest Painal May We Find Peace",
                "Chatting with Violet October",
                "Sphincterbell Director's Cut",
                "The Gang Hangs After the Gangbang"
              ].map((title, index) => (
                <div key={index} className="text-gray-800 hover:text-red-600 cursor-pointer transition-colors">
                  {title}
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Title</h3>
          </div>
        </div>

        <div className="h-px bg-yellow-200 w-full my-12"></div>

        {/* SEO Headers Section */}
        <div className="max-w-4xl mx-auto py-8 space-y-6">
          <h2 className="text-2xl font-bold text-red-600">Join the ward to see it all - ASSYLUM</h2>
          
          <h3 className="text-xl font-semibold">New:</h3>
          <h4 className="text-lg text-gray-800">Maid for Punishment--Full Cut</h4>
          
          <h3 className="text-xl font-semibold mt-4">New Session:</h3>
          <h4 className="text-lg text-gray-800">Vow of Depravity</h4>
          
          <h3 className="text-xl font-semibold mt-4">New Session:</h3>
          <h4 className="text-lg text-gray-800">Little Anal Serving Toy</h4>
          
          <h3 className="text-xl font-semibold mt-4">New Session:</h3>
          <h4 className="text-lg text-gray-800">The Anal Soccer Mom & Her Inner Schoolgirl</h4>
          
          <h3 className="text-xl font-semibold mt-4">New Session:</h3>
          <h4 className="text-lg text-gray-800">Odyssey of Ass and Filth</h4>
          
          <h3 className="text-xl font-semibold mt-4">Sessions</h3>
          <div className="space-y-2">
            <h4 className="text-lg text-gray-800">Vow of Depravity</h4>
            <h4 className="text-lg text-gray-800">Little Anal Serving Toy</h4>
            <h4 className="text-lg text-gray-800">The Anal Soccer Mom & Her Inner...</h4>
            <h4 className="text-lg text-gray-800">Odyssey of Ass and Filth</h4>
            <h4 className="text-lg text-gray-800">BTS Roundtable: Hurt vs Harm in BDSM Porn</h4>
            <h4 className="text-lg text-gray-800">Maid for Punishment--Full Cut</h4>
            <h4 className="text-lg text-gray-800">Ass Not Done Yet 2</h4>
            <h4 className="text-lg text-gray-800">The Psycho-ANAL-ysis of Rebel Rhyder</h4>
            <h4 className="text-lg text-gray-800">Goddess of the Loo</h4>
            <h4 className="text-lg text-gray-800">Anal Solace and Suffering</h4>
            <h4 className="text-lg text-gray-800">Rebel Gets a Reward</h4>
            <h4 className="text-lg text-gray-800">Kingdom of Ass & Pain Director's Cut</h4>
            <h4 className="text-lg text-gray-800">The Ass Bead Game</h4>
            <h4 className="text-lg text-gray-800">Anal Sadism Science Lab</h4>
            <h4 className="text-lg text-gray-800">As In a Game of Ball</h4>
            <h4 className="text-lg text-gray-800">Blind Little Anal Pleaser</h4>
            <h4 className="text-lg text-gray-800">Anal Strip Search</h4>
            <h4 className="text-lg text-gray-800">The Impossible Anal Journey</h4>
            <h4 className="text-lg text-gray-800">Anal Serving Wench</h4>
            <h4 className="text-lg text-gray-800">Piggie in a Dress</h4>
            <h4 className="text-lg text-gray-800">SodoMate, the Filthy Anal Dating App</h4>
            <h4 className="text-lg text-gray-800">Punished Lily</h4>
            <h4 className="text-lg text-gray-800">Rebel on Collaboration, Subspace, and...</h4>
            <h4 className="text-lg text-gray-800">Director's Cut: Little Anal Bug Girl</h4>
            <h4 className="text-lg text-gray-800">Pressed Lily</h4>
            <h4 className="text-lg text-gray-800">5 Days Later: chatting with Leah</h4>
            <h4 className="text-lg text-gray-800">Elements of Submission</h4>
            <h4 className="text-lg text-gray-800">Anal Quest for the Chalice of Sadistic...</h4>
            <h4 className="text-lg text-gray-800">Director's Cut--Sadistic Sustenance</h4>
            <h4 className="text-lg text-gray-800">Last Dance, In Chains</h4>
            <h4 className="text-lg text-gray-800">Unnatural Dialogues Concerning...</h4>
            <h4 className="text-lg text-gray-800">Of Purity and Filth</h4>
            <h4 className="text-lg text-gray-800">In Deepest Painal May We Find Peace</h4>
            <h4 className="text-lg text-gray-800">Chatting with Violet October</h4>
            <h4 className="text-lg text-gray-800">Sphincterbell Director's Cut</h4>
            <h4 className="text-lg text-gray-800">The Gang Hangs After the Gangbang</h4>
          </div>
          
          <h3 className="text-xl font-semibold mt-6">Title</h3>
        </div>

        <div className="h-px bg-yellow-200 w-full my-8"></div>

        {/* Promotional Section */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* First Promo Block */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-black">¿Cansado de películas falsas? - ASSYLUM</h2>
            <h3 className="text-xl md:text-2xl text-red-600">Sé real con ASSYLUM</h3>
            <p className="text-gray-800">Una experiencia porno inmersiva como ninguna otra:</p>
            <ul className="list-disc list-inside text-black space-y-2 pl-4">
              <li>entrevistas con modelos, detrás de cámaras y tomas descartadas</li>
            </ul>
            <p className="text-gray-800 mt-4">Zorras insaciables de todos los ámbitos de la vida:</p>
            <ul className="list-disc list-inside text-black space-y-2 pl-4">
              <li>estrellas porno, acompañantes, amateurs y principiantes</li>
            </ul>
            <p className="text-black mt-6 font-medium">¿Tienes alguna idea? Entonces llámanos.</p>
            <p className="text-red-600 font-semibold">¡Nos encanta convertir las ideas de nuestros fans en porno!</p>
          </div>

          {/* Divider */}
          <div className="h-px bg-yellow-200 w-full"></div>

          {/* Second Promo Block */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600">¡ATRÉVETE A SER DEPRAVADA! - ASSYLUM</h2>
            <p className="text-black">
              Mujeres sumisas maravillosas folladas exactamente como les gusta: ¡como pequeñas sumisas sin valor!
              Sesiones de castigo, entrenamiento, obediencia y servicialidad.
            </p>
            <p className="text-black">
              A cada zorra se le hace una entrevista (¡no creerás sus confesiones!); se le ordena que se desnude, que se masturbe y que se corra; luego es saqueada y saqueada en una ardiente escena de sexo específicamente adaptada a lo que la excita. Es duro. Es crudo. ¡Es real! (¡Y grabado en HD!)
            </p>
            <p className="text-black font-medium">
              Si te gustan las mujeres sumisas, ¡te encantará ASSYLUM! No hacemos porno cualquiera, hacemos exactamente el tipo de porno de sumisión y dominación que anhelas. Y no nos andamos con tonterías.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-yellow-200 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} ASSYLUM - {t('allRights')}
          </p>
          <p className="text-gray-500 text-xs mt-1">
            {t('legalNotice')}
          </p>
        </footer>
      </div>
    </main>
  );
};

export default MainContent;