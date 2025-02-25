export const CategoryButtons = ({ categories, selected, onSelect }) => {
  // Handle "All" as default category
  const handleSelect = (category) => {
    onSelect(category === "All" ? null : category);
  };

  return (
    <div role="tablist" className="category-buttons">
      {categories.map((category) => (
        <button
          key={category}
          role="tab"
          onClick={() => handleSelect(category)}
          aria-selected={selected === (category === "All" ? null : category)}
          className={
            category === "All" && !selected
              ? "active"
              : selected === category
              ? "active"
              : ""
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};
