import React, { useState } from 'react'
import axios from 'axios'


export default function Form() {

  const[place,setPlace]=useState('')
  const[add,setAdd]=useState('')
  const[person,setPerson]=useState('')
  const[date,setDate]=useState('')
  const[num,setNum]=useState('')

const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post(`http://localhost:3001/auth/donate`, { place,add,person,date,num })
  .then(res => { setFetchData(res); })
  .catch(err => { console.log(err); });
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name of Place :</label>
        <input type='text' value={place} onChange={(e) => { setPlace(e.target.value) }}/><br/>

        <label>Address</label>
        <textarea value={add} onChange={(e) => { setAdd(e.target.value) }}/><br/>

        <label>No of Persons:</label>
        <input type='number' value={person} onChange={(e) => { setPerson(e.target.value) }}/><br/>
        
        <label>Date :</label>
        <input type='date' value={date} onChange={(e) => { setDate(e.target.value) }}/><br/>

        <label>Contact No :</label>
        <input type='number' value={num} onChange={(e) => { setNum(e.target.value) }} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
