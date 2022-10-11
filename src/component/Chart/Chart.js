import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const loaderData = useLoaderData()
    const quizData = loaderData.data;
    console.log(quizData);
    return (
        <div>
            <LineChart width={500} height={400} data={quizData}>
                <Line type="monotone" dataKey={quizData.total} stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Chart;