const GOOGLE_API_KEY = 0;
export function getMapPreview(lat, long) {
  imagePreviewUrl = ``;
  return imagePreviewUrl;
}
export async function getAddress(lat, lng) {
  const url = `${lat},${lng}`;
  const response = fetch(url);
  if (!(await response).ok) {
    throw new Error("Failded to fetch address");
  }
  const data = await response.json();
  const address = data.result[0].formatted_address;
  return address;
}
