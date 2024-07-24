import { useSize } from '../../store/useSize';

function BtnEdit({ item , position }) {
    const { size } = useSize((state) => state)
    const {setSize} = useSize((state)=>state.action)
    
    
    function editfn() {
        if (position === 'Home') {
            window.scroll({
                top: 100,
                behavior: 'smooth'
            });
            document.getElementById('CountSize').className = ' mt-6 p-5 border  border-dashed border-gray2 rounded-xl ';
            document.getElementById('ping').className = "w-5 h-5 bg-pink rounded-full absolute right-40 animate-ping";
            if (size !== null) {
                setTimeout(() => {
                    fetch(`http://localhost:8000/shopping/${item.id}`, {
                        method: "PUT",
                        body: JSON.stringify({
                            'id': item.id,
                            'price': item.price,
                            'size': size,
                            "description": item.description
                        })

                    }).then((response) => response.json().then((res) =>setSize(null) ))
                }, 2000);
            }
        }if (position === 'Orders') {
            
        }
    }

    return (
        <>
            <button onClick={() => editfn()} className='w-16 bg-green text-white rounded-md mx-2'>Edit</button>
        </>
    )
}

export default BtnEdit