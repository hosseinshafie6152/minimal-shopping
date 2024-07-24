import IconLove from "../../icons/IconLove";
import IconFillStar from "../../icons/IconFillStar";
import IconStar from "../../icons/IconStar";
import IconGrayLove from '../../icons/IconGrayLove';
import IconeBasketShopping from "../../icons/IconeBasketShopping";
import IconTike from "../../icons/IconTike";
import IconRecycleBin from '../../icons/IconRecycleBin'
import { useEffect, useRef, useState } from "react";
import { useFavorite } from "../../store/useFavorite";
import { useSelect } from "../../store/useSelect";

function ItemCard({ srcImage, price, score, description, id, favoriteItem, selectItem }) {
    const [iconLove, setIconLove] = useState(<IconGrayLove/>)
    const iconBasketOrselect= useRef(<IconeBasketShopping/>)
    const className = useRef('w-[320px] h-[320px] bg-gray2 rounded-2xl absolute z-10 hover:z-30');
    const { favoriteList } = useFavorite((state) => state);
    const {selectedList} = useSelect((state)=>state);


    var arrayeIconStar = [];

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
    countFillStar(score)


    useEffect(() => {
        function setIconL() {
            if (favoriteList.some((_item) => _item.id === id)) {
                setIconLove(<IconLove />)
            }
            else {
                setIconLove(<IconGrayLove />)
            }
        }
       function setIconB() {
            if (selectedList?.some((_item) => _item.id === id)) {
                iconBasketOrselect.current = <IconTike />;
                className.current = 'w-[320px] h-[320px] bg-green rounded-2xl absolute z-30'
                setIconLove(<IconRecycleBin/>);
            } else {
                iconBasketOrselect.current = <IconeBasketShopping />
                className.current = 'w-[320px] h-[320px] bg-gray2 rounded-2xl absolute z-10 hover:z-30'
            }
        }
        setIconL()
        setIconB()
    }, [favoriteList, selectedList]);

    return (
        <div>
            <div id="image" className="w-[320px] h-[320px] relative" >
                <div className=" absolute top-3 right-3 bg-white rounded-full w-[42px] h-[42px] flex justify-center items-center z-40">
                    <button onClick={()=>{favoriteItem()}}>
                        {iconLove}
                    </button>
                </div>
                <div className="relative">
                    <img src={srcImage} alt={`product${id}`} className="w-[320px] h-[320px] rounded-2xl absolute z-20 hover:z-0" />
                    <div className={className.current}>
                        <div className=" flex justify-center items-center bg-white top-32 left-36 w-[42px] h-[42px] rounded-full absolute">
                            <button onClick={()=>{selectItem();}}>
                                {iconBasketOrselect.current}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Description" >
                <div className="flex justify-between ">
                    <p className=" text-m font-medium">{description}</p>
                    <p className="text-[20px] font-medium">{price} $</p>
                </div>
                <div id="material">
                    <p className=" text-s text-gray2 font-medium">Organic Cotton, Fair Trade quality</p>
                </div>
                <div id="stars" className="flex">
                    {arrayeIconStar}
                </div>
            </div>

        </div>
    )
}

export default ItemCard