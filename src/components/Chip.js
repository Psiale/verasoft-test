import React from 'react'

const Chip = ({handleOnClick, chipText}) => {
    return (
        <div>
            <button onClick={handleOnClick}>{chipText}</button>
        </div>
    );
}

export default Chip;
