import { useState } from 'react'
import Loading from '../Loading';
import { useSelect } from '../../store/useSelect';

function BtnAddToCart({ product, size, count }) {
    const [innerText, setInnerText] = useState('Add to cart');
    const [className , setClassName] = useState('w-[127px] border border-orange text-orange font-medium rounded-[31.5px] mr-3');
    const {setSelect} = useSelect((state)=>state.action);


    function addCard() {
        if (size.current === null) {
            return (
                document.getElementById('warning').innerText = 'You have not yet selected a size for your purchase!'
            )
        } else {
            setInnerText(<Loading />);
            setTimeout(() => {
                fetch('http://localhost:8000/shopping', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'id': product.id,
                        'price': product.price,
                        'srcImg': product.srcImage,
                        'count': count,
                        'size': size.current,
                        'description': product.description
                    })
                }).then((response) => response.json().then((res) =>{ setInnerText('added to cart') ; setSelect(res)}))
            }, 2000)
            
        }
    }

    return (
        <>
            <button id='post' className={className} onClick={() => { addCard()}}>{innerText}</button>
        </>
    )
}

export default BtnAddToCart