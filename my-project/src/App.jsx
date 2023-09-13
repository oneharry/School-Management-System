import { Routes, Route } from "react-router-dom";
import Sms from "./pages/Sms";
import Admin from "./pages/admin/Admin";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Sms />} />
      <Route>
        <Route path="/admin" element={<Admin/>}/>
      </Route>
    </Routes>
  );
}

export default App;
