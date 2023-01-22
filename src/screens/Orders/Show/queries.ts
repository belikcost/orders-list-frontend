import { gql } from "@apollo/client";

export const ORDER_QUERY = gql`
  query Order($id: Int!) {
    order(id: $id) {
      number
      status
      id
      delivery {
        code
      }
      items {
        id
        status
        offer {
          displayName
          externalId
        }
      }
    }
  }
`;
