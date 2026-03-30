import { NavLink } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        { to: "/", label: t("header.explore") },
        { to: "/all-salons", label: t("header.salons") },
        { to: "/trends", label: t("header.trends") },
    ];

    return (
        <header>
            <nav className="sticky top-0 w-full z-50 bg-[#fcf9f4] dark:bg-stone-950 bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md">
                <div className="flex justify-between items-center w-full max-w-screen-2xl mx-auto px-6 lg:px-10 py-4">

                    {/* Logo + Menu */}
                    <div className="flex items-center gap-12">
                        <NavLink
                            to="/"
                            className="text-2xl font-serif font-bold text-[#80534c] dark:text-[#dba39a]"
                        >
                            {t("header.brand")}
                        </NavLink>

                        {/* Menu desktop */}
                        <div className="hidden md:flex items-center gap-8">
                            {menuItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `text-stone-600 dark:text-stone-400 font-medium font-serif italic tracking-tight border-b-2 transition-all duration-300 ${
                                            isActive
                                                ? "border-[#80534c] text-[#80534c] dark:text-[#dba39a]"
                                                : "border-transparent hover:border-[#80534c] hover:text-[#80534c] dark:hover:text-[#dba39a]"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>

                        {/* Menu mobile */}
                        {mobileMenuOpen && (
                            <div
                                className={`
                                    md:hidden absolute top-full left-0 w-full 
                                    bg-[#fcf9f4] dark:bg-stone-950 
                                    p-4 flex flex-col gap-4
                                    transform transition-all duration-300 ease-in-out
                                    ${mobileMenuOpen
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 -translate-y-4 pointer-events-none"}
                                `}
                            >
                                {menuItems.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        className={({ isActive }) =>
                                            `font-serif italic text-stone-600 dark:text-stone-400 border-b-2 transition-all duration-300 ${
                                                isActive
                                                    ? "border-[#80534c] text-[#80534c] dark:text-[#dba39a]"
                                                    : "border-transparent hover:border-[#80534c] hover:text-[#80534c] dark:hover:text-[#dba39a]"
                                            }`
                                        }
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Search + Language + User */}
                    <div className="flex items-center gap-6">
                        {/* Search */}
                        <div className="hidden lg:flex items-center bg-white dark:bg-stone-900 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                            <Search className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-300" />
                            <input
                                className="bg-transparent border-none text-sm focus:ring-0 placeholder-gray-400 dark:placeholder-gray-500 w-48 outline-none"
                                placeholder={t("header.searchPlaceholder")}
                                type="text"
                            />
                        </div>

                        {/* Language + User */}
                        <div className="flex items-center gap-4 text-[#80534c] dark:text-[#dba39a]">
                            <LanguageSwitcher />
                            <User className="w-6 h-6 cursor-pointer hover:text-[#dba39a] transition-colors duration-300" />
                            {/* Hamburger mobile */}
                            <div className="w-6 h-6 md:hidden cursor-pointer">
                                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Header;