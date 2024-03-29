import { useEffect } from "react";
import { useState } from "react";
import getBenData from "../hooks/getBenData";
import getEngData from "../hooks/getEngData";
import LevelOne from "../level/LevelOne";
import LevelThree from "../level/LevelThree";
import LevelTwo from "../level/LevelTwo";
import Navbar from "../navbar/Navbar";
import Finished from "./Finished";
import { Divider } from "@chakra-ui/react";


const Home = () => {
    const [lang, setLang] = useState('english');
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [level, setLevel] = useState('one');
    const [oneScor, setOneScor] = useState(0);
    const [twoScor, setTwoScor] = useState(0);
    const [threeScor, setThreeScor] = useState(0);
    // const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (lang === 'english') {
            const getDataEng = async () => {

                if (oneScor < 2 && twoScor !== 2) {
                    const langData = await getEngData('easy')
                    setData(langData.slice(0, 2))
                    setData2(langData.slice(2, 4))
                    setData3(langData.slice(4, 7))

                }

                if (oneScor === 2 || twoScor === 2) {
                    const langData = await getEngData('medium')
                    setData2(langData.slice(0, 2))
                    setData3(langData.slice(2, 4))

                }
                if (twoScor === 6) {
                    const langData = await getEngData('hard')
                    setData3(langData.slice(0, 2))

                }
            }
            getDataEng()
        }

        if (lang === 'bengali') {
            const getDataBen = async () => {

                if (oneScor < 2 && twoScor !== 2) {
                    const langData = await getBenData('easy')
                    setData(langData.slice(0, 2))
                    setData2(langData.slice(2, 4))
                    setData3(langData.slice(4, 7))

                }

                if (oneScor === 2 || twoScor === 2) {
                    const langData = await getBenData('medium')
                    setData2(langData.slice(0, 2))
                    setData3(langData.slice(2, 4))

                }
                if (twoScor === 6) {
                    const langData = await getBenData('hard')
                    setData3(langData.slice(0, 2))

                }
            }
            getDataBen()
        }

    }, [lang, oneScor, twoScor])


    // console.log(oneScor,twoScor,threeScor)
    const all_score = oneScor + twoScor + threeScor;


    return (
        <div className="px-2">
            <h1 className="lg:text-4xl text-2xl font-bold text-center py-5 uppercase">Welcome to <span className="text-blue-500">language game</span> website</h1>
            <div className="border-[1px] border-[#2D3748] flex lg:flex-row flex-col lg:h-[50vh] bg-[#171923]  lg:gap-5 rounded-lg">
                <div className="flex-1"><Navbar setLang={setLang}></Navbar></div>
                
                    <Divider colorScheme="cyan" orientation='vertical' />
                
                <div className="lg:my-5 p-5  container mx-auto">
                    <div>

                        {
                            level === 'one' ?
                                <LevelOne oneScor={oneScor} setOneScor={setOneScor} setLevel={setLevel} data={data}></LevelOne>
                                :
                                level === 'two' ?
                                    <LevelTwo TwoScor={twoScor} setTwoScor={setTwoScor} setLevel={setLevel} data={data2}></LevelTwo>
                                    :
                                    level === 'three' ?
                                        <LevelThree ThreeScor={threeScor} setThreeScor={setThreeScor} setLevel={setLevel} data={data3}></LevelThree>
                                        :
                                        <div>
                                            <Finished setThreeScor={setThreeScor} setTwoScor={setTwoScor} setOneScor={setOneScor} setLevel={setLevel} all_score={all_score}></Finished>
                                        </div>
                        }


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;