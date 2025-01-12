import { useState } from "react";
import Form from "./Form";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";
import Logo from "./Logo.jsx";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // As we cant mutate state, we are creating brand new array by destructuring existing one in the brand new array
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  // jiski id matach ho rahi he uska item.packed value toggle kr rahe he
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="contianer overflow-x-auto mx-auto box-border h-screen font-mono">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
