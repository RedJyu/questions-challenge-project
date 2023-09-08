import { useState } from 'react';
import questions from './data';

const App = () => {
  const [question, setQuestion] = useState(questions);

  return <h2>Accordion Starter</h2>;
};
export default App;
