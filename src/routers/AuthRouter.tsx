import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../screens";

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img src="" alt="" />
          <h1>fadfs</h1>
        </div>
        <div className="col content-center">
          <BrowserRouter>
            <Routes>
              <Route element={<Login />} path="/login" />
              <Route element={<SignUp />} path="/sign-up" />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
