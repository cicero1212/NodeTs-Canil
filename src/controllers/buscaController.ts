import { Request, Response } from "express";
import { Pet } from '../models/pet';
import { createMenuObj } from '../helpers/createMenuObj';

export const busca = (req: Request, res: Response)=> {
    let queryList: string = req.query.q as string

    if(!queryList){
        res.redirect('/')
        return
    }

    let list = Pet.getFromName(queryList)

    res.render('pages/page', {
        menu: createMenuObj(''),
        list,
        queryList
    })
}