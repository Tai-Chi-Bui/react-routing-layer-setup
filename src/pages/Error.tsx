import { useRouteError } from "react-router-dom";

interface ErrorState {
    statusText?: string;
}

const Error: React.FC = () => {
    const error = useRouteError() as ErrorState;
    console.log("Routing Error: ", error)
    return (
        <>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1 style={{ color: 'red', fontSize: '5rem' }}>
                    {error?.statusText || 'Sorry, an unexpected error has occurred'}!
                </h1>
            </div>
        </>
    );
}

export default Error;
