import React from 'react';
import './QuestionDetails.css'

const QuestionDetails = ({ questionDetails }) => {
    const { id, name, questions, correctAnswer, options, question } = questionDetails;
    return (
        <div className='quiz-component'>


            <h4>{question}</h4>

        </div>
    );
};

export default QuestionDetails;