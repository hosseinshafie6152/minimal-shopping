import ListCard from "../components/card/ListCard";
import useFetch from '../hooks/useFetch'
import  IconBigBasket from "../icons/IconBigBasket";
import Loading from '../components/Loading'

function CartPage() {
  const {data} = useFetch('http://localhost:8000/shopping')
  while (data === undefined) {
    return(
      <><Loading/></>
    )
  }
  if (data?.length === 0) {
    return(
      <div className=" bg-gray1 w-[1440px] h-screen mx-auto border-t-2 flex flex-col justify-center items-center">
        <IconBigBasket/>
        <p className=" font-bold text-l text-gray4 ">the cart is empty!</p>
      </div>
    )
  }else{
    return (
      <div>
        <ListCard products={data}/>
      </div>
    )
  }

}

export default CartPage