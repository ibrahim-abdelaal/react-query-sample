import { FC } from 'react';
import { Character } from '../../models/interfaces';
import { CharacterCard } from '../molecules/CharacterCard';

export const Characters: FC<{ characters: Character[] }> = ({ characters }) => (
  <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-2 sm:gap-y-2'>
    {characters.map((character: Character) => (
      <CharacterCard character={character} />
    ))}
  </div>
);