
import { Router } from 'express';

import   PostsController   from '../controller/postsController';
class PostsRouters{
    
    public router: Router = Router ();

    constructor (){
        this.config();
    }
    config():void{
        // this.router.get('/',userController.index);
        // this.router.get('/:id',userController.obteneruno);
        this.router.post('/',PostsController.create);
        // this.router.delete('/:id',userController.delete);
        // this.router.put('/:id',userController.update);
    }

}

const postsRouters = new PostsRouters();
export default postsRouters.router;