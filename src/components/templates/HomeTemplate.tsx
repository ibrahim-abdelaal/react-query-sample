import { FC } from 'react';
import { Character } from '../../models/interfaces';
import { Heading1 } from '../atoms';
import { Paginator } from '../molecules/Paginator';
import { Characters } from '../organisms/Characters';

export const HomeTemplate: FC<{ characters: Character[], onPreviousClick: Function, disablePrevious: boolean, onNextClick: Function, disableNext: boolean }> = ({ characters, onPreviousClick, disablePrevious, onNextClick, disableNext }) => (
  <div className='flex flex-col items-center bg-slate-700'>
    <Heading1 text='Rick & Morty' />
    <Paginator onPreviousClick={onPreviousClick} onNextClick={onNextClick} disablePrevious={disablePrevious} disableNext={disableNext} />
    <Characters characters={characters}  />
</div>
);