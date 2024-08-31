import React, { useState } from 'react'
import RangeInput from './RangeInput';

const AccommodationRangeInput = ({ AvailabilityRanges, setAvailabilityRanges }) => {

    const [Inputs, setInputs] = useState(AvailabilityRanges.length ? setRangeInputs() : []);

    function setRangeInputs() {
        return AvailabilityRanges.map((range, index) => (
            <RangeInput key={index} index={index} displayPrice={false} AvailabilityRanges={AvailabilityRanges} setAvailabilityRanges={setAvailabilityRanges} idx={index} />
        ))
    }
    const handleButtonClick = () => {
        setAvailabilityRanges(old => [...old, { startDate: null, endDate: null }])
        const newInputs = [...Inputs, <RangeInput key={Inputs.length} index={Inputs.length + 1} displayPrice={false} AvailabilityRanges={AvailabilityRanges} setAvailabilityRanges={setAvailabilityRanges} idx={AvailabilityRanges.length} />];
        setInputs(newInputs);
    };

    const removeRangePeriod = () => {
        const newInputs = Inputs.slice(0, Inputs.length - 1);
        setInputs(newInputs);
        const newData = AvailabilityRanges.slice(0, AvailabilityRanges.length - 1);
        setAvailabilityRanges(newData);
    }


    return (
        <div className='m-2'>
            <button onClick={handleButtonClick} className='btn btn-success'>+ Add Range</button>
            &nbsp;
            <button onClick={removeRangePeriod} className='btn btn-danger'>- Remove</button>
            <div className='my-4'>
                {Inputs.map((range, index) => (
                    <div key={index}>{range}</div>
                ))}
            </div>
        </div>
    )
}

export default AccommodationRangeInput