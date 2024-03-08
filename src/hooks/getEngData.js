import axios from "axios";

const getEngData =async (langType) => {

   const {data} = await axios.get(`https://emitrr-server.vercel.app/english?type=${langType}`)
    return data
};

export default getEngData;