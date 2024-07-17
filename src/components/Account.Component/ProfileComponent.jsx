import useFetch from '../../hooks/useFetch'
function ProfileComponent() {

  const { data } = useFetch('http://localhost:8000/user');

  const valuefn = async () => {
    if (data) {
      document.getElementById('fullname').value = await data[0].fullName;
      document.getElementById('email').value = await data[0].email;
      document.getElementById('code').value = await data[0].code;
      document.getElementById('phone').value = await data[0].phoneNumber
      return ({ fullname, email, code, phone })
    }
  }

  valuefn()

  return (
    <div className="w-[800px] h-[300px] bg-white m-7 rounded-2xl">
      <form className="grid grid-cols-2 grid-rows-5 gap-y-5 text-[20px] p-2">
        <label htmlFor="fullname" >Full name:</label>
        <input type="text" name="fullName" id="fullname" placeholder="first name & last name" className=" border border-gray2 rounded-l" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="example.com" /*value={data.email}*/ className=" border border-gray2 rounded-l" />
        <label htmlFor="code">Nation code:</label>
        <input type="number" name="nathionCode" id="code" placeholder="123456789" /*value={data.code}*/ className=" border border-gray2 rounded-l" />
        <label htmlFor="phone">Phon number:</label>
        <input type="tel" name="phone" id="phone" placeholder="09..." /*value={data.phoneNumber}*/ className=" border border-gray2 rounded-l" />
        <button className='w-[80px] h-[40px] bg-pink text-white rounded-md hover:scale-110'>submit</button>
      </form>
    </div>
  )
}

export default ProfileComponent