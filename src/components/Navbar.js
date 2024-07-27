// src/components/Navbar.js
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav className="bg-gray-900 text-white p-4">
//             <ul className="flex justify-center space-x-4">
//                 <li>
//                     <NavLink exact to="/" activeClassName="text-yellow-500" className="hover:text-yellow-500">Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/intraday" activeClassName="text-yellow-500" className="hover:text-yellow-500">Intraday</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/daily" activeClassName="text-yellow-500" className="hover:text-yellow-500">Daily</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/weekly" activeClassName="text-yellow-500" className="hover:text-yellow-500">Weekly</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/monthly" activeClassName="text-yellow-500" className="hover:text-yellow-500">Monthly</NavLink>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

// src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav className="bg-gray-900 p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 <h1 className="text-white text-2xl font-bold">Stock Tracker</h1>
//                 <ul className="flex space-x-4">
//                     <li>
//                         <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/daily" className="text-gray-300 hover:text-white">Daily</Link>
//                     </li>
//                     <li>
//                         <Link to="/weekly" className="text-gray-300 hover:text-white">Weekly</Link>
//                     </li>
//                     <li>
//                         <Link to="/monthly" className="text-gray-300 hover:text-white">Monthly</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav className="bg-gray-900 p-4">
//             <ul className="flex flex-col md:flex-row justify-between items-center">
//                 <li>
//                     <Link to="/" className="text-white text-xl font-bold">StockApp</Link>
//                 </li>
//                 <li className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
//                     <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
//                     <Link to="/daily" className="text-gray-300 hover:text-white">Daily</Link>
//                     <Link to="/weekly" className="text-gray-300 hover:text-white">Weekly</Link>
//                     <Link to="/monthly" className="text-gray-300 hover:text-white">Monthly</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-4 fixed top-0 left-0 right-0 z-50">
            <ul className="flex flex-col md:flex-row justify-between items-center">
                <li>
                    <Link to="/" className="text-white text-xl font-bold">StockApp</Link>
                </li>
                <li className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/daily" className="text-gray-300 hover:text-white">Daily</Link>
                    <Link to="/weekly" className="text-gray-300 hover:text-white">Weekly</Link>
                    <Link to="/monthly" className="text-gray-300 hover:text-white">Monthly</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
