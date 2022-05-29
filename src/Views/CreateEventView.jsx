import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../store/actions/eventsAction'
import { useNavigate } from 'react-router-dom'

const CreateEventView = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loading = useSelector(state => state.events.loading)
  // const [loading, error ] = useSelector(state => state.events.loading)
  // const [verification, setVerification] = useState(true)

  const [addedEvent, setAddedEvent] = useState(false)

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    title: '',
    body: '',
    error: ''
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
    //   setVerification(false);
    //   return
    // }
    // else{
    //   setVerification(true)
    // }

      if(formData.title.trim() === '') {
        formData.title.error = ('You need to enter a title');
        return
      }
      // else {
      //   formdata.error = '' error(false)
      // }

      if(formData.body.trim() === '') {
        formData.body.error = ('You need to enter what todo');
        return
      }


    
    
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
      <form onSubmit={handleSubmit}>
      
      <label htmlFor="Date">Datum: </label>
      <input type="date" name='date' onChange={onChange} value={formData.date} placeholder='date' className='form-control' required/>
      <p className='error'>error meddeland</p>
      
      <label htmlFor="Time">Tid: </label>
      <input type="time" id='time' name='time' onChange={onChange} value={formData.time} placeholder='time' className='form-control' required/>
      <p className='error'>error meddelande</p>
        
      <label htmlFor="Title">Title: </label>
        <input type="text" name='title' onChange={onChange} value={formData.title} placeholder='Title' className='form-control' required/>
        <p className='error'>{formData.title.error} error meddelande</p>
        
        <label htmlFor="Body">Event: </label>
        <textarea name="body" onChange={onChange} value={formData.body} placeholder='Skriv in ditt event här...' className='form-control' cols="30" rows="10" required></textarea>
        <p className='error'>{formData.body.error } error meddelande</p>
        <button className='btn'>{ loading ? 'Laddar...' : 'Lägg till event'}</button>
        {/* {!verification && <p>Title needs to have..</p>} */}
      </form>
    </div>
  )
}

export default CreateEventView