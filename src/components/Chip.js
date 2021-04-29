import React from 'react'

const Chip = ({handleOnClick, chipText}) => {
    return (
        <div>
            <button handleOnClick={handleOnClick}>{chipText}</button>
        </div>
    );
}

export default Chip;
