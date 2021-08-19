
import { Router } from 'express';

import  userController  from '../controller/userController';
class GamesRouters{
    
    public router: Router = Router ();

    constructor (){
        this.config();
    }
    config():void{
        this.router.get('/',userController.index);
        this.router.get('/:id',userController.obteneruno);
        this.router.post('/',userController.create);
        this.router.delete('/:id',userController.delete);
        this.router.put('/:id',userController.update);
    }

}

const gamesRoutes = new GamesRouters();
export default gamesRoutes.router;