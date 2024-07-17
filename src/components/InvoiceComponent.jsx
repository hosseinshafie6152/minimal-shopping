import IconBasket from '../icons/IconBasket'
import { useSelect } from '../store/useSelect'
import IconLoveWhite from '../icons/IconLoveWhite';
import { useFavorite } from '../store/useFavorite';
import IconBasketShoppingWhite from '../icons/IconBasketShoppingWhite';


function InvoiceComponent() {
    const { selectedList, invoice } = useSelect((state) => state);
    const { favoriteList } = useFavorite((state) => state);

    const indexSelect = selectedList.length;
    const indexFavorite = favoriteList.length;
    const totalPrice = invoice.totalPrice

    return (
        <div className=' w-full max-w-[1920px] h-[80px] bg-orange grid grid-cols-12 items-center px-3'>
            <div id='cart' className='flex text-white col-start-1 col-end-3 justify-center'>
                <IconBasket />
                <span className=' size-3'></span>
                <p className=' font-bold'>
                    {indexSelect}
                </p>
                <span className=' size-1'></span>
                <p >Items added to Cart  </p>
            </div>
            <div id='wish' className='flex text-white col-start-3'>
                <IconLoveWhite />
                <span className=' size-3'></span>
                <p className=' font-bold'>
                    {indexFavorite}
                </p>
                <span className=' size-1'></span>
                <p>Wish list</p>
            </div>
            <div id='totalPrice' className='flex text-white col-start-12'>
                <IconBasketShoppingWhite />
                <span className=' size-3'></span>
                <p className=' font-bold'>
                    {totalPrice}$
                </p>
            </div>
        </div>
    )
}

export default InvoiceComponent