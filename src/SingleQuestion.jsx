import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;

  return (
    <article className="question">
      <button
        style={{
          background: 'none',
          textAlign: 'left',
          border: 'none',
          padding: '0',
          width: '100%',
          cursor: 'pointer',
        }}
        onClick={() => toggleQuestion(id)}
      >
        <header>
          <h5>{title}</h5>
          <span className="question-btn">
            {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </span>
        </header>
      </button>
      {isActive && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
