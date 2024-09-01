import React from 'react'

const UpdateAccommodationRange = ({ AvailabilityRanges, setAvailabilityRanges }) => {

  const handleButtonClick = () => {
    setAvailabilityRanges(old => [...old, { startDate: null, endDate: null }])
  };

  const removeRangePeriod = () => {
    const newData = AvailabilityRanges.slice(0, AvailabilityRanges.length - 1);
    setAvailabilityRanges(newData);
  }

  const setStart = (val, idx) => {
    setAvailabilityRanges(old => {
      const newRanges = [...old]
      newRanges[idx].startDate = val;
      return newRanges;
    })
  }
  const setEnd = (val, idx) => {
    setAvailabilityRanges(old => {
      const newRanges = [...old]
      newRanges[idx].endDate = val;
      return newRanges;
    })
  }


  return (
    <div className='m-2'>
      <button onClick={handleButtonClick} className='btn btn-success'>+ Add Range</button>
      &nbsp;
      <button onClick={removeRangePeriod} className='btn btn-danger'>- Remove</button>
      <div className='my-4'>
        {AvailabilityRanges.map((range, idx) => (
          <div key={idx}>
            <div className='card mb-2'>
              <div class="form-control">
                <label>Period Start</label>
                <input class="form-control" type="date" value={Array.isArray(range.startDate) ? range.startDate.map(num => num.toString().padStart(2, '0')).join('-') : range.startDate} onChange={e => setStart(e.target.value, idx)} />
              </div>
              <div class="form-control">
                <label>Period End</label>
                <input class="form-control" type="date" value={Array.isArray(range.endDate) ? range.endDate.map(num => num.toString().padStart(2, '0')).join('-') : range.endDate}  onChange={e => setEnd(e.target.value, idx)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpdateAccommodationRange