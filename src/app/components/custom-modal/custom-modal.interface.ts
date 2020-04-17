import {DispatchProp} from "react-redux";

export interface CustomModalPropsInterface {
    modal: boolean;
    dispatch?: DispatchProp;
}

export interface CustomModalReduxStateInterface {
    modal: {
        isModalVisible: boolean;
    };
}
