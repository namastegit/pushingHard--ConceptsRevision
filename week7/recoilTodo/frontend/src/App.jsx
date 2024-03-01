import { RecoilRoot } from 'recoil';
import { ShowallTodos } from "./components/showall";
import { CreateOne } from './components/createTodo';

function App() {
    return (
      <><RecoilRoot>
      <CreateOne></CreateOne>
      
        <ShowallTodos />
      </RecoilRoot>
      </>
    );
}

export default App;
