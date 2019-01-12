import BaseResource from "../BaseResource/BaseResource";

export default interface GeoLocation extends BaseResource {
  getLat(): Number;
  getLon(): Number;
}
