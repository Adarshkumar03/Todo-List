import Project from "./Project";
import Task from "./Task";

const ProjectList = (() => {
  var _projects = [];
  const addProject = (project) => {
    _projects.push(project);
  };
  const getProjects = () => {
    return _projects;
  };
  return {
    addProject,
    getProjects,
  };
})();

const inbox = Project("Inbox");
ProjectList.addProject(inbox);

//Functions
const close = () => {
  overlay.style.display = "none";
  taskForm.style.transform = "scale(0)";
  projectForm.style.transform = "scale(0)";
};

const addOption = (optionValue) => {
  const option = document.createElement("option");
  option.setAttribute("value", `${optionValue}`);
  option.innerText = `${optionValue}`;
  selectProject.appendChild(option);
};

//DOM Manipulation
const aside = document.querySelector("aside");

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  aside.classList.toggle("inactive");
});

const projectUl = document.querySelector("#project-list");

ProjectList.getProjects().forEach((item) => {
  if (item.getName() === "inbox" || item.getName() === "Inbox") return;
  const li = document.createElement("li");
  li.textContent = item.getName();
  projectUl.insertBefore(li, projectUl.childNodes[0]);
});

const selectProject = document.getElementById("project-select");
console.log(selectProject);

const overlay = document.querySelector(".overlay");

const closeButton = document.querySelectorAll(".form-head span");

const projectForm = document.querySelector(".add-project-form");
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const project = Project(projectForm.elements["project-name"].value);
  ProjectList.addProject(project);
  console.log(ProjectList.getProjects());
  addOption(project.getName());
  overlay.style.display = "none";
  projectForm.style.transform = "scale(0)";
});

const taskForm = document.querySelector(".add-task-form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task1 = Task(
    taskForm.elements["task-title"],
    taskForm.elements["desc"],
    taskForm.elements["date"],
    taskForm.elements["prio"]
  );
  project1.addProjectTask(task1);
  overlay.style.display = "none";
  taskForm.style.transform = "scale(0)";
});

const addTaskFormButton = document.querySelector(".add-task-form-button");
addTaskFormButton.addEventListener("click", () => {
  taskForm.style.transform = "scale(1)";
  overlay.style.display = "block";
});

const addProjectButton = document.querySelector(".add-project-button");
addProjectButton.addEventListener("click", () => {
  projectForm.style.transform = "scale(1)";
  overlay.style.display = "block";
});

Array.from(closeButton).forEach((item) =>
  item.addEventListener("click", close)
);

overlay.addEventListener("click", close);
