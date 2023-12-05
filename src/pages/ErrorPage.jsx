import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="mt-5 text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button
        variant="primary"
        onClick={() => navigate("/", { replace: true })}
      >
        Go Home
      </Button>
    </div>
  );
};
export default ErrorPage;
