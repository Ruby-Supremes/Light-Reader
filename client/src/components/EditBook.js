import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const bookAPI = "/books";

export default function EditBook() {
   

    const [bookData, setBookData] = useState({})
    let { id } = useParams()
    let book_url = `/books/${id}`;
    
    useEffect(()=>{
        fetch(book_url)
        .then(response=>response.json())
        .then(data=>setBookData(data))
    },[])
     let navigate = useNavigate();
      console.log(bookData)

      const handleSubmit = (e) =>{
        e.preventDefault()
        // e.stopPropagation()
          fetch(`${bookAPI}/${id}`, {
              method: "PATCH",
              headers: {
                'content-type': 'application/json',
                "Access-Control-Allow-Origin" : "*"
              },
              body: JSON.stringify({
                  title: bookData.title,
                  description: bookData.description,
              })
            })
            .then(response=>response.json())
            .then(data=>{
              console.log(data)   })
            navigate(`/home`)
          };
   
        const onFormChange = (e) => {
            setBookData({...bookData,[e.target.name]:e.target.value});
        };
      

  return (
    <div className='container'>
      <form className="new-poem-form" onSubmit={handleSubmit} >
        <input 
          placeholder="title" 
          name='title'
          value={bookData.title}
          type = "text"
          onChange={onFormChange}
        />

        <input 
          placeholder="description" 
          name='description'
          value={bookData.description}
          type = "text"
          onChange={onFormChange}
        />

        <input 
          type="submit" 
          value="Update" 
        />
    </form>
    </div>
  )
}
