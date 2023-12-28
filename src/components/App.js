import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [listOfQuestions, setListOfQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questions) => setListOfQuestions(questions))
  }, []);

  function handleAddQuestion(newQuestion) {
    setListOfQuestions([...listOfQuestions, newQuestion])
  }

  function handleQuestionUpdate(updatedQuestion) {
    const updatedQuestions = listOfQuestions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    })
    setListOfQuestions(updatedQuestions);
  }

  function handleQuestionDelete(questionFromList) {
    const updatedQuestions = listOfQuestions.filter((question) => question.id !== questionFromList.id)
    setListOfQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ?
        <QuestionForm
          onAddQuestion={handleAddQuestion}
        /> :
        <QuestionList
          listOfQuestions={listOfQuestions}
          onQuestionUpdate={handleQuestionUpdate}
          onQuestionDelete={handleQuestionDelete}
        />}
    </main>
  );
}

export default App;
