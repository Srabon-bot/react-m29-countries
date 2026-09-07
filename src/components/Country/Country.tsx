import type { CountryType } from "../../types";
import './Country.css';

export interface CountryProps {
    country: CountryType
}

const Country = ({ country }: CountryProps) => {

    return (
        <div className="country">
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
            <button>Visited</button>
        </div>
    )
}

export default Country;