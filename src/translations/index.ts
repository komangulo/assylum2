interface NestedObject {
  [key: string]: string | NestedObject;
}

interface Translations {
  [key: string]: NestedObject;
}

export const translations: Translations = {
  en: {
    // Header
    home: "Home",
    aboutLink: "About",
    login: "Login",
    signup: "Sign Up",
    applyNow: "Apply Now",
    
    // Hero Section
    submissive: "SUBMISSIVE",
    heroTitle: "The most beautiful submissive girls in the world",
    ageWarning: "You must be at least 18 years old to enter this website",
    enterSite: "ENTER SITE",
    
    // Main Content
    allRights: "All Rights Reserved",
    legalNotice: "18 U.S.C. 2257 COMPLIANCE NOTICE",
    
    // Actress Profile
    actressNotFound: "Actress not found",
    backToGallery: "Back to Gallery",
    nationality: "Nationality",
    published: "Published",
    length: "Length",
    minutes: "minutes",
    language: "Language",
    watchFullVideo: "WATCH FULL VIDEO",
    addToFavorites: "Add to Favorites",
    
    // 404
    pageNotFound: "Page not found",
    returnHome: "Return to Home",
    
    // About Page
    about: {
      whatIs: "What Is",
      welcome1: "Salut, mes amis! And welcome to",
      welcome2: "the home of the filthiest, horniest, hardest fuck vids ever to be shot in the UK.",
      about1: "This is the place where I shoot the kind of stuff I love - hot-'n'-nasty sex with English girls who are genuinely sub and love getting used and abused. The kind of hussies who cream their knickers just thinking about getting fucked rough and raw. And they're the only kind I shoot. The real deals, the ones who don't fake it (because they can't). Just like I can't shoot fake crappy porn (because I hate it). It's got to be real.",
      tagline: "Real subs. Real sex. Real orgasms.\n(And I've got loads of those for you.)",
      about2: "We update our site daily. We have many sorts of content such as, milfs, teens, facefucking, spanking, orgasms orgasms orgasms, \"Oh and I always make them eat my spunk at the end of the scene as well. Which they never know is going to happen. Which is a nice surprise for them...\n\nSo join me and Andy - my dirty old pervo of a cameraman and editor - as we work our way through a bevy of hot and hungry English harlots for your delight and delectation. What they get is what they deserve.",
      signature: "Pascal's Signature",
      reviews: "RAVE REVIEWS FOR PSS:",
      review1: "All of your kinky desires and needs will be fulfilled. Pascal has still got it and he can still find the sexiest girls around and create magic for the members of his site.",
      review2: "Pascals Sub Sluts continues to grow and impress us with its hot and raunchy content.",
      review3: "Looking for rough porn? Check out Pascal's Subsluts!",
      review4: "The addition of behind the scenes footage adds an extra dimension to what was a good site in the first place."
    }
  },
  es: {
    // Header
    home: "Inicio",
    aboutLink: "Acerca de",
    login: "Iniciar Sesión",
    signup: "Registrarse",
    applyNow: "Aplicar Ahora",
    
    // Hero Section
    submissive: "SUMISAS",
    heroTitle: "Las chicas sumisas más hermosas del mundo",
    ageWarning: "Debes tener al menos 18 años para entrar a este sitio web",
    enterSite: "ENTRAR AL SITIO",
    
    // Main Content
    allRights: "Todos los derechos reservados",
    legalNotice: "AVISO DE CUMPLIMIENTO 18 U.S.C. 2257",
    
    // Actress Profile
    actressNotFound: "Actriz no encontrada",
    backToGallery: "Volver a la galería",
    nationality: "Nacionalidad",
    published: "Publicado",
    length: "Duración",
    minutes: "minutos",
    language: "Idioma",
    watchFullVideo: "VER VIDEO COMPLETO",
    addToFavorites: "Añadir a Favoritos",
    
    // 404
    pageNotFound: "Página no encontrada",
    returnHome: "Volver al Inicio",
    
    // About Page
    about: {
      whatIs: "¿QUÉ ES PASCAL SUB SLUTS?",
      welcome1: "Bienvenidos a PascalsSubsluts, el hogar de los videos de sexo más sucios, calientes y duros jamás filmados en Madrid. PascalsSubsluts",
      about1: "Este es el lugar donde grabo el tipo de contenido que me encanta: sexo caliente y asqueroso con chicas inglesas que son genuinamente sumisas y les encanta ser usadas y abusadas. El tipo de zorras que se mojan las braguitas solo de pensar en que las follen de manera bruta y sin protección. Y son el único tipo que grabo. Las de verdad, las que no fingen (porque no pueden). Al igual que yo no puedo grabar porno falso y de mala calidad (porque lo odio). Tiene que ser real.",
      tagline: "Sumisas reales. Sexo real. Orgasmos reales. (Y tengo un montón de ellos para ti).",
      about2: "Actualizamos nuestro sitio diariamente. Tenemos muchos tipos de contenido como milfs, adolescentes, facefucking, azotes, orgasmos orgasmos orgasmos, 'Oh, y siempre las hago comer mi leche al final de la escena. Lo cual nunca saben que va a pasar. Lo cual es una agradable sorpresa para ellas...\n\nAsí que únete a mí y a Andy -mi sucio y viejo pervertido de cámara y editor- mientras nos abrimos camino a través de un grupo de rameras inglesas calientes y hambrientas para tu deleite y disfrute. Lo que reciben es lo que se merecen.",
      signature: "La Firma de Pascal",
      reviews: "RESEÑAS ENTRUSIASTAS SOBRE PSS:",
      review1: "Todos tus deseos y necesidades pervertidas serán satisfechos. Pascal todavía lo tiene y todavía puede encontrar a las chicas más sexys y crear magia para los miembros de su sitio.",
      review2: "Pascals Sub Sluts sigue creciendo e impresionándonos con su contenido caliente y atrevido.",
      review3: "¿Buscas porno duro? ¡Echa un vistazo a Pascal's Subsluts!",
      review4: "La adición de imágenes detrás de escena añade una dimensión extra a lo que ya era un buen sitio.",
      applyNow: "APLICAR AHORA"
    }
  }
};

export const t = (key: string, language: string = 'es'): string => {
  const keys = key.split('.');
  let value: any = translations[language] || translations['en'];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }
  
  return value || key;
};
