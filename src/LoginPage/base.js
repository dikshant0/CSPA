// import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
// import { useAuth } from '../context/auth';

// import Header from '../Others/header';
// import Content from './content';

// function Login() {
//     const { setAuthTokens } = useAuth();
//     const [isLoggedIn, setLoggedIn] = useState(false);
//     const [isError, setIsError] = useState(false);
//     const [isWrong, setIsWrong] = useState(false);
//     const [isSent, setIsSent] = useState(false);

//     // One Time Check for Already login
//     useEffect(() => {
//         var data = localStorage.getItem("tokens");
//         if (data) setLoggedIn(true);
//     }, [])

//     // On Form Submit
//     function submitHandler(data) {
//         setIsSent(true);

//         // Posting to Server
//         const url = (process.env.REACT_APP_SERVER || "http://localhost:3000") + "/login";
//         console.log(url);
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })
//             .then(res => res.text())
//             .then(data => {
//                 if (data !== "Not Found") {
//                     setAuthTokens(data);
//                     setLoggedIn(true);
//                     setIsSent(false);
//                 } else {
//                     setIsWrong(true);
//                     setIsSent(false);
//                 }
//             })
//             .catch(() => {
//                 setIsError(true);
//                 setIsSent(false);
//             })
//     }

//     return (
//         <div>
//             {isLoggedIn && <Redirect to="/home" />}
//             <Header link={"login"} leftbar={false} />
//             <Content submitHandler={submitHandler} isError={isError} isWrong={isWrong} isSent={isSent} />
//         </div>
//     );
// }

// export default Login;

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// import { useAuth } from '../context/auth';

import Header from '../Others/header';
import Content from './content';

function Login() {
    // const { setAuthTokens } = useAuth();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    const [isSent, setIsSent] = useState(false);

    // One Time Check for Already login
    useEffect(() => {
        var data = localStorage.getItem("tokens");
        if (data) setLoggedIn(true);
    }, []);

    // On Form Submit
    function submitHandler(data) {
        setIsSent(true);

        const { username, password } = data;

        // Hardcoded username and password
        const hardcodedUsername = "Admin";
        const hardcodedPassword = "Admin@123";

        // Check if provided credentials match the hardcoded values
        if (username === hardcodedUsername && password === hardcodedPassword) {
            // If credentials match, set the authentication tokens and setLoggedIn to true
            setLoggedIn(true);
            setIsWrong(false);
            setIsError(false);
            setIsSent(false);
            // Here, you might want to save the authentication tokens
            // However, in this example, we are not dealing with tokens
        } else {
            // If credentials do not match, set isWrong to true
            setIsWrong(true);
            setIsError(false);
            setIsSent(false);
        }
    }

    return (
        <div>
            {isLoggedIn && <Redirect to="/home" />}
            <Header link={"login"} leftbar={false} />
            <Content submitHandler={submitHandler} isError={isError} isWrong={isWrong} isSent={isSent} />
        </div>
    );
}

export default Login;
