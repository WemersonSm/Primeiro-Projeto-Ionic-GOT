import { TestBed } from '@angular/core/testing';

import { DetailResolverResolver } from './detail-resolver.resolver';

describe('DetailResolverResolver', () => {
  let resolver: DetailResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DetailResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
