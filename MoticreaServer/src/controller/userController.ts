import { Request, Response } from 'express';
import pool from '../database';


class UserController {

    public  async index (req: Request, res:Response){
        const users =  await pool.query('SELECT * FROM user');
        res.json({users});
    }

    public async obteneruno ( req:Request , res:Response ): Promise<any>  {
        const { id } = req.params;
        const oneUser = await pool.query('SELECT * FROM user WHERE userid = ? ', [id] );
        if (oneUser.length > 0){
            return res.json(oneUser[0]);
        }
        res.status(404).json({text:"User dont exists"});      
        console.log(oneUser);
        res.json({text: 'User okay'})
    }

    public async create ( req:Request , res:Response ): Promise<any> {
        const { email } = req.params;
        const existsuser = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
        if (existsuser){
            console.log('usuario existente');
            return 0;
        }else {
            await pool.query('INSERT INTO user set ?', [req.body]);
            res.json({message: 'User create successfull'});
            return 1;
        }
    }

    
    public async delete ( req:Request , res:Response ): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM user WHERE userid = ? ', [id] );
        res.json({message: 'User delete successfull'});
    }

    public async update ( req:Request , res:Response ): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE user SET ? WHERE userid = ?', [ req.body,id ]);
        res.json({text: 'update a user'});
    }

}

const userController = new UserController();
export default userController;