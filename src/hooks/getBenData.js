import axios from "axios";

const getBenData =async (langType) => {

   const {data} = await axios.get(`https://emitrr-server.vercel.app/bengali?type=${langType}`)
    return data
};

export default getBenData;