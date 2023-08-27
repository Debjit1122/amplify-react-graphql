import "@aws-amplify/ui-react/styles.css";
import { EventsCreateForm } from "../../../ui-components"
import { useNavigate } from "react-router-dom"; 
import {
    withAuthenticator
} from "@aws-amplify/ui-react";
const EventCreate = ({ signOut }) => {
    const navigate = useNavigate();
    
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "end", margin: "20px" }}>
                <button className="btn btn-primary position-relative" onClick={signOut}>
                    Sign Out
                </button>
            </div>
            {/* Assume CreateEventCreateForm renders a form with onSubmit */}
            <EventsCreateForm onSuccess={() => navigate("/dashboard")} />
        </div>
    );
};

export default withAuthenticator(EventCreate);
