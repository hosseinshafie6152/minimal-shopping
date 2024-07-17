import { Link } from "react-router-dom"

function BtnShopNew() {
    return (
        <div className=' absolute top-[60px] left-[500px] text-center text-white '>
            <h2 className=' text-xl mb-5'>Get 50%  Off on <br /> Selected categories</h2>
            <Link to='/shopping' className=' px-4 py-1 bg-white text-pink font-medium text-[20px] rounded-[31.5px] ' type="button">
            Shop New
            </Link>
            
        </div>
    )
}

export default BtnShopNew