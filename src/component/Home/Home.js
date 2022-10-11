import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'


const Home = () => {
    const loaderData = useLoaderData()
    const quizData = loaderData.data;
    console.log(quizData);


    return (
        <div>

            <h2 className='background'>This is my Home Page</h2>
            {
                quizData.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}

                ></Quiz>)
            }
        </div>
    );
};

export default Home;