import React from 'react'

function ViewReviews() {
  return (
    <div className="container py-5">
            <center>  
              <h4> Available Book Reviews </h4>
             <div className="row row-cols-1 row-cols-md-4 g-3 py-3">
            {/* {((dev, index)=> (   */}
            {/* key={}  */}
            <div   className="col mb-4">
            <div className="card text-center h-100 shadow"> 
              <div className="card-body">
                <h6 className="card-title">Title</h6>
                <p className="card-text"> Description</p>
                <p className="card-text">Rating</p>
              </div>
              <button  type="button" className="btn btn-warning btn-sm"
                  style={{ margin: 5, height: 35 }}>Update</button>
              <button  type="button" className="btn btn-danger btn-sm"
                  style={{ margin: 5, height: 35 }}>Delete</button>
            </div> 
          </div> 
          {/* ))} */}
        </div>
        
        </center> 
      </div>
  )
}

export default ViewReviews;
