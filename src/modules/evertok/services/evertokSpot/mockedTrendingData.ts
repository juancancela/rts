import EvertokSpotImpl from "../../models/EvertokSpot/EvertokSpotImpl";
import GeoLocationImpl from "../../../commons/models/GeoLocation/GeoLocationImpl";

export const mockedData = [
  new EvertokSpotImpl(new GeoLocationImpl(1,2), 5, 'img1.jpg', 'Broncos Vs Patriots NFL Semis',false, new Date(), '1'),
  new EvertokSpotImpl(new GeoLocationImpl(1,2), 5, 'img2.jpg', 'Superclasico Boca - River',false, new Date(), '2'),
  new EvertokSpotImpl(new GeoLocationImpl(1,2), 5, 'img3.jpg', 'Trump Rally',false, new Date(), '3'),
  new EvertokSpotImpl(new GeoLocationImpl(1,2), 5, 'img4.jpg', 'Radiohead Glastonbury show',false, new Date(), '4'),
  new EvertokSpotImpl(new GeoLocationImpl(1,2), 5, 'img5.jpg', 'Political Debate: 2019 Elections',false, new Date(), '5'),
  new EvertokSpotImpl(new GeoLocationImpl(1,2), 5, 'img6.jpg', 'Javascript Conf 2019',false, new Date(), '6'),
  new EvertokSpotImpl(new GeoLocationImpl(1,2), 5, 'img7.jpg', '#URGENT Rally for Woman´s Rights',false, new Date(), '7'),
  new EvertokSpotImpl(new GeoLocationImpl(1,2), 5, 'img8.jpg', 'Nuggets vs Spurs, West Conference',false, new Date(), '8'),
  new EvertokSpotImpl(new GeoLocationImpl(1,2), 5, 'img9.jpg', 'US Independence Day',false, new Date(), '9'),
  new EvertokSpotImpl(new GeoLocationImpl(1,2), 5, 'img10.jpg', 'Gloria Estefan Tribute',false, new Date(), '10')
]