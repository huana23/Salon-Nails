import { Search, CheckCircle, Brush, Crown } from "lucide-react";
import { useTranslation } from "react-i18next";

function HeroBanner() {
    const { t } = useTranslation();

    const title = t("hero-section.title");
    const highlight = t("hero-section.highlight");


    const [beforeHighlight, afterHighlight] = title.split("{highlight}");
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-surface-container-low">
  <div className="max-w-7xl mx-auto px-8 relative z-10 grid md:grid-cols-2 items-center gap-16">
    <div>
   
      <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8 leading-[1.1]">
        {beforeHighlight} <br/>
        <span className="italic font-normal text-primary">{highlight}</span>
        {afterHighlight}
      </h1>

 
      <p className="text-lg text-on-surface-variant mb-12 max-w-lg leading-relaxed">
        {t("hero-section.description")}
      </p>

    
      <div className="relative max-w-md group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="text-outline" />
        </div>
        <input 
          className="w-full pl-12 pr-4 py-5 bg-surface-container-lowest rounded-xl border-none editorial-shadow focus:ring-2 focus:ring-primary/20 placeholder:text-stone-400 font-medium" 
          placeholder={t("hero-section.searchPlaceholder")} 
          type="text"
        />
        <button className="absolute right-3 top-2 bottom-2 px-6 rose-gold-gradient text-on-primary rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
          {t("hero-section.btnSearch")}
        </button>
      </div>
    </div>

    
    <div className="relative hidden md:block">
      <div className="aspect-[4/5] rounded-[2rem] overflow-hidden editorial-shadow transform rotate-2">
        <img 
          className="w-full h-full object-cover" 
          data-alt="Luxury Nail Art" 
          src="https://i.pinimg.com/1200x/fe/16/5e/fe165efb4406ca207866a8ee6febe723.jpg"
        />
      </div>
      <div className="absolute -bottom-10 -left-10 aspect-square w-64 rounded-xl overflow-hidden editorial-shadow border-[12px] border-surface-container-lowest transform -rotate-3">
        <img 
          className="w-full h-full object-cover" 
          data-alt="Thiết kế móng tay vàng hồng chi tiết" 
          src="https://i.pinimg.com/1200x/fe/16/5e/fe165efb4406ca207866a8ee6febe723.jpg"
        />
      </div>
    </div>
  </div>


  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-secondary-container/20 rounded-full blur-[120px]"></div>
</section>
    );
}

export default HeroBanner;