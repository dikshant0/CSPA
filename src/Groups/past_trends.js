import { useState } from "react";
import React from 'react';
import Header from '../Others/header';
import Title from '../Others/heading';
import Button from 'react-bootstrap/Button';
import img5 from '../images/Gender_Trends.png'
import img6 from '../images/Geographics_trend.png'
//import "./styles.css";

export default function Past_Trends() {
    // const img5 = 'https://styles.redditmedia.com/t5_2uog2/styles/communityIcon_6h0t2nqxxas21.jpg';
    // const img6 = 'https://a.wattpad.com/useravatar/HarukaNanaseisme.256.353940.jpg';
    // const img7 = 'https://i.pinimg.com/474x/60/68/e3/6068e328af980b1688d9ca3656bd6e52.jpg';
  
    const imgArr = [
      {
        id: 'Gender Ratio over past 10 year',
        image: img5,
        caption: 'Gender Ratio over past 10 year'
      },
      {
        id: 'Geographic Ratio over last 10 years',
        image: img6,
        caption: 'Distribution of Students from Urban and Rural Areas over the last 10 years'
      }//,
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