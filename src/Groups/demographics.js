import { useState } from "react";
import React from 'react';
import Header from '../Others/header';
import Title from '../Others/heading';
import Button from 'react-bootstrap/Button';
import img5 from '../images/Gender.png'
import img6 from '../images/Geographic.png'

export default function Demographics() {
    // const img5 = 'https://styles.redditmedia.com/t5_2uog2/styles/communityIcon_6h0t2nqxxas21.jpg';
    // const img6 = 'https://a.wattpad.com/useravatar/HarukaNanaseisme.256.353940.jpg';
    // const img7 = 'https://i.pinimg.com/474x/60/68/e3/6068e328af980b1688d9ca3656bd6e52.jpg';
  
//     const imgArr = [
//       {
//         id: 'groundFloor',
//         image: img5
//       }, 
//       {
//         id: 'firstFloor',
//         image: img6}, 
//       {
//         id: 'secondFloor', 
//         image: img7
//       }
//     ]
  
//     const [open, setOpen] = useState(null);
  
//     const [showImage, setShowImage] = useState({
//       showImageNow: true,
//       showImageId: null,
//     })
  
//     const {showImageNow, showImageId} = showImage;
  
//     const OpenImage = (a) => {
//       setOpen(a.image);
//       setShowImage({
//         showImageNow: !showImageNow,
//         showImageId: a.id
//       });
//     }

//   return(
//     <div>
//       <Header link={"home"} current={"Companies"} profile={true} leftbar={true} />
//       <div className="container-fluid text-center">
//       <Title title="Comprehensive Student Performance Analysis" />
//       </div>
//       {imgArr.map((a, i) => 
//           <div key={i}>
//   <div style={{ display: "flex", justifyContent: "center" }}>
//     <Button onClick={() => OpenImage(a)} className="ground">
//       {a.id}
//     </Button>
//     {showImageNow && showImageId === a.id ? (
//       <img src={open} alt={a.id} />
//     ) : null}
//   </div>
//   <br />
// </div>

//         )}
//     </div>
//   )
// }

const imgArr = [
  {
    id: 'Gender Ratio',
    image: img5,
    caption: ''
  },
  {
    id: 'Geographic Ratio',
    image: img6,
    caption: 'Distribution of Students from Urban and Rural Areas'
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
    <Title title="Comprehensive Student Performance Analysis" />
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
              <p className="caption">{a.caption}</p>
            </div>
          ) : null}
        </div>
        <br />
      </div>
    ))}
  </div>
)
}