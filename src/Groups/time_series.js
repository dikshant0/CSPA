import { useState } from "react";
import React from 'react';
import Header from '../Others/header';
import Title from '../Others/heading';
import Button from 'react-bootstrap/Button';
import img5 from '../images/TimeSeries1.png';
import img6 from '../images/TimeSeries2.png';
//import "./styles.css";

export default function Time_Series() {
const imgArr = [
  {
    id: 'Time Series Forecasting',
    image: img5,
    caption: ''
  },
  {
    id: 'Analysis',
    image: img6,
    caption: 'R square is 0.7291666666666667'
  },
  // {
  //   id: 'Comparison between Model-I and Model-II',
  //   image: img7,
  //   caption: 'Comparison between Model-I and Model-II'
  // }
];

const [open, setOpen] = useState(null);

const [showImage, setShowImage] = useState({
  showImageNow: true,
  showImageId: null,
});

const { showImageNow, showImageId } = showImage;

const OpenImage = (a) => {
  setOpen(a.image);
  setShowImage({
    showImageNow: !showImageNow,
    showImageId: a.id
  });
};

return (
  <div>
    <Header link={"home"} current={"Companies"} profile={true} leftbar={true} />
    <div className="container-fluid text-center">
    <Title title="Comprehensive Student Performance Analytics" />
    </div>
    {imgArr.map((a, i) => (
      <div key={i}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Button onClick={() => OpenImage(a)} className="ground" variant='primary' style={{ borderRadius: '20px' }}>
            {a.id}
          </Button>
          {showImageNow && showImageId === a.id ? (
            <div>
              <img src={open} alt={a.id} />
              <p className="caption, Formula" style={{textAlign: "center"}}>{a.caption}</p>
            </div>
          ) : null}
        </div>
        <br />
      </div>
    ))}
  </div>
)
}

// import React, { useState } from "react";
// import Header from "../Others/header";
// import Title from "../Others/heading";
// import Button from "react-bootstrap/Button";
// import img5 from '../images/TimeSeries1.png';
// import img6 from '../images/TimeSeries2.png';

// const tableData = [
//   {
//     Metric: "R-squared",
//     "Linear Regression I": 0.881,
//     "Linear Regression II": 0.976,
//   },
//   {
//     Metric: "Mean Squared Error (MSE)",
//     "Linear Regression I": 148.437,
//     "Linear Regression II": 30.025,
//   },
//   {
//     Metric: "Root Mean Squared Error (RMSE)",
//     "Linear Regression I": 12.187,
//     "Linear Regression II": 5.481,
//   },
// ];

// export default function Time_Series() {
//   const imgArr = [
//     {
//       id: "Time Series Forecasting",
//       image: img5,
//       caption: "This is a dummy Text Can Be replaced with formulae of any sort",
//     },
//     {
//       id: "Analysis",
//       image: img6,
//       caption: "Linear-II Model FORMULA",
//     },
//   ];

//   const [open, setOpen] = useState(null);
//   const [showImage, setShowImage] = useState({
//     showImageNow: true,
//     showImageId: null,
//   });
//   const [showTable, setShowTable] = useState(false);

//   const { showImageNow, showImageId } = showImage;

//   const OpenImage = (a) => {
//     if (a.id === "Analysis") {
//       setShowTable(true);
//     } else {
//       setOpen(a.image);
//       setShowTable(false);
//     }

//     setShowImage({
//       showImageNow: !showImageNow,
//       showImageId: a.id,
//     });
//   };

//   return (
//     <div>
//       <Header
//         link={"home"}
//         current={"Companies"}
//         profile={true}
//         leftbar={true}
//       />
//       <div className="container-fluid text-center">
//         <Title title="Comprehensive Student Performance Analysis" />
//       </div>
//       {imgArr.map((a, i) => (
//         <div key={i}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Button
//               onClick={() => OpenImage(a)}
//               className="ground"
//               variant="primary"
//               style={{ borderRadius: "20px" }}
//             >
//               {a.id}
//             </Button>
//             {showImageNow && showImageId === a.id ? (
//               <div>
//                 <img src={open} alt={a.id} />
//                 <p className="caption">{a.caption}</p>
//               </div>
//             ) : null}
//           </div>
//           <br />
//         </div>
//       ))}
//       {showTable && (
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Metric</th>
//                 <th>Linear Regression I</th>
//                 <th>Linear Regression II</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.Metric}</td>
//                   <td>{row["Linear Regression I"]}</td>
//                   <td>{row["Linear Regression II"]}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }