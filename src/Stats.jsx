export default function Stats({ items }) {
    if (!items.length)
      return (
        <p className="p-12 text-center">
          Start adding some items to your list! 🤩
        </p>
      );
    const numItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage = Math.round((packedItems / numItems) * 100);
  
    return (
      <p className="p-12 text-center">
        {percentage === 100
          ? "You got eveything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed
        ${packedItems} (${percentage}%)`}
      </p>
    );
  }
  