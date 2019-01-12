import { router as userRouter } from './user/user.routes';
import { router as messagingRouter } from './messaging/messaging.routes';
import { router as authRouter } from './auth/auth.routes';

export default {
  user: userRouter,
  messaging: messagingRouter,
  auth: authRouter
};