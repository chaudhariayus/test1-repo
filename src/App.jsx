import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Signup} from "./pages/Signup"
import { Signin } from "./pages/Signin"
import Dashboard  from "./pages/Dashboard"
import Consult from "./pages/Consult"
import Appointment from "./pages/Appointment"
import { ForgetPassword } from "./components/Auth/ForgetPassword"
import { Verifymail } from "./components/Auth/VerifyEmail"
// import { Profile } from "./pages/Profile"
import { ProfileCard } from "./pages/ProfileCard"
export default function App(){
  return <><BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/consult" element={<Consult />} />
    <Route path="/appointment" element={<Appointment />} />
    <Route path="/forget-password" element={<ForgetPassword />} />
    <Route path="/verify-mail" element={<Verifymail />} />
    <Route path="/profile/:role" element={<ProfileCard />} />
  </Routes>
  </BrowserRouter>
  </>
}