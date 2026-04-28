import type { TPokemon, TSpecies } from '../../types';
import { useEffect, useState } from 'react';
import api from '../../api';

import './index.css';

type ApiResponse = {
  response: TSpecies;
  color: string;
};

const PokemonCard = ({ data }: { data: TPokemon }) => {
  const [color, setColor] = useState<string | null>(null);
  const [species, setSpecies] = useState<TSpecies | null>(null);

  const strength: number = data.base_experience;

  const getRarity = () => {};

  useEffect(() => {
    const getColor = async () => {
      try {
        const { response, color }: ApiResponse = await api.getSpecies(data.species.url);
        setColor(color);
        setSpecies(response);
      } catch {
        console.log('error');
      }
    };
    getColor();
  }, [data.species.url]);

  return (
    <div className={`pokemon-card pokemon-card--${color}`}>
      <img
        className="pokemon-card__image"
        src={data.sprites.other['official-artwork'].front_default}
      />
      {data.name}
      <div>Сила {strength}</div>
    </div>
  );
};

export default PokemonCard;
