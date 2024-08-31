import React, { useEffect, useState } from 'react'

const RangeInput = ({ displayPrice, AvailabilityRanges, setAvailabilityRanges, idx, Price, setPrice }) => {


    const rangePeriodExists = (idx) => {
        setPrice(oldPrice => {
            const priceRules = [...oldPrice.priceRules]
            if (!priceRules[idx].rangePeriod) {
                priceRules[idx].rangePeriod = {
                    startDate: null,
                    endDate: null
                }
            }

            return {
                ...oldPrice,
                priceRules: priceRules
            }
        })
    }


    const setPriceHelper = (value, idx) => {
        setPrice(oldPrice => {
            const updated = [...oldPrice.priceRules]
            updated[idx].specialPrice = value

            return {
                ...oldPrice,
                priceRules: updated
            }
        })
    }

    const setStart = (value, idx) => {
        if (!displayPrice) {
            setAvailabilityRanges(prevRanges => {
                const updatedRanges = prevRanges.map((range, i) => {
                    if (i === idx) {
                        return { ...range, startDate: value };
                    }
                    return range;
                });
                return updatedRanges;
            });
            return
        } else {
            rangePeriodExists(idx);
            setPrice(oldPrice => {
                const priceRules = [...oldPrice.priceRules]
                priceRules[idx].rangePeriod.startDate = value

                return {
                    ...oldPrice,
                    priceRules: priceRules
                }
            })
        }

    }

    const setEnd = (value, idx) => {
        if (!displayPrice) {

            setAvailabilityRanges(prevRanges => {
                const updatedRanges = prevRanges.map((range, i) => {
                    if (i === idx) {
                        return { ...range, endDate: value };
                    }
                    return range;
                });
                return updatedRanges;
            });
        } else {
            rangePeriodExists(idx);
            setPrice(oldPrice => {
                const priceRules = [...oldPrice.priceRules]
                priceRules[idx].rangePeriod.endDate = value

                return {
                    ...oldPrice,
                    priceRules: priceRules
                }
            })
        }
    }

    if (displayPrice)
        rangePeriodExists(idx)
    return (
        <div className='card mb-2'>

            {/* <>&nbsp;</>
            <h5>RangeInput</h5> */}

            <div class="form-control">
                <label>Period Start</label>
                <input class="form-control" type="date" onChange={e => setStart(e.target.value, idx)} />
            </div>
            <div class="form-control">
                <label>Period End</label>
                <input class="form-control" type="date" onChange={e => setEnd(e.target.value, idx)} />
            </div>
            {displayPrice ?
                <div class="form-control">
                    <label for="flexCheckDefault">Price For Period</label>
                    <input class="form-control" type="number" onChange={e => setPriceHelper(e.target.value, idx)} />
                </div>
                : <></>}
        </div>
    )
}

export default RangeInput