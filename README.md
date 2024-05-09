## Voting Application(Backend)
## Features 
- Implemented Authorisation and Authentication using JWT.
- There are two role user and admin. User can just see the candidates and vote them, while admin can create the candidates, update the candidates and also delete the candidates. They can also see the total vote count of each candidates.
- User can signup, login and logout. When user login the jwt token is stored in the cookies and when user logout the jwt token is removed from cookies.
- User can give vote once only.
- Created production standard file and folder structure.

## Routes 

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`    | `/api/v1/user/signup`                             | Signup the user by providing various details. |
| `POST`   | `/api/v1/user/login`                             | Login the user by providing email and password .                       |
| `POST`    | `/api/v1/user/logout`                             | Removes the token from the cookies.                      |
| `POST`   | `/api/v1/candidate`                             | Creates the new candidate.                       |
| `PUT`   | `/api/v1/candidate/:candidateID`                             | Update the candidates details.                        |
| `DELETE`    | `/api/v1/candidate/:candidateID`                             | Delete the candidates from the record.                     |
| `GET`   | `/api/v1/candidate/vote/:candidateID`                             | User can give vote against the candidate.                    |
| `GET`    | `/api/v1/candidate/count`                             | Retrieve the total vote against all the candidates.                     |
| `GET`   | `/api/v1/candidate`                             |  Retrieve the list of all the candidates.                   |

## Technology Used
- `NODE JS`
- `EXPRESS JS`
- `JWT`
-  `COOKIES-PARSER`
-  `MONGOOSE`
-  `MONGODB`
-  `BCRYPT`
