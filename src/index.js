const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db=require('./models/index');
const {User,Role}=require('./models/index');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started at Port:${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
        
        // const service=new UserService();
        // const newToken=service.createToken({email:'faraz@gamil.com',id:1});
        // console.log(newToken);
        // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhcmF6QGdhbWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2OTIyOTczMjksImV4cCI6MTY5MjI5NzMyOX0.YO2Fst5h3ENSTA8WgdOwZue3gm05vk1f58KkVc1d6T8';
        // const response=service.verifyToken(token);
        // console.log(response);

    })
}
prepareAndStartServer();