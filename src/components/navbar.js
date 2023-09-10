
function NavBar(){
    return(
        <div className="NavBar">
            <nav class="navbar navbar-expand-lg navbar-light bg-info">            
                <i class="bi bi-person-circle"></i>                    
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Next Steps
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Contact us</a>
                        <a class="dropdown-item" href="#">Subscribe to the blog</a>
                        <a class="dropdown-item" href="#">Sign up for our newsletter</a>
                        </div>
                    </li>                    
                    </ul>
                </div>
                </nav>
        </div>
    );
}

export default NavBar;