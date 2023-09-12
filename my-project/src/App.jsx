import { Routes, Route } from "react-router-dom";
import Sms from "./pages/Sms";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Sms />} />
    </Routes>
  );
}

export default App;
