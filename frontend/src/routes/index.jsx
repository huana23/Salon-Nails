import HomePage from '../pages/HomePage'
import AllSalons from '../pages/AllSalons'
import Dashboard from '../pages/admin/Dashboard'
import ManageShop from '../pages/admin/ManageShop'
import AddShop from '../pages/admin/ManageShop/AddShop'
import EditShop from '../pages/admin/ManageShop/EditShop'





import AdminLayout from '../components/layouts/AdminLayout'



const publicRoutes = [
    { path: '/', component: HomePage},
    { path: '/all-salons', component: AllSalons},
    { path: '/admin', component: Dashboard, layout: AdminLayout },
    { path: '/admin/manage-shop', component: ManageShop, layout: AdminLayout },
    { path: '/admin/manage-shop/add', component: AddShop, layout: AdminLayout },
    { path: 'admin/manage-shop/edit/:shopId', component: EditShop, layout: AdminLayout }











]

const privateRoutes = []

export {publicRoutes, privateRoutes}