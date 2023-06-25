import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import Project from "./pages/projects/project";
import PublicRoutes from "./routes/publicRoutes";
import ProjectsPage from "./pages/projects/projectsPage";
import CreateProject from "./pages/createProject/createProject";
import ProtectedRoutes from "./routes/protectedRoutes";
import MainHeader from "./layouts/mainHeader";
import LeftNavbar from "./layouts/leftNavbar";
import Dashborad from "./pages/dashboard";
import Register from "./pages/register";
import Messenger from "./pages/messenger/messenger";

function App() {
  return (
    <Routes>
      <Route to="/" element={ <MainHeader />}>
        <Route path="/" element={ <ProtectedRoutes /> }>
          <Route path="/" element={ <Navigate to="/projects" replace /> } />
          <Route path="/projects" element={ <ProjectsPage /> } />
          <Route path="/projects/create" element={ <CreateProject /> } />
          <Route path="/project/:id" element={ <LeftNavbar />}>
          <Route path="/project/:id/dashboard" element={ <Dashborad /> } />
          <Route path="/project/:id/messenger" element={ <Messenger /> } />
          </Route>
        </Route>

        <Route path="login" element={ <PublicRoutes /> }>
          <Route path="/login" element={ <Login /> } />
          <Route path="/login/register" element={ <Register /> } />
        </Route>
        
        <Route path="/home" element={ <Project /> } />
      </Route>
    </Routes>
  );
}

export default App;
