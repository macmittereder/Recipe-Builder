import "./App.css";
import CustomHeader from "./CustomHeader/CustomHeader";
import Recipes from "./Recipes/Recipes";
import ShoppingList from "./ShoppingList/ShoppingList";

function App() {
  return (
    <>
      <CustomHeader></CustomHeader>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <Recipes />
            <ShoppingList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
