import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center p-8 bg-white border border-gray-200 rounded-lg shadow-sm max-w-md w-full">
        <h1 className="text-6xl font-bold mb-4 text-red-600">404</h1>
        <p className="text-2xl text-gray-800 mb-8">
          {t('pageNotFound')}
        </p>
        <Link to="/">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            {t('returnHome')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
