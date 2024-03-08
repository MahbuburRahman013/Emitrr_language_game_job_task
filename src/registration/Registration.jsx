import { updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { ContextProvider } from '../auth/AuthProvider';
import auth from '../firebase/firebase.config';

const Registration = () => {

    const { createUser, googleLogin } = useContext(ContextProvider);
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;



        createUser(email, password)
            .then(result => {
                if (result.user) {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo,
                    }).then(() => {
                        navigate('/registration')
                        navigate('/')
                        toast.success('user create successfully')

                    })
                        .catch(error => {
                            toast.error(error.message);
                        })
                }

            })
            .catch(error => {
                toast.error(error.message);
            })
    }


    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                if (result.user) {
                    navigate('/')
                    toast.success('user create successfully')
                }

            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="px-5 flex justify-center bg-black h-screen text-gray-300">
            <div className="lg:w-[35%] md:w-[50%] w-[90%] my-16 shadow-xl lg:px-7 py-9">
                <h1 className="text-center text-3xl font-semibold">Create An Account</h1>
                <form onSubmit={handleRegister} className="w-full">
                    <input placeholder="Your Name" className="block rounded-xl w-full outline-none bg-gray-100  py-2 text-base  px-3 my-3" type="text" name="name" />
                    <input placeholder="Photo URL" className="block rounded-xl w-full outline-none bg-gray-100  py-2 text-base  px-3 my-3" type="text" name="photo" />
                    <input placeholder="Email" className="block rounded-xl w-full outline-none bg-gray-100  py-2 text-base  px-3 my-3" type="email" name="email" />
                    <input placeholder="Password" className="block rounded-xl w-full outline-none bg-gray-100  py-2 text-base  px-3 my-3" type="password" name="password" />
                    <input className="block rounded-xl w-full outline-none duration-500 hover:bg-blue-700 bg-blue-500 cursor-pointer  py-2 text-base  px-3 my-3" type="submit" value="Registration" />
                </form>
                <div className="text-center">
                    <h1>Or</h1>
                    <h1 onClick={handleGoogle} className="bg-orange-400 hover:bg-orange-500 duration-500 py-2 px-4 rounded-xl text-gray-800  cursor-pointer">Login With Google</h1>
                    <div className="flex justify-end">
                        <Link to='/login'>
                            <p className="duration-300 py-2 hover:text-blue-500 cursor-pointer text-sm">Already have an Account? Please Login</p>
                        </Link>
                    </div>
                </div>
            </div>
            <Link to='/'>
            <button className='text-gray-300 md:py-3 md:px-7 px-3 py-1 duration-300 md:text-base  text-xs border-gray-400 border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_12px] shadow-[rgba(220,220,221,0.73)] hover:shadow-[rgba(220,220,221,0.73)] rounded-xl absolute left-4 top-4'>Back Home</button>
            </Link>
            <Toaster></Toaster>
        </div>
    );
};

export default Registration;