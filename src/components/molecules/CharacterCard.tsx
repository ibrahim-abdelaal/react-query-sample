import { FC } from 'react';
import { Character } from '../../models/interfaces';
import { Heading2, Image, Paragraph } from '../atoms';

export const CharacterCard: FC<{ character: Character }> = ({ character }) => (
  <div key={character.id} className="flex max-w-sm max-h-60">
    <div className='rounded-tl-lg rounded-bl-lg overflow-hidden'>
      <Image src={character.image} />
    </div>
    <div className='p-2 text-blue-600 bg-gradient-to-b from-gray-100 to-gray-600 rounded-tr-lg rounded-br-lg'>
      <Heading2 text={character.name} />
      <Paragraph text={`${ character.status } - ${ character.species }`} />
      <Paragraph text='Last seen on' />
      <Paragraph text={character.location.name } />
    </div>
  </div>
);