function SearchBar(){
    return(
        <div>            
            <form className="form-inline d-flex justify-content-center md-form form-sm active-purple active-purple-2 mt-2">
            <i className="fas fa-search" aria-hidden="true"></i>
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
        </form>
        </div>
    );
}

export default SearchBar;