import  express  from 'express';
import { create, getAllUSers, getUserById } from '../controller/userController.js';

const route = express.Router();

route.post("/user", create);
route.get("/users",getAllUSers);
route.get("/user/:id", getUserById)

export default route;