import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Question = () => {
    const post = useLoaderData();
    // console.log(post);
    const { id } = post.data;

    return (
        <div>
            <h1>all quiz are here:{id}</h1>

        </div>
    );
};

export default Question;