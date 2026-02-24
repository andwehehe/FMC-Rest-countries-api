export async function getCountriesData() {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital');
    return response.json();
}