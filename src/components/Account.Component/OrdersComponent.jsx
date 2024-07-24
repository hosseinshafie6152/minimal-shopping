import { useEffect, useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading';
import BtnEdit from '../btns/BtnEdit'
import BtnDelete from '../btns/BtnDelete';

function OrdersComponent() {
  const { data } = useFetch('http://localhost:8000/shopping');
  let totalPrice = 0;

  while (data === undefined) {
    return(
      <div className='w-[800px]  bg-white m-7 rounded-2xl flex justify-center'>
        <Loading/>
      </div>
    )
  }
  if (data?.length > 0) {
    const listProduct= data?.map((item) => {
      totalPrice += item.price ;
      return (
        <tr key={item.id} className='text-center border-t border-gray2'>
          <td className='border-l border-gray2 font-medium'>catton</td>
          <td className='border-l border-gray2 font-medium'>{item.price}$</td>
          <td className='border-l border-gray2 font-medium'>{item.size}</td>
          <td className='border-l border-gray2 font-medium'>{item.count}</td>
          <td className='border-l border-gray2'><BtnDelete id={item.id}/></td>
          <td className='border-l border-gray2'><BtnEdit id={item.id} position={'Orders'}/></td>
        </tr>
      )
    })
    return (
      <div className='w-[800px]  bg-white m-7 rounded-2xl flex justify-center'>
        <table className='w-[750px] border border-gray3 my-5'>
          <thead className='bg-gray2 border-b-2'>
            <tr>
              <th className=' border-l border-gray2'>product name</th>
              <th className=' border-l border-gray2'>product price</th>
              <th className=' border-l border-gray2'>product size</th>
              <th className=' border-l border-gray2'>product count</th>
              <th className=' border-l border-gray2'>delete product</th>
              <th className=' border-l border-gray2'>edit product</th>
            </tr>
          </thead>
          <tbody className=' '>
            {listProduct}
          </tbody>
          <tfoot className='border-t-2'>
            <tr>
              <td className='font-medium'>total price:</td>
              <td>{totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }else{
    return(
      <div className='w-[800px]  bg-white m-7 rounded-2xl flex justify-center items-center'>
        <p className='font-bold text-l'>you don't have orders yet.</p>
      </div>
    )
}



}

export default OrdersComponent