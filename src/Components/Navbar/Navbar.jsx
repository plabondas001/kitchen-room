const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto mt-5 content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
            <div className="flex items-center gap-2">
                <img className="w-[50px]" src="/src/assets/logo.png" alt=""/>
                <h1 className="font-bold text-2xl">Taxi
                    <span className="text-yellow-500">Kitchen</span>
                </h1>
            </div>
            <div>
                <ul className="flex gap-5">
                    <li><a className="border-b-3 py-1 duration-200 hover:font-bold" href="#">Orders</a></li>
                    <li><a className="border-b-3 py-1 duration-200 hover:font-bold" href="#">Foods</a></li>
                    <li><a className="border-b-3 py-1 duration-200 hover:font-bold" href="#">Tables</a></li>
                    <li><a className="border-b-3 py-1 duration-200 hover:font-bold" href="#">Logout</a></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;