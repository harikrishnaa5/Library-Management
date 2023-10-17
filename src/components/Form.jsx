import React, {useState} from "react";
import "./form.scss";

const Form = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [date, setDate] = useState("")
    const [copies, setCopies] = useState(0)

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleAuthorChange = (e) => {
         setAuthor(e.target.value)
    }

    const handleCopiesChange = (e) => {
        if(e.target.value<0)
        setCopies(0)
    else
        setCopies(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className="container">
            <form onSubmit={formSubmit}>
                <h2>Library Management</h2>
                <div className="label-wrapper">
                    <label htmlFor="">Title</label>
                    <input 
                    type="text" 
                    placeholder="Title" 
                    onChange={handleTitleChange}
                   value={title}

                    />
                </div>
                <div className="label-wrapper">
                    <label htmlFor="">Author</label>
                    <input 
                    type="text" 
                    placeholder="Author" 
                    onChange={handleAuthorChange}
                    value={author}
                    />
                </div>
                <div className="label-wrapper">
                    <label htmlFor="">Copies</label>
                    <input 
                    type="number" 
                    placeholder="Copies" 
                    onChange={handleCopiesChange}
                    value={copies}
                    />
                </div>
                <div className="label-wrapper">
                    <label htmlFor="">Published date</label>
                    <input id="input-date" 
                    type="date" 
                    placeholder="Published date" 
                    onChange={handleDateChange}
                    value={date}
                    />
                </div>

                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
};

export default Form;
