import { useState } from "react";

const LevelThree = ({ data, setLevel, setThreeScor }) => {

    const [ans1, setAns1] = useState(['1','2']);
    const [ans2, setAns2] = useState(['1','2']);


    const handleSubmit = () => {

        if (ans1[0] === ans1[1] && ans2[0] === ans2[1]) {
            if(data[0].difficulty === 'easy'){
                setThreeScor(2)

            }else if(data[0].difficulty === 'medium'){
                setThreeScor(6)

            }else if(data[0].difficulty === 'hard') {
                setThreeScor(10)
            }
            
        }

        if (ans1[0] === ans1[1] && ans2[0] != ans2[1]) {
            if(data[0].difficulty === 'easy'){
                setThreeScor(1)

            }else if(data[0].difficulty === 'medium'){
                setThreeScor(3)

            }else if(data[0].difficulty === 'hard') {
                setThreeScor(5)
            }
            
        }

        if (ans1[0] != ans1[1] && ans2[0] === ans2[1]) {
            if(data[0].difficulty === 'easy'){
                setThreeScor(1)

            }else if(data[0].difficulty === 'medium'){
                setThreeScor(3)

            }else if(data[0].difficulty === 'hard') {
                setThreeScor(5)
            }
            
        }

        
       
        setLevel('complete')
        
    }




    return (
        <div>
            <div className="md:text-3xl text-xl mb-10 font-bold border  border-[#2D3748] py-2 rounded-full text-center">Level Three</div>
            <div className="flex flex-col gap-y-10">
                <div className="flex flex-wrap md:gap-x-12 lg:gap-x-60 gap-y-5">
                    {
                        data.slice(0, 1).map((item, index) => 
                        
                        <div className="gradient-border">
                            <div className="bg-black rounded-md  p-4 md:py-8 md:px-12"  key={item._id}>
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
                        </div>
                        </div>
                        
                        )
                    }
                    {
                        data.slice(1, 2).map((item, index) => 
                        
                       <div className="gradient-border">
                         <div className="bg-black rounded-md  p-4 md:py-8 md:px-12" key={item._id}>
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
                        </div>
                       </div>
                        
                        )
                    }
                </div>
                <button onClick={handleSubmit} className="bg-blue-500 py-2 px-16 duration-500 text-gray-100 font-semibold hover:bg-blue-700 rounded-md w-fit">Submit</button>
            </div>
        </div>
    );
};

export default LevelThree;