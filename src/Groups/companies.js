import React from 'react';
import { useState } from "react";
import Header from '../Others/header';
import Title from '../Others/heading';
import img5 from '../images/Linear1.PNG';
import img6 from '../images/Linear2.PNG';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function Companies() {
  const imgArr = [
    {
      id: 'Linear Regression Model - I',
      image: img5,
      caption: ''
    },
    {
      id: 'Linear Regression Model - II',
      image: img6,
      caption: ''
    }
  ];

  const [open, setOpen] = useState(null);
  const [showImage, setShowImage] = useState({
    showImageNow: true,
    showImageId: null,
  });

  const { showImageNow, showImageId } = showImage;

  //const [showTable, setShowTable] = useState(false);

  const OpenImage = (a) => {
    setOpen(a.image);
    setShowImage({
      showImageNow: !showImageNow,
      showImageId: a.id
    });
  };

  const [showTable1, setShowTable1] = useState(false);
  const [showTable2, setShowTable2] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const toggleTable1 = () => {
    setShowTable1(!showTable1);
    setShowTable2(false);
    setShowComparison(false);
  };

  const toggleTable2 = () => {
    setShowTable2(!showTable2);
    setShowTable1(false);
    setShowComparison(false);
  };

  const toggleComparison = () => {
    setShowComparison(!showComparison);
    setShowTable1(false);
    setShowTable2(false);
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
        <Button onClick={toggleTable1} variant='primary' style={{ margin: "0 10px", borderRadius: '20px' }}>Analysis of Model-I</Button>
        <Button onClick={toggleTable2} variant='primary' style={{ margin: "0 10px", borderRadius: '20px' }}>Analysis of Model-II</Button>
        <Button onClick={toggleComparison} variant='primary' style={{ margin: "0 10px", borderRadius: '20px' }}>Comparison between Model-I and Model-II</Button>
      </div>

      {showTable1 && (
        <div className="table-responsive" style={{ marginTop: "20px" }}>
          <Container>
          <Table className="table" striped bordered hover>
            <thead>
              <tr>
                <th>Category</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {/* Insert Table Data for Model-I */}
              <tr>
                <td>Mean(X)</td>
                <td className='Formula'>5.02</td>
              </tr>
              <tr>
                <td>Mean(Y)</td>
                <td className='Formula'>57.86</td>
              </tr>
              <tr>
                <td>Deviations(X)</td>
                <td className='Formula'>[-3.52, -1.22, 1.18, ...]</td>
              </tr>
              <tr>
                <td>Deviations(Y)</td>
                <td className='Formula'>[-39.36, -1.86, 23.64, ...]</td>
              </tr>
              <tr>
                <td>Product of Deviations</td>
                <td className='Formula'>[13.0584, 2.2712, 27.9632, ...]</td>
              </tr>
              <tr>
                <td>Sum of Product of Deviations for X</td>
                <td className='Formula'>715.52</td>
              </tr>
              <tr>
                <td>Sum of Square of Deviations of X</td>
                <td className='Formula'>239.14</td>
              </tr>
              <tr>
                <td>Slope (m)</td>
                <td className='Formula'>2.993</td>
              </tr>
              <tr>
                <td>Intercept (B)</td>
                <td className='Formula'>-0.4618</td>
              </tr>
              <tr>
                <td>Equation</td>
                <td className='Formula'>Y = 2.99X + -0.46</td>
              </tr>
            </tbody>
          </Table>
          
          <div style={{ textAlign: "justify", margin: "20px" }}>
            {/* Insert Text for Model-I Analysis */}
            <p><b>R-squared value:</b>The R-squared value is 0.881, indicating that approximately 88.1% of the variance in the dependent variable (Marks Scored) is explained by the independent variable (Study Hours). This suggests that the model provides a moderately good fit to the data.</p>
            <p><b>Mean Squared Error (MSE): </b>The MSE is 48.437. This means, on average, the squared difference between the actual and predicted Marks Scored is 148.437. It gives a measure of the average squared deviation of predictions from the actual observations.</p>
            <p><b>Root Mean Squared Error (RMSE):</b> The RMSE is approximately 12.187. This indicates the average deviation of the predicted Marks Scored from the actual Marks Scored is around 12.187.</p>
            <p><b>In summary, </b>Model 1 provides a reasonably good fit to the data, with around 88.1% of the variance explained by the independent variable. However, there is still room for improvement in reducing the prediction errors, as indicated by the MSE and RMSE values.
Trained using OLS – ordinary least squares, straightforward and easy to implement, it provides accurate estimates of the coefficients and their significance values.
</p>
          </div>
          </Container>
        </div>
      )}

      {showTable2 && (
        <div className="table-responsive" style={{ marginTop: "20px" }}>
          <Container>
          <Table className="table" striped bordered hover>
            <thead>
              <tr>
                <th>Category</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {/* Insert Table Data for Model-II */}
              <tr>
              <td>Mean(X)</td>
              <td className='Formula'>5.07</td>
            </tr>
            <tr>
              <td>Mean(Y)</td>
              <td className='Formula'>62.95</td>
            </tr>
            <tr>
              <td>Deviations(X)</td>
              <td className='Formula'>[-3.87, -1.57, 0.83, ...]</td>
            </tr>
            <tr>
              <td>Deviations(Y)</td>
              <td className='Formula'>[-40.95, -17.45, 16.05, ...]</td>
            </tr>
            <tr>
              <td>Product of Deviations</td>
              <td className='Formula'>[159.0945, 27.39265, 13.3315, ...]</td>
            </tr>
            <tr>
              <td>Sum of Product of Deviations for X</td>
              <td className='Formula'>1157.7928</td>
            </tr>
            <tr>
              <td>Sum of Square of Deviations of X</td>
              <td className='Formula'>271.4635</td>
            </tr>
            <tr>
              <td>Slope (m)</td>
              <td className='Formula'>4.27</td>
            </tr>
            <tr>
              <td>Intercept (B)</td>
              <td className='Formula'>39.69</td>
            </tr>
            <tr>
              <td>Equation</td>
              <td className='Formula'>Y = 4.27X + 39.69</td>
            </tr>
            </tbody>
          </Table>
          
          <div style={{ textAlign: "justify", margin: "20px" }}>
            {/* Insert Text for Model-II Analysis */}
            <p><b>R-squared value:</b>The R-squared value is 0.978, indicating that approximately 97.8% of the variance in the dependent variable (Marks Scored) is explained by the independent variable (Study Hours). This suggests that the model provides a very good fit to the data.</p>
            <p><b>Mean Squared Error (MSE): </b>The MSE is 25.527. This means, on average, the squared difference between the actual and predicted Marks Scored is 25.527. It gives a measure of the average squared deviation of predictions from the actual observations.</p>
            <p><b> Root Mean Squared Error (RMSE): </b>The RMSE is approximately 5.052. This indicates the average deviation of the predicted Marks Scored from the actual Marks Scored is around 5.052.</p>
            <p><b>In summary, </b>Model 2 provides a significantly better fit to the data compared to Model 1, with approximately 97.8% of the variance explained by the independent variable. The lower MSE and RMSE values also indicate that Model 2 has better predictive performance and lower error compared to Model 1.
Trained using ridge regression, helps stabilize the model and can prevent overfitting, resulting in more robust predictions

</p>
          </div>
          </Container>
        </div>
      )}

      {showComparison && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Container>
          <div style={{ textAlign: "justify", margin: "20px" }}>
            {/* Insert Text for Model Comparison */}
            To compare both models, we can calculate the following metrics: R-squared, Mean Squared Error (MSE), and Root Mean Squared Error (RMSE) for each model. Then, we can present the results in a tabular form
          </div>
          
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Linear Regression I</th>
                <th>Linear Regression II</th>
              </tr>
            </thead>
            <tbody>
              {/* Insert Comparison Table Data */}
              <tr>
              <td>R-squared</td>
              <td className='Formula'>0.881</td>
              <td className='Formula'>0.976</td>
            </tr>
            <tr>
              <td>Mean Squared Error (MSE)</td>
              <td className='Formula'>148.437</td>
              <td className='Formula'>30.025</td>
            </tr>
            <tr>
              <td>Root Mean Squared Error (RMSE)</td>
              <td className='Formula'>12.187</td>
              <td className='Formula'>5.481</td>
            </tr>
            </tbody>
          </Table>
          
          <div style={{ textAlign: "justify", margin: "20px" }}>
            {/* Insert Text for Model Comparison */}
            Please note that the R-squared value closer to 1 indicates a better fit, while lower values of MSE and RMSE indicate better prediction accuracy. Therefore, from the table, it appears that Linear Regression II performs better in terms of all three metrics, indicating that it is more efficient than Linear Regression I.
Ridge regression provides more efficiency than ordinary least squares

          </div>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Companies;
