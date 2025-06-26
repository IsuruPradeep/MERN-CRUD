import  express  from 'express';
import { create, getAllUSers } from '../controller/userController.js';

const route = express.Router();

route.post("/user", create)
route.get("/users",getAllUSers);
export default route;