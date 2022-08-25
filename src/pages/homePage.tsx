import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { HomeTemplate } from '../components/templates/HomeTemplate';

const fetchCharacters = async(pageNumber: number) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
  return response.json();
}

export const HomePage: FC<{}> = ({}) => {
  const [page, setPage] = useState<number>(1);
  const { isLoading, data, isError, isPreviousData } = useQuery(['characters', page], () => fetchCharacters(page), {keepPreviousData: true});

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  
  if (isError) {
    return <h1>Error!</h1>
  }

  return (
   <HomeTemplate characters={data.results} onPreviousClick={() => setPage(page -1)} disablePrevious={!data.info.prev || isPreviousData} onNextClick={()=> setPage(page + 1)} disableNext={!data.info.next || isPreviousData} />
  );
};