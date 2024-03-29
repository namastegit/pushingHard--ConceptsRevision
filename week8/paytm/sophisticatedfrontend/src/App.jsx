
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Signup } from "./pages/signupPage";
import { Dashboard } from "./pages/dashboard";
import { SendMoney } from "./pages/sendmoney";
function App() {
  return(
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Signup/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/send" element={<SendMoney/>}></Route>
    {/* <Route path="/signin" element={<Signin/>}></Route>
   
    <Route path="/send" element={<SendMoney/>}></Route> */}
  </Routes>
  </BrowserRouter>
    </>
  )
}
export default App;