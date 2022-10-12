import React from 'react';
import Option from '../Option/Option';
import './QuestionDetails.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const QuestionDetails = ({ questionDetails }) => {
    const { id, name, questions, correctAnswer, options, question } = questionDetails;
    return (
        <div>
            <div className='quiz-component'>

                <EyeIcon className="h-6 w-6 text-blue-500" />
                <h4>{question}</h4>
                {
                    options.map(option => <Option
                        key={option.id}
                        option={option}

                    ></Option>)
                }

            </div></div>
    );
};

export default QuestionDetails;