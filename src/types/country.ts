export type Country = {
	name: string,
	region: string,
	population: number
	capital: string,
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

