import axios from "axios";
import { useContext } from "react";
import { ContextProvider } from "../auth/AuthProvider";
import { Toaster , toast} from "react-hot-toast"


const Finished = ({all_score,setThreeScor,setTwoScor,setOneScor,setLevel}) => {

    const {user} = useContext(ContextProvider); 
  
    const handleSetUser = () => {
        if(!user){
            return toast.error('To save Score You have to login.')
        }
        const userInfo = {
            name:user.displayName,
            email:user.email,
            score: all_score
         }

         axios.put('https://emitrr-server.vercel.app/setUser', {userInfo})
         .then(res=> {
            if(res.data.acknowledged){
                  toast.success('Added Score on Profile')
            }
         })
    }
        

    const handleReset = () => {
        setOneScor(0)
        setTwoScor(0)
        setThreeScor(0)
        setLevel('one')
    }

    return (
        <div className="my-10">
            <h1 className="text-4xl font-bold text-gray-200 text-center my-5">{all_score > 12 ? 'Wow!! Incredible': all_score > 6 ? 'Wow!! Great' : all_score > 3 ? 'Good Job' : 'Try Again'}</h1>
            <h1 className="text-center text-xl font-semibold text-gray-200">You got {all_score}/18 score.</h1>
            <div className="flex justify-center items-center gap-10 my-5">
                <button onClick={handleSetUser} className="lg:text-base text-sm text-gray-200 bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-5 rounded-md ">Save Score</button>
                <button onClick={handleReset} className="lg:text-base text-sm text-gray-200 bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-5 rounded-md ">ReStart</button>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Finished;