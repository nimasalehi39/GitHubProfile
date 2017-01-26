import { Component, OnInit } from '@angular/core';
import { SvcGithubAPIClientService } from '../svc-github-apiclient.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-c-profile',
  templateUrl: './c-profile.component.html',
  styleUrls: ['./c-profile.component.css']
})
export class CProfileComponent implements OnInit {
propGithubApiResObject=['']
propGithubApiResObject_repos=['']['']

  constructor(private _propGithubService:SvcGithubAPIClientService) { 

    this._propGithubService.fncGetUseerProfile().subscribe(
      user=>{
        console.log(user)
        this.propGithubApiResObject=user
      }
    )
    this._propGithubService.fncGetUseerRepos().subscribe(
      repos=>{
        console.log(repos)
        this.propGithubApiResObject_repos=repos
      }
    )

  }

  ngOnInit() {
  }

}
