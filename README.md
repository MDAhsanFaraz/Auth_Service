# Welcome to Auth_Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
    -JWT_KEY=auth
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "AUTH_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`<br>
`npx sequelize db:seed:all`

(to create the many to many relaton between the user and role you have to go inside main index.js)<br>
1.Import `const db = require("./models/index")`;<br>
2.copy this inside the server.listen function`db.sequelize.sync({alter:true}));`<br>
### -this will create a user_roles table which will manage the  many to many relation of user and role
3.now comment `db.sequelize.sync({alter:true}));` this part 
## ALL SET
```


## DB Design
  - User
  - Roles
  - User_Roles(This Table Contains the many-to-many relation of the above tables)
  
  - every User can have different roles every role can have different users 
  
## Tables

### User->email, password
### Role->name