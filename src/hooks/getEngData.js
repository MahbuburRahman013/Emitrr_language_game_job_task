import axios from "axios";

const getEngData =async (langType) => {

   const {data} = await axios.get(`http://localhost:5000/english?type=${langType}`)
    return data
};

export default getEngData;