import { useState } from "react";
import type { CountryType } from "../../types";
import './Country.css';

export interface CountryProps {
    country: CountryType;
    handleVisitedCountries: (country: CountryType) => void
}

const Country = ({ country, handleVisitedCountries }: CountryProps) => {

    const [Visited, setVisited] = useState<boolean>(false);

    const handleVisited = () => {
        setVisited(!Visited);
        handleVisitedCountries(country);
    };

    return (
        <div className={`country ${Visited ? 'visitedCountry' : ''}`}>
            <h3>
                {country.name.common}
            </h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <article>
                <p>Official name: {country.name.offcial}</p>
                <p>Continents: {country.continents.continents}</p>
                <p>Capital: {country.capital.capital}</p>
                <p>
                    Currencies: {Object.entries(country.currencies.currencies)
                        .map(([code, currency]) => `${currency.name} (${currency.symbol})`)
                        .join(", ")}
                </p>
                <p>Population: {country.population.population}</p>
            </article>
            <button onClick={handleVisited}>
                {Visited ? 'Visited' : 'Mark as visited'}
            </button>
        </div>
    )
}

export default Country;