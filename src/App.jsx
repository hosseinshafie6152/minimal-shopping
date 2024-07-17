import { useRoutes } from "react-router-dom"
import HomePage from './pages/Home.Component'
import ProductPage from "./pages/Products.component"
import NotFoundPage from './components/NotFoundPage'
import CategoriesPage from "./pages/Categories.Component"
import DealsPage from "./pages/Deals.Component"
import WhatsNews from "./pages/WhatsNews.Component"
import DeliveyPage from "./pages/Delivey.Component"
import AccountPage from "./pages/Accout.Component"
import CartPage from "./pages/Cart.Component"
import SupportPage from "./pages/Support.Component"
import SlasesPage from "./pages/Slases.Component"
import ShoppingPage from "./pages/Shopping.Component"
import ProfileComponent from "./components/Account.Component/ProfileComponent"
import OrdersComponent from './components/Account.Component/OrdersComponent'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <ProductPage />
        },
        {
          path: '/categories',
          element: <CategoriesPage />
        },
        {
          path: '/deals',
          element: <DealsPage />
        },
        {
          path: '/what',
          element: <WhatsNews />
        },
        {
          path: '/delivery',
          element: <DeliveyPage />
        },
        {
          path: '/account',
          element:<AccountPage/>
        },
        {
          path: '/cart',
          element : <CartPage/>
        },
        {
          path : '/support',
          element : <SupportPage/>
        },
        {
          path: '/slases',
          element : <SlasesPage/>
        },
        {
          path : '/shopping',
          element : <ShoppingPage/>
        }
      ]
    },
    {
      path: "/*",
      element: <NotFoundPage />
    }
  ])
  return (
    <>
      {routes}
    </>
  )
}

export default App
