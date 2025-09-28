import React from "react";
import { useId } from "react";

function InputBox({
    label,
    amount,
    firstAmount,
    secondAmount,
    convertedAmount,
    selectUnit = "meter",
    fromUnit,
    toUnit,
    allUnits = [
    "meter", "kilometer", "centimeter", "millimeter", "micrometer", "nanometer","mile", "yard", "foot", "inch", "nautical_mile", "furlong", "light_year", "astronomical_unit","cubic_meter", "liter", "milliliter", "gallon", "quart", "pint", "cup","fluid_ounce", "tablespoon", "teaspoon", "cubic_foot", "cubic_inch", "cubic_centimeter", "cubic_millimeter","square_meter", "square_kilometer", "square_centimeter", "square_millimeter","square_mile", "square_yard", "square_foot", "square_inch", "acre", "hectare","celsius", "fahrenheit", "kelvin","kilogram", "gram", "milligram", "metric_ton", "pound", "ounce","stone", "us_ton", "imperial_ton", "carat","second", "millisecond", "microsecond", "nanosecond","minute", "hour", "day", "week", "month", "year", "decade", "century","meter_per_second", "kilometer_per_hour", "mile_per_hour", "knot", "foot_per_second","newton", "kilonewton", "pound_force", "dyne","watt", "kilowatt", "megawatt", "horsepower", "btu_per_hour","pascal", "kilopascal", "megapascal", "bar", "psi", "atmosphere", "torr", "millimeter_of_mercury","joule", "kilojoule", "calorie", "kilocalorie", "watt_hour", "kilowatt_hour","electron_volt", "british_thermal_unit", "us_therm", "foot_pound" ],
    onChangeUnit_Option,
    onChangeUnit,
}){

    const UnitId = useId();

        return (
                <div className="from_field text-start d-flex my-3  gap-2">
                  <div className="from_input_field ">
                      <label htmlFor={UnitId} className="form-label fw-bold">{label}</label>
                      <input type="number" name="" id={UnitId} className="form-control" placeholder='Enter Value' value={amount} onChange={(e) => onChangeUnit && onChangeUnit(e.target.value)} />
                  </div>

                  <div className="form_select_field">
                    <label htmlFor="" className='form-label fw-bold'>Select Unit</label>
                    <select value={selectUnit} onChange={ (e) =>  onChangeUnit_Option && onChangeUnit_Option(e.target.value) } name="" id=""  className="form-select ">
                      {
                        allUnits.map((unit)=>{
                          return  <option  key={unit} value={unit}>{unit}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
        )
}

export default InputBox;