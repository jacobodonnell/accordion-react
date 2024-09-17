import { useState } from 'react';
import data from './data.js';
import SingleQuestion from './SingleQuestion.jsx';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = id => {
    setActiveId(prevId => {
      if (id === prevId) return null;
      return id;
    });
  };

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map(question => {
          return (
            <SingleQuestion
              key={question.id}
              {...question}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          );
        })}
      </section>
    </main>
  );
};
export default App;
