import React from 'react'

const SingleAccommodation = ({ accommodation }) => {
    const hasTags = accommodation?.tags && accommodation.tags.length > 0;
    const firstImage = accommodation?.images?.[0] || "img/hotels/d1.jpg";
    const basePrice = accommodation?.availability?.price?.basePrice;

    return (
        <div className="single-destinations">
            <div className="thumb">
                <img className="small-img" src={firstImage} alt={accommodation?.name || "Accommodation image"} />
            </div>
            <div className="details">
                <h4 className="d-flex justify-content-between">
                    <span>{accommodation?.name || "Title"}</span>
                    {/* Rating calculation can be implemented here */}
                    {/* Uncomment and implement rating if needed
                    <div className="star">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    */}
                </h4>
                <p>View on map | 49 Reviews</p>
                <ul className="package-list">
                    {hasTags ? (
                        accommodation.tags.slice(0, 5).map((tag, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                <span>{tag}</span>
                                <span>Yes</span>
                            </li>
                        ))
                    ) : (
                        <li className="d-flex justify-content-between align-items-center">
                            <span>No tags available</span>
                        </li>
                    )}
                    <li className="d-flex justify-content-between align-items-center">
                        <span>Daily price</span>
                        {basePrice ? (
                            <a href={`/accommodations/${accommodation?.id}`} className="price-btn">
                                {basePrice} €
                            </a>
                        ) : (
                            <span>Price not available</span>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SingleAccommodation;