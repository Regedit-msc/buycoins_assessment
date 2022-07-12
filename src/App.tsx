import { routes } from 'src/configs/routes';
import { SnackbarProvider } from 'notistack';
import { RouteBuilder } from './containers/ReactRouterBuilder';
import ApolloWrapper from './graphql';


const App = () => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <ApolloWrapper>
        <RouteBuilder routes={routes} />
      </ApolloWrapper>
    </SnackbarProvider>
  );
};

export default App;
