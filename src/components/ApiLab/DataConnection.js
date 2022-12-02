export async function NasaApiConnection(year) {
  let key = "dSLwuzxyndjW3tCBBYytLo5fDm3kIsFnDGdO0A8V";
  let date = year.toString() + "-12-25";

  let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${key}`;

  //fetch the data
  let res = await fetch(query);

  //turn the result into a javascript object
  let data = await res.json();

  //return the object
  return data;
}
