const Project = (name) => {
  var _id = Math.floor(Math.random() * 120000);
  var _name = name;
  var _projectTasks = [];

  const getId = () => {
    return _id;
  };

  const getName = () => {
    return _name;
  };
  const setName = (value) => {
    _name = value;
  };

  const getProjectTasks = () => {
    return _projectTasks;
  };

  const addProjectTask = (task) => {
    _projectTasks.push(task);
  };

  return {
    getId,
    getName,
    setName,
    getProjectTasks,
    addProjectTask,
  };
};

export default Project;
