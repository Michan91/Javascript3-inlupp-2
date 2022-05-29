import { useSelector } from 'react-redux'
import Event from '../components/Event'

const NewsView = () => {

  const { data: events, loading } = useSelector(state => state.events)

  return (
    <div>
      { loading && <p>Laddar...</p>}
      { events.map(event => <Event key={event.id} event={event} />) }
      {/* Sortera event med sort() */}

    </div>
    
  )
}

export default NewsView