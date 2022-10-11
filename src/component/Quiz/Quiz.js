import React from 'react';
import './Quiz.css';

const Quiz = ({ quiz }) => {
    return (
        <div className='profile'>
            <div>
                <img src={quiz.logo} alt="" />
            </div>
            <div>
                <p>{quiz.name}</p>
                <p>Q-5</p>
                <button>Question</button>
            </div>


        </div>
    );
};

export default Quiz;