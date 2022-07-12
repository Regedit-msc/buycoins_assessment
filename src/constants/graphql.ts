import { gql } from '@apollo/client';


export const GET_TRANSACTIONS = gql`
query GetTransactionsQuery {
    getTransactions {
      message
      success
      data {
        id
        amount
        currency
        description
        date
        category
        type
      }
    }
  }
  
`;