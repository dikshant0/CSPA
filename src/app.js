// import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
// import { AuthContext } from './context/auth';

// import Private from './private_route';
// // import Home from './HomePage/base';
// import Companies from './Groups/companies';
// // import Topics from './Groups/topics';
// import Login from './LoginPage/base';
// import Register from './RegisterPage/base';
// // import Profile from './ProfilePage/base';
// // import Topic from './TopicPage/base';
// // import Company from './CompanyPage/base';
// import Logistic_Func from './Groups/topics';
// import Time_Series from './Groups/time_series';
// import Dashboard from './Groups/dashboard';
// import Random_Forest from './Groups/random_forest';
// import Demographics from './Groups/demographics';
// import Search_Student from './Groups/search_student';
// import Past_Trends from './Groups/past_trends';
// import PreLoader from './component/PreLoader';

// function App() {
//     const existingTokens = JSON.parse(localStorage.getItem("tokens"));
//     const [authTokens, setAuthTokens] = useState(existingTokens);

//     const setTokens = (data) => {
//         localStorage.setItem("tokens", JSON.stringify(data));
//         setAuthTokens(data);
//     }

//     return (
//         <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
//             <>
//             <PreLoader/>
//             </>
//             <BrowserRouter>
//                 <Switch>
//                     <Redirect exact from='/' to='/login' />
//                     <Route path="/login"  component={Login} />
//                     <Route path="/register" component={Register} />
//                     <Route path="/Linear" component={Companies} />
//                     <Private path="/Linear" component={Companies} />
//                     <Route path="/register" component={Register} />
//                     <Route path="/home" component={Dashboard} />
//                     <Private path="/home" component={Dashboard} />
//                     {/* <Private path="/home" component={ABC} /> */}
//                     <Route path="/Logistic" component={Logistic_Func} />
//                     <Private path="/Logistic" component={Logistic_Func} />
//                     <Route path="/Time_Series" component={Time_Series} />
//                     <Private path="/Time_Series" component={Time_Series} />
//                     <Route path="/Demographics" component={Demographics} />
//                     <Private path="/Demographics" component={Demographics} />
//                     <Route path="/Random_Forest" component={Random_Forest} />
//                     <Private path="/Random_Forest" component={Random_Forest} />
//                     <Route path="/Search_Student" component={Search_Student} />
//                     <Private path="/Search_Student" component={Search_Student} />
//                     <Route path="/Past_Trends" component={Past_Trends} />
//                     <Private path="/Past_Trends" component={Past_Trends} />
//                     {/* <Private path="/profile" component={Profile} />}
//                      <Private path='/companies' component={Companies}/>
//                     <Private path='/topics' component={Topics}/>
//                     <Private path="/company/:name" component={Company} />
//                     <Private path="/topic/:name" component={Topic} /> */}
                    
//                 </Switch>
//             </BrowserRouter>
//         </AuthContext.Provider>
//     );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from './context/auth';

import Private from './private_route';
// import Home from './HomePage/base';
import Companies from './Groups/companies';
// import Topics from './Groups/topics';
import Login from './LoginPage/base';
import Register from './RegisterPage/base';
// import Profile from './ProfilePage/base';
// import Topic from './TopicPage/base';
// import Company from './CompanyPage/base';
import Logistic_Func from './Groups/topics';
import Time_Series from './Groups/time_series';
import Dashboard from './Groups/dashboard';
import Random_Forest from './Groups/random_forest';
import Demographics from './Groups/demographics';
import Search_Student from './Groups/search_student';
import Past_Trends from './Groups/past_trends';
import PreLoader from './component/PreLoader';

function App() {
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);
    const [showPreLoader, setShowPreLoader] = useState(() => {
        // Check if PreLoader has already been shown in this session
        const preloaderShown = sessionStorage.getItem("preloaderShown");
        return preloaderShown ? false : true;
    });

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    };

    useEffect(() => {
        if (showPreLoader) {
            const timer = setTimeout(() => {
                setShowPreLoader(false);
                sessionStorage.setItem("preloaderShown", "true");
            }, 5000); // Adjust the timeout duration as needed

            return () => clearTimeout(timer);
        }
    }, [showPreLoader]);

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            {showPreLoader ? (
                <PreLoader />
            ) : (
                <BrowserRouter>
                    <Switch>
                        <Redirect exact from='/' to='/login' />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/Linear" component={Companies} />
                        <Private path="/Linear" component={Companies} />
                        <Route path="/home" component={Dashboard} />
                        <Private path="/home" component={Dashboard} />
                        <Route path="/Logistic" component={Logistic_Func} />
                        <Private path="/Logistic" component={Logistic_Func} />
                        <Route path="/Time_Series" component={Time_Series} />
                        <Private path="/Time_Series" component={Time_Series} />
                        <Route path="/Demographics" component={Demographics} />
                        <Private path="/Demographics" component={Demographics} />
                        <Route path="/Random_Forest" component={Random_Forest} />
                        <Private path="/Random_Forest" component={Random_Forest} />
                        <Route path="/Search_Student" component={Search_Student} />
                        <Private path="/Search_Student" component={Search_Student} />
                        <Route path="/Past_Trends" component={Past_Trends} />
                        <Private path="/Past_Trends" component={Past_Trends} />
                    </Switch>
                </BrowserRouter>
            )}
        </AuthContext.Provider>
    );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { AuthContext } from './context/auth';

// import Private from './private_route';
// // import Home from './HomePage/base';
// import Companies from './Groups/companies';
// // import Topics from './Groups/topics';
// import Login from './LoginPage/base';
// import Register from './RegisterPage/base';
// // import Profile from './ProfilePage/base';
// // import Topic from './TopicPage/base';
// // import Company from './CompanyPage/base';
// import Logistic_Func from './Groups/topics';
// import Time_Series from './Groups/time_series';
// import Dashboard from './Groups/dashboard';
// import Random_Forest from './Groups/random_forest';
// import Demographics from './Groups/demographics';
// import Search_Student from './Groups/search_student';
// import Past_Trends from './Groups/past_trends';
// import PreLoader from './component/PreLoader';

// function App() {
//     const existingTokens = JSON.parse(localStorage.getItem("tokens"));
//     const [authTokens, setAuthTokens] = useState(existingTokens);
//     const [showPreLoader, setShowPreLoader] = useState(() => {
//         // Check if PreLoader has already been shown in this session
//         const preloaderShown = sessionStorage.getItem("preloaderShown");
//         return preloaderShown ? false : true;
//     });

//     const setTokens = (data) => {
//         localStorage.setItem("tokens", JSON.stringify(data));
//         setAuthTokens(data);
//     };

//     const handleEndPreloader = () => {
//         setShowPreLoader(false);
//         sessionStorage.setItem("preloaderShown", "true");
//     };

//     useEffect(() => {
//         if (showPreLoader) {
//             const timer = setTimeout(() => {
//                 setShowPreLoader(false);
//                 sessionStorage.setItem("preloaderShown", "true");
//             }, 15000); // Adjust the timeout duration as needed

//             return () => clearTimeout(timer);
//         }
//     }, [showPreLoader]);

//     return (
//         <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
//             {showPreLoader ? (
//                 <PreLoader onEnd={handleEndPreloader} />
//             ) : (
//                 <BrowserRouter>
//                     <Switch>
//                         <Redirect exact from='/' to='/login' />
//                         <Route path="/login" component={Login} />
//                         <Route path="/register" component={Register} />
//                         <Private path="/Linear" component={Companies} />
//                         <Route path="/home" component={Dashboard} />
//                         <Private path="/home" component={Dashboard} />
//                         <Private path="/Logistic" component={Logistic_Func} />
//                         <Private path="/Time_Series" component={Time_Series} />
//                         <Private path="/Demographics" component={Demographics} />
//                         <Private path="/Random_Forest" component={Random_Forest} />
//                         <Private path="/Search_Student" component={Search_Student} />
//                         <Private path="/Past_Trends" component={Past_Trends} />
//                     </Switch>
//                 </BrowserRouter>
//             )}
//         </AuthContext.Provider>
//     );
// }

// export default App;