import { useRecoilState } from 'recoil';

// Adjust the import path based on the actual file structure
import { titleState, descriptionState } from '../atoms/showingatoms/descriptionatom';

export function CreateOne() {
  const [title, setTitle] = useRecoilState(titleState);
  const [description, setDescription] = useRecoilState(descriptionState);

  const addTodo = async () => {
    try {
      const response = await fetch('http://localhost:3000/newtodo', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          description: description,
          isDone: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data);

      // Clear input fields after successfully adding a todo
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <br />
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}
