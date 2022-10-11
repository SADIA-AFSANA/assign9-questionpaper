import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'


const Home = () => {
    const loaderData = useLoaderData()
    const quizData = loaderData.data;



    return (
        <div>
            <div>
                <img src="question.jpeg" alt="" />
                <h2>There are many topics</h2>
            </div>
            <div>


                {
                    quizData.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}

                    ></Quiz>)
                }
            </div>
        </div>

    );
};

export default Home;