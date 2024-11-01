import data from "./data";
import Question from "./components/Question";
import questions from "./data";

const App = () => {
  return (
    <div className="all-questions">
      {questions.map((oneQuestion) => {
        return <Question key={oneQuestion.id} {...oneQuestion} />;
      })}
    </div>
  );
};

export default App;
