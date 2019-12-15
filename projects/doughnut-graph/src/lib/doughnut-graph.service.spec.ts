import { TestBed } from '@angular/core/testing';

import { DoughnutGraphService } from './doughnut-graph.service';

describe('DoughnutGraphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoughnutGraphService = TestBed.get(DoughnutGraphService);
    expect(service).toBeTruthy();
  });
});
