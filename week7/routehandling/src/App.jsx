import { Comp1 } from "./components/com-m";
import { Comp2 } from "./components/com-n";
import{BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";



function App()  {
   
    return(
        <>
        
        <BrowserRouter>
<Appbar></Appbar>
        <Routes>
            <Route path="/" element={ <Comp1></Comp1>}></Route>
            <Route path="/dash" element={<Comp2></Comp2>}></Route>
        </Routes>

        
        </BrowserRouter>
      
    
 
      </>
    );
};

function Appbar() {
    const navigate  = useNavigate();
return(
    <>
    <button onClick={()=>{
        navigate("/")
    }}>Page 1</button>
        <button onClick={()=>{
        navigate("/dash")
    }}>Page 2</button>
    </>
)
};

export default App;