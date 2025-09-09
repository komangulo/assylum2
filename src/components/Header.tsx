import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  return (
    <header className="w-full bg-background border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold hover:opacity-80 transition-opacity cursor-pointer font-sans">
              <span className="text-red-600 font-bold">ASSYLUM</span>
              <span className="text-red-600 block sm:inline"> MADRID</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-black hover:text-red-600 transition-colors">
                {t('home')}
              </Link>
              <Link to="/about" className="text-black hover:text-red-600 transition-colors">
                {t('aboutLink')}
              </Link>
              <Link to="/contact" className="text-black hover:text-red-600 transition-colors">
                {t('applyNow')}
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="outline">{t('login')}</Button>
            <Button variant="default">{t('signup')}</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
