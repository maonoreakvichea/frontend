const questionsDialog = document.getElementById("questions-dialog");
const titleInput = document.getElementById("title");
const choiceAInput = document.getElementById("choiceA");
const choiceBInput = document.getElementById("choiceB");
const choiceCInput = document.getElementById("choiceC");
const choiceDInput = document.getElementById("choiceD");
const questionsContainer = document.getElementById("questions-container");

let questions = [];

function onAddQuestion() {
  questionsDialog.style.display = "flex";
  titleInput.value = "";
  choiceAInput.value = "";
  choiceBInput.value = "";
  choiceCInput.value = "";
  choiceDInput.value = "";
}

function onCancel() {
  questionsDialog.style.display = "none";
}

function onCreate() {
  const title = titleInput.value.trim();
  const choiceA = choiceAInput.value.trim();
  const choiceB = choiceBInput.value.trim();
  const choiceC = choiceCInput.value.trim();
  const choiceD = choiceDInput.value.trim();

  if (!title || !choiceA || !choiceB || !choiceC || !choiceD) {
    alert("Please fill in all fields!");
    return;
  }

  questions.push({
    title,
    choiceA,
    choiceB,
    choiceC,
    choiceD,
    correct: null
  });

  renderQuestions();
  questionsDialog.style.display = "none";
}

function renderQuestions() {
  questionsContainer.innerHTML = "";

  questions.forEach((q, index) => {
    const questionEl = document.createElement("div");
    questionEl.className = "bg-gray-100 p-4 rounded-lg shadow";

    questionEl.innerHTML = `
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-lg">${index + 1}. ${q.title}</h3>
        <button type="button" onclick="onDeleteQuestion(${index})" class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
      </div>
      <ul class="mt-2 space-y-1">
        <li>A. ${q.choiceA}</li>
        <li>B. ${q.choiceB}</li>
        <li>C. ${q.choiceC}</li>
        <li>D. ${q.choiceD}</li>
      </ul>
    `;

    questionsContainer.appendChild(questionEl);
  });
}

function onDeleteQuestion(index) {
  if (confirm("Are you sure you want to delete this question?")) {
    questions.splice(index, 1);
    renderQuestions();
  }
}

window.onAddQuestion = onAddQuestion;
window.onCancel = onCancel;
window.onCreate = onCreate;
window.onDeleteQuestion = onDeleteQuestion;
