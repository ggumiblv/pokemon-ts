import type { TPokemon } from '../../types';
import { useEffect, useState } from 'react';
import api from '../../api';

import PokemonCard from '../../components/pokemon-card';

import './index.css';
import Pagination from '../../components/pagination';

type ApiResponse = {
  responses: TPokemon[];
  pagesCount: number;
};

function Home() {
  const [data, setData] = useState<TPokemon[]>([]);
  const [rarity, setRarity] = useState('');
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  const rarities = [
    { label: 'Обычный', value: 'normal' },
    { label: 'Легендарный', value: 'legendary' },
    { label: 'Мифический', value: 'mythical' }
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRarity(event.target.value);
    console.log(data);

    if (event.target.value === 'normal') {
      //const filteredData = data.filter()
    }
  };

  useEffect(() => {
    const getItems = async () => {
      try {
        const { responses, pagesCount }: ApiResponse = await api.get(page);
        setData(responses);
        setPagesCount(pagesCount);
      } catch {
        console.log('error');
      }
    };
    getItems();
  }, [page]);

  return (
    <div className="home">
      <div>
        <label htmlFor="fruit-select">По редкости:</label>
        <select id="fruit-select" value={rarity} onChange={handleChange}>
          <option value="" disabled>
            По редкости
          </option>
          {rarities.map((rarity) => (
            <option key={rarity.value} value={rarity.value}>
              {rarity.label}
            </option>
          ))}
        </select>
        <p>Выбран: {rarity}</p>
      </div>
      <div className="home__list">
        {data.map((item) => (
          <PokemonCard data={item} key={item.id} />
        ))}
      </div>
      <Pagination pagesCount={pagesCount} page={page} setPage={setPage} />
    </div>
  );
}

export default Home;
