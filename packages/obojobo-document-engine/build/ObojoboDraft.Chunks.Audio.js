/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 386);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = Common;

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Common = __webpack_require__(0);

var _Common2 = _interopRequireDefault(_Common);

var _selectionHandler = __webpack_require__(154);

var _selectionHandler2 = _interopRequireDefault(_selectionHandler);

var _adapter = __webpack_require__(153);

var _adapter2 = _interopRequireDefault(_adapter);

var _viewerComponent = __webpack_require__(155);

var _viewerComponent2 = _interopRequireDefault(_viewerComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Common2.default.Store.registerModel('ObojoboDraft.Chunks.Audio', {
	type: 'chunk',
	adapter: _adapter2.default,
	componentClass: _viewerComponent2.default,
	selectionHandler: new _selectionHandler2.default()
});

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Common = __webpack_require__(0);

var _Common2 = _interopRequireDefault(_Common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let { TextGroupAdapter } = Common.chunk.textChunk

var Adapter = {
	construct: function construct(model, attrs) {
		model.modelState.src = attrs.content.src;
	},
	clone: function clone(model, _clone) {
		// TextGroupAdapter.clone(model, clone)
		// clone.modelState.url = model.modelState.url
		// clone.modelState.size = model.modelState.size
		// clone.modelState.width = model.modelState.width
		// clone.modelState.height = model.modelState.height
		// clone.modelState.alt = model.modelState.alt
	},
	toJSON: function toJSON(model, json) {}
	// TextGroupAdapter.toJSON(model, json)
	// json.content.url = model.modelState.url
	// json.content.size = model.modelState.size
	// json.content.width = model.modelState.width
	// json.content.height = model.modelState.height
	// json.content.alt = model.modelState.alt


	// toText(model) {
	// 	// return `Image: ${model.modelState.url}\n Caption: ${TextGroupAdapter.toText(model) ||
	// 	// 	model.modelState.alt}`
	// }

};

exports.default = Adapter;
// function __guard__(value, transform) {
// 	return typeof value !== 'undefined' && value !== null ? transform(value) : undefined
// }

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Common = __webpack_require__(0);

var _Common2 = _interopRequireDefault(_Common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectionHandler = void 0;
var TextGroupSelectionHandler = _Common2.default.chunk.textChunk.TextGroupSelectionHandler;
var FocusableSelectionHandler = _Common2.default.chunk.focusableChunk.FocusableSelectionHandler;
var Chunk = _Common2.default.models.Chunk;

exports.default = SelectionHandler = function (_TextGroupSelectionHa) {
	_inherits(SelectionHandler, _TextGroupSelectionHa);

	function SelectionHandler() {
		_classCallCheck(this, SelectionHandler);

		return _possibleConstructorReturn(this, (SelectionHandler.__proto__ || Object.getPrototypeOf(SelectionHandler)).apply(this, arguments));
	}

	_createClass(SelectionHandler, [{
		key: 'selectStart',
		value: function selectStart(selection, chunk) {
			return FocusableSelectionHandler.prototype.selectStart(selection, chunk);
		}
	}]);

	return SelectionHandler;
}(TextGroupSelectionHandler);

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(356);

var _Common = __webpack_require__(0);

var _Common2 = _interopRequireDefault(_Common);

var _wavesurfer = __webpack_require__(353);

var _wavesurfer2 = _interopRequireDefault(_wavesurfer);

var _volumeIcon = __webpack_require__(381);

var _volumeIcon2 = _interopRequireDefault(_volumeIcon);

var _volumeTrack = __webpack_require__(382);

var _volumeTrack2 = _interopRequireDefault(_volumeTrack);

var _volumeCurrent = __webpack_require__(380);

var _volumeCurrent2 = _interopRequireDefault(_volumeCurrent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OboComponent = _Common2.default.components.OboComponent;
var TextGroupEl = _Common2.default.chunk.textChunk.TextGroupEl;
var NonEditableChunk = _Common2.default.chunk.NonEditableChunk;


var Button = _Common2.default.components.Button;

// console.log(xml)

// require('./osmd.min.js')
// import { OSMD } from 'opensheetmusicdisplay'

// import Iterator from 'musicxml-iterator'

// import { OSMD } from '../src/OSMD/OSMD';
// import { OSMD } from '../../../node_modules/opensheetmusicdisplay/src/OSMD/OSMD'

var Audio = function (_React$Component) {
	_inherits(Audio, _React$Component);

	function Audio() {
		_classCallCheck(this, Audio);

		var _this = _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));

		_this.state = {
			isLoaded: false,
			isPlaying: false,
			isShowingTranscription: false,
			playbackSpeed: 1,
			volume: 0.8
		};

		console.log('CC');

		// Common.Store.loadDependency('./osmd.min.js', () => {
		// Common.Store.loadDependency('http://127.0.0.1:8765/osmd.min.js', () => {
		// 	let osmd = new window.opensheetmusicdisplay.OSMD('some-container')
		// 	console.log('osmd', osmd)
		// })
		return _this;
	}

	_createClass(Audio, [{
		key: 'onClick',
		value: function onClick() {
			if (this.wavesurfer.isPlaying()) {
				this.wavesurfer.pause();
				this.setState({ isPlaying: false });
			} else {
				this.wavesurfer.play();
				this.setState({ isPlaying: true });
			}
		}
	}, {
		key: 'onClickToggleTranscription',
		value: function onClickToggleTranscription() {}
	}, {
		key: 'onChangeSpeed',
		value: function onChangeSpeed(event) {
			// this.wavesurfer.setPlaybackRate(event.target.value)
			this.setState({ playbackSpeed: event.target.value });
		}
	}, {
		key: 'onChangeVolume',
		value: function onChangeVolume(event) {
			this.setState({ volume: event.target.value });
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.wavesurfer.destroy();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			console.log('CDU', this.props.model.modelState);
			// this.osmd = new OSMD(this.refs.self, false)
			// this.osmd.load(this.props.model.modelState.xml).then(
			// 	() => {
			// 		this.osmd.zoom = this.props.model.modelState.zoomLevel
			// 		this.osmd.render()

			// 		this.iter = Iterator(this.props.model.modelState.xml)
			// 		this.iter.selectInstrument('Voice')
			// 	},
			// 	err => console.log(err)
			// )

			this.wavesurfer = _wavesurfer2.default.create({
				container: this.refs.self,
				waveColor: '#8baadb',
				// progressColor: '#2b0a53',
				progressColor: '#c1c1c1',
				cursorColor: '#93C6FF',
				// cursorWidth: 3,
				normalize: true,
				height: 64
			});
			this.wavesurfer.load(this.props.model.modelState.src
			// 'https://dl.dropboxusercontent.com/content_link/BGQJulxUfTjAFnqOqYW1Rrk7rk0BNjn2g96N1SH43BCP8N5yWzJuk9PxFhcwgU9T/file?dl=0&duc_id=dropbox_duc_id'
			);
			this.wavesurfer.on('ready', function () {
				_this2.setState({ isLoaded: true });
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.playbackSpeed !== this.state.playbackSpeed) {
				this.wavesurfer.setPlaybackRate(this.state.playbackSpeed);
			}

			if (prevState.volume !== this.state.volume) {
				this.wavesurfer.setVolume(this.state.volume);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var data = this.props.model.modelState;

			var volumeIconBg = _Common2.default.util.getBackgroundImage(_volumeIcon2.default);
			var volumeTrackBg = _Common2.default.util.getBackgroundImage(_volumeTrack2.default);
			var volumeCurrentBg = _Common2.default.util.getBackgroundImage(_volumeCurrent2.default);

			return React.createElement(
				OboComponent,
				{ model: this.props.model, moduleData: this.props.moduleData },
				React.createElement(
					NonEditableChunk,
					{
						className: 'obojobo-draft--chunks--audio' + (this.state.isLoaded ? ' is-loaded' : ' is-not-loaded') + (this.state.isPlaying ? ' is-playing' : ' is-not-playing') + (this.state.isShowingTranscription ? ' is-showing-transcription' : ' is-not-showing-transcription'),
						ref: 'component'
					},
					React.createElement('div', { ref: 'self', className: 'container' }),
					React.createElement(
						'div',
						{ className: 'controls' },
						React.createElement(
							Button,
							{ onClick: this.onClick.bind(this), disabled: !this.state.isLoaded },
							this.state.isPlaying ? 'Pause' : 'Play'
						),
						React.createElement(
							'span',
							{ className: 'speed-label' },
							'Speed'
						),
						React.createElement(
							'div',
							{ className: 'select' },
							React.createElement(
								'select',
								{ onChange: this.onChangeSpeed.bind(this), value: this.state.playbackSpeed },
								React.createElement(
									'option',
									{ value: '0.25' },
									'0.25x'
								),
								React.createElement(
									'option',
									{ value: '0.5' },
									'0.5x'
								),
								React.createElement(
									'option',
									{ value: '0.75' },
									'0.75x'
								),
								React.createElement(
									'option',
									{ value: '1' },
									'1x'
								),
								React.createElement(
									'option',
									{ value: '1.25' },
									'1.25x'
								),
								React.createElement(
									'option',
									{ value: '1.5' },
									'1.5x'
								),
								React.createElement(
									'option',
									{ value: '2' },
									'2x'
								)
							)
						),
						React.createElement(
							'div',
							{
								className: 'volume',
								style: {
									backgroundImage: volumeTrackBg
								}
							},
							React.createElement('div', {
								className: 'volume-icon',
								style: {
									backgroundImage: volumeIconBg
								}
							}),
							React.createElement('input', {
								type: 'range',
								onChange: this.onChangeVolume.bind(this),
								value: this.state.volume,
								min: '0',
								max: '1',
								step: '0.05'
							}),
							React.createElement(
								'div',
								{
									className: 'current-level-container',
									style: {
										width: this.state.volume * 100 + '%'
									}
								},
								React.createElement('div', {
									className: 'current-level',
									style: {
										backgroundImage: volumeCurrentBg
									}
								})
							)
						)
					)
				)
			);
		}
	}]);

	return Audio;
}(React.Component);

exports.default = Audio;

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * wavesurfer.js 2.0.5 (Sun Mar 04 2018 20:10:08 GMT+0100 (CET))
 * https://github.com/katspaugh/wavesurfer.js
 * @license BSD-3-Clause
 */
!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.WaveSurfer = t() : e.WaveSurfer = t();
}("undefined" != typeof self ? self : undefined, function () {
  return function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;var a = r[n] = { i: n, l: !1, exports: {} };return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
    }var r = {};return t.m = e, t.c = r, t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
    }, t.n = function (e) {
      var r = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(r, "a", r), r;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 4);
  }([function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var a = r(5);Object.defineProperty(t, "ajax", { enumerable: !0, get: function get() {
        return n(a).default;
      } });var i = r(6);Object.defineProperty(t, "getId", { enumerable: !0, get: function get() {
        return n(i).default;
      } });var s = r(7);Object.defineProperty(t, "max", { enumerable: !0, get: function get() {
        return n(s).default;
      } });var o = r(8);Object.defineProperty(t, "min", { enumerable: !0, get: function get() {
        return n(o).default;
      } });var u = r(1);Object.defineProperty(t, "Observer", { enumerable: !0, get: function get() {
        return n(u).default;
      } });var l = r(9);Object.defineProperty(t, "extend", { enumerable: !0, get: function get() {
        return n(l).default;
      } });var c = r(10);Object.defineProperty(t, "style", { enumerable: !0, get: function get() {
        return n(c).default;
      } });var h = r(2);Object.defineProperty(t, "requestAnimationFrame", { enumerable: !0, get: function get() {
        return n(h).default;
      } });var f = r(11);Object.defineProperty(t, "frame", { enumerable: !0, get: function get() {
        return n(f).default;
      } });var d = r(12);Object.defineProperty(t, "debounce", { enumerable: !0, get: function get() {
        return n(d).default;
      } });var p = r(13);Object.defineProperty(t, "preventClick", { enumerable: !0, get: function get() {
        return n(p).default;
      } });
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(t, "__esModule", { value: !0 });var a = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        i = function () {
      function e() {
        n(this, e), this.handlers = null;
      }return a(e, [{ key: "on", value: function value(e, t) {
          var r = this;this.handlers || (this.handlers = {});var n = this.handlers[e];return n || (n = this.handlers[e] = []), n.push(t), { name: e, callback: t, un: function un(e, t) {
              return r.un(e, t);
            } };
        } }, { key: "un", value: function value(e, t) {
          if (this.handlers) {
            var r = this.handlers[e],
                n = void 0;if (r) if (t) for (n = r.length - 1; n >= 0; n--) {
              r[n] == t && r.splice(n, 1);
            } else r.length = 0;
          }
        } }, { key: "unAll", value: function value() {
          this.handlers = null;
        } }, { key: "once", value: function value(e, t) {
          var r = this,
              n = function n() {
            for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) {
              i[s] = arguments[s];
            }t.apply(r, i), setTimeout(function () {
              r.un(e, n);
            }, 0);
          };return this.on(e, n);
        } }, { key: "fireEvent", value: function value(e) {
          for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
            r[n - 1] = arguments[n];
          }if (this.handlers) {
            var a = this.handlers[e];a && a.forEach(function (e) {
              e.apply(void 0, r);
            });
          }
        } }]), e;
    }();t.default = i, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
      return setTimeout(e, 1e3 / 60);
    }).bind(window), e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
    }function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        u = r(0),
        l = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }(u),
        c = "playing",
        h = "paused",
        f = "finished",
        d = function (e) {
      function t(e) {
        var r, s;a(this, t);var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return o.audioContext = null, o.offlineAudioContext = null, o.stateBehaviors = (r = {}, n(r, c, { init: function init() {
            this.addOnAudioProcess();
          }, getPlayedPercents: function getPlayedPercents() {
            var e = this.getDuration();return this.getCurrentTime() / e || 0;
          }, getCurrentTime: function getCurrentTime() {
            return this.startPosition + this.getPlayedTime();
          } }), n(r, h, { init: function init() {
            this.removeOnAudioProcess();
          }, getPlayedPercents: function getPlayedPercents() {
            var e = this.getDuration();return this.getCurrentTime() / e || 0;
          }, getCurrentTime: function getCurrentTime() {
            return this.startPosition;
          } }), n(r, f, { init: function init() {
            this.removeOnAudioProcess(), this.fireEvent("finish");
          }, getPlayedPercents: function getPlayedPercents() {
            return 1;
          }, getCurrentTime: function getCurrentTime() {
            return this.getDuration();
          } }), r), o.params = e, o.ac = e.audioContext || o.getAudioContext(), o.lastPlay = o.ac.currentTime, o.startPosition = 0, o.scheduledPause = null, o.states = (s = {}, n(s, c, Object.create(o.stateBehaviors[c])), n(s, h, Object.create(o.stateBehaviors[h])), n(s, f, Object.create(o.stateBehaviors[f])), s), o.analyser = null, o.buffer = null, o.filters = [], o.gainNode = null, o.mergedPeaks = null, o.offlineAc = null, o.peaks = null, o.playbackRate = 1, o.analyser = null, o.scriptNode = null, o.source = null, o.splitPeaks = [], o.state = null, o.explicitDuration = null, o;
      }return s(t, e), o(t, [{ key: "supportsWebAudio", value: function value() {
          return !(!window.AudioContext && !window.webkitAudioContext);
        } }, { key: "getAudioContext", value: function value() {
          return window.WaveSurferAudioContext || (window.WaveSurferAudioContext = new (window.AudioContext || window.webkitAudioContext)()), window.WaveSurferAudioContext;
        } }, { key: "getOfflineAudioContext", value: function value(e) {
          return window.WaveSurferOfflineAudioContext || (window.WaveSurferOfflineAudioContext = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, e)), window.WaveSurferOfflineAudioContext;
        } }]), o(t, [{ key: "init", value: function value() {
          this.createVolumeNode(), this.createScriptNode(), this.createAnalyserNode(), this.setState(h), this.setPlaybackRate(this.params.audioRate), this.setLength(0);
        } }, { key: "disconnectFilters", value: function value() {
          this.filters && (this.filters.forEach(function (e) {
            e && e.disconnect();
          }), this.filters = null, this.analyser.connect(this.gainNode));
        } }, { key: "setState", value: function value(e) {
          this.state !== this.states[e] && (this.state = this.states[e], this.state.init.call(this));
        } }, { key: "setFilter", value: function value() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
            t[r] = arguments[r];
          }this.setFilters(t);
        } }, { key: "setFilters", value: function value(e) {
          this.disconnectFilters(), e && e.length && (this.filters = e, this.analyser.disconnect(), e.reduce(function (e, t) {
            return e.connect(t), t;
          }, this.analyser).connect(this.gainNode));
        } }, { key: "createScriptNode", value: function value() {
          this.ac.createScriptProcessor ? this.scriptNode = this.ac.createScriptProcessor(t.scriptBufferSize) : this.scriptNode = this.ac.createJavaScriptNode(t.scriptBufferSize), this.scriptNode.connect(this.ac.destination);
        } }, { key: "addOnAudioProcess", value: function value() {
          var e = this;this.scriptNode.onaudioprocess = function () {
            var t = e.getCurrentTime();t >= e.getDuration() ? (e.setState(f), e.fireEvent("pause")) : t >= e.scheduledPause ? e.pause() : e.state === e.states[c] && e.fireEvent("audioprocess", t);
          };
        } }, { key: "removeOnAudioProcess", value: function value() {
          this.scriptNode.onaudioprocess = null;
        } }, { key: "createAnalyserNode", value: function value() {
          this.analyser = this.ac.createAnalyser(), this.analyser.connect(this.gainNode);
        } }, { key: "createVolumeNode", value: function value() {
          this.ac.createGain ? this.gainNode = this.ac.createGain() : this.gainNode = this.ac.createGainNode(), this.gainNode.connect(this.ac.destination);
        } }, { key: "setSinkId", value: function value(e) {
          if (e) {
            var t = new window.Audio();if (!t.setSinkId) return Promise.reject(new Error("setSinkId is not supported in your browser"));t.autoplay = !0;var r = this.ac.createMediaStreamDestination();return this.gainNode.disconnect(), this.gainNode.connect(r), t.src = URL.createObjectURL(r.stream), t.setSinkId(e);
          }return Promise.reject(new Error("Invalid deviceId: " + e));
        } }, { key: "setVolume", value: function value(e) {
          this.gainNode.gain.setValueAtTime(e, this.ac.currentTime);
        } }, { key: "getVolume", value: function value() {
          return this.gainNode.gain.value;
        } }, { key: "decodeArrayBuffer", value: function value(e, t, r) {
          this.offlineAc || (this.offlineAc = this.getOfflineAudioContext(this.ac ? this.ac.sampleRate : 44100)), this.offlineAc.decodeAudioData(e, function (e) {
            return t(e);
          }, r);
        } }, { key: "setPeaks", value: function value(e, t) {
          this.explicitDuration = t, this.peaks = e;
        } }, { key: "setLength", value: function value(e) {
          if (!this.mergedPeaks || e != 2 * this.mergedPeaks.length - 1 + 2) {
            this.splitPeaks = [], this.mergedPeaks = [];var t = this.buffer ? this.buffer.numberOfChannels : 1,
                r = void 0;for (r = 0; r < t; r++) {
              this.splitPeaks[r] = [], this.splitPeaks[r][2 * (e - 1)] = 0, this.splitPeaks[r][2 * (e - 1) + 1] = 0;
            }this.mergedPeaks[2 * (e - 1)] = 0, this.mergedPeaks[2 * (e - 1) + 1] = 0;
          }
        } }, { key: "getPeaks", value: function value(e, t, r) {
          if (this.peaks) return this.peaks;if (t = t || 0, r = r || e - 1, this.setLength(e), !this.buffer.length) {
            var n = this.createBuffer(1, 4096, this.sampleRate);this.buffer = n.buffer;
          }var a = this.buffer.length / e,
              i = ~~(a / 10) || 1,
              s = this.buffer.numberOfChannels,
              o = void 0;for (o = 0; o < s; o++) {
            var u = this.splitPeaks[o],
                l = this.buffer.getChannelData(o),
                c = void 0;for (c = t; c <= r; c++) {
              var h = ~~(c * a),
                  f = ~~(h + a),
                  d = 0,
                  p = 0,
                  v = void 0;for (v = h; v < f; v += i) {
                var y = l[v];y > p && (p = y), y < d && (d = y);
              }u[2 * c] = p, u[2 * c + 1] = d, (0 == o || p > this.mergedPeaks[2 * c]) && (this.mergedPeaks[2 * c] = p), (0 == o || d < this.mergedPeaks[2 * c + 1]) && (this.mergedPeaks[2 * c + 1] = d);
            }
          }return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks;
        } }, { key: "getPlayedPercents", value: function value() {
          return this.state.getPlayedPercents.call(this);
        } }, { key: "disconnectSource", value: function value() {
          this.source && this.source.disconnect();
        } }, { key: "destroy", value: function value() {
          this.isPaused() || this.pause(), this.unAll(), this.buffer = null, this.disconnectFilters(), this.disconnectSource(), this.gainNode.disconnect(), this.scriptNode.disconnect(), this.analyser.disconnect(), this.params.closeAudioContext && ("function" == typeof this.ac.close && "closed" != this.ac.state && this.ac.close(), this.ac = null, this.params.audioContext ? this.params.audioContext = null : window.WaveSurferAudioContext = null, window.WaveSurferOfflineAudioContext = null);
        } }, { key: "load", value: function value(e) {
          this.startPosition = 0, this.lastPlay = this.ac.currentTime, this.buffer = e, this.createSource();
        } }, { key: "createSource", value: function value() {
          this.disconnectSource(), this.source = this.ac.createBufferSource(), this.source.start = this.source.start || this.source.noteGrainOn, this.source.stop = this.source.stop || this.source.noteOff, this.source.playbackRate.setValueAtTime(this.playbackRate, this.ac.currentTime), this.source.buffer = this.buffer, this.source.connect(this.analyser);
        } }, { key: "isPaused", value: function value() {
          return this.state !== this.states[c];
        } }, { key: "getDuration", value: function value() {
          return this.buffer ? this.buffer.duration : this.explicitDuration ? this.explicitDuration : 0;
        } }, { key: "seekTo", value: function value(e, t) {
          if (this.buffer) return this.scheduledPause = null, null == e && (e = this.getCurrentTime()) >= this.getDuration() && (e = 0), null == t && (t = this.getDuration()), this.startPosition = e, this.lastPlay = this.ac.currentTime, this.state === this.states[f] && this.setState(h), { start: e, end: t };
        } }, { key: "getPlayedTime", value: function value() {
          return (this.ac.currentTime - this.lastPlay) * this.playbackRate;
        } }, { key: "play", value: function value(e, t) {
          if (this.buffer) {
            this.createSource();var r = this.seekTo(e, t);e = r.start, t = r.end, this.scheduledPause = t, this.source.start(0, e, t - e), "suspended" == this.ac.state && this.ac.resume && this.ac.resume(), this.setState(c), this.fireEvent("play");
          }
        } }, { key: "pause", value: function value() {
          this.scheduledPause = null, this.startPosition += this.getPlayedTime(), this.source && this.source.stop(0), this.setState(h), this.fireEvent("pause");
        } }, { key: "getCurrentTime", value: function value() {
          return this.state.getCurrentTime.call(this);
        } }, { key: "getPlaybackRate", value: function value() {
          return this.playbackRate;
        } }, { key: "setPlaybackRate", value: function value(e) {
          e = e || 1, this.isPaused() ? this.playbackRate = e : (this.pause(), this.playbackRate = e, this.play());
        } }]), t;
    }(l.Observer);d.scriptBufferSize = 256, t.default = d, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }function s(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        u = r(0),
        l = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }(u),
        c = r(14),
        h = n(c),
        f = r(3),
        d = n(f),
        p = r(16),
        v = n(p),
        y = r(17),
        m = n(y),
        k = (function () {
      function e(t, r) {
        s(this, e);
      }o(e, [{ key: "create", value: function value(e) {} }]), o(e, [{ key: "init", value: function value() {} }, { key: "destroy", value: function value() {} }]);
    }(), function (e) {
      function t(e) {
        var r;s(this, t);var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));if (n.defaultParams = { audioContext: null, audioRate: 1, autoCenter: !0, backend: "WebAudio", barHeight: 1, barGap: null, container: null, cursorColor: "#333", cursorWidth: 1, dragSelection: !0, fillParent: !0, forceDecode: !1, height: 128, hideScrollbar: !1, interact: !0, loopSelection: !0, maxCanvasWidth: 4e3, mediaContainer: null, mediaControls: !1, mediaType: "audio", minPxPerSec: 20, normalize: !1, partialRender: !1, pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI, plugins: [], progressColor: "#555", removeMediaElementOnDestroy: !0, renderer: h.default, responsive: !1, scrollParent: !1, skipLength: 2, splitChannels: !1, waveColor: "#999", xhr: {} }, n.backends = { MediaElement: v.default, WebAudio: d.default }, n.util = l, n.params = l.extend({}, n.defaultParams, e), n.container = "string" == typeof e.container ? document.querySelector(n.params.container) : n.params.container, !n.container) throw new Error("Container element not found");if (null == n.params.mediaContainer ? n.mediaContainer = n.container : "string" == typeof n.params.mediaContainer ? n.mediaContainer = document.querySelector(n.params.mediaContainer) : n.mediaContainer = n.params.mediaContainer, !n.mediaContainer) throw new Error("Media Container element not found");if (n.params.maxCanvasWidth <= 1) throw new Error("maxCanvasWidth must be greater than 1");if (n.params.maxCanvasWidth % 2 == 1) throw new Error("maxCanvasWidth must be an even number");if (n.savedVolume = 0, n.isMuted = !1, n.tmpEvents = [], n.currentAjax = null, n.arraybuffer = null, n.drawer = null, n.backend = null, n.peakCache = null, "function" != typeof n.params.renderer) throw new Error("Renderer parameter is invalid");n.Drawer = n.params.renderer, n.Backend = n.backends[n.params.backend], n.initialisedPluginList = {}, n.isDestroyed = !1, n.isReady = !1;var i = 0;return n._onResize = l.debounce(function () {
          i == n.drawer.wrapper.clientWidth || n.params.scrollParent || (i = n.drawer.wrapper.clientWidth, n.drawer.fireEvent("redraw"));
        }, "number" == typeof n.params.responsive ? n.params.responsive : 100), r = n, a(n, r);
      }return i(t, e), o(t, null, [{ key: "create", value: function value(e) {
          return new t(e).init();
        } }]), o(t, [{ key: "init", value: function value() {
          return this.registerPlugins(this.params.plugins), this.createDrawer(), this.createBackend(), this.createPeakCache(), this;
        } }, { key: "registerPlugins", value: function value(e) {
          var t = this;return e.forEach(function (e) {
            return t.addPlugin(e);
          }), e.forEach(function (e) {
            e.deferInit || t.initPlugin(e.name);
          }), this.fireEvent("plugins-registered", e), this;
        } }, { key: "addPlugin", value: function value(e) {
          var t = this;if (!e.name) throw new Error("Plugin does not have a name!");if (!e.instance) throw new Error("Plugin " + e.name + " does not have an instance property!");e.staticProps && Object.keys(e.staticProps).forEach(function (r) {
            t[r] = e.staticProps[r];
          });var r = e.instance;return Object.getOwnPropertyNames(l.Observer.prototype).forEach(function (e) {
            r.prototype[e] = l.Observer.prototype[e];
          }), this[e.name] = new r(e.params || {}, this), this.fireEvent("plugin-added", e.name), this;
        } }, { key: "initPlugin", value: function value(e) {
          if (!this[e]) throw new Error("Plugin " + e + " has not been added yet!");return this.initialisedPluginList[e] && this.destroyPlugin(e), this[e].init(), this.initialisedPluginList[e] = !0, this.fireEvent("plugin-initialised", e), this;
        } }, { key: "destroyPlugin", value: function value(e) {
          if (!this[e]) throw new Error("Plugin " + e + " has not been added yet and cannot be destroyed!");if (!this.initialisedPluginList[e]) throw new Error("Plugin " + e + " is not active and cannot be destroyed!");if ("function" != typeof this[e].destroy) throw new Error("Plugin " + e + " does not have a destroy function!");return this[e].destroy(), delete this.initialisedPluginList[e], this.fireEvent("plugin-destroyed", e), this;
        } }, { key: "destroyAllPlugins", value: function value() {
          var e = this;Object.keys(this.initialisedPluginList).forEach(function (t) {
            return e.destroyPlugin(t);
          });
        } }, { key: "createDrawer", value: function value() {
          var e = this;this.drawer = new this.Drawer(this.container, this.params), this.drawer.init(), this.fireEvent("drawer-created", this.drawer), !1 !== this.params.responsive && (window.addEventListener("resize", this._onResize, !0), window.addEventListener("orientationchange", this._onResize, !0)), this.drawer.on("redraw", function () {
            e.drawBuffer(), e.drawer.progress(e.backend.getPlayedPercents());
          }), this.drawer.on("click", function (t, r) {
            setTimeout(function () {
              return e.seekTo(r);
            }, 0);
          }), this.drawer.on("scroll", function (t) {
            e.params.partialRender && e.drawBuffer(), e.fireEvent("scroll", t);
          });
        } }, { key: "createBackend", value: function value() {
          var e = this;this.backend && this.backend.destroy(), "AudioElement" == this.params.backend && (this.params.backend = "MediaElement"), "WebAudio" != this.params.backend || this.Backend.prototype.supportsWebAudio.call(null) || (this.params.backend = "MediaElement"), this.backend = new this.Backend(this.params), this.backend.init(), this.fireEvent("backend-created", this.backend), this.backend.on("finish", function () {
            return e.fireEvent("finish");
          }), this.backend.on("play", function () {
            return e.fireEvent("play");
          }), this.backend.on("pause", function () {
            return e.fireEvent("pause");
          }), this.backend.on("audioprocess", function (t) {
            e.drawer.progress(e.backend.getPlayedPercents()), e.fireEvent("audioprocess", t);
          });
        } }, { key: "createPeakCache", value: function value() {
          this.params.partialRender && (this.peakCache = new m.default());
        } }, { key: "getDuration", value: function value() {
          return this.backend.getDuration();
        } }, { key: "getCurrentTime", value: function value() {
          return this.backend.getCurrentTime();
        } }, { key: "setCurrentTime", value: function value(e) {
          e >= this.getDuration() ? this.seekTo(1) : this.seekTo(e / this.getDuration());
        } }, { key: "play", value: function value(e, t) {
          var r = this;return this.fireEvent("interaction", function () {
            return r.play(e, t);
          }), this.backend.play(e, t);
        } }, { key: "pause", value: function value() {
          if (!this.backend.isPaused()) return this.backend.pause();
        } }, { key: "playPause", value: function value() {
          return this.backend.isPaused() ? this.play() : this.pause();
        } }, { key: "isPlaying", value: function value() {
          return !this.backend.isPaused();
        } }, { key: "skipBackward", value: function value(e) {
          this.skip(-e || -this.params.skipLength);
        } }, { key: "skipForward", value: function value(e) {
          this.skip(e || this.params.skipLength);
        } }, { key: "skip", value: function value(e) {
          var t = this.getDuration() || 1,
              r = this.getCurrentTime() || 0;r = Math.max(0, Math.min(t, r + (e || 0))), this.seekAndCenter(r / t);
        } }, { key: "seekAndCenter", value: function value(e) {
          this.seekTo(e), this.drawer.recenter(e);
        } }, { key: "seekTo", value: function value(e) {
          var t = this;if ("number" != typeof e || !isFinite(e) || e < 0 || e > 1) return console.error("Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!");this.fireEvent("interaction", function () {
            return t.seekTo(e);
          });var r = this.backend.isPaused();r || this.backend.pause();var n = this.params.scrollParent;this.params.scrollParent = !1, this.backend.seekTo(e * this.getDuration()), this.drawer.progress(e), r || this.backend.play(), this.params.scrollParent = n, this.fireEvent("seek", e);
        } }, { key: "stop", value: function value() {
          this.pause(), this.seekTo(0), this.drawer.progress(0);
        } }, { key: "setSinkId", value: function value(e) {
          return this.backend.setSinkId(e);
        } }, { key: "setVolume", value: function value(e) {
          this.backend.setVolume(e);
        } }, { key: "getVolume", value: function value() {
          return this.backend.getVolume();
        } }, { key: "setPlaybackRate", value: function value(e) {
          this.backend.setPlaybackRate(e);
        } }, { key: "getPlaybackRate", value: function value() {
          return this.backend.getPlaybackRate();
        } }, { key: "toggleMute", value: function value() {
          this.setMute(!this.isMuted);
        } }, { key: "setMute", value: function value(e) {
          e !== this.isMuted && (e ? (this.savedVolume = this.backend.getVolume(), this.backend.setVolume(0), this.isMuted = !0) : (this.backend.setVolume(this.savedVolume), this.isMuted = !1));
        } }, { key: "getMute", value: function value() {
          return this.isMuted;
        } }, { key: "isReady", value: function value() {
          return this.isReady;
        } }, { key: "getFilters", value: function value() {
          return this.backend.filters || [];
        } }, { key: "toggleScroll", value: function value() {
          this.params.scrollParent = !this.params.scrollParent, this.drawBuffer();
        } }, { key: "toggleInteraction", value: function value() {
          this.params.interact = !this.params.interact;
        } }, { key: "getWaveColor", value: function value() {
          return this.params.waveColor;
        } }, { key: "setWaveColor", value: function value(e) {
          this.params.waveColor = e, this.drawBuffer();
        } }, { key: "getProgressColor", value: function value() {
          return this.params.progressColor;
        } }, { key: "setProgressColor", value: function value(e) {
          this.params.progressColor = e, this.drawBuffer();
        } }, { key: "getCursorColor", value: function value() {
          return this.params.cursorColor;
        } }, { key: "setCursorColor", value: function value(e) {
          this.params.cursorColor = e, this.drawer.updateCursor();
        } }, { key: "getHeight", value: function value() {
          return this.params.height;
        } }, { key: "setHeight", value: function value(e) {
          this.params.height = e, this.drawer.setHeight(e * this.params.pixelRatio), this.drawBuffer();
        } }, { key: "drawBuffer", value: function value() {
          var e = Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio),
              t = this.drawer.getWidth(),
              r = e,
              n = this.drawer.getScrollX(),
              a = Math.max(n + t, r);this.params.fillParent && (!this.params.scrollParent || e < t) && (r = t, n = 0, a = r);var i = void 0;if (this.params.partialRender) {
            var s = this.peakCache.addRangeToPeakCache(r, n, a),
                o = void 0;for (o = 0; o < s.length; o++) {
              i = this.backend.getPeaks(r, s[o][0], s[o][1]), this.drawer.drawPeaks(i, r, s[o][0], s[o][1]);
            }
          } else i = this.backend.getPeaks(r, n, a), this.drawer.drawPeaks(i, r, n, a);this.fireEvent("redraw", i, r);
        } }, { key: "zoom", value: function value(e) {
          e ? (this.params.minPxPerSec = e, this.params.scrollParent = !0) : (this.params.minPxPerSec = this.defaultParams.minPxPerSec, this.params.scrollParent = !1), this.drawBuffer(), this.drawer.progress(this.backend.getPlayedPercents()), this.drawer.recenter(this.getCurrentTime() / this.getDuration()), this.fireEvent("zoom", e);
        } }, { key: "loadArrayBuffer", value: function value(e) {
          var t = this;this.decodeArrayBuffer(e, function (e) {
            t.isDestroyed || t.loadDecodedBuffer(e);
          });
        } }, { key: "loadDecodedBuffer", value: function value(e) {
          this.backend.load(e), this.drawBuffer(), this.fireEvent("ready"), this.isReady = !0;
        } }, { key: "loadBlob", value: function value(e) {
          var t = this,
              r = new FileReader();r.addEventListener("progress", function (e) {
            return t.onProgress(e);
          }), r.addEventListener("load", function (e) {
            return t.loadArrayBuffer(e.target.result);
          }), r.addEventListener("error", function () {
            return t.fireEvent("error", "Error reading file");
          }), r.readAsArrayBuffer(e), this.empty();
        } }, { key: "load", value: function value(e, t, r, n) {
          if (this.empty(), r) {
            var a = { "Preload is not 'auto', 'none' or 'metadata'": -1 === ["auto", "metadata", "none"].indexOf(r), "Peaks are not provided": !t, "Backend is not of type MediaElement": "MediaElement" !== this.params.backend, "Url is not of type string": "string" != typeof e },
                i = Object.keys(a).filter(function (e) {
              return a[e];
            });i.length && (console.warn("Preload parameter of wavesurfer.load will be ignored because:\n\t- " + i.join("\n\t- ")), r = null);
          }switch (this.params.backend) {case "WebAudio":
              return this.loadBuffer(e, t, n);case "MediaElement":
              return this.loadMediaElement(e, t, r, n);}
        } }, { key: "loadBuffer", value: function value(e, t, r) {
          var n = this,
              a = function a(t) {
            return t && n.tmpEvents.push(n.once("ready", t)), n.getArrayBuffer(e, function (e) {
              return n.loadArrayBuffer(e);
            });
          };if (!t) return a();this.backend.setPeaks(t, r), this.drawBuffer(), this.tmpEvents.push(this.once("interaction", a));
        } }, { key: "loadMediaElement", value: function value(e, t, r, n) {
          var a = this,
              i = e;if ("string" == typeof e) this.backend.load(i, this.mediaContainer, t, r);else {
            var s = e;this.backend.loadElt(s, t), i = s.src;
          }this.tmpEvents.push(this.backend.once("canplay", function () {
            a.drawBuffer(), a.fireEvent("ready"), a.isReady = !0;
          }), this.backend.once("error", function (e) {
            return a.fireEvent("error", e);
          })), t && this.backend.setPeaks(t, n), t && !this.params.forceDecode || !this.backend.supportsWebAudio() || this.getArrayBuffer(i, function (e) {
            a.decodeArrayBuffer(e, function (e) {
              a.backend.buffer = e, a.backend.setPeaks(null), a.drawBuffer(), a.fireEvent("waveform-ready");
            });
          });
        } }, { key: "decodeArrayBuffer", value: function value(e, t) {
          var r = this;this.arraybuffer = e, this.backend.decodeArrayBuffer(e, function (n) {
            r.isDestroyed || r.arraybuffer != e || (t(n), r.arraybuffer = null);
          }, function () {
            return r.fireEvent("error", "Error decoding audiobuffer");
          });
        } }, { key: "getArrayBuffer", value: function value(e, t) {
          var r = this,
              n = l.ajax({ url: e, responseType: "arraybuffer", xhr: this.params.xhr });return this.currentAjax = n, this.tmpEvents.push(n.on("progress", function (e) {
            r.onProgress(e);
          }), n.on("success", function (e, n) {
            t(e), r.currentAjax = null;
          }), n.on("error", function (e) {
            r.fireEvent("error", "XHR error: " + e.target.statusText), r.currentAjax = null;
          })), n;
        } }, { key: "onProgress", value: function value(e) {
          var t = void 0;t = e.lengthComputable ? e.loaded / e.total : e.loaded / (e.loaded + 1e6), this.fireEvent("loading", Math.round(100 * t), e.target);
        } }, { key: "exportPCM", value: function value(e, t, r, n) {
          e = e || 1024, n = n || 0, t = t || 1e4, r = r || !1;var a = this.backend.getPeaks(e, n),
              i = [].map.call(a, function (e) {
            return Math.round(e * t) / t;
          }),
              s = JSON.stringify(i);return r || window.open("data:application/json;charset=utf-8," + encodeURIComponent(s)), s;
        } }, { key: "exportImage", value: function value(e, t) {
          return e || (e = "image/png"), t || (t = 1), this.drawer.getImage(e, t);
        } }, { key: "cancelAjax", value: function value() {
          this.currentAjax && (this.currentAjax.xhr.abort(), this.currentAjax = null);
        } }, { key: "clearTmpEvents", value: function value() {
          this.tmpEvents.forEach(function (e) {
            return e.un();
          });
        } }, { key: "empty", value: function value() {
          this.backend.isPaused() || (this.stop(), this.backend.disconnectSource()), this.cancelAjax(), this.clearTmpEvents(), this.drawer.progress(0), this.drawer.setWidth(0), this.drawer.drawPeaks({ length: this.drawer.getWidth() }, 0);
        } }, { key: "destroy", value: function value() {
          this.destroyAllPlugins(), this.fireEvent("destroy"), this.cancelAjax(), this.clearTmpEvents(), this.unAll(), !1 !== this.params.responsive && (window.removeEventListener("resize", this._onResize, !0), window.removeEventListener("orientationchange", this._onResize, !0)), this.backend.destroy(), this.drawer.destroy(), this.isDestroyed = !0, this.arraybuffer = null;
        } }]), t;
    }(l.Observer));k.util = l, t.default = k, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      var t = new i.default(),
          r = new XMLHttpRequest(),
          n = !1;return r.open(e.method || "GET", e.url, !0), r.responseType = e.responseType || "json", e.xhr && (e.xhr.requestHeaders && e.xhr.requestHeaders.forEach(function (e) {
        r.setRequestHeader(e.key, e.value);
      }), e.xhr.withCredentials && (r.withCredentials = !0)), r.addEventListener("progress", function (e) {
        t.fireEvent("progress", e), e.lengthComputable && e.loaded == e.total && (n = !0);
      }), r.addEventListener("load", function (e) {
        n || t.fireEvent("progress", e), t.fireEvent("load", e), 200 == r.status || 206 == r.status ? t.fireEvent("success", r.response, e) : t.fireEvent("error", e);
      }), r.addEventListener("error", function (e) {
        return t.fireEvent("error", e);
      }), r.send(), t.xhr = r, t;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n;var a = r(1),
        i = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(a);e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n() {
      return "wavesurfer_" + Math.random().toString(32).substring(2);
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      var t = -1 / 0;return Object.keys(e).forEach(function (r) {
        e[r] > t && (t = e[r]);
      }), t;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      var t = Number(1 / 0);return Object.keys(e).forEach(function (r) {
        e[r] < t && (t = e[r]);
      }), t;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        r[n - 1] = arguments[n];
      }return r.forEach(function (t) {
        Object.keys(t).forEach(function (r) {
          e[r] = t[r];
        });
      }), e;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      return Object.keys(t).forEach(function (r) {
        e.style[r] !== t[r] && (e.style[r] = t[r]);
      }), e;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      return function () {
        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }return (0, i.default)(function () {
          return e.apply(void 0, r);
        });
      };
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n;var a = r(2),
        i = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(a);e.exports = t.default;
  }, function (e, t) {
    e.exports = function (e, t, r) {
      function n() {
        var l = Date.now() - o;l < t && l >= 0 ? a = setTimeout(n, t - l) : (a = null, r || (u = e.apply(s, i), s = i = null));
      }var a, i, s, o, u;null == t && (t = 100);var l = function l() {
        s = this, i = arguments, o = Date.now();var l = r && !a;return a || (a = setTimeout(n, t)), l && (u = e.apply(s, i), s = i = null), u;
      };return l.clear = function () {
        a && (clearTimeout(a), a = null);
      }, l.flush = function () {
        a && (u = e.apply(s, i), s = i = null, clearTimeout(a), a = null);
      }, l;
    };
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      e.stopPropagation(), document.body.removeEventListener("click", n, !0);
    }function a(e) {
      document.body.addEventListener("click", n, !0);
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        o = r(15),
        u = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(o),
        l = r(0),
        c = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }(l),
        h = function (e) {
      function t(e, r) {
        n(this, t);var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r));return i.maxCanvasWidth = r.maxCanvasWidth, i.maxCanvasElementWidth = Math.round(r.maxCanvasWidth / r.pixelRatio), i.hasProgressCanvas = r.waveColor != r.progressColor, i.halfPixel = .5 / r.pixelRatio, i.canvases = [], i.progressWave = null, i;
      }return i(t, e), s(t, [{ key: "init", value: function value() {
          this.createWrapper(), this.createElements();
        } }, { key: "createElements", value: function value() {
          this.progressWave = this.wrapper.appendChild(this.style(document.createElement("wave"), { position: "absolute", zIndex: 3, left: 0, top: 0, bottom: 0, overflow: "hidden", width: "0", display: "none", boxSizing: "border-box", borderRightStyle: "solid", pointerEvents: "none" })), this.addCanvas(), this.updateCursor();
        } }, { key: "updateCursor", value: function value() {
          this.style(this.progressWave, { borderRightWidth: this.params.cursorWidth + "px", borderRightColor: this.params.cursorColor });
        } }, { key: "updateSize", value: function value() {
          for (var e = this, t = Math.round(this.width / this.params.pixelRatio), r = Math.ceil(t / this.maxCanvasElementWidth); this.canvases.length < r;) {
            this.addCanvas();
          }for (; this.canvases.length > r;) {
            this.removeCanvas();
          }this.canvases.forEach(function (t, r) {
            var n = e.maxCanvasWidth + 2 * Math.ceil(e.params.pixelRatio / 2);r == e.canvases.length - 1 && (n = e.width - e.maxCanvasWidth * (e.canvases.length - 1)), e.updateDimensions(t, n, e.height), e.clearWaveForEntry(t);
          });
        } }, { key: "addCanvas", value: function value() {
          var e = {},
              t = this.maxCanvasElementWidth * this.canvases.length;e.wave = this.wrapper.appendChild(this.style(document.createElement("canvas"), { position: "absolute", zIndex: 2, left: t + "px", top: 0, bottom: 0, height: "100%", pointerEvents: "none" })), e.waveCtx = e.wave.getContext("2d"), this.hasProgressCanvas && (e.progress = this.progressWave.appendChild(this.style(document.createElement("canvas"), { position: "absolute", left: t + "px", top: 0, bottom: 0, height: "100%" })), e.progressCtx = e.progress.getContext("2d")), this.canvases.push(e);
        } }, { key: "removeCanvas", value: function value() {
          var e = this.canvases.pop();e.wave.parentElement.removeChild(e.wave), this.hasProgressCanvas && e.progress.parentElement.removeChild(e.progress);
        } }, { key: "updateDimensions", value: function value(e, t, r) {
          var n = Math.round(t / this.params.pixelRatio),
              a = Math.round(this.width / this.params.pixelRatio);e.start = e.waveCtx.canvas.offsetLeft / a || 0, e.end = e.start + n / a, e.waveCtx.canvas.width = t, e.waveCtx.canvas.height = r, this.style(e.waveCtx.canvas, { width: n + "px" }), this.style(this.progressWave, { display: "block" }), this.hasProgressCanvas && (e.progressCtx.canvas.width = t, e.progressCtx.canvas.height = r, this.style(e.progressCtx.canvas, { width: n + "px" }));
        } }, { key: "clearWave", value: function value() {
          var e = this;this.canvases.forEach(function (t) {
            return e.clearWaveForEntry(t);
          });
        } }, { key: "clearWaveForEntry", value: function value(e) {
          e.waveCtx.clearRect(0, 0, e.waveCtx.canvas.width, e.waveCtx.canvas.height), this.hasProgressCanvas && e.progressCtx.clearRect(0, 0, e.progressCtx.canvas.width, e.progressCtx.canvas.height);
        } }, { key: "drawBars", value: function value(e, t, r, n) {
          var a = this;return this.prepareDraw(e, t, r, n, function (e) {
            var t = e.absmax,
                i = e.hasMinVals,
                s = (e.height, e.offsetY),
                o = e.halfH,
                u = e.peaks;if (void 0 !== r) {
              var l = i ? 2 : 1,
                  c = u.length / l,
                  h = a.params.barWidth * a.params.pixelRatio,
                  f = null === a.params.barGap ? Math.max(a.params.pixelRatio, ~~(h / 2)) : Math.max(a.params.pixelRatio, a.params.barGap * a.params.pixelRatio),
                  d = h + f,
                  p = c / a.width,
                  v = r,
                  y = n,
                  m = void 0;for (m = v; m < y; m += d) {
                var k = u[Math.floor(m * p * l)] || 0,
                    g = Math.round(k / t * o);a.fillRect(m + a.halfPixel, o - g + s, h + a.halfPixel, 2 * g);
              }
            }
          });
        } }, { key: "drawWave", value: function value(e, t, r, n) {
          var a = this;return this.prepareDraw(e, t, r, n, function (e) {
            var t = e.absmax,
                i = e.hasMinVals,
                s = (e.height, e.offsetY),
                o = e.halfH,
                u = e.peaks;if (!i) {
              var l = [],
                  c = u.length,
                  h = void 0;for (h = 0; h < c; h++) {
                l[2 * h] = u[h], l[2 * h + 1] = -u[h];
              }u = l;
            }void 0 !== r && a.drawLine(u, t, o, s, r, n), a.fillRect(0, o + s - a.halfPixel, a.width, a.halfPixel);
          });
        } }, { key: "drawLine", value: function value(e, t, r, n, a, i) {
          var s = this;this.canvases.forEach(function (o) {
            s.setFillStyles(o), s.drawLineToContext(o, o.waveCtx, e, t, r, n, a, i), s.drawLineToContext(o, o.progressCtx, e, t, r, n, a, i);
          });
        } }, { key: "drawLineToContext", value: function value(e, t, r, n, a, i, s, o) {
          if (t) {
            var u = r.length / 2,
                l = this.params.fillParent && this.width != u ? this.width / u : 1,
                c = Math.round(u * e.start),
                h = Math.round(u * e.end) + 1;if (!(c > o || h < s)) {
              var f = Math.min(c, s),
                  d = Math.max(h, o),
                  p = void 0,
                  v = void 0;for (t.beginPath(), t.moveTo((f - c) * l + this.halfPixel, a + i), p = f; p < d; p++) {
                var y = r[2 * p] || 0,
                    m = Math.round(y / n * a);t.lineTo((p - c) * l + this.halfPixel, a - m + i);
              }for (v = d - 1; v >= f; v--) {
                var k = r[2 * v + 1] || 0,
                    g = Math.round(k / n * a);t.lineTo((v - c) * l + this.halfPixel, a - g + i);
              }t.closePath(), t.fill();
            }
          }
        } }, { key: "fillRect", value: function value(e, t, r, n) {
          var a = Math.floor(e / this.maxCanvasWidth),
              i = Math.min(Math.ceil((e + r) / this.maxCanvasWidth) + 1, this.canvases.length),
              s = void 0;for (s = a; s < i; s++) {
            var o = this.canvases[s],
                u = s * this.maxCanvasWidth,
                l = { x1: Math.max(e, s * this.maxCanvasWidth), y1: t, x2: Math.min(e + r, s * this.maxCanvasWidth + o.waveCtx.canvas.width), y2: t + n };l.x1 < l.x2 && (this.setFillStyles(o), this.fillRectToContext(o.waveCtx, l.x1 - u, l.y1, l.x2 - l.x1, l.y2 - l.y1), this.fillRectToContext(o.progressCtx, l.x1 - u, l.y1, l.x2 - l.x1, l.y2 - l.y1));
          }
        } }, { key: "prepareDraw", value: function value(e, t, r, n, a) {
          var i = this;return c.frame(function () {
            if (e[0] instanceof Array) {
              var s = e;if (i.params.splitChannels) return i.setHeight(s.length * i.params.height * i.params.pixelRatio), s.forEach(function (e, t) {
                return i.prepareDraw(e, t, r, n, a);
              });e = s[0];
            }var o = 1 / i.params.barHeight;if (i.params.normalize) {
              var u = c.max(e),
                  l = c.min(e);o = -l > u ? -l : u;
            }var h = [].some.call(e, function (e) {
              return e < 0;
            }),
                f = i.params.height * i.params.pixelRatio;return a({ absmax: o, hasMinVals: h, height: f, offsetY: f * t || 0, halfH: f / 2, peaks: e });
          })();
        } }, { key: "fillRectToContext", value: function value(e, t, r, n, a) {
          e && e.fillRect(t, r, n, a);
        } }, { key: "setFillStyles", value: function value(e) {
          e.waveCtx.fillStyle = this.params.waveColor, this.hasProgressCanvas && (e.progressCtx.fillStyle = this.params.progressColor);
        } }, { key: "getImage", value: function value(e, t) {
          var r = this.canvases.map(function (r) {
            return r.wave.toDataURL(e, t);
          });return r.length > 1 ? r : r[0];
        } }, { key: "updateProgress", value: function value(e) {
          this.style(this.progressWave, { width: e + "px" });
        } }]), t;
    }(u.default);t.default = h, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        o = r(0),
        u = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }(o),
        l = function (e) {
      function t(e, r) {
        n(this, t);var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return i.container = e, i.params = r, i.width = 0, i.height = r.height * i.params.pixelRatio, i.lastPos = 0, i.wrapper = null, i;
      }return i(t, e), s(t, [{ key: "style", value: function value(e, t) {
          return u.style(e, t);
        } }, { key: "createWrapper", value: function value() {
          this.wrapper = this.container.appendChild(document.createElement("wave")), this.style(this.wrapper, { display: "block", position: "relative", userSelect: "none", webkitUserSelect: "none", height: this.params.height + "px" }), (this.params.fillParent || this.params.scrollParent) && this.style(this.wrapper, { width: "100%", overflowX: this.params.hideScrollbar ? "hidden" : "auto", overflowY: "hidden" }), this.setupWrapperEvents();
        } }, { key: "handleEvent", value: function value(e, t) {
          !t && e.preventDefault();var r = e.targetTouches ? e.targetTouches[0].clientX : e.clientX,
              n = this.wrapper.getBoundingClientRect(),
              a = this.width,
              i = this.getWidth(),
              s = void 0;return !this.params.fillParent && a < i ? (s = (r - n.left) * this.params.pixelRatio / a || 0) > 1 && (s = 1) : s = (r - n.left + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0, s;
        } }, { key: "setupWrapperEvents", value: function value() {
          var e = this;this.wrapper.addEventListener("click", function (t) {
            var r = e.wrapper.offsetHeight - e.wrapper.clientHeight;if (0 != r) {
              var n = e.wrapper.getBoundingClientRect();if (t.clientY >= n.bottom - r) return;
            }e.params.interact && e.fireEvent("click", t, e.handleEvent(t));
          }), this.wrapper.addEventListener("scroll", function (t) {
            return e.fireEvent("scroll", t);
          });
        } }, { key: "drawPeaks", value: function value(e, t, r, n) {
          this.setWidth(t) || this.clearWave(), this.params.barWidth ? this.drawBars(e, 0, r, n) : this.drawWave(e, 0, r, n);
        } }, { key: "resetScroll", value: function value() {
          null !== this.wrapper && (this.wrapper.scrollLeft = 0);
        } }, { key: "recenter", value: function value(e) {
          var t = this.wrapper.scrollWidth * e;this.recenterOnPosition(t, !0);
        } }, { key: "recenterOnPosition", value: function value(e, t) {
          var r = this.wrapper.scrollLeft,
              n = ~~(this.wrapper.clientWidth / 2),
              a = this.wrapper.scrollWidth - this.wrapper.clientWidth,
              i = e - n,
              s = i - r;if (0 != a) {
            if (!t && -n <= s && s < n) {
              s = Math.max(-5, Math.min(5, s)), i = r + s;
            }i = Math.max(0, Math.min(a, i)), i != r && (this.wrapper.scrollLeft = i);
          }
        } }, { key: "getScrollX", value: function value() {
          var e = this.params.pixelRatio,
              t = Math.round(this.wrapper.scrollLeft * e);if (this.params.scrollParent) {
            var r = ~~(this.wrapper.scrollWidth * e - this.getWidth());t = Math.min(r, Math.max(0, t));
          }return t;
        } }, { key: "getWidth", value: function value() {
          return Math.round(this.container.clientWidth * this.params.pixelRatio);
        } }, { key: "setWidth", value: function value(e) {
          return this.width != e && (this.width = e, this.params.fillParent || this.params.scrollParent ? this.style(this.wrapper, { width: "" }) : this.style(this.wrapper, { width: ~~(this.width / this.params.pixelRatio) + "px" }), this.updateSize(), !0);
        } }, { key: "setHeight", value: function value(e) {
          return e != this.height && (this.height = e, this.style(this.wrapper, { height: ~~(this.height / this.params.pixelRatio) + "px" }), this.updateSize(), !0);
        } }, { key: "progress", value: function value(e) {
          var t = 1 / this.params.pixelRatio,
              r = Math.round(e * this.width) * t;if (r < this.lastPos || r - this.lastPos >= t) {
            if (this.lastPos = r, this.params.scrollParent && this.params.autoCenter) {
              var n = ~~(this.wrapper.scrollWidth * e);this.recenterOnPosition(n);
            }this.updateProgress(r);
          }
        } }, { key: "destroy", value: function value() {
          this.unAll(), this.wrapper && (this.wrapper.parentNode == this.container && this.container.removeChild(this.wrapper), this.wrapper = null);
        } }, { key: "updateCursor", value: function value() {} }, { key: "updateSize", value: function value() {} }, { key: "drawBars", value: function value(e, t, r, n) {} }, { key: "drawWave", value: function value(e, t, r, n) {} }, { key: "clearWave", value: function value() {} }, { key: "updateProgress", value: function value(e) {} }]), t;
    }(u.Observer);t.default = l, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        o = function e(t, r, n) {
      null === t && (t = Function.prototype);var a = Object.getOwnPropertyDescriptor(t, r);if (void 0 === a) {
        var i = Object.getPrototypeOf(t);return null === i ? void 0 : e(i, r, n);
      }if ("value" in a) return a.value;var s = a.get;if (void 0 !== s) return s.call(n);
    },
        u = r(3),
        l = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(u),
        c = r(0),
        h = (function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }t.default = e;
    }(c), function (e) {
      function t(e) {
        n(this, t);var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return r.params = e, r.media = { currentTime: 0, duration: 0, paused: !0, playbackRate: 1, play: function play() {}, pause: function pause() {}, volume: 0 }, r.mediaType = e.mediaType.toLowerCase(), r.elementPosition = e.elementPosition, r.peaks = null, r.playbackRate = 1, r.volume = 1, r.buffer = null, r.onPlayEnd = null, r;
      }return i(t, e), s(t, [{ key: "init", value: function value() {
          this.setPlaybackRate(this.params.audioRate), this.createTimer();
        } }, { key: "createTimer", value: function value() {
          var e = this,
              t = function t() {
            if (!e.isPaused()) {
              e.fireEvent("audioprocess", e.getCurrentTime());(window.requestAnimationFrame || window.webkitRequestAnimationFrame)(t);
            }
          };this.on("play", t), this.on("pause", function () {
            e.fireEvent("audioprocess", e.getCurrentTime());
          });
        } }, { key: "load", value: function value(e, t, r, n) {
          var a = document.createElement(this.mediaType);a.controls = this.params.mediaControls, a.autoplay = this.params.autoplay || !1, a.preload = null == n ? "auto" : n, a.src = e, a.style.width = "100%";var i = t.querySelector(this.mediaType);i && t.removeChild(i), t.appendChild(a), this._load(a, r);
        } }, { key: "loadElt", value: function value(e, t) {
          e.controls = this.params.mediaControls, e.autoplay = this.params.autoplay || !1, this._load(e, t);
        } }, { key: "_load", value: function value(e, t) {
          var r = this;"function" == typeof e.load && e.load(), e.addEventListener("error", function () {
            r.fireEvent("error", "Error loading media element");
          }), e.addEventListener("canplay", function () {
            r.fireEvent("canplay");
          }), e.addEventListener("ended", function () {
            r.fireEvent("finish");
          }), e.addEventListener("play", function () {
            r.fireEvent("play");
          }), e.addEventListener("pause", function () {
            r.fireEvent("pause");
          }), this.media = e, this.peaks = t, this.onPlayEnd = null, this.buffer = null, this.setPlaybackRate(this.playbackRate), this.setVolume(this.volume);
        } }, { key: "isPaused", value: function value() {
          return !this.media || this.media.paused;
        } }, { key: "getDuration", value: function value() {
          if (this.explicitDuration) return this.explicitDuration;var e = (this.buffer || this.media).duration;return e >= 1 / 0 && (e = this.media.seekable.end(0)), e;
        } }, { key: "getCurrentTime", value: function value() {
          return this.media && this.media.currentTime;
        } }, { key: "getPlayedPercents", value: function value() {
          return this.getCurrentTime() / this.getDuration() || 0;
        } }, { key: "getPlaybackRate", value: function value() {
          return this.playbackRate || this.media.playbackRate;
        } }, { key: "setPlaybackRate", value: function value(e) {
          this.playbackRate = e || 1, this.media.playbackRate = this.playbackRate;
        } }, { key: "seekTo", value: function value(e) {
          null != e && (this.media.currentTime = e), this.clearPlayEnd();
        } }, { key: "play", value: function value(e, t) {
          this.seekTo(e);var r = this.media.play();return t && this.setPlayEnd(t), r;
        } }, { key: "pause", value: function value() {
          var e = void 0;return this.media && (e = this.media.pause()), this.clearPlayEnd(), e;
        } }, { key: "setPlayEnd", value: function value(e) {
          var t = this;this._onPlayEnd = function (r) {
            r >= e && (t.pause(), t.seekTo(e));
          }, this.on("audioprocess", this._onPlayEnd);
        } }, { key: "clearPlayEnd", value: function value() {
          this._onPlayEnd && (this.un("audioprocess", this._onPlayEnd), this._onPlayEnd = null);
        } }, { key: "getPeaks", value: function value(e, r, n) {
          return this.buffer ? o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getPeaks", this).call(this, e, r, n) : this.peaks || [];
        } }, { key: "setSinkId", value: function value(e) {
          return e ? this.media.setSinkId ? this.media.setSinkId(e) : Promise.reject(new Error("setSinkId is not supported in your browser")) : Promise.reject(new Error("Invalid deviceId: " + e));
        } }, { key: "getVolume", value: function value() {
          return this.volume || this.media.volume;
        } }, { key: "setVolume", value: function value(e) {
          this.volume = e, this.media.volume = this.volume;
        } }, { key: "destroy", value: function value() {
          this.pause(), this.unAll(), this.params.removeMediaElementOnDestroy && this.media && this.media.parentNode && this.media.parentNode.removeChild(this.media), this.media = null;
        } }]), t;
    }(l.default));t.default = h, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(t, "__esModule", { value: !0 });var a = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        i = function () {
      function e() {
        n(this, e), this.clearPeakCache();
      }return a(e, [{ key: "clearPeakCache", value: function value() {
          this.peakCacheRanges = [], this.peakCacheLength = -1;
        } }, { key: "addRangeToPeakCache", value: function value(e, t, r) {
          e != this.peakCacheLength && (this.clearPeakCache(), this.peakCacheLength = e);for (var n = [], a = 0; a < this.peakCacheRanges.length && this.peakCacheRanges[a] < t;) {
            a++;
          }for (a % 2 == 0 && n.push(t); a < this.peakCacheRanges.length && this.peakCacheRanges[a] <= r;) {
            n.push(this.peakCacheRanges[a]), a++;
          }a % 2 == 0 && n.push(r), n = n.filter(function (e, t, r) {
            return 0 == t ? e != r[t + 1] : t == r.length - 1 ? e != r[t - 1] : e != r[t - 1] && e != r[t + 1];
          }), this.peakCacheRanges = this.peakCacheRanges.concat(n), this.peakCacheRanges = this.peakCacheRanges.sort(function (e, t) {
            return e - t;
          }).filter(function (e, t, r) {
            return 0 == t ? e != r[t + 1] : t == r.length - 1 ? e != r[t - 1] : e != r[t - 1] && e != r[t + 1];
          });var i = [];for (a = 0; a < n.length; a += 2) {
            i.push([n[a], n[a + 1]]);
          }return i;
        } }, { key: "getCacheRanges", value: function value() {
          var e = [],
              t = void 0;for (t = 0; t < this.peakCacheRanges.length; t += 2) {
            e.push([this.peakCacheRanges[t], this.peakCacheRanges[t + 1]]);
          }return e;
        } }]), e;
    }();t.default = i, e.exports = t.default;
  }]);
});
//# sourceMappingURL=wavesurfer.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(72)(module)))

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10'%3E %3Cpolygon fill='%23c0c0c0' points='20,0 0,10 20,10'/%3E %3C/svg%3E"

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 92 131.03'%3E%3Ctitle%3EArtboard 1%3C/title%3E%3Cpath d='M80.94,1.87,45.59,36.51H12.72A12.75,12.75,0,0,0,0,49.23V81.8A12.75,12.75,0,0,0,12.72,94.51H45.59l35.35,34.64A6.5,6.5,0,0,0,92,124.51V6.52A6.5,6.5,0,0,0,80.94,1.87Z'/%3E%3C/svg%3E"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10'%3E %3Cpolygon fill='%23ffffff' points='20,0 0,10 20,10'/%3E %3C/svg%3E"

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(128);


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })

/******/ });