import { useState } from "react";
import React from 'react';
import Header from '../Others/header';
import Title from '../Others/heading';
import Button from 'react-bootstrap/Button';
import img5 from '../images/Logistic1.png';
import img6 from '../images/Logistic2.png';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';


export default function Logistic_Func() {

const imgArr = [
  {
    id: 'Logistic Regression Model - I',
    image: img5,
    caption: ''
  },
  {
    id: 'Logistic Regression Model - II',
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
        <div style={{ marginTop: "20px" }}>
          <Container>          
          <div style={{ textAlign: "justify", margin: "20px" }}>
            <p>The values for the logistic regression parameters a0 (intercept) and a1 (coefficient) are as follows:</p>
            <br></br>
            <p className="Formula"  style={{textAlign:"center"}}><b>•	a0 (intercept): -2.965164226127055</b></p>
            <p className="Formula" style={{textAlign:"center"}}><b>•	a1 (coefficient): 0.0924855491329496</b></p>
            <br></br>
            <p><b>Model Performance: </b>The logistic regression model seems to provide a reasonable fit to the data, as indicated by the sigmoid curve. It captures the relationship between the previous exam score and the probability of passing the exam.</p>
            <p><b>Intercept and Coefficient:  </b>The intercept (a0) is -2.965 and the coefficient (a1) is 0.0925. These values represent the parameters of the logistic regression model and determine the shape and orientation of the sigmoid curve. </p>
            <p><b>Predictive Power:</b> Based on the sigmoid curve, higher current exam scores correspond to higher probabilities of passing the exam. Conversely, lower exam scores result in lower probabilities of passing</p>
            <p><b>Decision Boundary:  </b>The sigmoid curve transitions from 0 to 1 around a certain exam score, which acts as a decision boundary. Exam scores above this threshold are associated with a higher probability of passing, while scores below it are associated with a lower probability. </p>
            <p><b>Confidence Interval:</b> It's essential to consider the confidence interval of the logistic regression parameters to assess the uncertainty associated with the model estimates.</p>
            <br></br>
            <p>Person getting more than 50% in the previous exam will pass the current exam. Model 1 trained using gradient descent method</p>
          </div>
          </Container>
        </div>
      )}

      {showTable2 && (
        <div style={{ marginTop: "20px" }}>
          <Container>
          <div style={{ textAlign: "justify", margin: "20px" }}>
            <p>The values of a0 and a1 for the logistic regression model - II are:</p>
            <br></br>
            <p className="Formula"  style={{textAlign:"center"}}><b>•	a0: -4.83187706927292</b></p>
            <p className="Formula" style={{textAlign:"center"}}><b>•	a1: 0.084531515286907</b></p>
            <br></br>
            <p><b>Model Performance: </b>The logistic regression model appears to offer a satisfactory fit to the data, demonstrated by the sigmoid curve, capturing the relationship between the previous exam score and the probability of passing the exam.</p>
            <p><b>Intercept and Coefficient:  </b>The intercept (a0) is approximately -4.8318, and the coefficient (a1) is approximately 0.0845. These values are crucial model parameters, determining the shape and orientation of the sigmoid curve.</p>
            <p><b>Predictive Power:</b>As depicted by the sigmoid curve, higher previous exam scores correlate with elevated probabilities of passing the exam. Conversely, lower exam scores correspond to decreased probabilities of passing. </p>
            <p><b>Decision Boundary:  </b> The sigmoid curve transitions from 0 to 1 around a specific exam score, serving as a decision boundary. Exam scores above this threshold are associated with a higher likelihood of passing, while scores below it indicate a lower likelihood.</p>
            <p><b>Confidence Interval:</b> It's vital to assess the confidence interval of the logistic regression parameters to gauge the uncertainty surrounding the model estimates.</p>
            <br></br>
            <p>Person getting more than 48% in the previous exam will pass the current exam. Model 2 trained using regularized logistic regression.</p>
          </div>
          </Container>
        </div>
      )}

      {showComparison && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Container>          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Performance</th>
          <th>Satisfactory fit</th>
          <th>Reasonable fit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Intercept</td>
          <td className="Formula">-2.965</td>
          <td className="Formula">-0.769</td>
        </tr>
        <tr>
          <td>Coefficient</td>
          <td className="Formula">0.0925</td>
          <td className="Formula">0.1924</td>
        </tr>
        <tr>
          <td>Predictive Power</td>
          <td>Higher scores → higher probabilities of passing; Lower scores → lower probabilities of passing</td>
          <td>Higher scores → higher probabilities of passing; Lower scores → lower probabilities of passing</td>
        </tr>
        <tr>
          <td>Decision Boundary</td>
          <td>Transition around a specific exam score is 48</td>
          <td>Transition around a specific exam score is 50</td>
        </tr>
      </tbody>
          </Table>
          
          <div style={{ textAlign: "justify", margin: "20px" }}>
          Based on the provided metrics and insights, it appears that Model 2 might be better as it shows a slightly higher coefficient value, suggesting a relatively stronger relationship between the predictor variable (previous exam score) and the probability of passing the current exam. However, a comprehensive assessment of model performance, including metrics such as accuracy, precision, recall, and F1 score, would provide a more definitive answer regarding which model performs better for the given task.
          </div>
          <Table striped bordered hover>
          <thead>
        <tr>
          <th>Metric</th>
          <th>Model 1</th>
          <th>Model 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Accuracy</td>
          <td className="Formula">0.857</td>
          <td className="Formula">0.877</td>
        </tr>
        <tr>
          <td>F1 Score</td>
          <td className="Formula">0.861</td>
          <td className="Formula">0.883</td>
        </tr>
        {/* <tr>
          <td>Confusion Matrix</td>
          <td></td>
          <td></td>
        </tr> 
        <tr>
          <td></td>
          <td>Model 1</td>
          <td>Model 2</td>
        </tr> */}
        <tr>
          <td>True Positive</td>
          <td className="Formula">20</td>
          <td className="Formula">22</td>
        </tr>
        <tr>
          <td>False Positive</td>
          <td className="Formula">4</td>
          <td className="Formula">2</td>
        </tr>
        <tr>
          <td>True Negative</td>
          <td className="Formula">7</td>
          <td className="Formula">10</td>
        </tr>
        <tr>
          <td>False Negative</td>
          <td className="Formula">3</td>
          <td className="Formula">1</td>
        </tr>
      </tbody>
          </Table>
          <div style={{ textAlign: "justify", margin: "20px" }}>
          Based on these metrics, Model 2 performs slightly better than Model 1 in terms of accuracy, F1 score, and the confusion matrix. However, it is essential to consider other factors and conduct further analysis to determine the best model for the given task.
          </div>
          </Container>
        </div>
      )}

  </div>
)
}
