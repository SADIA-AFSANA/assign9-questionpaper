import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Question = () => {
    const post = useLoaderData();
    // console.log(post);
    const { name } = post.data;

    return (
        <div>
            <h1>all quiz are here:{name}</h1>

        </div>
    );
};

export default Question;