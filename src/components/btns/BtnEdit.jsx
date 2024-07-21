import React from 'react'

function BtnEdit({id}) {

    function editfn(){
        setTimeout(() => {
            fetch(`http://localhost:8000/shopping/${id}`, {
                method : "PUT",
                
            }).then((response)=> response.json().then((res)=>console.log(res)))
        }, 2000);
    }
    return (
        <>
            <button onClick={()=> editfn()} className='w-16 bg-green text-white rounded-md mx-2'>Edit</button>
        </>
    )
}

export default BtnEdit