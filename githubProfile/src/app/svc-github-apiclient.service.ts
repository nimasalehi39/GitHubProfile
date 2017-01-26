import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SvcGithubAPIClientService {
  private _propUserProfile: string
  private _propUserRepos: string

  constructor(private _http:Http) {
    this._propUserProfile='nimasalehi39'
    console.log('Github API Client Works!')
  }

  fncGetUseerProfile(){
    return this._http.get('http://api.github.com/users/'
    +this._propUserProfile)
    .map(res=>res.json())
  }
  fncGetUseerRepos(){
    return this._http.get('http://api.github.com/users/'
    +this._propUserProfile+'/repos')
    .map(res=>res.json())
  }

}
