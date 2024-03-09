
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpNow } from "./components/signuppage";
import { SignInNow } from "./components/signin";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpNow />} />
          <Route path="/signin" element={<SignInNow />} />
        </Routes>
      
      </BrowserRouter>
      </RecoilRoot>
    </>
  );
}


export default App;
