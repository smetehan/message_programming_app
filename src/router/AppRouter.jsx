import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Message from "../pages/Message";
import Message1 from "../pages/Message1";
import Message2 from "../pages/Message2";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="message" element={<PrivateRouter />}>
          <Route path="" element={<Message />}>
            <Route path="message1" element={<Message1 />} />
            <Route path="message2" element={<Message2 />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
