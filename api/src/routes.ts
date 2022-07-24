import { Router, Request, Response } from 'express';
import { pokemonController } from './controllers/PokemonController';

const router: Router = Router();

router.get('/pokemons', pokemonController.getPokemons);

export default router;