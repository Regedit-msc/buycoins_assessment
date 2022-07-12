import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    createHttpLink,
    DefaultOptions,
    InMemoryCache,
  } from '@apollo/client';
  import { onError } from '@apollo/client/link/error';
  import { useMemo } from 'react';
  import { useSnackbar } from 'notistack';
  import { BASE_URL } from 'src/configs';
  
  const httpLink = createHttpLink({
    uri: BASE_URL,
  });
  
  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  };
  
  
  const ApolloWrapper: React.FC = ({ children }) => {
    const { enqueueSnackbar } = useSnackbar();
    const apolloClient = useMemo(
      () =>
        new ApolloClient({
          link: ApolloLink.from([
            onError(({ response, graphQLErrors, networkError }) => {
              if (networkError) {
                enqueueSnackbar(networkError.message, {
                    variant: 'error',
                });
                if (response?.errors) {
                  response.errors = undefined;
                }
              }
  
              if (graphQLErrors) {
                graphQLErrors.forEach(({ message }) =>
                enqueueSnackbar(message, {
                    variant: 'error',
                }));
                if (response?.errors) {
                  response.errors = undefined;
                }
              }
            }),
            httpLink,
          ]),
          cache: new InMemoryCache(),
          defaultOptions,
        }),
      [enqueueSnackbar],
    );
    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
  };
  
  export default ApolloWrapper;