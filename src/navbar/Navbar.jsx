import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { ContextProvider } from "../auth/AuthProvider";
import auth from "../firebase/firebase.config";
import Profile from "../profile/Profile";
import { Toaster , toast} from "react-hot-toast"


const Navbar = ({ setLang }) => {
    const { user } = useContext(ContextProvider);


    const handleLogout =()=> {
         signOut(auth)
         .then(()=> {
            toast.success('Logout successfully.')
         })
    }

    return (
        <div className="container mx-auto px-5 lg:px-0">
            <nav className="border border-gray-400 shadow-lg my-10 py-5 px-2 md:px-10 rounded-lg gap-5 flex items-center justify-around">
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Select Language
                    </MenuButton>
                    <MenuList bgColor={'#fff'} padding="20px">
                        <MenuItem onClick={() => setLang('english')} mb='10px'>English</MenuItem>
                        <MenuItem onClick={() => setLang('bengali')} >Bengali</MenuItem>
                    </MenuList>
                </Menu>

                <div>
                    <Profile></Profile>
                </div>

                <div>
                    {
                        user ?
                        <Button onClick={handleLogout} bg='lightblue' padding='5px 10px' rounded={'5px'}>Logout</Button>
                        :
                            <div className="flex gap-5">
                                <Link to='/login'>
                                    <Button bg='lightblue' padding='5px 10px' rounded={'5px'}>Login</Button>
                                </Link>
                            </div>
                    }

                </div>
            </nav>
            <Toaster></Toaster>
        </div>
    );
};

export default Navbar;