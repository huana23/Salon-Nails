import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";

function MainContent() {
  const { t } = useTranslation();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const response = await fetch("/api/shops");
        const data = await response.json();
        // console.log("API data:", data);

        const mappedData = data.map(shop => ({
          title: shop.name,
          price: 0,
          location: `${shop.city} • ${shop.state}`,
          description: shop.website || "",
          rating:
            shop.reviews && shop.reviews.length > 0
              ? (
                  shop.reviews.reduce((sum, r) => sum + r.rating, 0) /
                  shop.reviews.length
                ).toFixed(1)
              : 0,
          img:
            shop.imgStore && shop.imgStore !== ""
              ? shop.imgStore.startsWith("http")
                ? shop.imgStore
                : `http://localhost:5001${shop.imgStore}`
              : "https://placekitten.com/400/300",
        }));

        setDestinations(mappedData);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, []);


  const totalPages = Math.ceil(destinations.length / itemsPerPage);

  const currentItems = destinations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <section className="lg:col-span-9">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-[10px] font-label font-extrabold uppercase tracking-[0.3em] text-secondary">
            {t("pageAllSalons.mainContent.curated_collection")}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-on-surface mt-2">
            {t("pageAllSalons.mainContent.sydney_artistry")}
          </h1>
        </div>
        <div className="text-sm font-body text-on-surface-variant italic">
          {t("pageAllSalons.mainContent.showing_destinations", {
            count: destinations.length,
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {loading ? (
          <p>Loading...</p>
        ) : destinations.length > 0 ? (
          currentItems.map((item, index) => (
            <DestinationCard key={index} {...item} />
          ))
        ) : (
          <p>No destinations found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-20 flex justify-center items-center gap-8 border-t border-outline-variant/20 pt-10">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="text-xs font-label uppercase tracking-widest text-outline hover:text-primary transition-all flex items-center gap-2 disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("previous")}
        </button>

        <div className="flex gap-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`text-xs font-label ${
                currentPage === page
                  ? "font-bold text-primary border-b border-primary pb-1"
                  : "text-outline hover:text-primary cursor-pointer transition-all"
              }`}
            >
              {page.toString().padStart(2, "0")}
            </span>
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentPage(prev => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="text-xs font-label uppercase tracking-widest text-outline hover:text-primary transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {t("next")}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export default MainContent;