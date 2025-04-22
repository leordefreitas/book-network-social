import { TestBed } from '@angular/core/testing';

import { HttppTokenInterceptor } from './httpp-token.interceptor';

describe('HttppTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttppTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttppTokenInterceptor = TestBed.inject(HttppTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
