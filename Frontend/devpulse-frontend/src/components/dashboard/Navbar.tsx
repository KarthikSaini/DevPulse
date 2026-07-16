import { Dashboard } from "../../interfaces/Dashboard";

interface Props{

    dashboard?: Dashboard;

}

function Navbar({dashboard}:Props){

    return(

        <header className="navbar">

            <input
                placeholder="Search..."
            />

            <div className="navbar-right">

                🔔

                <div className="user-info">

                    <div className="avatar">

                        {dashboard?.name.charAt(0)}

                    </div>

                    <span>

                        {dashboard?.name}

                    </span>

                </div>

            </div>

        </header>

    );

}

export default Navbar;