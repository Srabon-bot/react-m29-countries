export interface CountryType {
    name: {
        common: string,
        offcial: string
    }
    ccn3: {
        ccn3: string
    }
    currencies: {
        currencies: {
            [currencyCode: string]: {
                name: string,
                symbol: string
            }
        }
    }
    capital: {
        capital: string[]
    }
    population: {
        population: number
    }

    continents: {
        continents: string[]
    }

    flags: {
        flags: {
            png: string,
            alt: string
        }
    }
}
