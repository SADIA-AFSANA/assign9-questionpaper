import React from 'react';
import Option from '../Option/Option';
import './QuestionDetails.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionDetails = ({ questionDetails }) => {
    const { id, question, options, correctAnswer } = questionDetails;
    const notify = (correctAnswer) => toast(correctAnswer);
    return (
        <div >
            <div >
                <h5>{question}</h5>

                <button onClick={() => notify(correctAnswer)}>  <EyeIcon className="h-6 w-6 text-blue-500" />correct</button>
                {/* <BeakerIcon className="h-4 w-4 text-blue-500 btn" /> */}
            </div>
            <ToastContainer />
            {
                options.map((option, index) => <Option
                    key={index}
                    option={option}
                    id={id}
                    correctAnswer={correctAnswer}

                ></Option>)
            }

        </div>

    );
};

export default QuestionDetails;

