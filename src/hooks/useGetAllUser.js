// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { ContextProvider } from "../auth/AuthProvider";

// const useGetAllUser = () => {
//  const {user} = useContext(ContextProvider);

//   const { data } = useQuery({
//     queryKey: ["todos"],
//     queryFn: async () => {
//      const data1 = await axios.get("https://emitrr-server.vercel.app/allUsers")
//      console.log(data1.data)
//     },
//   });
//   console.log(data)

// //   const profileUser = data.find((user1) => user1.email === user.email);
// //   const sortData = data.sort((a, b) => b.score - a.score);

//   return [profileUser,sortData];
// };

// export default useGetAllUser;
