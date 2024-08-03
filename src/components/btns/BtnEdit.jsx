import { useRef, useState } from 'react';
import { useCount } from '../../store/useCount';
import { useSize } from '../../store/useSize';
import Loading from '../Loading';

function BtnEdit({ item, position }) {
    const { size } = useSize((state) => state);
    const { count } = useCount((state) => state);
    const { setcount } = useCount((state) => state.action);
    const { setSize } = useSize((state) => state.action);
    const isEdit = useRef(true);
    const [innerText , setInnerText] = useState('Edit')


    function editfn() {
        console.log(isEdit.current)
        if (position === 'Home') {
            if (isEdit.current === true) {
                window.scroll({
                    top: 100,
                    behavior: 'smooth'
                });
                document.getElementById('CountSize').className = ' mt-6 p-5 border  border-dashed border-gray2 rounded-xl ';
                document.getElementById('ping').className = "w-5 h-5 bg-pink rounded-full absolute right-40 animate-ping";
                isEdit.current = false
            } else {
                if (size !== null) {
                    setInnerText(<Loading/>)
                    setTimeout(() => {
                        fetch(`http://localhost:8000/shopping/${item.id}`, {
                            method: "PUT",
                            body: JSON.stringify({
                                'id': item.id,
                                'price': item.price,
                                'srcImg': item.srcImg,
                                'count': count,
                                'size': size,
                                "description": item.description
                            })

                        }).then((response) => response.json().then((res) => { setSize(null); setcount() ; setInnerText('edited') }))
                    }, 2000);
                }
            }
        }
        if (position === 'Orders') {
            
        }
    }

    return (
        <>
            <button onClick={() => editfn()} className='w-20 bg-green text-white rounded-md mx-2'>{innerText}</button>
        </>
    )
}

export default BtnEdit