import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // Simple auth check - in a real app, you'd use JWT or similar
    const apiKey = request.headers['x-api-key'];
    return apiKey === 'mahasiswa_api_key';
  }
}
