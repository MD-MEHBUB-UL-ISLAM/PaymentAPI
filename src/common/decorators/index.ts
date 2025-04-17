import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';


export const Public = () => SetMetadata('isPublic', true);

export const GetCurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log("User from request:", user);
    return user?.id;
  },
);

export const GetCurrentUser = createParamDecorator(
  (data: string | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) return request.user;
    return request.user[data];
  },
);