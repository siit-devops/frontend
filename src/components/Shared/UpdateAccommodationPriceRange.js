import React from 'react'

const UpdateAccommodationPriceRange = ({ price, setPrice }) => {

  const handleButtonClick = () => {
    const newPriceRule = {
      specialPrice: 0,
      rangePeriod: {
        startDate:null,
        endDate:null
      },
      patternPeriod: null
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
      const idxToDel = updated.findIndex(item => !!item.rangePeriod)
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

  const setStart = (value, idx) => {
    const newRules = [...price.priceRules]
    newRules[idx].rangePeriod.startDate = value
    setPrice(old => ({
      ...old,
      priceRules: newRules
    }))
  }

  const setEnd = (value, idx) => {
    const newRules = [...price.priceRules]
    newRules[idx].rangePeriod.endDate = value
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
      <button onClick={handleButtonClick} className='btn btn-success'>+ Add Price Rule</button>
      &nbsp;
      <button onClick={removeRangePeriod} className='btn btn-danger'>- Remove</button>
      {console.log(price)}
      {price?.priceRules ? price?.priceRules.filter(rule => rule /**rule.hasOwnProperty("rangePeriod") && rule.rangePeriod*/).map((rule, idx) => (
        rule.hasOwnProperty("rangePeriod") && rule.rangePeriod ?
          <div className='card mb-2'>
            <div class="form-control">
              <label>Period Start</label>
              <input class="form-control" type="date" value={Array.isArray(rule.rangePeriod.startDate) ? rule.rangePeriod.startDate.map(num => num.toString().padStart(2, '0')).join('-') : rule.rangePeriod.startDate} onChange={e => setStart(e.target.value, idx)} />
            </div>
            <div class="form-control">
              <label>Period End</label>
              <input class="form-control" type="date" value={Array.isArray(rule.rangePeriod.endDate) ? rule.rangePeriod.endDate.map(num => num.toString().padStart(2, '0')).join('-') : rule.rangePeriod.endDate} onChange={e => setEnd(e.target.value, idx)} />
            </div>
            <div class="form-control">
              <label for="flexCheckDefault">Price For Period</label>
              <input class="form-control" type="number" value={rule.specialPrice ?? 0} onChange={e => setSpecialPrice(e.target.value, idx)} />
            </div>
          </div>
          :
          <></>

      )) : <></>}

    </div>
  )
}

export default UpdateAccommodationPriceRange