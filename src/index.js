"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import '../css';
var index_module_css_1 = require("./index.module.css");
var StackedElements = function (_a) {
    var className = _a.className, content1 = _a.content1, content2 = _a.content2, isSelected = _a.isSelected;
    var hiddenClasses = index_module_css_1["default"].invisible + " " + index_module_css_1["default"].z0;
    var visibleClass = index_module_css_1["default"].z1;
    return (react_1["default"].createElement("div", { className: "" + index_module_css_1["default"].wrapper + (className ? " " + className : '') },
        react_1["default"].createElement("div", { "data-testid": "content1", "aria-hidden": !isSelected, className: index_module_css_1["default"].content + " " + (isSelected ? visibleClass : hiddenClasses) }, content1),
        react_1["default"].createElement("div", { "data-testid": "content2", "aria-hidden": isSelected, className: index_module_css_1["default"].content + " " + (!isSelected ? visibleClass : hiddenClasses) }, content2)));
};
StackedElements.displayName = 'StackedElements';
exports["default"] = StackedElements;
