import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization; // Lấy header Authorization

    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
      const token = authorizationHeader.slice(7); // Loại bỏ phần "Bearer " và lấy phần còn lại
      try {
        const decoded = this.jwtService.verify(token);
        req.user = decoded; 
      } catch (error) {
        // Xử lý lỗi xác thực token
      }
    }

    next();
  }
}
