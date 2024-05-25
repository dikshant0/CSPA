// import { useState } from "react";
// import React from 'react';
// import Header from '../Others/header';
// import Title from '../Others/heading';
// import Button from 'react-bootstrap/Button';
// import img5 from '../images/Gender.png'
// import img6 from '../images/Geographic.png'
// import img7 from '../images/Geographic.png'
// import img8 from '../images/Geographic.png'
// import SearchStudent from './search_student';

// export default function Demographics() {
//   const imgArr = [
//   {
//     id: 'Gender Ratio',
//     image: img5,
//     caption: ''
//   },
//   {
//     id: 'Geographic Ratio',
//     image: img6,
//     caption: 'Distribution of Students from Urban and Rural Areas'
//   }
// ];

// const [open, setOpen] = useState(null);

// const [showImage, setShowImage] = useState({
//   showImageNow: true,
//   showImageId: null,
// });

// const { showImageNow, showImageId } = showImage;

// const OpenImage = (a) => {
//   setOpen(a.image);
//   setShowImage({
//     showImageNow: !showImageNow,
//     showImageId: a.id
//   });
// };

// return (
//   <div>
//     <Header link={"home"} current={"Companies"} profile={true} leftbar={true} />
//     <div className="container-fluid text-center">
//     <Title title="Comprehensive Student Performance Analysis" />
//     </div>
//     {imgArr.map((a, i) => (
//       <div key={i}>
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//           <Button onClick={() => OpenImage(a)} className="ground" variant='primary' style={{ borderRadius: '20px' }}>
//             {a.id}
//           </Button>
//           {showImageNow && showImageId === a.id ? (
//             <div>
//               <img src={open} alt={a.id} />
//               <p className="caption">{a.caption}</p>
//             </div>
//           ) : null}
//         </div>
//         <br />
//       </div>
//     ))}
//     <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}> 
//         <Button variant='primary' style={{ margin: "0 10px", borderRadius: '20px' }}>Most Consistent Students</Button>
//         <Button variant='primary' style={{ margin: "0 10px", borderRadius: '20px' }}>Least Consistent Students</Button>
//       </div>
//     <SearchStudent></SearchStudent>
//   </div>
// )
// }

import { useState } from "react";
import React from 'react';
import Header from '../Others/header';
import Title from '../Others/heading';
import Button from 'react-bootstrap/Button';
import img5 from '../images/Gender.png';
import img6 from '../images/Geographic.png';
import SearchStudent from './search_student';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

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

  const [showTable1, setShowTable1] = useState(false);
  const [showTable2, setShowTable2] = useState(false);

  const toggleTable1 = () => {
    setShowTable1(!showTable1);
    setShowTable2(false);
  };

  const toggleTable2 = () => {
    setShowTable2(!showTable2);
    setShowTable1(false);
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
                <p className="caption">{a.caption}</p>
              </div>
            ) : null}
          </div>
          <br />
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}> 
        <Button onClick={toggleTable1} variant='primary' style={{ margin: "0 10px", borderRadius: '20px' }}>Most Consistent Students</Button>
        <Button onClick={toggleTable2} variant='primary' style={{ margin: "0 10px", borderRadius: '20px' }}>Least Consistent Students</Button>
      </div>
      {showTable1 && (
        <div className="table-responsive" style={{ marginTop: "20px" }}>
          <Container>
          <Table className="table" striped bordered hover>
            <thead>
              <tr className='table_work'>
      <th>SID</th>
      <th>SEM 1</th>
      <th>SEM 2</th>
      <th>SEM 3</th>
      <th>SEM 4</th>
      <th>SEM 5</th>
      <th>SEM 6</th>
      <th>SEM 7</th>
      <th>SEM 8</th>
      <th>CGPA</th>
      <th>Gender</th>
      <th>Geography</th>
      <th>Median</th>
      <th>Standard Deviation</th>
      <th>Variance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID00 022</td>
      <td>9.09</td>
      <td>8.88</td>
      <td>9.18</td>
      <td>9.77</td>
      <td>8.31</td>
      <td>9.52</td>
      <td>9.41</td>
      <td>8.88</td>
      <td>9.12</td>
      <td>Male</td>
      <td>Rural</td>
      <td>9.135</td>
      <td>0.460931457</td>
      <td>0.212457</td>
    </tr>
    <tr>
      <td>ID00 024</td>
      <td>7.13</td>
      <td>7.44</td>
      <td>8.32</td>
      <td>7.86</td>
      <td>8.11</td>
      <td>7.87</td>
      <td>7.74</td>
      <td>6.74</td>
      <td>7.646425</td>
      <td>Male</td>
      <td>Urban</td>
      <td>7.520712</td>
      <td>0.552141358</td>
      <td>0.304576</td>
    </tr>
    <tr>
      <td>ID00 015</td>
      <td>7.86</td>
      <td>7.86</td>
      <td>7.91</td>
      <td>7.53</td>
      <td>8.59</td>
      <td>8.48</td>
      <td>7.83</td>
      <td>9.12</td>
      <td>8.195</td>
      <td>Male</td>
      <td>Urban</td>
      <td>8.195852</td>
      <td>0.555971</td>
      <td>0.308574</td>
    </tr>
    <tr>
      <td>ID00 044</td>
      <td>7.15</td>
      <td>7.69</td>
      <td>8.89</td>
      <td>8.9</td>
      <td>7.76</td>
      <td>8.32</td>
      <td>7.65</td>
      <td>8.18</td>
      <td>8.0675</td>
      <td>Female</td>
      <td>Urban</td>
      <td>7.97</td>
      <td>0.620365</td>
      <td>0.385493</td>
    </tr>
    <tr>
      <td>ID00 036</td>
      <td>7.27</td>
      <td>9.12</td>
      <td>8.21</td>
      <td>7.93</td>
      <td>8.97</td>
      <td>8.85</td>
      <td>8.18</td>
      <td>8.18</td>
      <td>8.29125</td>
      <td>Male</td>
      <td>Urban</td>
      <td>8.195927</td>
      <td>0.642927</td>
      <td>0.413355</td>
    </tr>
  </tbody>
  </Table>

  </Container>
  </div>
  )}

{showTable2 && (
  <div className="table-responsive" style={{ marginTop: "20px" }}>
    <Container>
      <Table className="table" striped bordered hover>
      <thead>
    <tr className='table_work'>
      <th>SID</th>
      <th>SEM 1</th>
      <th>SEM 2</th>
      <th>SEM 3</th>
      <th>SEM 4</th>
      <th>SEM 5</th>
      <th>SEM 6</th>
      <th>SEM 7</th>
      <th>SEM 8</th>
      <th>CGPA</th>
      <th>Gender</th>
      <th>Geography</th>
      <th>Median</th>
      <th>Standard Deviation</th>
      <th>Variance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID00 057</td>
      <td>6.8</td>
      <td>7.05</td>
      <td>8.21</td>
      <td>9.66</td>
      <td>9.07</td>
      <td>9.46</td>
      <td>8.46</td>
      <td>9.42</td>
      <td>8.53875</td>
      <td>Male</td>
      <td>Urban</td>
      <td>8.765</td>
      <td>1.126479</td>
      <td>1.268955</td>
    </tr>
    <tr>
      <td>ID00 019</td>
      <td>9.1</td>
      <td>8.69</td>
      <td>6.62</td>
      <td>7.22</td>
      <td>7.91</td>
      <td>7.73</td>
      <td>8.55</td>
      <td>9.75</td>
      <td>8.0975</td>
      <td>Male</td>
      <td>Urban</td>
      <td>8.23</td>
      <td>1.161419</td>
      <td>1.348964</td>
    </tr>
    <tr>
      <td>ID00 059</td>
      <td>7.65</td>
      <td>8.89</td>
      <td>7.9</td>
      <td>6.68</td>
      <td>7.21</td>
      <td>9.54</td>
      <td>8.28</td>
      <td>9.52</td>
      <td>8.445</td>
      <td>Female</td>
      <td>Urban</td>
      <td>8.585</td>
      <td>1.174819</td>
      <td>1.380243</td>
    </tr>
    <tr>
      <td>ID00 137</td>
      <td>8.71</td>
      <td>6.97</td>
      <td>9.27</td>
      <td>9.15</td>
      <td>6.71</td>
      <td>8.91</td>
      <td>6.41</td>
      <td>7.81</td>
      <td>8.22625</td>
      <td>Male</td>
      <td>Rural</td>
      <td>8.71</td>
      <td>1.185013</td>
      <td>1.404255</td>
    </tr>
    <tr>
      <td>ID00 035</td>
      <td>9.56</td>
      <td>8.88</td>
      <td>9.44</td>
      <td>7.07</td>
      <td>6.69</td>
      <td>6.64</td>
      <td>8.68</td>
      <td>8.65</td>
      <td>8.17875</td>
      <td>Female</td>
      <td>Rural</td>
      <td>8.635</td>
      <td>1.196153</td>
      <td>1.430784</td>
    </tr>
  </tbody>
      </Table>
    </Container>
  </div>
)}
  <SearchStudent></SearchStudent>
    </div>
  );
}
