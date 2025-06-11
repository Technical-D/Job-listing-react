import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Mainlayout from "./layout/Mainlayout";
import Jobspages from "./pages/Jobspages";
import Notfoundpage from "./pages/Notfoundpage";
import Jobpage, { jobLoader } from "./pages/Jobpage";
import Addjobpage from "./pages/Addjobpage";
import Editjobpage from "./pages/Editjobpage";

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob)
    })
    return res;
  };

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application-json"
      },
      body: JSON.stringify(job)
    });
    return res;
  }

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    console.log(res)
    return res;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<Jobspages />} />
        <Route path="/jobs/:id" element={<Jobpage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/add-job" element={<Addjobpage addJobSubmit={addJob} />} />
        <Route path="/edit-job/:id" element={<Editjobpage updateJob={updateJob}/>} loader={jobLoader} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
