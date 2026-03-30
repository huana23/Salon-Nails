import { Link } from "react-router-dom";
import { Share2, Heart, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";


function Footer() {
  const { t } = useTranslation();
    return (
        <footer className="bg-[#fcf9f4] dark:bg-stone-950 w-full border-t border-stone-200/15 dark:border-stone-800/15">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 max-w-screen-2xl mx-auto px-6 lg:px-10">

                {/* Logo + Description */}
                <div className="space-y-6">
                    <Link
                        to="/"
                        className="text-2xl font-serif font-bold text-[#80534c] dark:text-[#dba39a]"
                    >
                        {t("header.brand")}
                    </Link>
                    <p className="text-stone-500 dark:text-stone-400 font-body text-sm max-w-xs">
                        {t("footer.description")}
                    </p>
                    <div className="flex gap-4">
                        <Share2 className="w-5 h-5 text-primary cursor-pointer hover:text-[#775a19] dark:hover:text-[#dba39a] transition-colors" />
                        <Heart className="w-5 h-5 text-primary cursor-pointer hover:text-[#775a19] dark:hover:text-[#dba39a] transition-colors" />
                        <Globe className="w-5 h-5 text-primary cursor-pointer hover:text-[#775a19] dark:hover:text-[#dba39a] transition-colors" />
                    </div>
                </div>

                {/* Explore Cities */}
                <div>
                    <h4 className="font-label uppercase tracking-widest text-xs font-bold text-[#80534c] mb-6">
                        {t("footer.cities.title")}
                    </h4>
                    <ul className="space-y-4">
                        <li>
                            <Link
                                to="/sydney"
                                className="font-sans uppercase tracking-widest text-xs text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200"
                            >
                                {t("footer.cities.new_south_wales")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/melbourne"
                                className="font-sans uppercase tracking-widest text-xs text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200"
                            >
                                {t("footer.cities.victoria")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/brisbane"
                                className="font-sans uppercase tracking-widest text-xs text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200"
                            >
                                {t("footer.cities.queensland")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/adelaide"
                                className="font-sans uppercase tracking-widest text-xs text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200"
                            >
                                {t("footer.cities.south_australia")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/perth"
                                className="font-sans uppercase tracking-widest text-xs text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200"
                            >
                                 {t("footer.cities.western_australia")}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* About + Copyright */}
                <div>
                    <h4 className="font-label uppercase tracking-widest text-xs font-bold text-[#80534c] mb-6">
                        {t("footer.about.title")}
                    </h4>
                    <ul className="space-y-4">
                        <li>
                            <Link
                                to="/about"
                                className="font-sans uppercase tracking-widest text-xs text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200"
                            >
                                {t("footer.about.about")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="font-sans uppercase tracking-widest text-xs text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200"
                            >
                                {t("footer.about.contact")}
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
            <div className="w-full bg-[#f4eee5] dark:bg-stone-900 border-t border-stone-200/10 dark:border-stone-800/10 text-center py-4">
                <p className="text-stone-500 dark:text-stone-400 text-[10px] uppercase tracking-widest">
                    {t("footer.copyright")}
                </p>
            </div>
        </footer>
    );
}

export default Footer;