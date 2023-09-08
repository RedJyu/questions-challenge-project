import { useState } from 'react';

function SingleQuestion({ question }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='question'>
      <header>
        <h5>{question.title}</h5>
      </header>
      {isVisible && <p>{question.info}</p>}
      <button
        type='button'
        className='btn'
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {!isVisible ? 'Show More' : 'Hide'}
      </button>
    </div>
  );
}
export default SingleQuestion;
