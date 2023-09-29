import { Routes, Route } from "react-router-dom";
import Sms from "./pages/Sms";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import useAuth from "./hook/useAuth";
import Missing from "./components/Missing";
function App() {
  const { auth } = useAuth();
  return (
    <Routes>
      <Route path="/" exact element={<Sms />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />
     
        <Route path="/admin" exact element={<Admin />} />
     
        {/* <Route path="/login" exact element={<Login />} /> */}
    
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
