
import React from 'react';

const BucketlistItem = ({country, place}) => {
    return(
        <div className="bucketlistItem">
            <h4>{place}</h4>
            <p className="text-small">{country}</p>
            <a href="#">Read more</a>
            <i className="fa-solid fa-trash-can text-danger"></i>
          {//this needs an onClick method to remove it from the bucketlist
          }
        </div>
    ) 
}

export default BucketlistItem;