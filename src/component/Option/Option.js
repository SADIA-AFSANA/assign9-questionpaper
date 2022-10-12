import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Option = ({ option }) => {
    const { options, id, correctAnswer, } = option;

    if (correctAnswer) {
        toast("Wow so easy!");


    }
    return (
        <div>
            <input type="radio" name={`${id}`} id='anything' />{option}
        </div>

    );

};

export default Option;