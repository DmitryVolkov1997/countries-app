export type Currency = {
	code: string
	name: string
	symbol: string
}

export type Language = {
	iso639_1: string
	iso639_2: string
	name: string
	nativeName: string
}

export type Country = {
	name: string,
	nativeName: string,
	region: string,
	population: number,
	subregion: string,
	capital: string,
	topLevelDomain: string[],
	currencies: Currency[],
	languages: Language[],
	borders: string[]
	flags: {
		svg: string
		png: string
	}
}

export type Info = {
	title: string
	description: string
}

export type CountryInfo = {
	flag: string
	name: string
	info: Info[]
}

