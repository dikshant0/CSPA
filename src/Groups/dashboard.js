import React from 'react'
import Header from '../Others/header';
import Title from '../Others/heading';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div>
    <Header link={"home"} current={"Companies"} profile={true} leftbar={true} />
    <Title title="Comprehensive Student Performance Analytics" />
    <Container>
    <p><b>PROBLEM STATEMENT</b></p>

    <p style={{textAlign: 'justify'}}>Current educational analytics systems lack the ability to provide a comprehensive
understanding of student performance due to fragmented data sources and limited
analytics capabilities. The absence of a unified platform inhibits the timely
identification of at-risk students and hinders personalized interventions. This project
seeks to address these shortcomings by developing an integrated student performance
analytics solution, leveraging advanced data integration, analytics, and Neo4j's graph
database, to empower educators with actionable insights for improved decision-making
and enhanced student outcomes.</p>
</Container>
    </div>
  )
}

export default Dashboard