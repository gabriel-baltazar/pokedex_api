import { Request, Response } from "express";
import axios from "axios";

class PokemonController {
    public async getPokemons(req: Request, res: Response) {
        const limit = req.query.limit || 151;
        const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
        );

        return res.json(response.data);
    }

}


export const pokemonController = new PokemonController;