import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionDetails from '../QuestionDetails/QuestionDetails';

const Question = () => {
    const { name, questions } = useLoaderData().data;



    return (
        <div className='map'>
            <h4 className='question-title'>Question of <span className='name'>{name}</span> </h4>
            {
                questions.map(questionDetails => <QuestionDetails
                    key={questionDetails.id}
                    questionDetails={questionDetails}

                ></QuestionDetails>)
            }

        </div>
    );
};

export default Question;