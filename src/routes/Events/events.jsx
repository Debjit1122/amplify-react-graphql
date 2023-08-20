import "@aws-amplify/ui-react/styles.css";
import { CreateEventCreateForm } from "../../ui-components"
import {
    View,
    withAuthenticator
} from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Events = ({ signOut }) => {
    const navigate = useNavigate(); // Get the history object from react-router-dom

    const handleSubmit = async (event) => {
        navigate("/dashboard");
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "end", margin: "20px" }}>
                <button className="btn btn-primary position-relative" onClick={signOut}>
                    Sign Out
                </button>
            </div>

            <View margin="50px 20px" padding="20px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius="5px">
                {/* Assume CreateEventCreateForm renders a form with onSubmit */}
                <CreateEventCreateForm onSubmit={handleSubmit} />
            </View>
        </div>
    );
};

export default withAuthenticator(Events);
