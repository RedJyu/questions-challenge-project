import SingleQuestion from './singleQuestion';
function Questions({ question }) {
  return (
    <div className='container'>
      {question.map((singleQuestion) => {
        const { id, ...question } = singleQuestion;
        return (
          <div key={id}>
            <SingleQuestion question={question} />
          </div>
        );
      })}
    </div>
  );
}
export default Questions;
