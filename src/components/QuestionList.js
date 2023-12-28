import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ listOfQuestions, onQuestionUpdate, onQuestionDelete }) {

  const questionsToDisplay = listOfQuestions.map((question) => {
    return (
      <QuestionItem
        key={question.id}
        question={question}
        onQuestionUpdate={onQuestionUpdate}
        onQuestionDelete={onQuestionDelete}
      />
    )
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay}</ul>
    </section>
  );
}

export default QuestionList;
