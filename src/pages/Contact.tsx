import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">¡Contáctanos! ¡No seas tímida!</h1>
          
          <div className="space-y-6 text-gray-800 mb-8 text-justify">
            <p>
              En ASSYLUM, nos encanta escuchar a nuestros fans. Juntos somos una comunidad de pervertidos con ideas afines. 
              Tenemos el máximo respeto por tus ideas y tu privacidad. Así que si aprecias lo que ves aquí, háznoslo saber. 
              Si ves algo que podamos hacer mejor, eso también es bienvenido. 
            </p>
            
            <p>
              Si hay una sumisa en particular que te gusta, podemos invitarla a regresar para más, y tal vez decir algo bueno por ti.
            </p>
            
            <p>
              Nos encanta especialmente escuchar ideas de nuestros fans sobre historias y escenas para filmar. 
              Comparte tus ideas con nosotros y es posible que las veas en película. ¡No seas tímida!
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-red-600 mb-6">Formulario de Contacto para sumisas</h2>
            <p className="text-gray-700 mb-8">
              Haz clic en el botón de abajo para acceder a nuestro formulario de contacto
            </p>
            <a
              href="https://eu.jotform.com/build/252052203363343"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg transition-colors duration-300"
            >
              Abrir Formulario de Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;