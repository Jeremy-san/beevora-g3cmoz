import { TestBed } from '@angular/core/testing';

import { TeamFootballService } from './team-football.service';

describe('TeamFootballService', () => {
  let service: TeamFootballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamFootballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
