import { createWithApollo } from './createWithApollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NextPageContext } from 'next';

const client = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: 'https://frog-photo-app.herokuapp.com/graphql',
    credentials: 'include',
    headers: {
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie
          : undefined) || '',
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {},
      },
    }),
  });

export const withApollo = createWithApollo(client);
