// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { data } from './data.js';
// import Header from '../Others/header';
// import Title from '../Others/heading';

// function Search_Student() {
//   const [contacts, setContacts] = useState(data);
//   const [search, setSearch] = useState('');
//   const [sortField, setSortField] = useState('');

//   const sortData = (field) => {
//     setSortField(field);
//     setContacts([...contacts].sort((a, b) => a[field].localeCompare(b[field])));
//   };

//   return (
//     <div>
//       <Header link={"home"} current={"Companies"} profile={true} leftbar={true} />
//       <div className="container-fluid text-center" />
//       <Title title="Comprehensive Student Performance Analysis" />

//       <Container>
//         <h1 className='text-center mt-4'>Student Search</h1>
//         <Form>
//           <InputGroup className='my-3'>
//             <Form.Control
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder='Search Student'
//             />
//           </InputGroup>
//         </Form>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th onClick={() => sortData('SID')}>SID</th>
//               <th onClick={() => sortData('SEM 1')}>Sem 1</th>
//               <th onClick={() => sortData('SEM 2')}>Sem 2</th>
//               <th onClick={() => sortData('SEM 3')}>Sem 3</th>
//               <th onClick={() => sortData('SEM 4')}>Sem 4</th>
//               <th onClick={() => sortData('SEM 5')}>Sem 5</th>
//               <th onClick={() => sortData('SEM 6')}>Sem 6</th>
//               <th onClick={() => sortData('SEM 7')}>Sem 7</th>
//               <th onClick={() => sortData('SEM 8')}>Sem 8</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts
//               .filter((item) =>
//                 search.toLowerCase() === ''
//                   ? item
//                   : item.SID.toLowerCase().includes(search)
//               )
//               .map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.SID}</td>
//                   <td>{item['SEM 1']}</td>
//                   <td>{item['SEM 2']}</td>
//                   <td>{item['SEM 3']}</td>
//                   <td>{item['SEM 4']}</td>
//                   <td>{item['SEM 5']}</td>
//                   <td>{item['SEM 6']}</td>
//                   <td>{item['SEM 7']}</td>
//                   <td>{item['SEM 8']}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </Table>
//       </Container>
//     </div>
//   );
// }

// export default Search_Student;


// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { data } from './data.js';
// import Header from '../Others/header';
// import Title from '../Others/heading';

// function Search_Student() {
//   const [contacts, setContacts] = useState(data);
//   const [search, setSearch] = useState('');
//   const [searchClicked, setSearchClicked] = useState(false); // Flag to track whether search button is clicked

//   const handleSearchClick = () => {
//     setSearchClicked(true);
//   };

//   return (
//     <div>
//       <Header link={"home"} current={"Companies"} profile={true} leftbar={true} />
//       <div className="container-fluid text-center" />
//       <Title title="Comprehensive Student Performance Analysis" />

//       <Container>
//         <h1 className='text-center mt-4'>Student Search</h1>
//         <Form>
//           <InputGroup className='my-3'>
//             <Form.Control
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder='Search Student'
//             />
//             <InputGroup.Append>
//               <Button variant="primary" onClick={handleSearchClick}>Search</Button>
//             </InputGroup.Append>
//           </InputGroup>
//         </Form>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>SID</th>
//               <th>Sem 1</th>
//               <th>Sem 2</th>
//               <th>Sem 3</th>
//               <th>Sem 4</th>
//               <th>Sem 5</th>
//               <th>Sem 6</th>
//               <th>Sem 7</th>
//               <th>Sem 8</th>
//               <th>CGPA</th>
//               <th>Gender</th>
//               <th>Geography</th>
//             </tr>
//           </thead>
//           <tbody>
//             {searchClicked &&
//               contacts
//                 .filter((item) =>
//                   search.toLowerCase() === ''
//                     ? item
//                     : item.SID.toLowerCase().includes(search)
//                 )
//                 .map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.SID}</td>
//                     <td>{item['SEM 1']}</td>
//                     <td>{item['SEM 2']}</td>
//                     <td>{item['SEM 3']}</td>
//                     <td>{item['SEM 4']}</td>
//                     <td>{item['SEM 5']}</td>
//                     <td>{item['SEM 6']}</td>
//                     <td>{item['SEM 7']}</td>
//                     <td>{item['SEM 8']}</td>
//                     <td>{item.CGPA}</td>
//                     <td>{item.Gender}</td>
//                     <td>{item.Geography}</td>
//                   </tr>
//                 ))}
//           </tbody>
//         </Table>
//       </Container>
//     </div>
//   );
// }

// export default Search_Student;

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';
// import Header from '../Others/header';
// import Title from '../Others/heading';

function Search_Student() {
  const [contacts] = useState(data);
  const [search, setSearch] = useState('');
  const [searchClicked, setSearchClicked] = useState(false); // Flag to track whether search button is clicked

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  const handleBlur = () => {
    if (search === '') {
      setSearchClicked(false);
    }
  };

  return (
    <div>
      {/* <Header link={"home"} current={"Companies"} profile={true} leftbar={true} />
      <div className="container-fluid text-center" />
      <Title title="Comprehensive Student Performance Analysis" /> */}

      <Container>
        <h1 className='text-center mt-4'>Student Search</h1>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              onBlur={handleBlur} // Reset searchClicked on blur
              placeholder='Search Student'
            />
            {/* <InputGroup.Append> */}
            {/* </InputGroup.Append> */}
          </InputGroup>
          <div style={{ display: "flex", justifyContent: "center"}}>
          <Button variant="primary" onClick={handleSearchClick} style={{ borderRadius: '20px'}}>Search</Button>
          </div>
        </Form>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr className='table_work'>
              <th>SID</th>
              <th>Sem 1</th>
              <th>Sem 2</th>
              <th>Sem 3</th>
              <th>Sem 4</th>
              <th>Sem 5</th>
              <th>Sem 6</th>
              <th>Sem 7</th>
              <th>Sem 8</th>
              <th>CGPA</th>
              <th>Gender</th>
              <th>Geography</th>
              <th>Median</th>
              <th>Standard Deviation</th>
              <th>Variance</th>
            </tr>
          </thead>
          <tbody>
            {searchClicked &&
              contacts
                .filter((item) =>
                  search.toLowerCase() === ''
                    ? item
                    : item.SID.toLowerCase().includes(search)
                )
                .map((item, index) => (
                  <tr className='table_work' key={index}>
                    <td>{item.SID}</td>
                    <td>{item['SEM 1']}</td>
                    <td>{item['SEM 2']}</td>
                    <td>{item['SEM 3']}</td>
                    <td>{item['SEM 4']}</td>
                    <td>{item['SEM 5']}</td>
                    <td>{item['SEM 6']}</td>
                    <td>{item['SEM 7']}</td>
                    <td>{item['SEM 8']}</td>
                    <td>{item.CGPA}</td>
                    <td>{item.Gender}</td>
                    <td>{item.Geography}</td>
                    <td>{item.Median}</td>
                    <td>{item['Standard Deviation']}</td>
                    <td>{item.Variance}</td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Search_Student;