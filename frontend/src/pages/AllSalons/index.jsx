import SideBar from "./SideBar";
import MainContent from "./MainContent";


function AllSalons() {
    return (
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-8">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                <SideBar />
                <MainContent />



            </div>
        </div>
    );
}

export default AllSalons;