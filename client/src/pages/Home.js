import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="home">
      <h1>{data.name}</h1>
      <p>{data.summary}</p>
      <h2>Education</h2>
      {data.education?.map((edu, index) => (
        <div key={index}>
          <h3>{edu.institution}</h3>
          <p>{edu.degree} - {edu.gpa}</p>
        </div>
      ))}
      <h2>Experience</h2>
      {data.experience?.map((exp, index) => (
        <div key={index}>
          <h3>{exp.title} at {exp.company}</h3>
          <p>{exp.location}</p>
          <ul>
            {exp.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
