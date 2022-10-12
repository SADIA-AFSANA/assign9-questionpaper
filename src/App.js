import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import Question from './component/Question/Question';
import Blog from './component/Blog/Blog';

import Chart from './component/Chart/Chart';
import Main from './component/Main/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const router = createBrowserRouter([


    {
      path: '/',
      element: <Main></Main>, children: [

        {
          path: '/',
          loader: () => {
            return fetch(' https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },

        {
          path: '/home',
          loader: async () => {
            return fetch(' https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/post/:postId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.postId}`)
          },
          element: <Question></Question>
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/chart',
          loader: () => {
            return fetch(' https://openapi.programming-hero.com/api/quiz')
          },
          element: <Chart></Chart>
        },
      ]
    },
    {
      path: '*',
      element: <div><h1>This route  are not found :: 404</h1></div>
    }

  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
