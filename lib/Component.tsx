import React from "react";
import copy from "copy-to-clipboard";

interface Props {
  onCopy: Function;
  children: JSX.Element;
  text: string;
}
export class ClipBoard extends React.Component<Props> {
  static defaultProps: Props = {
    onCopy: undefined,
    children: undefined,
    text: "",
  };
  //  TODO :: 코드 리팩토링 및 재배포 해야함 테스트도!!
  onClick = (event) => {
    const { text, onCopy, children } = this.props;

    const elem = React.Children.only(children);

    const result = copy(text);

    if (onCopy) {
      onCopy(text, result);
    }

    if (elem && elem.props && typeof elem.props.onClick === "function") {
      elem.props.onClick(event);
    }
  };

  render() {
    const { text: _text, onCopy: _onCopy, children, ...props } = this.props;
    const elem = React.Children.only(children);

    return React.cloneElement(elem, { ...props, onClick: this.onClick });
  }
}
