export default function List({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="flex items-center justify-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="w-8 h-8 checked:accent-black"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span className={`text-2xl ${item.packed ? "line-through" : ""}`}>
        {item.quantity} {item.description}
      </span>

      <span onClick={() => onDeleteItem(item.id)}>❌</span>
    </li>
  );
}
