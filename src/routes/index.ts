import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as BuscaController from '../controllers/buscaController';

const router = Router()

router.get('/', PageController.home)
router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)

router.get('/search', BuscaController.busca)

export default router