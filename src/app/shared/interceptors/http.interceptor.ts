import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AppService } from '@services/app.service';
import { finalize } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const appService = inject(AppService);
  
  setTimeout(() => appService.show());
  return next(req)
    .pipe(finalize(() => appService.hide()));
};
