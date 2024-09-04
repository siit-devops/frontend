import React, { useState, useEffect } from 'react';
import {getRatingByHostId, getRatingByAccommodationId} from '../../services/RatingService'

export const Ratings = ({ id, type }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    
    if (type === 'HOST_RATINGS') {
      getRatingByHostId(id)
      .then((res) => {
        setLoading(false)
        setData(res.data);
      })
    }
    else {
      getRatingByAccommodationId(id).then((res) => {
        setLoading(false)
        setData(res.data);
      });
    }
  }, [id, type]);

  if (loading) return 'Loading...';

  return (
    <>
      {data.map((r) => {
        let checked = [];
        for (let index = 0; index < r.ratingValue; index++) {
          checked.push(<span class="fa fa-star checked"></span>);
        }
        for (let index = checked.length; index < 5; index++) {
          checked.push(<span class="fa fa-star"></span>);
        }
        return (
          <div key={r.id} className="row d-flex justify-content-between">
            <h4>{r.guest.username}</h4>
            <p>
              {new Date(
                  r.createdAt[0],
                  r.createdAt[1] - 1,
                  r.createdAt[2],
                  r.createdAt[3],
                  r.createdAt[4]
              ).toLocaleString()}
            </p>
            <p>{r.description}</p>
            <div class="star">{checked}</div>
          </div>
        );
      })}
    </>
  );
};
