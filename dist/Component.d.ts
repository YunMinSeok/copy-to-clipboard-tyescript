import React from "react";
interface Props {
    onCopy?: Function;
    children?: React.ReactElement;
    text: string;
}
export declare class ClipBoard extends React.Component<Props> {
    static defaultProps: Props;
    onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
export {};
