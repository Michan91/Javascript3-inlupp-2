import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({ event }) => {
  return (
      <Link className='post' to={`/events/${event.id}`}>
        <div className='time'>
        <p>{event.date}</p>
        <p>{event.time}</p>
        </div>
        <h2>{event.title}</h2>
        <p>{event.body.slice(0,50)}...</p>
      </Link>
  )
}

export default Event