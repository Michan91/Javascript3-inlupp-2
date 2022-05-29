import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearEvent, getEventById } from '../store/actions/eventAction'
import { useParams } from 'react-router-dom'


const EventDetailsView = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getEventById(id))

    return () => {
      dispatch(clearEvent())
    }

  }, [dispatch, id])

  const { loading, data: event, error } = useSelector(state => state.event)

  const template = ( event && 
    <div className='post'>
      <div className='time'>
        <p>{event.date}</p>
        <p>{event.time}</p>
        </div>
      <h2>{event.title}</h2>
      <p>{event.body}</p>
    </div>
  )

  if(error)
    return (
      <div>
        <p>{error}</p>
      </div>
    )

  return (
    <div>
      {template}
      {loading && <p>Loading... </p>}
    </div>
  )
}

export default EventDetailsView