import ItemCard from './ItemCard';
import { useFavorite } from '../../store/useFavorite';
import { useSelect } from '../../store/useSelect';


function ListCard({ products }) {
  const { setFavorite } = useFavorite((state) => state.action);
  const { setforwardShopping } = useSelect((state) => state.action);

  const listProducts = products?.map((item) => {
    return (
      <ItemCard key={item.id} price={item.price} description={item.description} score={item.score} srcImg={item.srcImage} id={item.id} favoriteItem={() => { setFavorite(item) }} selectItem={() => {setforwardShopping(item) }} />
    )
  })
  return (
    <>
      <div className=' grid grid-cols-4 grid-rows-2 bg-gray1 w-[1440px] mx-auto gap-10 px-6'>
        {listProducts}
      </div>
    </>
  )
}

export default ListCard