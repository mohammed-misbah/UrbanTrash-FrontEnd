export const baseUrl = "http://127.0.0.1:8000/";

const user = localStorage.getItem('user')
export const addressList = (user) => 'api/listAddress/user';
export const addAddress = 'api/addAddress'
// urls
export const RegisterPost = "api/register";
export const loginPost = "api/login";
export const logOut =  'api/logout';
export const bookingWaste = 'api/waste_booking'

export const signUp = "adminapi/login"
export const userList = "adminapi/userlist"
export const userBlock = 'adminapi/block_user/${userID}/Status';
export const userUnblock = 'adminapi/unblock_user/${userID}/Status';


// const loginPost = 'http://localhost:3000/api/login'










// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import axios from '../../utils/axios';
// import { setAdminDetails } from '../../redux/adminreducer';
// import Cookies from 'js-cookie';
// const AdminLoginForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     const token = Cookies.get('admin_jwt');
//     if (token) {
//       navigate('/admin');
//     }
//   }, [navigate]);

//   const handleAdminLogin = (e) => {
//     e.preventDefault();
//     const body = JSON.stringify({
//       email,
//       password,
//     });

//     if (email.trim() === "" || password.trim() === "") {
//       Swal.fire('Please fill in all the fields.');
//     } else {
//       axios
//         .post('adminside/login', body, {
//           headers: { "Content-Type": "application/json" },
//         })
//         .then((response) => {
//           console.log(response);
//           if (
//             response.data.status === 'Wrong Password' ||
//             response.data.status === "Email or Password is Wrong" ||
//             response.data.status === "not admin"
//           ) {
//             Swal.fire({
//               position: "center",
//               icon: "error",
//               title: "Email or Password is incorrect",
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           } else {
//             Cookies.set("admin_jwt", String(response.data.admin_jwt));
//             Swal.fire({
//               position: "center",
//               icon: "success",
//               title: "Login Successfully",
//               showConfirmButton: false,
//               timer: 1500,
//             });
//             if (response.status === 200) {
//               dispatch(setAdminDetails(response.data.admin));
//               navigate("/admin");
//             }
//           }
//         });
//     }
//   };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900 h-screen">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//           <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
//           Flowbite
//         </a>
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               Sign in to your account
//             </h1>
//             <form className="space-y-4 md:space-y-6" onSubmit={handleAdminLogin}>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="name@company.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="remember"
//                       aria-describedby="remember"
//                       type="checkbox"
//                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                       required
//                     />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
//                   </div>
//                 </div>
//                 <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//               >
//                 Sign in
//               </button>
//               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdminLoginForm;










