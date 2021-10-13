import { TestBed } from '@angular/core/testing';

import { TeamSoccerService } from './team-soccer.service';

describe('TeamSoccerService', () => {
  let service: TeamSoccerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamSoccerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
