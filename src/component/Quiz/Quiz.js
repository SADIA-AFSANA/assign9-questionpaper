import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({ quiz }) => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${quiz.id}`);
    }
    return (
        <div className='profile'>
            <div>
                <img src={quiz.logo} alt="" />
            </div>
            <div>
                <p>{quiz.name}</p>
                <p>quiz: {quiz.total}</p>
                <button onClick={handleNavigate}>Question</button>
            </div>


        </div>
    );
};

export default Quiz;