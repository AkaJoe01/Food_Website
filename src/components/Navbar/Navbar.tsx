const Navbar = () => {
    return(
        <div className="py-6">
            <div className="container flex justify-between items-center">
                {/* logo section */}
                <div className="ml-6">
                    <p className="text-lg font-semibold">
                        Food <span className="text-red-500">Bank</span>
                    </p>
                </div>
                {/* menu section */}
                <div className="flex justify-center items-center gap-10">
                    <ul className="flex gap-8">
                        <li className="hover:border-b-2 border-primary uppercase">Home</li>
                        <li className="hover:border-b-2 border-primary uppercase">Menu</li>
                        <li className="hover:border-b-2 border-primary uppercase">About</li>
                    </ul>
                </div>
                {/* login section  */}
                <div className="flex gap-4 items-center">
                    <img src="/images/Egg.jpg" alt="egg" className="w-10 h-10 object-cover rounded-full" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    )
};

export default Navbar
