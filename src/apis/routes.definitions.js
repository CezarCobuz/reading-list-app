export const apiUrl = "http://104.248.26.141:3000/api";

// TODO: DevOnly remove this after auth is done
/**
 * {
  "user": {
    "id": "9d44e487-d21b-4bad-bf55-f62cfd1a6970",
    "username": "test-username2",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlkNDRlNDg3LWQyMWItNGJhZC1iZjU1LWY2MmNmZDFhNjk3MCIsInVzZXJuYW1lIjoidGVzdC11c2VybmFtZTIiLCJpYXQiOjE2MTcyOTcyNTAsImV4cCI6MTYyMjQ4MTI1MH0.Z8L1AMePOQ5c5o36plYtYCN-yBOq63BF0VIMGuB1Sp4"
  }
}
 */
export const hardcodedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlkNDRlNDg3LWQyMWItNGJhZC1iZjU1LWY2MmNmZDFhNjk3MCIsInVzZXJuYW1lIjoidGVzdC11c2VybmFtZTIiLCJpYXQiOjE2MTcyOTcyNTAsImV4cCI6MTYyMjQ4MTI1MH0.Z8L1AMePOQ5c5o36plYtYCN-yBOq63BF0VIMGuB1Sp4";

export const routes = {
  books: `${apiUrl}/books`, // random 10 books
};
