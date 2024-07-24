import { useForm } from "react-hook-form"
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import usePost from "../../hooks/usePost"


function ProfileComponent() {
  const { data } = useFetch('http://localhost:8000/user')
  const { register, handleSubmit } = useForm()
  const [newData , setNewData] = useState();
 

  useEffect(()=>{
    setNewData(data);
    
  },[data])

  const onsubmit = (datas) => { usePost(`http://localhost:8000/user/${newData.id}`, datas) }
  return (
    <div className="w-[800px] h-[300px] bg-white m-7 rounded-2xl">
      <form onSubmit={handleSubmit(onsubmit)} className="grid grid-cols-2 grid-rows-5 gap-y-5 text-[20px] p-2">
        <label htmlFor="fullname" >Full name:</label>
        <input type="text" {...register("fullname", { required: true })} id="fullname" defaultValue={newData?.fullName} placeholder="full name" className=" border border-gray2 rounded-l" />
        <label htmlFor="email">Email:</label>
        <input type='email' {...register('email', { required: true })} id="email" defaultValue={newData?.email} placeholder="example.com" className=" border border-gray2 rounded-l" />
        <label htmlFor="code">Nation code:</label>
        <input type="number" {...register('code', { required: true, maxLength: 11, minLength: 10 })} id="code" defaultValue={newData?.code} placeholder="12345678910" className=" border border-gray2 rounded-l" />
        <label htmlFor="phone">Phon number:</label>
        <input type="tel" {...register('phoneNumber', { required: true, minLength: 9 })} id="phone" defaultValue={newData?.phoneNumber} placeholder="09130335469" className=" border border-gray2 rounded-l" />
        <input type="submit" value="Edit" className="w-[80px] h-[40px] bg-pink text-white rounded-md hover:scale-110 cursor-pointer" />
      </form>
    </div>
  )
}

export default ProfileComponent