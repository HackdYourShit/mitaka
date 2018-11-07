import { SearchableType, Searcher } from "./searcher";

export class PubDB implements Searcher {

  public endpoint: string;
  public name;
  public supportedTypes: SearchableType[] = ["gaTrackID", "gaPubID"];

  constructor() {
    this.endpoint = "http://pub-db.com";
    this.name = "PubDB";
  }

  public searchByGATrackID(query) {
    return `${this.endpoint}/google-analytics/${query}.html`;
  }

  public searchByGAPubID(query) {
    return `${this.endpoint}/adsense/${query}.html`;
  }
}
