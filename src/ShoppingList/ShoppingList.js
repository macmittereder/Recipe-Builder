import ShoppingListEdit from "./ShoppingListEdit";

const ShoppingList = () => {
  const ingredients = [
    { name: "Apples", amount: 5 },
    { name: "Tomatoes", amount: 2 },
  ];

  return (
    <div className="row">
      <div className="col-xs-10">
        <ShoppingListEdit />
        <hr />
        <ul className="list-group">
          {ingredients.map((ingredient) => (
            <a
              href="#"
              className="list-group-item"
              style={{ cursor: "pointer" }}
            >
              {ingredient.name} ({ingredient.amount})
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
