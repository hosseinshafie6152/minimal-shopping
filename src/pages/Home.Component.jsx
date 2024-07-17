import { Outlet } from "react-router-dom"
import SalesComponent from "../components/SalesComponent"
import MenuComponent from "../components/MenuComponent"

function HomePage() {
  return (
    <>
      <div>
        <div>
          <SalesComponent />
        </div>
        <div className='bg-gray1 w-[1440px] mx-auto'>
          <MenuComponent />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default HomePage