import React from 'react'
import "./form.scss"

const Form = () => {
  return (
    <div className='container'>
        <form>
            <h2>Library Management</h2>
            <div className='label-wrapper'>
                <label htmlFor="">Title</label>
                <input type="text" placeholder="Title"/>
            </div>
            <div className='label-wrapper'>
                <label htmlFor="">Author</label>
                <input type="text" placeholder="Author"/>
            </div>
            <div className='label-wrapper'>
                <label htmlFor="">Copies</label>
                <input type="number" placeholder='Copies'/>
            </div>
            <div className='label-wrapper'>
                <label htmlFor="">Published date</label>
                <input id='input-date' type="date" placeholder='Published date'/>
            </div>

            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form