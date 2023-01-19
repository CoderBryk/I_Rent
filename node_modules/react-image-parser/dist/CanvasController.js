'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasController = function (_PureComponent) {
    _inherits(CanvasController, _PureComponent);

    function CanvasController() {
        _classCallCheck(this, CanvasController);

        return _possibleConstructorReturn(this, (CanvasController.__proto__ || Object.getPrototypeOf(CanvasController)).apply(this, arguments));
    }

    _createClass(CanvasController, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getImageData();
        }
    }, {
        key: 'getCanvasSideSizes',
        value: function getCanvasSideSizes() {
            var _props = this.props,
                _props$imgElem = _props.imgElem,
                width = _props$imgElem.naturalWidth,
                height = _props$imgElem.naturalHeight,
                _props$sideSize = _props.sideSize,
                sideSize = _props$sideSize === undefined ? Math.max(width, height) : _props$sideSize;

            var widthIsBigger = width > height;

            return {
                width: widthIsBigger ? sideSize : Math.ceil(sideSize * (width / height)),
                height: widthIsBigger ? Math.ceil(sideSize * (height / width)) : sideSize
            };
        }
    }, {
        key: 'getImageData',
        value: function getImageData() {
            if (this.props.sideSize <= 0) {
                console.error('CanvasController: sideSize can\'t be lower or equal to zero!');

                return;
            }

            var _getCanvasSideSizes = this.getCanvasSideSizes(),
                width = _getCanvasSideSizes.width,
                height = _getCanvasSideSizes.height;

            var ctx = this.canvas.getContext("2d");
            var imageData = [];

            this.canvas = Object.assign(this.canvas, { width: width, height: height });

            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(this.props.imgElem, 0, 0, width, height);

            try {
                imageData = ctx.getImageData(0, 0, width, height).data;
            } catch (e) {
                console.error('CanvasController: catch error on getImageData!', e);
            }

            this.props.onImageData(imageData);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('canvas', { ref: function ref(canvas) {
                    return _this2.canvas = canvas;
                } });
        }
    }]);

    return CanvasController;
}(_react.PureComponent);

CanvasController.propTypes = {
    imgElem: _propTypes2.default.object.isRequired,
    sideSize: _propTypes2.default.number,
    onImageData: _propTypes2.default.func
};
CanvasController.defaultProps = {
    onImageData: function onImageData() {}
};
exports.default = CanvasController;