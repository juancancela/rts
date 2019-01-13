import CommonsModuleImpl from "./src/module/commons/CommonsModuleImpl";
import MessagingServiceImpl from "./src/module/commons/services/messaging/MessagingServiceImpl";

export default new CommonsModuleImpl(null, new MessagingServiceImpl(true), null, null, null);
