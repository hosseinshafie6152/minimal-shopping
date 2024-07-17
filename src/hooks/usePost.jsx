import { useEffect } from "react"

const usePost = (url , data , count , size)=>{

      useEffect(()=>{
        setTimeout(() => {
            fetch(url ,{
                method : 'POST',
                headers :{
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    'id' : data.id,
                    'price' : data.price,
                    'srcImg' : data.srcImage ,
                    'count' : count,
                    'size' : size,
                    'description' : data.description
                })
            }).then((response)=>response.json()).then(console.log())
        }, 1000);
      },[url])
}

export default usePost