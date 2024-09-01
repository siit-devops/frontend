import React from 'react'
import PatternInput from './PatternInput'

const AccommodationPatternInput = ({AvailabilityPattern, setAvailabilityPattern}) => {
  return (
    <div>
        <PatternInput displayPrice={false} AvailabilityPattern={AvailabilityPattern} setAvailabilityPattern={setAvailabilityPattern}></PatternInput>
    </div>
  )
}

export default AccommodationPatternInput