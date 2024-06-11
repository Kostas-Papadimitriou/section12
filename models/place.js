class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = { lat: location.lat, lng: location.lng }; //lat and long
    this.id = new Date().toString() + Math.random().toString();
  }
}
