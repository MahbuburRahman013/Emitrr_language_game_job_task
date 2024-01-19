import axios from "axios";

const getBenData =async (langType) => {

   const {data} = await axios.get(`http://localhost:5000/bengali?type=${langType}`)
    return data
};

export default getBenData;