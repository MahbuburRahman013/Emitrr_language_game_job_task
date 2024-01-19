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
        <div className="container mx-auto px-5 flex justify-center ">
            <div className="lg:w-[50%] w-full my-16 shadow-xl lg:px-7 py-9">
                <h1 className="text-center text-3xl font-semibold">Create An Account</h1>
                <form onSubmit={handleRegister} className="w-full">
                    <input placeholder="Your Name" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="text" name="name" />
                    <input placeholder="Photo URL" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="text" name="photo" />
                    <input placeholder="Email" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="email" name="email" />
                    <input placeholder="Password" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="password" name="password" />
                    <input className="block w-full outline-none bg-blue-500  py-2 text-base font-semibold px-3 my-3" type="submit" value="Registration" />
                </form>
                <div className="text-center">
                    <h1>Or</h1>
                    <h1 onClick={handleGoogle} className="bg-blue-300 py-2 px-4 font-bold cursor-pointer">Login With Google</h1>
                    <div className="flex justify-end">
                        <Link to='/login'>
                            <p className="font-semibold py-2 hover:text-blue-500 cursor-pointer">Already have an Account? Please Login</p>
                        </Link>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Registration;