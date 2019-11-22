import {Component} from "react";

interface IProps {
	position:"top"|"center"|"bottom";
	isFLoat: boolean
}

declare class buttonGroup extends Component<IProps> {
	constructor(props:IProps);
}

export default buttonGroup;
