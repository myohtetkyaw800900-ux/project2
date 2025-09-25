import React from 'react'
import MainLayOut from './LayOuts/MainLayOut';
import HomePages from './Pages/HomePages';
import JobPage from './Pages/JobPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage1, { jobLoader } from './Pages/JobPage1';
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const App = () => {

    //Add Job
    const addJob = async (newJob) => {
        const res = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob),
        });
        return;
    };

    //Delete Job

    const deleteJob = async (id) => {
        const res = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
        });
        return;
    };

    //Update job

    const updateJob = async (job) => {
        const res = await fetch(`/api/jobs/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(job),
        });
        return;
    };

    const router = createBrowserRouter(

        createRoutesFromElements(
            <Route path='/' element={<MainLayOut />} >
                <Route index element={<HomePages />} />
                <Route path='/jobs' element={<JobPage />} />
                <Route path='/add-jobs' element={<AddJobPage addJobSubmit={addJob} />} />
                <Route path='/jobs/:id' element={<JobPage1 deleteJob={deleteJob} />} loader={jobLoader} />
                <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        )

    );

    return (

        < RouterProvider router={router} />
    )
}

export default App