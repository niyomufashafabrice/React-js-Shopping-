// import React from 'react'
// import LightPng from '../../../public/images/LightMode.png'
// import DarkPng from '../../../public/images/darkmode.png'

// const DarkMode = () => {
//     const [theme, setTheme] = React.useState(
//       localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//     ); 

//     const element = document.documentElement; //html element
//     React.useEffect(() => {
//       if (theme === "dark") {
//         element.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//       } else {
//         element.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//       }
//     }, [theme]);

//   return (
//     <div className='relative'>
//       <img src={LightPng} alt=""
//       onClick={()=> setTheme( theme === "light" ? "dark" : "light")}
//       className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300
//       absolute right-0 z-10 ' />
//       <img src={DarkPng} alt="" onClick={()=> setTheme( theme === "light" ? "dark" : "light")}
//       className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'/>
//     </div>
//   )
// }

// export default DarkMode

import React from 'react';
import LightPng from '../../../public/images/LightMode.png';
import DarkPng from '../../../public/images/darkmode.png';

const DarkMode = () => {
    // Using window check to avoid server-side rendering issues
    const [theme, setTheme] = React.useState(
        typeof window !== 'undefined' ? 
        localStorage.getItem("theme") || "light" : "light"
    );

    const element = document.documentElement; // html element
    
    React.useEffect(() => {
        // Move localStorage access inside useEffect to avoid server-side rendering issues
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    // Toggle function to reduce repetition
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    console.log("Theme changed to:", theme);
    return (
        <div className='relative'>
            <img 
                src={LightPng} 
                alt="Light mode"
                onClick={toggleTheme}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300
                absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`} 
            />
            <img 
                src={DarkPng} 
                alt="Dark mode" 
                onClick={toggleTheme}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300
                ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}
            />
        </div>
    );
};

export default DarkMode;
