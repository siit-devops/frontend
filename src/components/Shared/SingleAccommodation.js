import React from 'react'
import './SingleAccommodation.css'

const SingleAccommodation = ({ accommodation }) => {
    const firstImage = accommodation?.images?.[0] || "img/hotels/d1.jpg";
    const basePrice = accommodation?.availability?.price?.basePrice;
    const hasTags = accommodation?.tags && accommodation.tags.length > 0;

    return (
        <div className="modern-accommodation-card">
            <div className="image-container">
                <img className="accommodation-image" src={firstImage} alt={accommodation?.name || "Accommodation"} />
                <div className="image-overlay">
                    <span className="price">{basePrice ? `${basePrice} €` : "Price not available"}</span>
                </div>
            </div>
            <div className="details">
                <h4 className="title">{accommodation?.name || "Accommodation Title"}</h4>
                <p className="reviews">View on map | 49 Reviews</p>
                <div className="tags-container">
                    {hasTags ? (
                        accommodation.tags.slice(0, 5).map((tag, index) => (
                            <span key={index} className="single-tag">{tag}</span>
                        ))
                    ) : (
                        <span className="no-tags">No tags available</span>
                    )}
                </div>
                <a href={`/accommodations/${accommodation?.id}`} className="more-info-btn">More Info</a>
            </div>
        </div>
    );
};

export default SingleAccommodation;
