// import React from 'react';

// function Header(prop) {

//     return (
//         <nav className="navbar navbar-expand-sm navbar-dark bg-custom shadow">
//             <a className="nav_title_home" href={`\\${prop.link}`}> <i className="fas fa-chart-line"></i> CSPA  </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//    <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     {prop.leftbar && (
//         <ul className="navbar-nav mr-auto" style={{ fontSize: '13.5px'}}>
//             <li className={`nav-item ${prop.current === "Dashboard" && "active"}`}>
//                 <a className="nav-link mb-0 text-dark bold-text" href="\home">Dashboard</a>
//             </li>
//             <li className={`nav-item ${prop.current === "ABC" && "active"}`} style={{ marginLeft: '9px' }}>
//                 <a className="nav-link mb-0 text-dark bold-text" href="\Linear">Linear Regression</a>
//             </li>
//             <li className={`nav-item ${prop.current === "Topics" && "active"}`} style={{ marginLeft: '9px' }}>
//                 <a className="nav-link mb-0 text-dark bold-text" href="\Logistic">Logistic Regression</a>
//             </li>
//             <li className={`nav-item ${prop.current === "Time_Series" && "active"}`} style={{ marginLeft: '9px' }}>
//                 <a className="nav-link mb-0 text-dark bold-text" href="\Time_Series">Time Series Forecasting</a>
//             </li>
//             <li className={`nav-item ${prop.current === "Random_Forest" && "active"}`} style={{ marginLeft: '9px' }}>
//                 <a className="nav-link mb-0 text-dark bold-text" href="\Random_Forest">Random Forest</a>
//             </li>
//             <li className={`nav-item ${prop.current === "SupportVm" && "active"}`} style={{ marginLeft: '9px' }}>
//                 <a className="nav-link mb-0 text-dark bold-text" href="\Demographics">Demographics</a>
//             </li>
//             <li className={`nav-item ${prop.current === "Past_Trends" && "active"}`} style={{ marginLeft: '9px' }}>
//                 <a className="nav-link mb-0 text-dark bold-text" href="\Past_Trends">Past 10 year trends</a>
//             </li>
//             {/* <li className={`nav-item ${prop.current === "Seach_Student" && "active"}`} style={{ marginLeft: '9px' }}>
//                 <a className="nav-link mb-0 text-dark bold-text" href="\Search_Student">Search Student</a>
//             </li> */}
//         </ul>
//     )}
//     <ul className="navbar-nav ml-auto">
//         {prop.profile &&
//         <li className="nav-item">
//             <p className="nav-link mb-0 text-dark bold-text" style={{ fontSize: '14px', textAlign: 'center' }} onClick={()=>{
//                 localStorage.removeItem("tokens");
//                 localStorage.removeItem("userData");
//                 window.location.reload(false);
//             }} >Logout</p>
//         </li>
//         }
//     </ul>
//     </div>
//     </nav>
//     );
// }

// export default Header;

import React from 'react';
import { useHistory } from 'react-router-dom';

function Header(prop) {
    const history = useHistory();

    const handleLogout = () => {
        // Clear tokens and user data from local storage
        localStorage.removeItem("tokens");
        localStorage.removeItem("userData");
        
        // Redirect to the login page
        history.push("/login");
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-custom shadow">
            <a className="nav_title_home" href={`/${prop.link}`}> <i className="fas fa-chart-line"></i> CSPA  </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {prop.leftbar && (
                    <ul className="navbar-nav mr-auto" style={{ fontSize: '13.5px'}}>
                        {/* Menu items */}
                        <li className={`nav-item ${prop.current === "Dashboard" && "active"}`}>
                <a className="nav-link mb-0 text-dark bold-text" href="\home">Dashboard</a>
            </li>
            <li className={`nav-item ${prop.current === "ABC" && "active"}`} style={{ marginLeft: '9px' }}>
                <a className="nav-link mb-0 text-dark bold-text" href="\Linear">Linear Regression</a>
            </li>
            <li className={`nav-item ${prop.current === "Topics" && "active"}`} style={{ marginLeft: '9px' }}>
                <a className="nav-link mb-0 text-dark bold-text" href="\Logistic">Logistic Regression</a>
            </li>
            <li className={`nav-item ${prop.current === "Time_Series" && "active"}`} style={{ marginLeft: '9px' }}>
                <a className="nav-link mb-0 text-dark bold-text" href="\Time_Series">Time Series Forecasting</a>
            </li>
            <li className={`nav-item ${prop.current === "Random_Forest" && "active"}`} style={{ marginLeft: '9px' }}>
                <a className="nav-link mb-0 text-dark bold-text" href="\Random_Forest">Random Forest</a>
            </li>
            <li className={`nav-item ${prop.current === "SupportVm" && "active"}`} style={{ marginLeft: '9px' }}>
                <a className="nav-link mb-0 text-dark bold-text" href="\Demographics">Demographics</a>
            </li>
            <li className={`nav-item ${prop.current === "Past_Trends" && "active"}`} style={{ marginLeft: '9px' }}>
                <a className="nav-link mb-0 text-dark bold-text" href="\Past_Trends">Past 10 year trends</a>
            </li>
            {/* <li className={`nav-item ${prop.current === "Seach_Student" && "active"}`} style={{ marginLeft: '9px' }}>
                <a className="nav-link mb-0 text-dark bold-text" href="\Search_Student">Search Student</a>
                </li> */}
        </ul>
                )}
                <ul className="navbar-nav ml-auto">
                    {prop.profile &&
                    <li className="nav-item">
                        <p className="nav-link mb-0 text-dark bold-text" style={{ fontSize: '14px', textAlign: 'center' }} onClick={handleLogout}>Logout</p>
                    </li>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Header;