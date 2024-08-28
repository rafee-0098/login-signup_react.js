import image from '../assets/email.jpeg'
 import img from '../assets/user-1.png'
 import png from '../assets/password-1.jpeg'
 import bgImage from '../assets/background.jpeg'
 const  Signup = () => {
  const myStyle ={
    backgroundImage:`url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    height : '100vh'
 

  }


return(
  <div className="main-container  flex justify-center items-center "style={myStyle} >

 <div className="pt-10 pb-10 pl-5 pr-5 max-w-1/3 
rounded-md backdrop-blur-md bg-white/50 shadow-md border border-white/30
">
   <div className="input"><h1 className="text-center text-xl text-blue-800 border-b-">Signup</h1></div>
   <div className=" flex bg-gray-200 w-full  rounded-lg h-12 mt-5 items-center">
   <img className='w-7 mix-blend-normal bg-gray-200'  src={img} alt="" />
<input  className="bg-gray-200 w-full pl-3 rounded-lg h-12 outline-none" type="text" placeholder='Enter your Name'/>    
   </div>


   <div className=" flex bg-gray-200 w-full  rounded-lg h-12 mt-5 items-center">
   <img className='w-7 mix-blend-multiply  bg-gray-200' src={image} alt=""  />
   <input className=' h-full w-full outline-none bg-gray-200' type="email"  placeholder="Enter Your Email"/>
   </div>


   <div className="flex bg-gray-200 w-full  rounded-lg h-12 mt-5 items-center">
   <img className='w-7 mix-blend-multiply  bg-gray-200' src={png} alt=""  />
   <input   className="h-full w-full outline-none bg-gray-200"type="password" placeholder="Enter Your Password" />
   </div>


   <div className="mt-4 ">
    <p>forgot password? <a href="#" className="text-blue-800">click here</a></p>
    </div>
    <div className="btn flex justify-evenly">
    <button className="btn bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-900 mt-5">Signup</button> <button className="btn bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-900 mt-5 " >Login</button>
    </div>
  
 </div>

 </div>
  );
};
export default Signup;
