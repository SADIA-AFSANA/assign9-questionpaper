import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Option = ({ option, id, correctAnswer }) => {
    console.log(id);
    const ans = () => {
        if (correctAnswer === option) {
            toast("Wow so easy!");
        }
        else {
            toast('wrong answer')
        }




    }
    return (
        <div>
            <div>
                {/* <input onClick={ans} type="radio" name={`${id}`} id='anything' />{option} */}

                <p>
                    <input onClick={ans} type="radio" value="option" name={id} />{" "}
                    <span>{option}</span>
                </p>
            </div>
            <ToastContainer />
        </div>
    );

};

export default Option;