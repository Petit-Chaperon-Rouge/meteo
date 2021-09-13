import { httpService } from "./httpService";

class MeteoHttpService {
  default_units = "metric";
  default_lang = "fr";

  /**
   * 
   * @param cityName 
   * @param units 
   * @param lang 
   * @returns 
   */
  async findDaily(
    cityName: string,
    units: string = this.default_units,
    lang: string = this.default_lang
  ) {
    return httpService.get(`?q=${cityName}&units=${units}&lang=${lang}`);
  }

  /**
   * 
   * @param cityName 
   * @param units 
   * @param lang 
   * @returns 
   */
  async findHourly(
    cityName: string,
    units: string = this.default_units,
    lang: string = this.default_lang
  ) {
    return httpService.get(`/hourly?q=${cityName}&units=${units}&lang=${lang}`);
  }
}

export const meteoService = Object.freeze(new MeteoHttpService());
