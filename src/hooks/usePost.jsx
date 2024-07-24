import { useEffect } from "react"

const usePost = (url , data)=>{

      useEffect(()=>{
        setTimeout(() => {
            fetch(url ,{
                method : 'POST',
                headers :{
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    'id' : data.id,
                    'fullName' : data.FullName,
                    'email' : data.email ,
                    'code' : data.code ,
                    'phoneNumber' : data.phoneNumber
                    })
            }).then((response)=>response.json()).then(console.log())
        }, 1000);
      },[url])
}

export default usePost