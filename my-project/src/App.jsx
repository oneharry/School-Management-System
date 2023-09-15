import { Routes, Route } from "react-router-dom";
import Sms from "./pages/Sms";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Sms />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />
      <Route>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
