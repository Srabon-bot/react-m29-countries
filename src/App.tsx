
import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './types';
import Countries from './components/Countries/Countries';

const countriesPromise = async():Promise<CountryType[]> =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries; 
}

function App() {

  return (
    <>
      <h2>World on the go...</h2>
      <Suspense fallback="Loading...">
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App
