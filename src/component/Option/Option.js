import React from 'react';

const Option = ({ option }) => {
    const { options, id, correctAnswer, } = option;
    return (
        <div>
            <input type="radio" name={`${id}`} id='anything' />{option}
        </div>

    );

};

export default Option;