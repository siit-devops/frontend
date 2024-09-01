import React, { useState } from 'react'

const PatternInput = ({ displayPrice, AvailabilityPattern, setAvailabilityPattern, Price, setPrice, idx }) => {


    const patternPeriodExists = () => {
        const indx = idx;
        setPrice(oldPrice => {
            const priceRules = [...oldPrice.priceRules]
            if (!priceRules[indx].patternPeriod) {
                priceRules[indx].patternPeriod = {
                    dayOfWeek: []
                }
            }

            return {
                ...oldPrice,
                priceRules: priceRules
            }
        })
    }

    const setSpecialPrice = (value) => {
        const indx = idx;
        setPrice(oldPrice => {
            const priceRules = [...oldPrice.priceRules]
            priceRules[indx].specialPrice = value


            return {
                ...oldPrice,
                priceRules: priceRules
            }
        })
    }

    const handleDayCheckboxChange = (dayName, value) => {
        if (!displayPrice) {
            setAvailabilityPattern(prevPattern => {
                const updatedDayOfWeek = value
                    ?  Array.from(new Set([...prevPattern.dayOfWeek, dayName]))
                    : prevPattern.dayOfWeek.filter(day => day !== dayName);

                return { dayOfWeek: updatedDayOfWeek };
            });
        } else {

            patternPeriodExists();
            setPrice(oldPrice => {
                const priceRules = [...oldPrice.priceRules]
                const updatedDayOfWeek = value
                    ? Array.from(new Set([...priceRules[idx].patternPeriod.dayOfWeek, dayName]))
                    : priceRules[idx].patternPeriod.dayOfWeek.filter(day => day !== dayName);
                priceRules[idx].patternPeriod.dayOfWeek = updatedDayOfWeek

                return {
                    ...oldPrice,
                    priceRules: priceRules
                }
            })
        }
    };

    if (displayPrice)
        patternPeriodExists()

    return (
        <div classNameName='card px-4 mx-0'>
            <>&nbsp;</>
            <hr></hr>
            {/* <h5>PatternInput</h5> */}
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked={!displayPrice && AvailabilityPattern?.dayOfWeek.includes('MONDAY')} onChange={e => handleDayCheckboxChange("MONDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Monday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked={!displayPrice && AvailabilityPattern?.dayOfWeek.includes('TUESDAY')} onChange={e => handleDayCheckboxChange("TUESDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Tuesday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked={!displayPrice && AvailabilityPattern?.dayOfWeek.includes('WEDNESDAY')} onChange={e => handleDayCheckboxChange("WEDNESDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Wednesday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked={!displayPrice && AvailabilityPattern?.dayOfWeek.includes('THURSDAY')} onChange={e => handleDayCheckboxChange("THURSDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Thursday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked={!displayPrice && AvailabilityPattern?.dayOfWeek.includes('FRIDAY')} onChange={e => handleDayCheckboxChange("FRIDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Friday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked={!displayPrice && AvailabilityPattern?.dayOfWeek.includes('SATURDAY')} onChange={e => handleDayCheckboxChange("SATURDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Saturday</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked={!displayPrice && AvailabilityPattern?.dayOfWeek.includes('SUNDAY')} onChange={e => handleDayCheckboxChange("SUNDAY", e.target.checked)} />
                <label className="form-check-label" for="flexCheckDefault">Sunday</label>
            </div>
            <>&nbsp;</>
            {displayPrice ?
                <div>
                    <label for="flexCheckDefault">Price For Period</label>
                    <input className="form-control" type="number" onChange={e => setSpecialPrice(e.target.value)} />

                </div>
                : <></>}
            <>&nbsp;</>
        </div>
    )
}

export default PatternInput