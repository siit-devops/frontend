import React, { useState } from 'react'
import RangeInput from './RangeInput';

const PriceRangeInput = ({ price, setPrice }) => {
    const [Inputs, setInputs] = useState([]);

    const handleButtonClick = () => {
        const newPriceRule = {
            specialPrice: null,
            rangePeriod: null,
            patternPeriod: null
        }
        setPrice(old => {
            return {
                ...old,
                priceRules: [...old.priceRules, newPriceRule]
            }
        })
        const newInputs = [...Inputs, <RangeInput key={Inputs.length} index={Inputs.length + 1} displayPrice={true} idx={price.priceRules.length} Price={price} setPrice={setPrice} />];
        setInputs(newInputs);
    };

    const removeRangePeriod = () => {
        const newInputs = Inputs.slice(0, Inputs.length - 1);
        setInputs(newInputs);
        setPrice(old => {
            const updated = [...old.priceRules].reverse()
            const idxToDel = updated.findIndex(item => !!item.rangePeriod)
            if (idxToDel === -1)
                return
            updated.splice(idxToDel, 1)
            updated.reverse()
            return {
                ...old,
                priceRules: updated
            }
        })
    }


    return (
        <div className='m-2'>
            <button onClick={handleButtonClick} className='btn btn-success'>+ Add Price Rule</button>
            &nbsp;
            <button onClick={removeRangePeriod} className='btn btn-danger'>- Remove</button>
            {Inputs.map((range, index) => (
                <div key={index}>{range}</div>
            ))}
        </div>
    )
}

export default PriceRangeInput