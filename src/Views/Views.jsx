import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from '../routes/ProtectedRoute'
import CreateEventView from './CreateEventView'
import LoginView from './LoginView'
import NewsView from './NewsView'
import EventDetailsView from './EventDetailsView'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <NewsView /> } />
      <Route path='/events/:id' element={ <EventDetailsView /> }/>
      <Route path='/create' element={ <CreateEventView /> }/>
      
      <Route path='/create' element={ 
      <ProtectedRoute>
        <CreateEventView /> 
      </ProtectedRoute>
      } />
      
      <Route path='/login' element={ <LoginView /> } />
    </Routes>
  )
}

export default Views