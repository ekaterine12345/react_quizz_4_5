import axios from 'axios'
import {useState, useEffect} from 'react'
import './Gallery.css'

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get( "https://jsonplaceholder.typicode.com/photos?_limit=4");
        setData(response.data);
      }
      catch(error){
        console.error("Error fetching data:", error);
      }
    }; // fetchData

    fetchData();
  }, [])

  return (
    <>
    <div className='gallery-container'>
      <h1>Data from Gallery</h1>
      <ul className='gallery-items'>
        {data.map((item) => (
          <li key={item.id}>
            <img  src={item.url} alt={item.title} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}
export default MyComponent;