import { useRef } from 'react';
import InvoiceComponent from '../components/InvoiceComponent';
import SelectCardComponent from '../components/SelectCardComponent';
import SwiperSlider from '../components/SwiperSlider'
import ListCard from '../components/card/ListCard';
import useFetch from '../hooks/useFetch';
import { useSelect } from '../store/useSelect';

function ProductPage() {
  const { data } = useFetch('http://localhost:8000/products')
  const component = useRef(null)
  const { forwardShopping } = useSelect((state) => state)

  function show() {
    if (Object.entries(forwardShopping).length > 0) {
      return (
        component.current = <SelectCardComponent />
      )
    }
    else{
      component.current = null
    }
  }
  show()

  return (
    <div className=' relative'>
      <div className='bg-gray1 w-[1440px] mx-auto pb-[86px]'>
        <SwiperSlider />
      </div>
      <div>
        <ListCard products={data} />
      </div>
      <div >
        <InvoiceComponent />
      </div>
      <div className=' absolute top-3 right-3 z-50'>
        {component.current}
      </div>
    </div>
  )
}

export default ProductPage