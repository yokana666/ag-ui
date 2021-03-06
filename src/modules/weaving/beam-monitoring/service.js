import { inject, Lazy } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { RestService } from "../../../utils/rest-service";

// const serviceUri = "weaving/daily-operational-machine";

export class Service extends RestService {
  constructor(http, aggregator, config, endpoint) {
    super(http, aggregator, config, "weaving");
  }

  search(info) {
    var endpoint = `${serviceUri}`;
    return super.list(endpoint);
  }

  getById(Id) {
    var endpoint = `${serviceUri}/${Id}`;
    return super.get(endpoint);
  }

  create(data) {
    var endpoint = `${serviceUri}`;
    return super.post(endpoint, data);
  }

  delete(data) {
    var endpoint = `${serviceUri}/${data.Id}`;
    return super.delete(endpoint, data);
  }
}
