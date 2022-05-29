import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../store/actions/eventsAction'
import { useNavigate } from 'react-router-dom'

const CreateEventView = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loading = useSelector(state => state.events.loading)
  // const [error, setError] = useState(false)
  // const [error, setError] = useState()
  const [addedEvent, setAddedEvent] = useState(false)

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    title: '',
    body: ''
  })


  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))

  }

  
  const handleSubmit = e => {
    e.preventDefault()

    // if(formData.title.trim() === '') {
    //   setError(true)
    //   return 
    // }

    // setError(false)

    // ----------------------------------------------

    // if(formData.title.trim() === '') {
    //   setError('Du måste skriva in en titel')
    //   return
    // }
    // else{
    //   setError('')
    // }

    dispatch(addEvent(formData))
    setAddedEvent(true)
  }

  useEffect(() => {
    if(!loading && addedEvent) {
      navigate('/')
    }
  }, [loading, addedEvent, navigate])

  return (
    <div className='create-post'>
      <h1>Skapa ett nytt event</h1>
      {/* <> */}
      <form onSubmit={handleSubmit}>
      
      <label htmlFor="Date">Datum: </label>
      <input type="date" name='date' onChange={onChange} value={formData.date} placeholder='date' className='form-control' required/>
      {/* {error && <p className='error'>Du måste fylla i fältet</p>} */}
      {/* <p className='error'>{formData.date.error}</p> */}
      
      <label htmlFor="Time">Tid: </label>
      <input type="time" id='time' name='time' onChange={onChange} value={formData.time} placeholder='time' className='form-control' required/>
      {/* {error && <p className='error'>Du måste fylla i fältet</p>} */}
      {/* <p className='error'>{formData.time.error}</p> */}
        
      <label htmlFor="Title">Title: </label>
        <input type="text" name='title' onChange={onChange} value={formData.title} placeholder='Title' className='form-control' required/>
        {/* {error && <p className='error'>Du måste fylla i fältet</p>} */}
        {/* <p className='error'>{formData.title.error}</p> */}
        
        <label htmlFor="Body">Event: </label>
        <textarea name="body" onChange={onChange} value={formData.body} placeholder='Skriv in ditt event här...' className='form-control' cols="30" rows="10" required></textarea>
        {/* {error && <p className='error'>Du måste fylla i fältet</p>} */}
        {/* <p className='error'>{formData.body.error }</p> */}
        <button className='btn'>{ loading ? 'Laddar...' : 'Lägg till event'}</button>
      </form>
      {/* {error && <p className='error'>Du måste fylla i alla fälten</p>} */}
      {/* </> */}
    </div>
  )
}

export default CreateEventView