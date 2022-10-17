import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const genreAPI = "/genres";

export default function UpdateGenre() {
   

    const [genreData, setGenreData] = useState({})
    let { id } = useParams()
    let genre_url = `/genres/${id}`;
    
    useEffect(()=>{
        fetch(genre_url)
        .then(response=>response.json())
        .then(data=>setGenreData(data))
    },[])
     let navigate = useNavigate();
      console.log(genreData)

      const handleSubmit = (e) =>{
        e.preventDefault()
        // e.stopPropagation()
          fetch(`${genreAPI}/${id}`, {
              method: "PATCH",
              headers: {
                'content-type': 'application/json',
                "Access-Control-Allow-Origin" : "*"
              },
              body: JSON.stringify({
                  name: genreData.name,
              })
            })
            .then(response=>response.json())
            .then(data=>{
              console.log(data)   })
            navigate(`/genres`)
          };
   
        const onFormChange = (e) => {
            setGenreData({...genreData,[e.target.name]:e.target.value});
        };
      

  return (
    <div className='container py-5'>
      <center>
          <form onSubmit={handleSubmit} >
            <div className='py-4'>
            <input placeholder="name" name='name'value={genreData.name} type = "text"
              onChange={onFormChange}/>
            </div>
            <button className='btn btn-primary' type="submit" value="Update"> Update Genre</button>
          </form>
      </center>
    </div>
  )
}
