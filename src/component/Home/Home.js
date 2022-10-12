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
            <div>
                <img src="question.jpeg" alt="" />
                <h2>There are many topics</h2>
                <p>We ask questions in order to learn more information about something, and we answer questions to provide more information. Asking and answering questions is not only a part of how we learn, but it is also a part of our social skills; we ask and answer questions to be polite and build and maintain relationships.</p>
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