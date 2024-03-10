import {Outlet} from 'react-router-dom'


const Layout = () => {
    return (
        <div className='bg-[url("https://i.ibb.co/dgqny0d/bg-img.png")] bg-cover flex justify-center items-center text-gray-400 min-h-screen'>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;