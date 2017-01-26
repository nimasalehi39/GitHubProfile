/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SvcGithubAPIClientService } from './svc-github-apiclient.service';

describe('SvcGithubAPIClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvcGithubAPIClientService]
    });
  });

  it('should ...', inject([SvcGithubAPIClientService], (service: SvcGithubAPIClientService) => {
    expect(service).toBeTruthy();
  }));
});
