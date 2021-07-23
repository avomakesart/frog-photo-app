import { createWithApollo } from './createWithApollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
// import {
//   PaginatedProducts,
//   PaginatedPosts,
//   PaginatedOrders,
//   PaginatedInvoice,
//   PaginatedContact,
//   PaginatedCategories,
//   PaginatedClient,
//   PaginatedRoles,
// } from '../generated/graphql';
import { NextPageContext } from 'next';

const client = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    credentials: 'include',
    headers: {
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie
          : undefined) || '',
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          // fields: {
          //   categories: {
          //     keyArgs: [],
          //     merge(
          //       existing: PaginatedCategories | undefined,
          //       incoming: PaginatedCategories
          //     ): PaginatedCategories {
          //       return {
          //         ...incoming,
          //         categories: [
          //           ...(existing?.categories || []),
          //           ...incoming.categories,
          //         ],
          //       };
          //     },
          //   },
          //   posts: {
          //     keyArgs: [],
          //     merge(
          //       existing: PaginatedPosts | undefined,
          //       incoming: PaginatedPosts
          //     ): PaginatedPosts {
          //       return {
          //         ...incoming,
          //         posts: [...(existing?.posts || []), ...incoming.posts],
          //       };
          //     },
          //   },
          //   products: {
          //     keyArgs: [],
          //     merge(
          //       existing: PaginatedProducts | undefined,
          //       incoming: PaginatedProducts
          //     ): PaginatedProducts {
          //       return {
          //         ...incoming,
          //         products: [
          //           ...(existing?.products || []),
          //           ...incoming.products,
          //         ],
          //       };
          //     },
          //   },
          //   contacts: {
          //     keyArgs: [],
          //     merge(
          //       existing: PaginatedContact | undefined,
          //       incoming: PaginatedContact
          //     ): PaginatedContact {
          //       return {
          //         ...incoming,
          //         contact: [...(existing?.contact || []), ...incoming.contact],
          //       };
          //     },
          //   },
          //   orders: {
          //     keyArgs: [],
          //     merge(
          //       existing: PaginatedOrders | undefined,
          //       incoming: PaginatedOrders
          //     ): PaginatedOrders {
          //       return {
          //         ...incoming,
          //         orders: [...(existing?.orders || []), ...incoming.orders],
          //       };
          //     },
          //   },
          //   invoices: {
          //     keyArgs: [],
          //     merge(
          //       existing: PaginatedInvoice | undefined,
          //       incoming: PaginatedInvoice
          //     ): PaginatedInvoice {
          //       return {
          //         ...incoming,
          //         invoice: [...(existing?.invoice || []), ...incoming.invoice],
          //       };
          //     },
          //   },
          //   clients: {
          //     keyArgs: [],
          //     merge(
          //       existing: PaginatedClient | undefined,
          //       incoming: PaginatedClient
          //     ): PaginatedClient {
          //       return {
          //         ...incoming,
          //         clients: [...(existing?.clients || []), ...incoming.clients],
          //       };
          //     },
          //   },
          //   roles: {
          //     keyArgs: [],
          //     merge(
          //       existing: PaginatedRoles | undefined,
          //       incoming: PaginatedRoles
          //     ): PaginatedRoles {
          //       return {
          //         ...incoming,
          //         roles: [...(existing?.roles || []), ...incoming.roles],
          //       };
          //     },
          //   },
          // },
        },
      },
    }),
  });

export const withApollo = createWithApollo(client);
