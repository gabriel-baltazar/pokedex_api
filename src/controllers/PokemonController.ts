import { Request, Response } from "express";
import axios from "axios";

class PokemonController {
    async getPokemons(req: Request, res: Response) {
        const response = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const pokemons = response.data.results;
        res.json(pokemons);
    }
}

export const pokemonController = new PokemonController;