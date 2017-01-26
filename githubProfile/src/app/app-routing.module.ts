import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SvcGithubAPIClientService} from './svc-github-apiclient.service'
import {CProfileComponent} from './c-profile/c-profile.component'

const routes: Routes = [
  { path: '', component: CProfileComponent 
    // path: '',
    // children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SvcGithubAPIClientService]
})
export class AppRoutingModule { }
