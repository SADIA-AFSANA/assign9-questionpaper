import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    // const loaderData = useLoaderData()
    // const quizData = loaderData.data;
    // console.log(quizData);
    const data = [
        {
            name: 'Page A',
            total: 8,
            quiz: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            total: 9,
            quiz: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            total: 8,
            quiz: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            total: 11,
            quiz: 3908,
            amt: 2000,
        },

    ];
    return (
        <div >
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>


        </div>
    );
};

export default Chart;