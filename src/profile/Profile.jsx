import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Tooltip,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { ContextProvider } from '../auth/AuthProvider';
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";


const Profile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUsers] = useState({});
    const { user, loading } = useContext(ContextProvider);


    useEffect(() => {
        if (!loading) {
            axios.get('https://emitrr-server.vercel.app/allUsers')
                .then(res => {
                    const profileUser = res?.data.find(user1 => user1?.email === user?.email)
                    const sortData = res?.data.sort((a, b) => b.score - a.score)
                    setUsers(sortData)
                    setCurrentUsers(profileUser);
                })
        }
    }, [loading, user])

    const handleReload = () => {
        axios.get('https://emitrr-server.vercel.app/allUsers')
            .then(res => {
                const profileUser = res?.data.find(user1 => user1?.email === user.email)
                const sortData = res?.data.sort((a, b) => b.score - a.score)
                setUsers(sortData)
                setCurrentUsers(profileUser);
            })
    }


    return (
        <div>
            <div onClick={handleReload}>
                <div onClick={onOpen} label='Select language'  className="p-2 flex justify-center items-center text-4xl cursor-pointer w-10 border border-[#4f63f7] h-10 rounded-full bg-[#2d34b8]" fontSize='smaller'>
                    
                        <FaUserCircle />
                    
                </div>
           </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <div>
                            {
                                user ?
                                    <div>
                                        <div className='flex flex-col justify-center items-center gap-y-5'>
                                            <img className='w-20 h-20 rounded-full' src={user?.photoURL} />
                                            <h1 className='text-2xl font-semibold'>Name:  {user?.displayName}</h1>
                                            <p className='text-xl text-blue-500 font-bold'>You got {currentUser?.score}/18 score</p>
                                        </div>
                                        <div className='my-5'>
                                            <h1 className='text-xl font-semibold'>Leader Board:</h1>
                                            <div className='border overflow-y-auto h-60 p-3'>
                                                {
                                                    users.map((user, index) => <div className='flex justify-between items-center' key={user?._id}>
                                                        <p>{index + 1}. {user?.name}</p>
                                                        <p>score: {user?.score}</p>
                                                    </div>)
                                                }
                                            </div>
                                        </div>
                                    </div> :
                                    <p className='text-xl py-5 font-semibold text-center text-gray-600'>You have to login to see the Profile and LeaderBoard&apos;s data.</p>
                            }
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Profile;