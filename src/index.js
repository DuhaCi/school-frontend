// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import NotFound from './pages/NotFound';
// import LoginPage from './pages/LoginPage';
// import AuthPage from './pages/AuthPage';
// import ThemesPage from './pages/ThemesPage';
// import ThemePage from './pages/ThemePage';
// import PracticePage from './pages/PracticePage';
// import { QuestsPage } from './pages/QuestsPage';
// import MainPage from './pages/MainPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainPage/>,
//   },
//   {
//     path: "*",
//     element: <NotFound/>
//   },
//   {
//     path: "/section/:header/:id",
//     element: <ThemesPage/>
//   },
//   {
//     path: "/:header/:description",
//     element: <ThemePage/>
//   },
//   {
//     path: "/practice",
//     element: <PracticePage/>
//   },
//   {
//     path: "/practice/:header",
//     element: <QuestsPage/>
//   }
// ])

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
