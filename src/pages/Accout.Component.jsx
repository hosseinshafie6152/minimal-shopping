import useFetch from '../hooks/useFetch'
import IconBill from '../icons/IconBill'
import IconOrders from '../icons/IconOrders'
import IconProfile from '../icons/IconProfile'
import IconSupport from '../icons/IconSupport'
import { Link, Outlet } from 'react-router-dom';


function AccountPage() {
  const { data } = useFetch('http://localhost:8000/user');
  if (data !== undefined) {
    
    return (
      <div className="w-[1440px] bg-gray1 mx-auto border-t-2 border-t-gray2 my-10 flex justify-center">

        <div className=" w-[500px] bg-white flex flex-col justify-center items-center rounded-2xl m-7">
          <div id="specifications" className=" mb-7 flex flex-col justify-center items-center">
            <img src="./images/logo.png" alt="profile" className=" rounded-full w-40" />
            <p id="name">{data[0].fullName}</p>
            <p id="phoneNumber">{data[0].phoneNumber}</p>
          </div>
          <div id="nav" className="w-[500px] bg-white grid grid-cols-2 grid-rows-2 gap-3 p-4 text-[20px] ">
            <Link to='/account/profile' id="profile" className="bg-gray1 flex justify-center items-center rounded-md flex-col hover:font-bold hover:scale-105 " >
              <IconProfile />
              profile
            </Link>
            <Link to='/account/orders' id="oreders" className="bg-gray1 flex justify-center items-center rounded-md flex-col hover:font-bold hover:scale-105 ">
              <IconOrders />
              my orders
            </Link>
            <Link to='/account/support' id="support" className="bg-gray1 flex justify-center items-center rounded-md flex-col hover:font-bold hover:scale-105 " >
              <IconSupport />
              Support
            </Link>
            <Link to='/account/bill' id="bill" className="bg-gray1 flex justify-center items-center rounded-md flex-col hover:font-bold hover:scale-105">
              <IconBill />
              Bill
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    )
  }
}

export default AccountPage