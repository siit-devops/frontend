import React from 'react'

const UpdateAccommodationPricePattern = ({ price, setPrice }) => {

  const handleButtonClick = () => {
    const newPriceRule = {
      specialPrice: 0,
      patternPeriod: {
        dayOfWeek: []
      },
      rangePeriod: null
    }
    setPrice(old => {
      return {
        ...old,
        priceRules: [...old.priceRules, newPriceRule]
      }
    })

  };

  const removeRangePeriod = () => {
    setPrice(old => {
      const updated = [...old.priceRules].reverse()
      const idxToDel = updated.findIndex(item => !!item.patternPeriod)
      if (idxToDel === -1)
        return old
      updated.splice(idxToDel, 1)
      updated.reverse()
      return {
        ...old,
        priceRules: updated
      }
    })
  }

  const handleDayCheckboxChange = (value, isChecked, rangeIdx) => {
    const newRules = [...price.priceRules]
    newRules[rangeIdx].patternPeriod.dayOfWeek = isChecked
      ? Array.from(new Set([...newRules[rangeIdx].patternPeriod.dayOfWeek, value]))
      : newRules[rangeIdx].patternPeriod.dayOfWeek.filter(day => day !== value);
    setPrice(old => ({
      ...old,
      priceRules: newRules
    }))
  }

  const setSpecialPrice = (value, idx) => {
    const newRules = [...price.priceRules]
    newRules[idx].specialPrice = value
    setPrice(old => ({
      ...old,
      priceRules: newRules
    }))
  }


  return (
    <div className='m-2'>
      <button onClick={handleButtonClick} className='btn btn-success'>+ Add Pattern Rule</button>
      &nbsp;
      <button onClick={removeRangePeriod} className='btn btn-danger'>- Remove</button>
      {price?.priceRules ? price?.priceRules.map((rule, idx) => (
        rule.hasOwnProperty("patternPeriod") && rule.patternPeriod ?

          <div classNameName='card px-4 mx-0'>
            <>&nbsp;</>
            <hr></hr>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked={rule.patternPeriod?.dayOfWeek.includes('MONDAY')} onChange={e => handleDayCheckboxChange("MONDAY", e.target.checked, idx)} />
              <label className="form-check-label" for="flexCheckDefault">Monday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked={rule.patternPeriod.dayOfWeek.includes('TUESDAY')} onChange={e => handleDayCheckboxChange("TUESDAY", e.target.checked, idx)} />
              <label className="form-check-label" for="flexCheckDefault">Tuesday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked={rule.patternPeriod.dayOfWeek.includes('WEDNESDAY')} onChange={e => handleDayCheckboxChange("WEDNESDAY", e.target.checked, idx)} />
              <label className="form-check-label" for="flexCheckDefault">Wednesday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked={rule.patternPeriod.dayOfWeek.includes('THURSDAY')} onChange={e => handleDayCheckboxChange("THURSDAY", e.target.checked, idx)} />
              <label className="form-check-label" for="flexCheckDefault">Thursday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked={rule.patternPeriod.dayOfWeek.includes('FRIDAY')} onChange={e => handleDayCheckboxChange("FRIDAY", e.target.checked, idx)} />
              <label className="form-check-label" for="flexCheckDefault">Friday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked={rule.patternPeriod.dayOfWeek.includes('SATURDAY')} onChange={e => handleDayCheckboxChange("SATURDAY", e.target.checked, idx)} />
              <label className="form-check-label" for="flexCheckDefault">Saturday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked={rule.patternPeriod.dayOfWeek.includes('SUNDAY')} onChange={e => handleDayCheckboxChange("SUNDAY", e.target.checked, idx)} />
              <label className="form-check-label" for="flexCheckDefault">Sunday</label>
            </div>
            <>&nbsp;</>
            <div>
              <label for="flexCheckDefault">Price For Period</label>
              <input className="form-control" type="number" value={rule.specialPrice ?? 0} onChange={e => setSpecialPrice(e.target.value, idx)} />

            </div>
            <>&nbsp;</>
          </div>


          :
          <></>

      )) : <></>}
    </div>
  )
}

export default UpdateAccommodationPricePattern