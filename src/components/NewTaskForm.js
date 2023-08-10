import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ text, category: selectedCategory });
    setText("");
  };

  return (
    <div className="NewTaskForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="New task description"
        />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default NewTaskForm;
