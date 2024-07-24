import { useSize } from '../../store/useSize';

function BtnSize() {
  const {setSize} = useSize((state)=>state.action)

  //the following function for set state size of shopping and change className of cards
  function sizeFn(event) {
    setSize(event.target.innerHTML);
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
  return (
    <div className="flex justify-between w-3/4 mt-5">
      <button id="size" onClick={() => { sizeFn(event) }} className='border border-orange w-[42px] h-[42px] rounded-md text-orange font-medium'>S</button>
      <button id="size" onClick={() => { sizeFn(event) }} className='border border-orange w-[42px] h-[42px] rounded-md text-orange font-medium'>M</button>
      <button id="size" onClick={() => { sizeFn(event) }} className='border border-orange w-[42px] h-[42px] rounded-md text-orange font-medium'>L</button>
      <button id="size" onClick={() => { sizeFn(event) }} className='border border-orange w-[42px] h-[42px] rounded-md text-orange font-medium'>XL</button>
      <button id="size" onClick={() => { sizeFn(event) }} className='border border-orange w-[42px] h-[42px] rounded-md text-orange font-medium'>XXL</button>
    </div>
  )
}

export default BtnSize