const Task = (title, description, dueDate, priority) => {
  var _id = Math.floor(Math.random() * 120000);
  var _title = title;
  var _description = description;
  var _dueDate = dueDate;
  var _priority = priority;

  const getId = () => {
    return _id;
  };

  const getTitle = () => {
    return _title;
  };

  const setTitle = (value) => {
    _title = value;
  };
  const getDescription = () => {
    return _description;
  };

  const setDescription = (value) => {
    _description = value;
  };

  const getDueDate = () => {
    return _dueDate;
  };

  const setDueDate = (value) => {
    _dueDate = value;
  };

  const getPriority = () => {
    return _priority;
  };

  const setPriority = (value) => {
    _priority = value;
  };

  return {
    getId,
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getPriority,
    setPriority,
    getDueDate,
    setDueDate,
  };
};

export default Task;
