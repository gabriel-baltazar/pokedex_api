import { Router, Request, Response } from 'express';
import { pokemonController } from './controllers/PokemonController';

const router: Router = Router();

router.get('/pokemon', pokemonController.getPokemons);

export default router;