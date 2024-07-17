import { useRef, useState } from "react";
import IconFillStar from "../icons/IconFillStar";
import IconStar from "../icons/IconStar";
import IconAdd from '../icons/IconAdd';
import IconSubtraction from '../icons/IconSubtraction'
import IconeValidely from '../icons/IconeValidely'
import IconePolice from '../icons/IconePolice'
import IconeClose from '../icons/IconeClose'
import IconeBasketShopping from "../icons/IconeBasketShopping";
import { useSelect } from "../store/useSelect";
import BtnAddToCart from "./btns/BtnAddToCart";

function SelectCardComponent({warning}) {
  const { forwardShopping } = useSelect((state) => state);
  const { clearforward} = useSelect((state) => state.action);
  const size = useRef(null);
  const [count , setCount] = useState(1);
  

  var arrayeIconStar = [];
//the following function for show stars 
  function countFillStar(score) {
    let index = 1
    while (index <= score) {
      arrayeIconStar.push(<IconFillStar key={index} />)
      index++;
    };
    for (let i = score; i < 5; i++) {
      arrayeIconStar.push(<IconStar key={i + 1} />)
    }
  };
  countFillStar(forwardShopping.score);
//the following function for set state size of shopping and change className of cards
  function sizeFn(event) {
    size.current = event.target.innerHTML;
    const newClass = 'border border-orange w-[42px] h-[42px] rounded-md text-white bg-orange font-medium';
    const lastClass = 'border border-orange w-[42px] h-[42px] rounded-md text-orange font-medium';
    document.querySelectorAll('#size').forEach((item) => {
      return item.className = lastClass;
    });
    if (event.target.className === newClass) {
      event.target.className = lastClass;
    } else {
      event.target.className = newClass;
    }
  }
  // the following function for increase count products
  function increase() {
    setCount((i)=> i += 1)
  }
// the folloing function for decrease count products
  function decrease() {
    if (count > 0) {
      setCount((i) => i -= 1)
    }else{
      return
    }
  }

  return (
    <>
      <div className=' w-[500px] h-[1040px] bg-white rounded-2xl p-5 grid grid-cols-4 grid-rows-12 shadow-xl shadow-gray2 '>
        <div className="col-start-4 flex justify-end items-start">
          <button onClick={() => { clearforward() }}>
            <IconeClose />
          </button>
        </div>
        <div className=" col-start-1 col-end-4 row-start-1">
          <div>
            <img src={forwardShopping.srcImage} alt={`product${forwardShopping.id}`} className='w-[320px] h-[320px] rounded-2xl mb-5' />
          </div>
          <div id="Description" className="flex flex-col gap-2">
            <div className="flex justify-between ">
              <p className=" text-m font-medium">{forwardShopping.description}</p>
              <p className="text-[20px] font-medium">{forwardShopping.price} $</p>
            </div>
            <div id="material">
              <p className=" text-s text-gray2 font-medium">Organic Cotton, Fair Trade quality</p>
            </div>
            <div id="stars" className="flex">
              {arrayeIconStar}
            </div>
          </div>
          <div className="mt-6">
            <div id="quantity" className="w-[126px] h-[42px] border border-gray0.1 rounded-lg flex items-center justify-around">
              <button onClick={() => decrease()}>
                <IconSubtraction />
              </button>
              <span className="h-[42px] border border-gray0.1"></span>
              <span> {count} </span>
              <span className="h-[42px] border border-gray0.1"></span>
              <button onClick={() => increase()}>
                <IconAdd />
              </button>
            </div>
            <div className="flex justify-between w-3/4 mt-5">
              <button id="size" onClick={() => { sizeFn(event) }} className='border border-orange w-[42px] h-[42px] rounded-md text-orange font-medium'>S</button>
              <button id="size" onClick={() => { sizeFn(event) }} className='border border-orange w-[42px] h-[42px] rounded-md text-orange font-medium'>M</button>
              <button id="size" onClick={() => { sizeFn(event) }} className='border border-orange w-[42px] h-[42px] rounded-md text-orange font-medium'>L</button>
              <button id="size" onClick={() => { sizeFn(event) }} className='border border-orange w-[42px] h-[42px] rounded-md text-orange font-medium'>XL</button>
              <button id="size" onClick={() => { sizeFn(event) }} className='border border-orange w-[42px] h-[42px] rounded-md text-orange font-medium'>XXL</button>
            </div>
          </div>
          <div>
            <p id="warning"></p>
          </div>
          <div className="mt-[250px] ">
            <div className="flex items-center mb-3">
              <div className="mr-5">
                <IconeValidely />
              </div>
              <div>
                <p className="font-medium">Delivery limit</p>
                <p className="text-gray2 font-medium" >Free delivery within 50 km’s.</p>
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div className="mr-5">
                <IconePolice />
              </div>
              <div>
                <p className="font-medium">Return Policy</p>
                <p className="text-gray2 font-medium">With-in 5days of product delivery.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-12 flex col-start-1 col-end-5 items-end justify-between">
          <div className="flex">
            <BtnAddToCart product={forwardShopping} size={size} count={count}/>
            <button className="text-gray2 font-medium" onClick={() => { clearforward() }}>cancel</button>
          </div>
          <div className="flex">
            <IconeBasketShopping />
            <p className="text-gray2 font-bold ml-2">{forwardShopping.price}$</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectCardComponent