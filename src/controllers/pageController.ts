//--------------------------------------------------//
import { Request, Response } from "express";
import { createMenuObj } from '../helpers/createMenuObj'
import { Pet } from '../models/pet'
//--------------------------------------------------//
export const home = (req: Request, res: Response)=> {
    let list = Pet.getAll()

    res.render('pages/page', {
        menu: createMenuObj('all'),
        banner: {
            title: 'Todos os animais',
            bg: 'allanimals.jpg'
        },
        list
    })
}
//--------------------------------------------------//
export const dogs = (req: Request, res: Response)=> {
    let list = Pet.getFromType('dog')

    res.render('pages/page', {
        menu: createMenuObj('dog'),
        banner: {
            title: 'Cachorros',
            bg: 'banner_dog.jpg'
        },
        list
    })
}
//--------------------------------------------------//
export const cats = (req: Request, res: Response)=> {
    let list = Pet.getFromType('cat')

    res.render('pages/page', {
        menu: createMenuObj('cat'),
        banner: {
            title: 'Gatos',
            bg: 'banner_cat.jpg'
        },
        list
    })
}
//--------------------------------------------------//
export const fishes = (req: Request, res: Response)=> {
    let list = Pet.getFromType('fish')

    res.render('pages/page', {
        menu: createMenuObj('fish'),
        banner: {
            title: 'Peixes',
            bg: 'banner_fish.jpg'
        },
        list
    })
}
//--------------------------------------------------//