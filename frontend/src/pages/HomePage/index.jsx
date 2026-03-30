import HeroBanner from "../../components/sections/HeroBanner";
import TrendingStyles from "../../components/sections/TrendingStyles";
import TopSalons from "../../components/sections/TopSalons";
import CityExplore from "../../components/sections/CityExplore";
import LatestReviews from "../../components/sections/LatestReviews";






function HomePage() {
    return (
        <>
            <HeroBanner />
            <TopSalons />
            <TrendingStyles />
            <CityExplore />
            <LatestReviews />


        </>
    );
}

export default HomePage;