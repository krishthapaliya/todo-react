import React, { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const onType = (e) => {
    setValue(e.target.value);
  };

  const clickHandler = () => {
    setItems([...items, value]);
    setValue(''); 
  };

  const deleteHandler = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-4 rounded shadow-md w-full max-w-md">
        <input
          type="text"name=""id="fs" value={value}onChange={onType} className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" placeholder="Add an item..."
        />
        <button onClick={clickHandler} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>

        <div className="mt-4">
          <ul>
            {items.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <li>{item}</li>
                <button onClick={() => deleteHandler(index)} className="text-red-600 hover:text-red-800" >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}