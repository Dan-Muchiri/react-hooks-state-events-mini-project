import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskDetails, setTaskDetails] = useState({
    text: "",
    category: categories[0], 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      text: taskDetails.text,
      category: taskDetails.category,
    };

    onTaskFormSubmit(newTask);

    setTaskDetails({
      text: "",
      category: categories[0],
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskDetails.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskDetails.category}
          onChange={handleInputChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
