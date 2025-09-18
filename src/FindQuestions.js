import { useState } from "react";

function FindQuestions() {
  const [query, setQuery] = useState("");
  const questions = ["React basics", "JavaScript arrays", "CSS Flexbox", "Node.js APIs"];
  const results = questions.filter(q => q.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="dashboard-page">
      <div className="card">
        <h1>Find Questions</h1>
        <input
          type="text"
          placeholder="Search questions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {results.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default FindQuestions;
