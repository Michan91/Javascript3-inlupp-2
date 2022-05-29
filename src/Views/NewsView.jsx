import { useSelector } from 'react-redux'
// import { useState, useEffect } from 'react'
import Event from '../components/Event'

const NewsView = () => {

  const { data: events, loading } = useSelector(state => state.events)
  
  // const [data, setData] = useState([]);
  // const [sortType, setSortType] = useState('events');
  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       date: 'date',
  //       time: 'time'
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...events].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //     setData(sorted);
  //   };
  //   sortArray(sortType);
  // }, [sortType]); 

  // const onChange = e => {
  //   setSortType(e.target.value)}

  return ( 
    <div>
      { loading && <p>Laddar...</p>}
      { events.map(event => <Event key={event.id} event={event} />) }
      {/* { data.map(event => <Event key={event.id} event={event} />) } */}
    </div>
    
  )
}

export default NewsView