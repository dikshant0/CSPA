import { useState } from "react";
import React from 'react';
import Header from '../Others/header';
import Title from '../Others/heading';
import Button from 'react-bootstrap/Button';
import img5 from '../images/Gender.png'
import img6 from '../images/Geographic.png'
import SearchStudent from './search_student';

export default function Demographics() {
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
  }
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
    <SearchStudent></SearchStudent>
  </div>
)
}