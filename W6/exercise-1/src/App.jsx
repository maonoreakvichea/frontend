
import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data";

const COURSES = [
  { name: "JAVA", results: JAVA_RESULTS },
  { name: "HTML", results: HTML_RESULTS },
  { name: "PYTHON", results: PYTHON_RESULTS },
  { name: "ENGLISH", results: ENGLISH_RESULTS },
];

function App() {
  return (
    <>
      <Header batchName="gen 11" />
      <main className="scores-container">
        {COURSES.map((course) => (
          <div key={course.name} className="scores">
            <Scores courseName={course.name} courseResult={course.results} />
          </div>
        ))}
      </main>
    </>
  );
}

export default App;