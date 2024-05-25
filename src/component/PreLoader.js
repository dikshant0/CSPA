import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation";
import "./preloader.css"

const PreLoader = () => {

    useEffect(() =>{
        preLoaderAnim()
    }, []);
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Comprehensive</span>
                <span>Student</span>
                <span>Performance</span>
                <span>Analytics</span>
            </div>
        </div>
    )
}
export default PreLoader

// import React, { useEffect } from 'react';
// import { preLoaderAnim, mobileLanding, animateShapes, animateMainShape } from '../animation';
// import gsap from 'gsap';
// import "./preloader.css"
// const PreLoader = () => {
//   useEffect(() => {
//     const tl = gsap.timeline();

//     preLoaderAnim();

//     const endPreloader = () => {
//       tl.progress(1);
//     };

//     document.getElementById("end-preloader-btn").addEventListener("click", endPreloader);

//     return () => {
//       document.getElementById("end-preloader-btn").removeEventListener("click", endPreloader);
//     };
//   }, []);

//   return (
//     <div>
//       {/* Your existing components and elements */}
//       <div className="preloader">
//             <div className="texts-container">
//                 <span>Comprehensive</span>
//                 <span>Student</span>
//                 <span>Performance</span>
//                 <span>Analytics</span>
//             </div>
//       </div>
//       <button id="end-preloader-btn" style={{ position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)", padding: "10px 20px", fontSize: "16px" }}>
//         End Preloader
//       </button>
//     </div>
//   );
// };

// export default PreLoader;

// import React, { useEffect } from 'react';
// import { preLoaderAnim } from '../animation';
// // import gsap from 'gsap';
// import "./preloader.css";
// import Button from 'react-bootstrap/Button';

// const PreLoader = ({ onEnd }) => {
//   useEffect(() => {
//     preLoaderAnim();

//     // Optionally, you could trigger the animation completion here if needed.
//     // const endPreloader = () => {
//     //   tl.progress(1);
//     // };

//     // document.getElementById("end-preloader-btn").addEventListener("click", endPreloader);

//     // return () => {
//     //   document.getElementById("end-preloader-btn").removeEventListener("click", endPreloader);
//     // };
//   }, []);

//   return (
//     <div>
//       <div className="preloader">
//         <div className="texts-container">
//           <span>Comprehensive</span>
//           <span>Student</span>
//           <span>Performance</span>
//           <span>Analytics</span>
//         </div>
//       </div>
//       <Button 
//         id="end-preloader-btn" 
//         onClick={onEnd}
//         style={{ position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)", padding: "10px 20px", fontSize: "16px" }}
//       >
//         Enter Website
//       </Button>
//     </div>
//   );
// };

// export default PreLoader;