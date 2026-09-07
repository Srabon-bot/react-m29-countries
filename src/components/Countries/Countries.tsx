import { use, useState } from "react"
import type { CountryType } from "../../types"
import Country from "../Country/Country";
import './Counries.css'

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);
    const countries = use(countriesPromise);


    const handleVisitedCountries = (country: CountryType): void => {
        const newVisitedCountries = [...visitedCountries];
        const index = newVisitedCountries.findIndex(
            c => c.ccn3.ccn3 === country.ccn3.ccn3
        );

        if (index !== -1) {
            newVisitedCountries.splice(index, 1);
        }
        else {
            newVisitedCountries.push(country);
        }
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <h4>Visited countries: {visitedCountries.length}</h4>
            <div className="countries">
                {
                    countries.map(country => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    )
}