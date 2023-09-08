import SingleQuestion from './singleQuestion';
function Questions({ question }) {
  return (
    <section className='container'>
      {question.map((singleQuestion) => {
        return <SingleQuestion key={singleQuestion.id} {...singleQuestion} />;
      })}
    </section>
  );
}
export default Questions;
