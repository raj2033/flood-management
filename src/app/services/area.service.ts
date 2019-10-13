import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  baseUrl = environment.ipAddress;

  constructor(private http: HttpClient) {}

  getDonations() {
    return this.http.get(
      `${this.baseUrl}/action/?locationId=43&actionType=RESOURCES_AVAILABLE&noOfDays=2&pageNo=0&noOfRecords=3`
    );
  }

  getVolunteers() {
    return this.http.get(
      `${this.baseUrl}/action/?locationId=43&actionType=WANT_TO_HELP&noOfDays=2&pageNo=0&noOfRecords=3`
    );
  }

  getRequests() {
    return this.http.get(
      `${this.baseUrl}/action/?locationId=43&actionType=NEED_HELP &noOfDays=2&pageNo=0&noOfRecords=3`
    );
  }

  getAllArea() {
    return this.http.get(`${this.baseUrl}/location/`);
  }

  submitAction(params: JSON) {
    return this.http.post(`${this.baseUrl}/action/`, params);
  }
}
