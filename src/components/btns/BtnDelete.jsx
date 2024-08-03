import { useRef, useState } from "react";
import { useSelect } from "../../store/useSelect";
import Loading from "../Loading";

function BtnDelete({id}) {
    const { setSelect } = useSelect((state) => state.action);
    const [innerText, setInnerText] = useState('Delete');
    const isDelete = useRef(true);
    const className = useRef('w-20 bg-white border border-orange text-orange mx-2 rounded-md')

    function deletefn() {
        
        if (isDelete.current === true) {
            setInnerText(<Loading />)
            setTimeout(() => {
                fetch(`http://localhost:8000/shopping/${id}`, {
                    method: "DELETE"
                }).then((responce) => responce.json().then((res) => { setSelect(res); setInnerText('deleted') ; className.current = 'w-20 bg-orange text-white cursor-not-allowed  mx-2 rounded-md' }))
            }, 2000);
            isDelete.current = false;
        }
    }
    return (
        <>
            <button id="delete" onClick={() =>deletefn()} className={className.current}>{innerText}</button>
        </>
    )
}

export default BtnDelete