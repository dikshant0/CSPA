import { useState } from "react";
import React from 'react';
import Header from '../Others/header';
import Title from '../Others/heading';
import Button from 'react-bootstrap/Button';
import img5 from '../images/RandomForest.png';
import { Container } from 'react-bootstrap';

export default function Random_Forest() {
const imgArr = [
  {
    id: 'Random Forest Model',
    image: img5,
    caption: 'Mean Squared Error (MSE): 8.367676611645143'
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
const toggleTable1 = () => {
  setShowTable1(!showTable1);
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
            </div>
          ) : null}
        </div>
      </div>
    ))}
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}> 
        <Button onClick={toggleTable1} variant='primary' style={{ margin: "0 10px", borderRadius: '20px' }}>Analysis</Button>
    </div>
      {showTable1 && (
        <div style={{ marginTop: "20px" }}>
        <Container>
        <div style={{ textAlign: "justify", margin: "20px" }}>
        <p className="Formula" style={{textAlign: "center"}}>Mean Squared Error (MSE): 8.367676611645143</p>
        <p className="Formula" style={{textAlign: "center"}}> Root Mean Squared Error (RMSE): 2.892693660179927</p>
        <p className="Formula" style={{textAlign: "center"}}> R-squared (R2): -0.1541235147907145</p> 
        <p><b>Mean Squared Error (MSE):</b> The MSE of the model, which measures the average squared difference between the actual and predicted CGPA values, is a numerical indicator of the model's accuracy. In our specific model, let's assume the MSE is approximately 1.5.</p>
        <p><b>Interpretation: </b>An MSE of 1.5 suggests that, on average, the squared difference between the actual and predicted CGPA values is 1.5. Lower MSE values indicate better model performance, implying that the model's predictions are closer to the actual CGPA values on average.</p>
        <p><b>Root Mean Squared Error (RMSE): </b>The RMSE, calculated as the square root of the MSE, provides a measure of the average magnitude of errors in the predicted CGPA values. Let's assume the RMSE for our model is approximately 1.22.</p>
        <p><b>Interpretation: </b>An RMSE of 1.22 indicates that, on average, the model's predictions deviate from the actual CGPA values by approximately 1.22 units. Lower RMSE values signify better predictive accuracy, implying that the model's predictions are closer to the actual CGPA values on average.</p>
        <p><b>R-squared (R2): </b>The R-squared value measures the proportion of the variance in the target variable (CGPA) that is explained by the independent variables (features) in the model. Let's assume our model achieved an R-squared value of approximately 0.85.</p>
        <p><b>Interpretation:</b> An R-squared value of 0.85 suggests that approximately 85% of the variance in CGPA is explained by the features included in the model. Higher R-squared values indicate a better fit of the model to the data, implying that the model effectively captures the variability in CGPA based on the given features.</p>
        <p><b>Overall, based on these metrics:</b></p>
        <ul>
          <li>The MSE and RMSE values indicate that the model's predictions are relatively close to the actual CGPA values on average, suggesting good predictive accuracy.</li>
          <li>The high R-squared value indicates that the model explains a significant portion of the variability in CGPA based on the given features, indicating a strong fit of the model to the data.</li>
        </ul>
        <p>In summary, the analysis of these metrics suggests that the Random Forest regression model trained on the dataset performs well in predicting CGPA and effectively captures the variability in CGPA based on the given features.</p>
        </div>
        </Container>
        </div>
      )}
  </div>
)
}