import { useState } from 'react';
import Form from './Form';
import Years from './Years';

function App() {
  const [age, setAge] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAge(e.target[0].value);
  };

  return (
    <div className='h-screen w-full bg-black flex justify-center items-center'>
      {age ? <Years age={age} /> : <Form handleSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
