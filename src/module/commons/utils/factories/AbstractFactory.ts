import BaseResource from "../../models/BaseResource/BaseResource";

abstract class AbstractFactory<T>{
    abstract create():T;
}

export default AbstractFactory;