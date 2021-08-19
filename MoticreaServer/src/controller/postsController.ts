import { Request, Response } from 'express';
import pool from '../database';

class PostsController {

    // public  async index (req: Request, res:Response){
    //     const users =  await pool.query('SELECT * FROM user');
    //     res.json({users});
    // }

    public async create ( req:Request , res:Response ): Promise<any> {
        
        
        await pool.query('INSERT INTO post set ?', [req.body]);
        res.json({message: 'User create successfull'});

        
    }

}

const postsController = new PostsController();
export default postsController;