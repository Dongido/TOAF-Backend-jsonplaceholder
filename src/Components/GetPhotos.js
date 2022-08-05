import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function GetPhotos() {

    const [photos, setPhotos] = useState([]);

    const getPhotos = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
        setPhotos(response.data);
        console.log(response);

      } catch (err) {
        console.error(err.message);
      }
    };

    useEffect(() => {
        getPhotos();

        const interval = setInterval(()=>{
          getPhotos()
         },60000)
       
        return()=>clearInterval(interval)
    }, [])

    return ( 
        <div className="row">
            {photos.map(photo=>(
                <div className="col-md-3 py-2">
                    <div key={photo.id} className="card">
                      <img src={photo.thumbnailUrl} className="card-img-top" alt={photo.title} />
                      <div className="card-body">
                        <h5 className="card-title">{photo.title}</h5>
                        <a href={photo.url} className="btn btn-primary mt-3">View</a>
                      </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default GetPhotos;