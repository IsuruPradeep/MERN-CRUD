import  express  from 'express';
import { create, deleteUser, getAllUSers, getUserById, update } from '../controller/userController.js';

const route = express.Router();

route.post("/user", create);
route.get("/users",getAllUSers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id",update);
route.delete("/delete/user/:id",deleteUser)
export default route;