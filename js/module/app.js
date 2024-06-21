export const getAllProductName = async({search:text} = {search:"pantalon"}) => { 
const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=${text}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '73d7cd7cd4msh91c4005ccdd7aaap1d1c82jsnc1d9a63c2234',
		'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
	}
};
let res = await fetch(url, options)
let data = res.json();
return data;
}

