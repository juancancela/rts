import RemoteMessagingServiceImpl from "./src/module/commons/services/messaging/RemoteMessagingServiceImpl";
import CommonsModuleImpl from "./src/module/commons/CommonsModuleImpl";

export default new CommonsModuleImpl(null, new RemoteMessagingServiceImpl(), null, null, null);
