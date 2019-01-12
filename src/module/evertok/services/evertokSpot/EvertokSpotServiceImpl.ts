import EvertokSpotService from "./EvertokSpotService";

export default class EvertokSpotServiceImpl implements EvertokSpotService {
    create(newSpot: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default {
        throw new Error("Method not implemented.");
    }
    addUser(user: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default, spot: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default): void {
        throw new Error("Method not implemented.");
    }
    removeUser(user: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default, spot: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default): void {
        throw new Error("Method not implemented.");
    }
    archive(spot: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default): void {
        throw new Error("Method not implemented.");
    }
    getMetadata(spot: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default, user: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpotMetadata/EvertokSpotMetadata").default {
        throw new Error("Method not implemented.");
    }
    getFiles(spot: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default) {
        throw new Error("Method not implemented.");
    }
    getSpots(spotFilter: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/SpotFilter").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default[] {
        throw new Error("Method not implemented.");
    }
    getModerators(spot: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default[] {
        throw new Error("Method not implemented.");
    }
    updateName(updatedName: string, spot: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default {
        throw new Error("Method not implemented.");
    }
    setAnnouncement(announcement: string): void {
        throw new Error("Method not implemented.");
    }
    setDescription(description: string): void {
        throw new Error("Method not implemented.");
    }
    setTopic(topic: string): void {
        throw new Error("Method not implemented.");
    }
    getUserVisitedSpots(user: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default[] {
        throw new Error("Method not implemented.");
    }
    getUserCurrentSpot(user: import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/commons/services/user/models/User/User").default): import("/Users/Aetion/Documents/projs/rt/rt-services/src/module/evertok/models/EvertokSpot/EvertokSpot").default {
        throw new Error("Method not implemented.");
    }
    private isRemoteExecution: boolean = false;

    isRemote(): boolean {
        return this.isRemoteExecution;
    }


}