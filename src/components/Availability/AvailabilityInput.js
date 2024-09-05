import React, { useState } from "react";
import "./AvailabilityInput.css";

const AvailabilityInput = ({ availabilities, setAvailabilities }) => {
  const addAvailability = () => {
    setAvailabilities([
      ...availabilities,
      {
        id: "",
        slot: {
          id: "",
          startDate: "",
          endDate: "",
        },
        price: {
          id: "",
          basePrice: "",
          perPerson: false,
          seasonalPricings: [],
        },
        unavailableSlots: [],
        isPricingsCollapsed: true,
        isUnavailableSlotsCollapsed: true,
      },
    ]);
  };

  const removeAvailability = (index) => {
    const newAvailabilities = [...availabilities];
    newAvailabilities.splice(index, 1);
    setAvailabilities(newAvailabilities);
  };

  const updateAvailability = (index, field, innerField, value) => {
    const newAvailabilities = [...availabilities];
    newAvailabilities[index][field][innerField] = value;
    setAvailabilities(newAvailabilities);
  };

  const togglePricingsCollapse = (index) => {
    const newAvailabilities = [...availabilities];
    newAvailabilities[index].isPricingsCollapsed =
      !newAvailabilities[index].isPricingsCollapsed;
    setAvailabilities(newAvailabilities);
  };

  const toggleUnavailableSlotsCollapse = (index) => {
    const newAvailabilities = [...availabilities];
    newAvailabilities[index].isUnavailableSlotsCollapsed =
      !newAvailabilities[index].isUnavailableSlotsCollapsed;
    setAvailabilities(newAvailabilities);
  };

  const addSeasonalPricing = (availabilityIndex) => {
    const newAvailabilities = [...availabilities];
    newAvailabilities[availabilityIndex].price.seasonalPricings.push({
      slot: {
        startDate: "",
        endDate: "",
      },
      specialPrice: "",
      description: "",
      daysOfWeek: [false, false, false, false, false, false, false], // Array for days of the week
      daysOfTheWeek: [],
    });
    setAvailabilities(newAvailabilities);
  };

  const removeSeasonalPricing = (availabilityIndex, PricingIndex) => {
    const newAvailabilities = [...availabilities];
    newAvailabilities[availabilityIndex].price.seasonalPricings.splice(
      PricingIndex,
      1
    );
    setAvailabilities(newAvailabilities);
  };

  const updateDaysOfWeek = (
    availabilityIndex,
    PricingIndex,
    dayIndex,
    checked
  ) => {
    console.log(availabilityIndex, PricingIndex, dayIndex, checked);
    const newAvailabilities = [...availabilities];
    newAvailabilities[availabilityIndex].price.seasonalPricings[
      PricingIndex
    ].daysOfWeek[dayIndex] = checked;
    if (checked) {
      newAvailabilities[availabilityIndex].price.seasonalPricings[
        PricingIndex
      ].daysOfTheWeek.push(dayIndex + 1);
    } else {
      newAvailabilities[availabilityIndex].price.seasonalPricings[
        PricingIndex
      ].daysOfTheWeek = newAvailabilities[
        availabilityIndex
      ].price.seasonalPricings[PricingIndex].daysOfTheWeek.filter(
        (day) => day !== dayIndex + 1
      );
    }
    setAvailabilities(newAvailabilities);
  };

  const updateSeasonalPricing = (
    availabilityIndex,
    PricingIndex,
    field,
    innerField,
    value
  ) => {
    const newAvailabilities = [...availabilities];
    if (innerField === "") {
      newAvailabilities[availabilityIndex].price.seasonalPricings[PricingIndex][
        field
      ] = value;
    } else {
      newAvailabilities[availabilityIndex].price.seasonalPricings[PricingIndex][
        field
      ][innerField] = value;
    }
    setAvailabilities(newAvailabilities);
  };

  const addUnavailableSlot = (availabilityIndex) => {
    const newAvailabilities = [...availabilities];
    newAvailabilities[availabilityIndex].unavailableSlots.push({
      startDate: "",
      endDate: "",
    });
    setAvailabilities(newAvailabilities);
  };

  const removeUnavailableSlot = (availabilityIndex, SlotIndex) => {
    const newAvailabilities = [...availabilities];
    newAvailabilities[availabilityIndex].unavailableSlots.splice(SlotIndex, 1);
    setAvailabilities(newAvailabilities);
  };

  const updateUnavailableSlot = (
    availabilityIndex,
    SlotIndex,
    field,
    value
  ) => {
    const newAvailabilities = [...availabilities];
    newAvailabilities[availabilityIndex].unavailableSlots[SlotIndex][field] =
      value;
    setAvailabilities(newAvailabilities);
  };

  const isDateWithinAvailability = (availabilityIndex, startDate, endDate) => {
    const availability = availabilities[availabilityIndex];
    return (
      startDate >= availability.slot.startDate &&
      startDate <= availability.slot.endDate &&
      endDate >= availability.slot.startDate &&
      endDate <= availability.slot.endDate
    );
  };

  return (
    <div className="container">
      <h3>Create Accommodation</h3>
      <button className="primary-btn" onClick={addAvailability}>
        Add Availability
      </button>
      {availabilities.map((availability, index) => (
        <div key={index} className="availability-box">
          <h4>Availability {index + 1}</h4>
          <div className="date-inputs">
            <div>
              <label>Start Date:</label>
              <input
                type="date"
                value={availability.startDate}
                onChange={(e) =>
                  updateAvailability(index, "slot", "startDate", e.target.value)
                }
              />
            </div>
            <div>
              <label>End Date:</label>
              <input
                type="date"
                value={availability.endDate}
                onChange={(e) =>
                  updateAvailability(index, "slot", "endDate", e.target.value)
                }
              />
            </div>
          </div>
          <div>
            <label>Base Price:</label>
            <input
              type="number"
              value={availability.price.basePrice}
              onChange={(e) =>
                updateAvailability(index, "price", "basePrice", e.target.value)
              }
            />
          </div>

          <button
            className="remove-btn"
            onClick={() => removeAvailability(index)}
          >
            Remove Availability
          </button>

          <div className="seasonal-Pricing">
            <h5 onClick={() => togglePricingsCollapse(index)}>
              Seasonal Pricings {availability.isPricingsCollapsed ? "▼" : "▲"}
            </h5>
            {!availability.isPricingsCollapsed && (
              <>
                <button
                  className="primary-btn"
                  onClick={() => addSeasonalPricing(index)}
                >
                  Add Seasonal Pricing
                </button>
                {availability.price.seasonalPricings.map(
                  (Pricing, PricingIndex) => (
                    <div key={PricingIndex} className="Pricing-box">
                      <div className="date-inputs">
                        <div>
                          <label>Start Date:</label>
                          <input
                            type="date"
                            value={Pricing.startDate}
                            onChange={(e) => {
                              const isValid = isDateWithinAvailability(
                                index,
                                e.target.value,
                                availability.slot.endDate
                              );
                              if (isValid)
                                updateSeasonalPricing(
                                  index,
                                  PricingIndex,
                                  "slot",
                                  "startDate",
                                  e.target.value
                                );
                            }}
                          />
                        </div>
                        <div>
                          <label>End Date:</label>
                          <input
                            type="date"
                            value={Pricing.endDate}
                            onChange={(e) => {
                              const isValid = isDateWithinAvailability(
                                index,
                                availability.slot.startDate,
                                e.target.value
                              );
                              if (isValid)
                                updateSeasonalPricing(
                                  index,
                                  PricingIndex,
                                  "slot",
                                  "endDate",
                                  e.target.value
                                );
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <label>Special Price:</label>
                        <input
                          type="number"
                          value={Pricing.specialPrice}
                          onChange={(e) =>
                            updateSeasonalPricing(
                              index,
                              PricingIndex,
                              "specialPrice",
                              "",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div>
                        <label>Description:</label>
                        <input
                          type="text"
                          value={Pricing.description}
                          onChange={(e) =>
                            updateSeasonalPricing(
                              index,
                              PricingIndex,
                              "description",
                              "",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div>
                        <label>Days of Week:</label>
                        <div className="days-of-week">
                          {[
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                            "Sunday",
                          ].map((day, dayIndex) => (
                            <label key={dayIndex}>
                              <input
                                type="checkbox"
                                checked={Pricing.daysOfWeek[dayIndex]}
                                onChange={(e) =>
                                  updateDaysOfWeek(
                                    index,
                                    PricingIndex,
                                    dayIndex,
                                    e.target.checked
                                  )
                                }
                              />
                              {day}
                            </label>
                          ))}
                        </div>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() =>
                          removeSeasonalPricing(index, PricingIndex)
                        }
                      >
                        Remove Pricing
                      </button>
                    </div>
                  )
                )}
              </>
            )}
          </div>

          <div className="unavailable-Slot">
            <h5 onClick={() => toggleUnavailableSlotsCollapse(index)}>
              Unavailable Slots{" "}
              {availability.isUnavailableSlotsCollapsed ? "▼" : "▲"}
            </h5>
            {!availability.isUnavailableSlotsCollapsed && (
              <>
                <button
                  className="primary-btn"
                  onClick={() => addUnavailableSlot(index)}
                >
                  Add Unavailable Slot
                </button>
                {availability.unavailableSlots.map((slot, slotIndex) => (
                  <div key={slotIndex} className="Slot-box">
                    <div className="date-inputs">
                      <div>
                        <label>Start Date:</label>
                        <input
                          type="date"
                          value={slot.startDate}
                          onChange={(e) => {
                            const isValid = isDateWithinAvailability(
                              index,
                              e.target.value,
                              availability.slot.endDate
                            );
                            if (isValid)
                              updateUnavailableSlot(
                                index,
                                slotIndex,
                                "startDate",
                                e.target.value
                              );
                          }}
                        />
                      </div>
                      <div>
                        <label>End Date:</label>
                        <input
                          type="date"
                          value={slot.endDate}
                          onChange={(e) => {
                            const isValid = isDateWithinAvailability(
                              index,
                              availability.slot.startDate,
                              e.target.value
                            );
                            if (isValid)
                              updateUnavailableSlot(
                                index,
                                slotIndex,
                                "endDate",
                                e.target.value
                              );
                          }}
                        />
                      </div>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeUnavailableSlot(index, slotIndex)}
                    >
                      Remove Slot
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailabilityInput;
