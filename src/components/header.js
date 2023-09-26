import logo from "../assets/logo.png"

const AppHeader =()=> {

    return(
        <div className="app-header">
            <div className="header-items">
                <div className="logo">
                <img src={logo} alt="logo" />
                </div>
                <div className="app-search">
                    <input type="search" placeholder="search" />

                </div>
                <div className="action-button">
                    <button>Sign In</button>

                </div>
            </div>

     
        </div>
    );
}
 
export default AppHeader;