
import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS } from "./data";
import { PYTHON_RESULTS } from "./data";
import { HTML_RESULTS } from "./data";
import { ENGLISH_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header batchName="gen 11" />
      <main className="scores-container">
        <div class="scores">
          <Scores courseName={"JAVA"} courseResult={JAVA_RESULTS}/>
        </div>
          <div class="scores">
          <Scores courseName={"HTML"} courseResult={HTML_RESULTS}/>
        </div>
        <div class="scores">
          <Scores courseName={"PYTHON"} courseResult={PYTHON_RESULTS}/>
        </div>
        <div class="scores">
          <Scores courseName={"ENGLISH"} courseResult={ENGLISH_RESULTS}/>
        </div>
      </main>
    </>
  );
}

export default App;