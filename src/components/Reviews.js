import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import Students from "./Students";
  

const Reviews = () => {
  return (
   <> <Container className="Categories">
      <h3>Catagories:</h3>
      <Row >
        <Col className=" Options" >
          <Button variant="outlined" sx={{mb:2}} >Seeds</Button>
        </Col>
        <Col className=" Options">
          <Button variant="outlined" >Fertilizers</Button>
        </Col>
        <Col className=" Options">
          <Button variant="outlined">Pesticides/Incecticides</Button>
        </Col>
      </Row>
      <Row>
        <Col className=" Options">
          <Button variant="outlined">Tools</Button>
        </Col>
        <Col className=" Options">
          <Button variant="outlined">Vechicles</Button>
        </Col>
        <Col className=" Options">
          <Button variant="outlined">Others</Button>
        </Col>
      </Row>
    </Container>
     {/* <div>
         <table border="2">
             <tbody>
                 <tr>
                     <th>Name</th>
                     <th>Department</th>
                 </tr>
                 // Mapping array of objects
                 {Students.students.map((item, i) => (
                     <tr key={i}>
                         <td>{item.name}</td>
                         <td>{item.department}</td>
                     </tr>
                 ))}
             </tbody>
         </table>
     </div> */}
 </>
     


  );
};

export default Reviews;

// import React from 'react'
// import JsonData from './articles.json'
//  function JsonDataDisplay(){
//     const DisplayData=JsonData.map(
//         (info)=>{
//             return(
//                 <tr>
//                     <td>{info.id}</td>
//                     <td>{info.name}</td>
//                     <td>{info.city}</td>
//                 </tr>
//             )
//         }
//     )

//     return(
//         <div>
//             <table class="table table-striped">
//                 <thead>
//                     <tr>
//                     <th>Sr.NO</th>
//                     <th>Name</th>
//                     <th>City</th>
//                     </tr>
//                 </thead>
//                 <tbody>

//                     {DisplayData}

//                 </tbody>
//             </table>

//         </div>
//     )
//  }

//  export default JsonDataDisplay;



// import React from 'react';
// import json from './data.json';  // import the data from a JSON file

// class ListView extends React.Component {
//   state = {
//     pageSize: 10,  // number of items to display per page
//     pageNumber: 1,  // current page number
//     data: [],  // list to store the parsed data from the JSON file
//   }

//   componentDidMount() {
//     // parse the data from the JSON file and store it in the component's state
//     this.setState({ data: json });
//   }

//   render() {
//     const { pageSize, pageNumber, data } = this.state;

//     // calculate the starting and ending indices for the current page
//     const startIndex = (pageNumber - 1) * pageSize;
//     const endIndex = startIndex + pageSize;

//     // slice the data list to get the items for the current page
//     const pageData = data.slice(startIndex, endIndex);

//     // render the list view with the items for the current page
//     return (
//       <ul>
//         {pageData.map(item => (
//           <li>{item}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default ListView;