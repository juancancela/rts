import RemoteMessagingServiceImpl from "./src/module/commons/services/messaging/RemoteMessagingServiceImpl";

export const api = {
  MessagingService: new RemoteMessagingServiceImpl()
}
