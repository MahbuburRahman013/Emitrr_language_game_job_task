import { useState } from "react";

const LevelOne = ({ data, setLevel, setOneScor }) => {

    const [ans1, setAns1] = useState(['1','2']);
    const [ans2, setAns2] = useState(['1','2']);


    const handleSubmit = () => {

        if (ans1[0] === ans1[1] && ans2[0] === ans2[1]) {
            setOneScor(2)
            
        }

        if (ans1[0] === ans1[1] && ans2[0] != ans2[1]) {
            setOneScor(1)
        }
        if (ans2[0] === ans2[1] && ans1[0] != ans1[1]) {
            setOneScor(1)
        }
         
        setLevel('two')
        
    }




    return (
        <div>
            <div className="text-3xl mb-10 font-bold text-center">Level One</div>
            <div className="flex flex-col items-center gap-y-10">
                <div className="flex flex-wrap md:gap-x-12 lg:gap-x-60 gap-y-5">
                    {
                        data.slice(0, 1).map((item, index) => <div className="shadow-md border rounded-md  p-5" key={item._id}>
                            <h1>({index + 1}). {item.quizTitle}</h1>

                            <div className="font-semibold my-3">
                                {
                                    item.options.map(option => <div key={option}>
                                        <input onChange={() => setAns1([option, item.correctOption])} type="radio" name={'name'}  id={option} />
                                        <label className="ml-2" htmlFor={option}>{option}</label>
                                    </div>)
                                }
                            </div>
                            <p>
                                Type: <span className="text-blue-700 font-semibold">{item.difficulty}</span>
                            </p>

                        </div>)
                    }
                    {
                        data.slice(1, 2).map((item, index) => <div className="shadow-md border rounded-md  p-5" key={item._id}>
                            <h1>({index + 1}). {item.quizTitle}</h1>

                            <div className="font-semibold my-3">
                                {
                                    item.options.map(option => <div key={option}>
                                        <input onChange={() => setAns2([option, item.correctOption])} type="radio" name='name2' id={option} />
                                        <label className="ml-2" htmlFor={option}>{option}</label>
                                    </div>)
                                }
                            </div>
                            <p>
                                Type: <span className="text-blue-700 font-semibold">{item.difficulty}</span>
                            </p>

                        </div>)
                    }
                </div>
                <button onClick={handleSubmit} className="bg-blue-500 py-2 px-6 text-gray-100 font-semibold hover:bg-blue-700 rounded-md w-fit">Submit</button>
            </div>
        </div>
    );
};

export default LevelOne;