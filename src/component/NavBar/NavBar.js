import React, { useState } from 'react';
import Link from '../Link/Link';
import './NavBar.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


// const NavBar = () => {
//     const [open, setOpen] = useState(false)
//     const routes = [
//         { id: 1, name: 'Home', path: '/home' },
//         { id: 2, name: 'Question', path: '/question' },
//         { id: 3, name: 'Blog', path: '/blog' },
//         { id: 4, name: 'Chart', path: '/chart' },
//     ]
//     return (
//         <nav class='navbar'>
//             <div>
//                 <h2>Question-Paper</h2>
//             </div>
//             <div onClick={() => setOpen(!open)} class="h-6 w-6 md:hidden">
//                 {
//                     open ? <XMarkIcon /> : <Bars3Icon />
//                 }
//                 <ul class={`md:flex justify-center absolute md:static duration-500 ease-in ${open ? 'top-4' : 'top-[-120px]'}`}>
//                     {
//                         routes.map(route => <Link key={route.id} route={route}></Link>)
//                     }



//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;