import { useState } from 'react';

function SingleQuestion({ title, info }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='question'>
      <header>
        <h5>{title}</h5>
      </header>
      {isVisible && <p>{info}</p>}
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
