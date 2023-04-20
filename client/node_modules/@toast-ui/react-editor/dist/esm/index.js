/**
 * TOAST UI Editor : React Wrapper
 * @version 3.2.3 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */

import React from 'react';
import Editor from '@toast-ui/editor';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootEl = React.createRef();
        return _this;
    }
    default_1.prototype.getRootElement = function () {
        return this.rootEl.current;
    };
    default_1.prototype.getInstance = function () {
        return this.editorInst;
    };
    default_1.prototype.getBindingEventNames = function () {
        var _this = this;
        return Object.keys(this.props)
            .filter(function (key) { return /^on[A-Z][a-zA-Z]+/.test(key); })
            .filter(function (key) { return _this.props[key]; });
    };
    default_1.prototype.bindEventHandlers = function (props) {
        var _this = this;
        this.getBindingEventNames().forEach(function (key) {
            var eventName = key[2].toLowerCase() + key.slice(3);
            _this.editorInst.off(eventName);
            _this.editorInst.on(eventName, props[key]);
        });
    };
    default_1.prototype.getInitEvents = function () {
        var _this = this;
        return this.getBindingEventNames().reduce(function (acc, key) {
            var eventName = (key[2].toLowerCase() + key.slice(3));
            acc[eventName] = _this.props[key];
            return acc;
        }, {});
    };
    default_1.prototype.componentDidMount = function () {
        this.editorInst = new Editor(__assign(__assign({ el: this.rootEl.current }, this.props), { events: this.getInitEvents() }));
    };
    default_1.prototype.shouldComponentUpdate = function (nextProps) {
        var instance = this.getInstance();
        var height = nextProps.height, previewStyle = nextProps.previewStyle;
        if (height && this.props.height !== height) {
            instance.setHeight(height);
        }
        if (previewStyle && this.props.previewStyle !== previewStyle) {
            instance.changePreviewStyle(previewStyle);
        }
        this.bindEventHandlers(nextProps);
        return false;
    };
    default_1.prototype.render = function () {
        return React.createElement("div", { ref: this.rootEl });
    };
    return default_1;
}(React.Component));

var ViewerComponent = /** @class */ (function (_super) {
    __extends(ViewerComponent, _super);
    function ViewerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootEl = React.createRef();
        return _this;
    }
    ViewerComponent.prototype.getRootElement = function () {
        return this.rootEl.current;
    };
    ViewerComponent.prototype.getInstance = function () {
        return this.viewerInst;
    };
    ViewerComponent.prototype.getBindingEventNames = function () {
        var _this = this;
        return Object.keys(this.props)
            .filter(function (key) { return /^on[A-Z][a-zA-Z]+/.test(key); })
            .filter(function (key) { return _this.props[key]; });
    };
    ViewerComponent.prototype.bindEventHandlers = function (props) {
        var _this = this;
        this.getBindingEventNames().forEach(function (key) {
            var eventName = key[2].toLowerCase() + key.slice(3);
            _this.viewerInst.off(eventName);
            _this.viewerInst.on(eventName, props[key]);
        });
    };
    ViewerComponent.prototype.getInitEvents = function () {
        var _this = this;
        return this.getBindingEventNames().reduce(function (acc, key) {
            var eventName = (key[2].toLowerCase() + key.slice(3));
            acc[eventName] = _this.props[key];
            return acc;
        }, {});
    };
    ViewerComponent.prototype.componentDidMount = function () {
        this.viewerInst = new Viewer(__assign(__assign({ el: this.rootEl.current }, this.props), { events: this.getInitEvents() }));
    };
    ViewerComponent.prototype.shouldComponentUpdate = function (nextProps) {
        this.bindEventHandlers(nextProps);
        return false;
    };
    ViewerComponent.prototype.render = function () {
        return React.createElement("div", { ref: this.rootEl });
    };
    return ViewerComponent;
}(React.Component));

export { default_1 as Editor, ViewerComponent as Viewer };
