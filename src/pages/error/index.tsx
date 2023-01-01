import { ErrorResponse } from '@remix-run/router';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <section id='error'>
      <h1>Ooops!</h1>
      <p>Sorry an unexpected Error Happened</p>
      <p>
        <i>{error.status} </i> <i>{error.statusText} </i>
      </p>
    </section>
  );
};

export default ErrorPage;
