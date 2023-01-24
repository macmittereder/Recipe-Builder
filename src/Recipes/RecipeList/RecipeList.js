import RecipeListItem from "./RecipeListItem";

const RecipeList = () => {
  const recipes = [
    {
      name: "A Test Recipe",
      description: "This is a test",
      imagePath:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <button className="btn btn-success">New Recipe</button>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {recipes.map((recipe) => (
            <a href="#" className="list-group-item clearfix" key={recipe.name}>
              <div className="pull-left">
                <h4 className="list-group-item-heading">{recipe.name}</h4>
                <p className="list-group-item-text">{recipe.description}</p>
              </div>
              <span className="pull-right">
                <img
                  src={recipe.imagePath}
                  alt={recipe.name}
                  className="img-responsive"
                  style={{ maxHeight: "50px" }}
                />
              </span>
            </a>
          ))}
          <RecipeListItem />
        </div>
      </div>
    </>
  );
};

export default RecipeList;
