import "@aws-amplify/ui-react/styles.css";
import { EventsCreateForm } from "../../../ui-components"
import {
    View,
    withAuthenticator
} from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Events = ({ signOut }) => {
    async function currentAuthenticatedUser() {
        try {
            const user = await Auth.currentAuthenticatedUser({
                bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
            });
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    };
    currentAuthenticatedUser();
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "end", margin: "20px" }}>
                <button className="btn btn-primary position-relative" onClick={signOut}>
                    Sign Out
                </button>
            </div>
            {/* Assume CreateEventCreateForm renders a form with onSubmit */}
            <EventsCreateForm />
        </div>
    );
};

export default withAuthenticator(Events);
