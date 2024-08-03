import { useRef, useState } from 'react'
import Loading from '../Loading';
import { useSelect } from '../../store/useSelect';
import BtnDelete from './BtnDelete';
import BtnEdit from './BtnEdit';
import useFetch from '../../hooks/useFetch';
import { useSize } from '../../store/useSize';
import { useCount } from '../../store/useCount';

function BtnAddToCart({ product, size, count }) {
    const { setSelect } = useSelect((state) => state.action);
    
    const [innerText, setInnerText] = useState('Add to cart');
    const className = useRef('w-[127px] border border-orange text-orange font-medium rounded-[31.5px] mr-3');
    const [btnDeleteEdit, setBtnDeltetEdit] = useState();
    const {setSize} = useSize((state)=>state.action);
    const {setcount} = useCount((state)=>state.action);
    const {data} = useFetch('http://localhost:8000/shopping');
    const isAdd = useRef(true)

    function addCard() {
        if (isAdd.current === true) {
            if (data?.some((item) => item.id === product.id)) {
                document.getElementById('post').remove()
                return (
                    setBtnDeltetEdit(<>
                        <BtnDelete id={product.id}/>
                        <BtnEdit item={product} position={'Home'} />
                    </>)
                )
            } else {
                if (size === null) {
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
                                'srcImg': product.srcImg,
                                'count': count,
                                'size': size,
                                'description': product.description
                            })
                        }).then((response) => response.json().then((res) => { setInnerText('added to cart'); setSelect(res) ; setSize(null); setcount() ; className.current = 'w-[127px] bg-green border border-green text-white font-medium rounded-[31.5px] mr-3 cursor-not-allowed' }))
                    }, 2000)
                    isAdd.current = false
                }
            }
        }

    }

    return (
        <>
            <button id='post' className={className.current} onClick={() => { addCard() }}>{innerText}</button>
            {btnDeleteEdit}
        </>
    )
}

export default BtnAddToCart