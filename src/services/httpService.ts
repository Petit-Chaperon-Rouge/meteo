class HttpService {
  baseurl = "https://api.openweathermap.org/data/2.5/forecast";
  appid = "f44e947afc6c0878ed4463a841db0599";
//   headers = {
//     "Accept": "application/json",
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*"
//   };

  async get(path: string) {
    return fetch(`${this.baseurl}${path}&appid=${this.appid}`, {
        method: "GET",
        headers: new Headers(),
        mode: "cors",
        cache: "default"
    }).then((res) => res.json());
  }
}

export const httpService = Object.freeze(new HttpService());
