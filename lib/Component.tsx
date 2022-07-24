import React from "react";
import copy from "copy-to-clipboard";

interface Props {
  onCopy?: Function;
  children?: JSX.Element;
  text: string;
}
export class ClipBoard extends React.Component<Props> {
  static defaultProps: Props = {
    onCopy: undefined,
    children: undefined,
    text: "",
  };
  onClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const { text, onCopy, children } = this.props;

    const element = React.Children.only(children);

    const result = copy(text);

    if (onCopy) {
      onCopy(text, result);
    }

    if (
      element &&
      element.props &&
      typeof element.props.onClick === "function"
    ) {
      element.props.onClick(event);
    }
  };

  render() {
    const { text: _text, onCopy: _onCopy, children, ...props } = this.props;
    const element = React.Children.only(children);

    return React.cloneElement(element, { ...props, onClick: this.onClick });
  }
}
