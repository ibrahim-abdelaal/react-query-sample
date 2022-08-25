import { FC } from 'react';
import { Button } from '../atoms';

export const Paginator: FC<{ onPreviousClick: Function, disablePrevious: boolean, onNextClick: Function, disableNext: boolean }> = ({ onPreviousClick, disablePrevious, onNextClick, disableNext }) => (
  <div className='flex justify-between'>
    <Button name='Previous' onClick={onPreviousClick} disabled={disablePrevious}/>   
    <Button name='Next' onClick={onNextClick} disabled={disableNext}/>   
  </div>
)