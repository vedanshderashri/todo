import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    // For form to go back to initial state
    setDescription("");
    setQuantity(1);
  }
  return (
    <form
      className="flex flex-col  items-center justify-center md:flex-row  gap-2 p-12"
      onSubmit={handleSubmit}
    >
      <p className="text-lg font-bold">What do you need for your trip?</p>
      <select
        name=""
        id=""
        value={quantity}
        className="text-xs px-4 py-2 border border-orange-700 focus:outline-none rounded-2xl h-10"
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items"
        value={description}
        className="px-4 py-2 rounded-2xl focus:outline-none focus:bg-gray-100 border boder-blue-300 placeholder:text-black"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="bg-blue-300 active:bg-blue-400 px-3 py-2 rounded-2xl">
        Add
      </button>
    </form>
  );
}
