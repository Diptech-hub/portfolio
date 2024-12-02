// import { useState, useEffect } from "react";
// import "../style/modeSwitch.css";

// const Switch = () => {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   useEffect(() => {
//     document.body.className = isDarkMode ? "dark-mode" : "light-mode";
//   }, [isDarkMode]);

//   const toggleMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <div className="switch-container">
//       <button className="toggle-button" onClick={toggleMode}>
//         {isDarkMode ? (
//           <svg
//             fill="#000000"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             className="icon"
//           >
//             <path d="M12 2.5a1 1 0 011 1V5a1 1 0 01-2 0V3.5a1 1 0 011-1zm0 16a1 1 0 011 1v1.5a1 1 0 01-2 0V19.5a1 1 0 011-1zm9-7a1 1 0 01-1 1h-1.5a1 1 0 010-2H20a1 1 0 011 1zm-16 0a1 1 0 01-1 1H3.5a1 1 0 010-2H5a1 1 0 011 1zm10.95-6.95a1 1 0 011.4 1.4l-1.05 1.05a1 1 0 01-1.4-1.4zm-9.9 9.9a1 1 0 011.4-1.4l1.05 1.05a1 1 0 01-1.4 1.4zM19.5 14a1 1 0 01.7-.3 1 1 0 01.7 1.7l-1.05 1.05a1 1 0 01-1.4-1.4zm-15.05-4.95a1 1 0 010 1.4L3.4 12a1 1 0 01-1.4-1.4L4 9.55a1 1 0 011.4 0zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"></path>
//           </svg>
//         ) : (
//           <svg
//             fill="#ffffff"
//             viewBox="0 0 35 35"
//             xmlns="http://www.w3.org/2000/svg"
//             className="icon"
//           >
//             <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"></path>
//           </svg>
//         )}
//       </button>
//     </div>
//   );
// };

// export default Switch;
