import './index.css';
import {useEffect, useState} from 'react'

function App() {
  const url = 'https://course-api.com/react-tabs-project';
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)


  const fetchJobs = async() =>{
    const response = await fetch(url);
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
    console.log(jobs)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if(loading){
    return <p>loading</p>
  }
  

  const {company, id, order, title, dates, duties} = jobs[value];

  
  
  return (
    <div className="App">
      <div className='title'>
        <h1>Experience</h1>
        <div className='underline'></div>
      </div>
      <div className='container'>
        <div className='btns-div'>
          {jobs.map((job, index)=>{
            return <button className='job-btn' onClick={()=>setValue(index)}>{job.company}</button> 
          })}
        </div>
        <div className='main-container'>
          <h2>{title}</h2>
          <div className='company'>{company}</div>
          <p className='dates'>{dates}</p>
          <div className='duties'>
            {
              duties.map((duty)=>{                  
              return (
                <div className='duty-div'>
                  <span>>></span>
                  <p className='duty-text'>{duty}</p>
                </div>
              )
              })
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
