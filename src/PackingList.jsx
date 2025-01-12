import { useState } from "react";
import List from "./List.jsx";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="p-24 ">
      <ul className="flex flex-wrap gap-10 font-bold text-lg">
        {sortedItems.map((item) => (
          <List
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="flex mt-28 gap-5 items-center justify-center">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs uppercase active:bg-orange-400 px-4 py-2 border border-orange-700 focus:outline-none rounded-2xl h-10"
        >
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort BY description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button
          className="text-xs px-4 py-2 active:bg-orange-400  border border-orange-700 rounded-2xl"
          onClick={onClearList}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
