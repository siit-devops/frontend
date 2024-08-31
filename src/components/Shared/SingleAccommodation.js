import React from 'react'

const SingleAccommodation = ({ accommodation }) => {

    return (
        <div class="single-destinations">
            <div class="thumb">
                <img className='small-img' src={accommodation.images[0] ?? "img/hotels/d1.jpg"} alt="" />
            </div>
            <div class="details">
                <h4 class="d-flex justify-content-between">
                    <span>{accommodation?.name ?? "Title"}</span>
                    {/* OVDE RATING calc !!!*/}
                    {/* <div class="star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div> */}
                </h4>
                <p>View on map | 49 Reviews</p>
                <ul class="package-list">
                    {accommodation?.tags && accommodation.tags.slice(0, 5).map(tag =>
                        <li class="d-flex justify-content-between align-items-center">
                            <span>{tag}</span>
                            <span>Yes</span>
                        </li>
                    )}
                    <li className="d-flex justify-content-between align-items-center">
                        <span>Daily price</span>
                        <a href={`/accommodations/${accommodation?.id}`} className="price-btn">
                            {accommodation.availability.price?.basePrice} €
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default SingleAccommodation