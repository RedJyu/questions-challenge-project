import { useState } from 'react';
import questions from './data';
import Questions from './Questions';

const App = () => {
  const [question, setQuestion] = useState(questions);

  return (
    <main>
      <Questions question={question} />
    </main>
  );
};
export default App;
