import BaseResource from "../../models/BaseResource/BaseResource";

abstract class AbstractFactory<T>{
    abstract create(...params:any):T;
}

export default AbstractFactory;