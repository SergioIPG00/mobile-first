function SearchBar(){
    return(
        <div>
            <form class="form-inline d-flex justify-content-center md-form form-sm active-purple active-purple-2 mt-2">
            <i class="fas fa-search" aria-hidden="true"></i>
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
        </form>
        </div>

    );
}

export default SearchBar;