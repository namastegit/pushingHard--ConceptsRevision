import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, isEven } from "./recoilState/atoms/count";

function App() {
  return (
  <>
  <RecoilRoot>
<Render></Render>
</RecoilRoot>
  </>
  )
}
function Render() {
  return (
    <>
    <Counter></Counter>
    <br>
    </br>
    <Buttons></Buttons>
    </>
    
  )
}

function Counter() {
  const count = useRecoilValue(countAtom);
  return(
    <>
    <p>Count is {count}</p>
    <EvenRender></EvenRender>
    </>
  )
}
function EvenRender() {
  const iseven = useRecoilValue(isEven);
  return(
    <>
    <div>
      {iseven ? "It is Even" : null}
    </div>
    </>
  )
}
function Buttons() {
  const setCount = useSetRecoilState(countAtom);


  return(
    <>
    <button onClick={()=>{
      setCount(count => count + 1);
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count => count - 1);
    }}>Decrease</button>
    </>
  )
}

export default App;