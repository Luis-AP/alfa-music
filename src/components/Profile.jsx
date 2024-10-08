import UserImage from "./UserImage";
import { useAuth } from "../contexts/AuthContext";
import { NavLink } from "react-router-dom";

export default function Profile() {
    const { isAuthenticated, firstName } = useAuth("state");

    if (!isAuthenticated) return null;
    
    return (
        <>
           <UserImage />
           <p className="subtitle is-4 pb-2 has-text-primary">{firstName}
            
             </p>
           <NavLink
                        to="/profile"
                                               
                        className=
                        {({ isActive, isPending, isTransitioning }) =>
                            [
                                isPending ? "pending" : "",
                                isActive ? "has-text-primary" : "",
                                isTransitioning ? "transitioning" : "",
                            ].join("subtitle is-6 has-text-primary")
                        }
                        >Mi Perfil <i className="fa fa-address-card" aria-hidden="true"></i>
                    </NavLink>
           
        </>
        
    );
}