import React from 'react';
import Option from '../Option/Option';
import './QuestionDetails.css'

const QuestionDetails = ({ questionDetails }) => {
    const { id, name, questions, correctAnswer, options, question } = questionDetails;
    return (
        <div className='quiz-component'>


            <h4>{question}</h4>
            {
                options.map(option => <Option
                    key={option.id}
                    option={option}

                ></Option>)
            }

        </div>
    );
};

export default QuestionDetails;