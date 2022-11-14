import React,{useState}  from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Login() {

  const navigate = useNavigate()
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  

  const handleChange = e => {
    const { name, value } = e.target
    setAdmin({
      ...admin,
      [name]: value
    })
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password } = admin
    if (email && password) {
      const res=await axios.post("http://localhost:8000/api/admin/login",admin)  
      if(res.data){
        navigate('/test')
        console.log(res.data)
      }else{
        navigate('/register') 
      }
    }
    else {
      alert("invalid input")
    };
  }


  return (
    <div>
      <div>
            {/* {props.text} */}
<section className="h-full gradient-form md:h-screen ml-20">
  <div className="container py-12 px-6 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="xl:w-10/12">
        <div className="block bg-white shadow-lg rounded-lg">
          <div className="lg:flex lg:flex-wrap g-0">
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="md:p-12 md:mx-6">
                <div className="text-center">
                  <img
                    className="mx-auto w-48"
                    src="https://www.shoppirate.in/blog/wp-content/uploads/2016/01/redbus-logo.png"
                    alt="logo"
                  />
                  <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">We are The Lotus Team</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <p className="mb-4">Please login to your account</p>
                  <div className="mb-4">
                    <input
                      type="mail"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="email"
                      placeholder="your email"
                      name='email'
                      value={admin.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="password"
                      placeholder="Password"
                      name='password'
                      value={admin.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center pt-1 mb-12 pb-1">
                    <button
                      className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="submit"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Log in
                    </button>
                    <a className="text-gray-500" href="#!">Forgot password?</a>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Danger   
                    </button>            
                  </div>
                </form>
              </div>
            </div>
            <div
              className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-red-600"
            >
              {/* <div className="text-white px-4 py-6 md:p-12 md:mx-6 bg-red-600">
                <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>         
        </div>
    </div>
  )
}

export default Login
