export default class Location {
  _locationInLocalStorage() {
    this.location = localStorage.getItem('location')
      ? localStorage.getItem('location')
      : false;
  }

  _requestLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude);
          console.log(longitude);
        },
        (error) => {
          console.log(error);
        },
      );
    }
  }

  enableLocation() {
    this._requestLocation();
  }
}
