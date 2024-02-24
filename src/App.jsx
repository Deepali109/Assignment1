import './App.css'
import data from './ImagesRecord.json'

function App() {


  return (
    <div className='container'>
      <div className="heading_text">
        <h2>Select Doctors</h2>
      </div>
      <div className="doctors_section">
        {data &&
          data.map((record) => {
            return (
              <div className="box" key={record.id}>
                <img src={record.image} alt={record.doctor_name} />
                <div className='box_text'>
                  <p>{record.doctor_name}</p>
                  <p className='dept'>{record.doctor_department}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default App
