import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./modules/home/Home";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import Details from "./modules/details";
import Tickets from "./modules/tickets/Tickets";
import Signin from "./modules/Auth/pages/Signin/Signin";
import Signup from "./modules/Auth/pages/Signup/Signup";
import UserProvider from "./contexts/UserContext/UserContext";
import ProtectedRoute from "./routers/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/details/:movieId" element={<Details />} />
            <Route path="*" element={<NotFound />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/tickets/:ticketId" element={<Tickets />} />
            </Route>
          </Route>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
