import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList, Tooltip } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { ContextProvider } from "../auth/AuthProvider";
import auth from "../firebase/firebase.config";
import Profile from "../profile/Profile";
import { toast } from "react-hot-toast"
import { IoLanguageSharp } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";


const Navbar = ({ setLang }) => {
    const { user } = useContext(ContextProvider);


    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                toast.success('Logout successfully.')
            })
    }

    return (
        <div className="">
            <nav className="shadow-lg h-full rounded-lg flex p-3  justify-center gap-10 lg:flex-col gap-y-10">
                <Menu>
                    <Tooltip label='Select language' fontSize='smaller'>
                        <MenuButton className="p-2 w-10 border  flex justify-center items-center text-xl border-[#4f63f7] h-10 rounded-full bg-[#2d34b8]">
                            <IoLanguageSharp />
                        </MenuButton>
                    </Tooltip>

                    <MenuList bgColor={'#000'} padding="20px">
                        <MenuItem color={'#fff'} borderRadius={'10px'} bgColor={'#e2e8f07a'} onClick={() => setLang('english')} mb='10px'>English</MenuItem>
                        <MenuItem color={'#fff'} borderRadius={'10px'} bgColor={'#e2e8f07a'} onClick={() => setLang('bengali')} >Bengali</MenuItem>
                    </MenuList>
                </Menu>

                <div>
                    <Profile></Profile>
                </div>

                <div>
                    {
                        user ?

                            <Tooltip label='click for logout' fontSize='smaller'>
                                <div onClick={handleLogout}  className="p-2 w-10 flex justify-center items-center text-3xl border cursor-pointer border-[#4f63f7] h-10 rounded-full bg-[#2d34b8]">
                                    <BiLogOutCircle />
                                </div>
                            </Tooltip>
                            :
                            <div className="flex gap-5">
                                <Link to='/login'>
                                    <Tooltip label='Click for Login' fontSize='smaller'>
                                        <div className="p-2 w-10 flex justify-center items-center text-3xl border cursor-pointer border-[#4f63f7] h-10 rounded-full bg-[#2d34b8]">
                                            <IoMdLogIn />
                                        </div>
                                    </Tooltip>
                                </Link>
                            </div>
                    }

                </div>
            </nav>

        </div>
    );
};

export default Navbar;