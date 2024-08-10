import React from "react";
import { Link } from "react-router-dom";

function valueText(value) {
    return `R$${value}`;
}

const Slider = () => {
    const [value, setValue] = React.useState([0, 1000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div className='sort-by'>
            <p>Filtros</p>
            <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valueText}
            />
            <Slider
                defaultValue={30}
                step={10}
                marks
                min={10}
                max={110}
                disabled
            />
        </div>
    );
};

export default Slider;
