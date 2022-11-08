import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const propsHolder = props;
    e.preventDefault();
    if (inputText.title.trim()) {
      propsHolder.addTodoProps(inputText.title);
      setInputText({ title: '' });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="button" className="input-submit">
        <CiCirclePlus style={{
          color: 'darkcyan', fontSize: '25px', marginLeft: '6px', marginTop: '2px',
        }}
        />
      </button>
    </form>
  );
};

export default InputTodo;
