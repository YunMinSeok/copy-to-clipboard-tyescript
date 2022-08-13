"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipBoard = void 0;
const react_1 = __importDefault(require("react"));
const copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
class ClipBoard extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.onClick = (event) => {
            const { text, onCopy, children } = this.props;
            const element = react_1.default.Children.only(children);
            const result = (0, copy_to_clipboard_1.default)(text);
            if (onCopy) {
                onCopy(text, result);
            }
            if (element &&
                element.props &&
                typeof element.props.onClick === "function") {
                element.props.onClick(event);
            }
        };
    }
    render() {
        const _a = this.props, { text: _text, onCopy: _onCopy, children } = _a, props = __rest(_a, ["text", "onCopy", "children"]);
        const element = react_1.default.Children.only(children);
        return react_1.default.cloneElement(element, Object.assign(Object.assign({}, props), { onClick: this.onClick }));
    }
}
exports.ClipBoard = ClipBoard;
ClipBoard.defaultProps = {
    onCopy: undefined,
    children: undefined,
    text: "",
};
