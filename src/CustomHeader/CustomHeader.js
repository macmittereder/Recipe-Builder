const CustomHeader = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">
            Recipe Book
          </a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">Shopping List</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" role="button">
                Manage<span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Save Data</a>
                </li>
                <li>
                  <a href="#">Fetch Data</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomHeader;
