// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7fmqN":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _robotJs = require("../src/robot.js");
var _interpreterJs = require("../src/interpreter.js");
var _puzzleJs = require("../src/puzzle.js");
// 'robots.ttf' defines 16 ad-hoc icons, using codes from \uEE00 to \uEE0F :
// 0 = robot pointing east, 1 = robot pointing south, 2 = robot pointing west,
// 3 = robot pointing north, 4 = star, 5 = disk, 6 = box, 7 = flash,
// 8 = heart, 9 = broken heart, A = lock, B = open lock, C = key,
// D = droplet, E = rocket, F = empty
const icons = {
    robotEast: {
        string: '\uEE00',
        color: 'pink'
    },
    robotSouth: {
        string: '\uEE01',
        color: 'pink'
    },
    robotWest: {
        string: '\uEE02',
        color: 'pink'
    },
    robotNorth: {
        string: '\uEE03',
        color: 'pink'
    },
    star: {
        string: '\uEE04',
        color: 'yellow'
    },
    disk: {
        string: '\uEE05',
        color: 'red'
    },
    box: {
        string: '\uEE06',
        color: 'red'
    },
    flash: {
        string: '\uEE07',
        color: 'red'
    },
    heart: {
        string: '\uEE08',
        color: 'red'
    },
    heartBroken: {
        string: '\uEE09',
        color: 'red'
    },
    lock: {
        string: '\uEE0A',
        color: 'red'
    },
    lockOpen: {
        string: '\uEE0B',
        color: 'red'
    },
    key: {
        string: '\uEE0C',
        color: 'red'
    },
    droplet: {
        string: '\uEE0D',
        color: 'red'
    },
    rocket: {
        string: '\uEE0E',
        color: 'red'
    },
    empty: {
        string: '\uEE0F',
        color: 'red'
    }
};
////////////////////////// Puzzles //////////////////////////////////
let aPuzzle1 = {
    board: [
        '                ',
        '                ',
        '                ',
        '         bB     ',
        '        bB      ',
        '       bB       ',
        '      bB        ',
        '     bB         ',
        '    Bb          ',
        '   Bb           ',
        '    bbb         ',
        '                '
    ],
    robot: {
        x: 10,
        y: 6,
        direction: 2
    }
};
let aPuzzle2 = {
    board: [
        '                ',
        '                ',
        '        bbb     ',
        '        b b     ',
        '      bbb B     ',
        '      b         ',
        '      bbb       ',
        '        b       ',
        '      bbb       ',
        '      b         ',
        '    bbb         ',
        '                '
    ],
    robot: {
        x: 10,
        y: 4,
        direction: 0
    }
};
let puzzles = [
    aPuzzle1,
    aPuzzle2
];
/////////////////////////////////////////////////
let b_move = {
    'func': _robotJs.move,
    'color': 'b'
};
let B_move = {
    'func': _robotJs.move,
    'color': 'B'
};
////////////////////////////////////////////////
let b_Right = {
    'func': _robotJs.right,
    'color': 'b'
};
let B_Right = {
    'func': _robotJs.right,
    'color': 'B'
};
////////////////////////////////////////////////
let b_left = {
    'func': _robotJs.left,
    'color': 'b'
};
let B_left = {
    'func': _robotJs.left,
    'color': 'B'
};
// ////////////////  program for aPuzzle1
let F1 = [
    b_move,
    b_move,
    b_left
];
let F2 = [
    b_move,
    b_move,
    b_Right,
    b_move,
    b_move,
    b_left,
    b_move,
    b_move,
    b_left,
    b_move,
    b_move,
    b_Right,
    b_move,
    b_move,
    b_Right,
    b_move,
    b_move,
    b_left,
    b_move,
    b_move,
    b_Right,
    b_move,
    b_move,
    b_Right,
    b_move,
    b_move
];
let b_F2 = {
    'func': F2,
    'color': 'b'
};
let b_F1 = {
    'func': F1,
    'color': 'b'
};
// ////////////////  program for aPuzzle2
let F11 = [
    b_move,
    b_move,
    b_Right,
    b_move,
    b_left,
    b_move,
    B_Right,
    B_Right,
    B_move,
    b_left,
    b_move,
    B_Right,
    B_move,
    b_left,
    b_move,
    b_Right,
    b_move,
    B_left,
    B_move,
    b_Right,
    b_move,
    B_left,
    B_move,
    b_Right,
    b_move,
    B_left,
    B_move,
    b_Right,
    b_move,
    B_left,
    B_move,
    b_Right,
    b_move
];
let b_F11 = {
    'func': F11,
    'color': 'b'
};
const Program1 = [
    b_F1,
    b_F2
];
const Program2 = [
    b_F11
];
let id = _puzzleJs.getRandomInt(2);
let program = [
    Program2,
    Program1
];
let aPuzzle = puzzles[id];
let C = _interpreterJs.make_context(program[id]);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const robotID = "robot";
function removeRobot() {
    const rCell = document.getElementById(robotID);
    rCell.removeAttribute('id');
    rCell.removeAttribute('style');
    rCell.innerText = icons.empty.string;
}
function addRobot(aBoardID, aRobot) {
    let aBoard = document.getElementById(aBoardID);
    let aCell = aBoard.rows[aRobot.x].cells[aRobot.y];
    let anIcon = icons[Object.keys(icons)[aRobot.direction]];
    aCell.id = robotID;
    aCell.innerText = anIcon.string;
    aCell.style.color = anIcon.color;
}
function addStar(aCell) {
    aCell.innerText = icons.star.string;
    aCell.style.color = icons.star.color;
}
function fillBoard(aBoardID, aPuzzle3) {
    const tbody = document.getElementById(aBoardID);
    aPuzzle3.board.forEach((aLine)=>{
        const newRow = tbody.insertRow();
        aLine.split('').forEach((aChar)=>{
            const newCell = newRow.insertCell();
            switch(aChar){
                case 'r':
                    newCell.className += " red_tile";
                    break;
                case 'g':
                    newCell.className += " green_tile";
                    break;
                case 'b':
                    newCell.className += " blue_tile";
                    break;
                case 'R':
                    newCell.className += " red_tile";
                    addStar(newCell);
                    break;
                case 'G':
                    newCell.className += " green_tile";
                    addStar(newCell);
                    break;
                case 'B':
                    newCell.className += " blue_tile";
                    addStar(newCell);
                    break;
            }
        });
    });
}
function Step(aBoardID, C1) {
    removeRobot();
    _robotJs.step(aPuzzle, C1, alert);
    addRobot(aBoardID, aPuzzle.robot);
}
function execute_program(aBoardID, context) {
    setInterval(()=>{
        Step(aBoardID, context);
    }, 100);
}
window.onload = ()=>{
    let aBoardID = "visualizer_board";
    fillBoard(aBoardID, aPuzzle);
    addRobot(aBoardID, aPuzzle.robot);
    document.getElementById("button_execute").addEventListener("click", ()=>execute_program(aBoardID, C)
    );
    document.getElementById("button_step").addEventListener("click", ()=>Step(aBoardID, C)
    );
};

},{"../src/robot.js":"iwS1q","../src/interpreter.js":"gTVuZ","../src/puzzle.js":"4wns9"}],"iwS1q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "robot_init", ()=>robot_init
);
parcelHelpers.export(exports, "get__direction", ()=>get__direction
);
parcelHelpers.export(exports, "get__x", ()=>get__x
);
parcelHelpers.export(exports, "get__y", ()=>get__y
);
parcelHelpers.export(exports, "move", ()=>move
);
parcelHelpers.export(exports, "left", ()=>left
);
parcelHelpers.export(exports, "right", ()=>right
);
parcelHelpers.export(exports, "robot_state", ()=>robot_state
);
/**
* context = {program, Pc, stack, nb_steps, nb_call_func} the context 
* where nb_steps is the number of steps in a program, 
* nb_call_func is the number of function calls and
* Pc "Programme counter" refers to the current position.
*/ //This function makes error_functions on the limits of the projects
parcelHelpers.export(exports, "throw_error", ()=>throw_error
);
parcelHelpers.export(exports, "execution_limits", ()=>execution_limits
);
parcelHelpers.export(exports, "apply_inst", ()=>apply_inst
);
parcelHelpers.export(exports, "match", ()=>match
);
parcelHelpers.export(exports, "step", ()=>step
);
var _stackJs = require("./stack.js");
var _puzzleJs = require("./puzzle.js");
var _interpreterJs = require("./interpreter.js");
/**
*  initializes a robot in the position of coordinates `(x, y)`
*  and a direction `direction`.
*  For direction, we take the convention below:
*          For east ---> 0
*          For south ---> 1
*          For west ---> 2
*          For north ---> 3
*/ let directions = {
    'EAST': 0,
    'SOUTH': 1,
    'WEST': 2,
    'NORTH': 3
};
function robot_init(x, y, direction) {
    return {
        "x": x,
        "y": y,
        "direction": direction
    };
}
function get__direction(puzzle) {
    return Object.keys(directions)[puzzle.robot['direction']];
}
function get__x(puzzle) {
    return puzzle.robot.x;
}
function get__y(puzzle) {
    return puzzle.robot.y;
}
function move(puzzle) {
    let d = puzzle.robot.direction;
    puzzle.robot.y += (1 - d) % 2 * (1 - d % 2);
    puzzle.robot.x += (2 - d) % 3 * (d % 2);
}
function left(puzzle) {
    puzzle.robot.direction === 0 ? puzzle.robot.direction = 3 : puzzle.robot.direction -= 1;
}
function right(puzzle) {
    puzzle.robot.direction === 3 ? puzzle.robot.direction = 0 : puzzle.robot.direction += 1;
}
function robot_state(puzzle) {
    return puzzle.robot;
}
function throw_error(message) {
    throw new Error(message);
}
function execution_limits(puzzle, context, error_function) {
    if (context.program.length > 5) {
        error_function("Program max size is 5");
        return 1;
    } else if (context.nb_steps === 1000) {
        error_function("Infinite loop error");
        return 1;
    } else if (context.nb_call_func === 50) {
        error_function("Stack overflow error");
        return 1;
    } else if (!_puzzleJs.is_valid_position(puzzle, puzzle.robot.x, puzzle.robot.y)) {
        error_function("Out of ground error");
        return 1;
    }
    return 0;
}
function apply_inst(puzzle, inst, error_function) {
    if (inst.func !== move && inst.func !== left && inst.func !== right && inst.func !== -1 && inst.func !== -2) {
        error_function("Unknown instruction error");
        return;
    }
    inst.func(puzzle);
}
function match(F, color) {
    return F.color === 'Gr' || F.color === color;
}
function step(puzzle, context, error_function) {
    if (context.Pc[0] === -1) return;
    execution_limits(puzzle, context, error_function);
    let fct_indx = context.Pc[0];
    let inst_indx = context.Pc[1];
    let func = context.program[fct_indx];
    let inst = context.program[fct_indx].func[inst_indx];
    let cell_content = _puzzleJs.get__cell_content(puzzle, puzzle.robot.x, puzzle.robot.y);
    if (context.Pc[1] === 0 && match(func, cell_content) || context.Pc[1] !== 0) {
        if (typeof inst.func === 'function') {
            if (match(inst, cell_content)) apply_inst(puzzle, inst, error_function);
            context.Pc = [
                fct_indx,
                inst_indx + 1
            ];
            context.nb_steps++;
        } else if (inst.func === -1) context.Pc = [
            fct_indx + 1,
            0
        ];
        else if (inst.func === -2) {
            if (_stackJs.stack__is_empty(context.s)) {
                context.Pc = [
                    -1,
                    -1
                ];
                console.log("Program finished and this is the result of the execution of your program:");
            } else context.Pc = _stackJs.unstack(context.s);
        } else if (match(inst, cell_content)) {
            context.Pc = [
                fct_indx,
                inst_indx + 1
            ];
            _stackJs.stack(context.s, context.Pc);
            context.Pc[0] = _interpreterJs.find_function(context.program, inst);
            context.Pc[1] = 0;
            context.nb_steps++;
            context.nb_call_func++;
        } else context.Pc = [
            fct_indx,
            inst_indx + 1
        ];
    } else if (context.Pc[0] === context.program.length - 1) {
        if (_stackJs.stack__is_empty(context.s)) {
            context.Pc = [
                -1,
                -1
            ];
            console.log("Program finished and this is the result of the execution of your program:");
        } else context.Pc = _stackJs.unstack(context.s);
    } else {
        console.log(context.Pc, ' not executed');
        context.Pc = [
            fct_indx + 1,
            0
        ];
    }
}

},{"./stack.js":"dfUzx","./puzzle.js":"4wns9","./interpreter.js":"gTVuZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfUzx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// a stack is an object such as s = {"tab": _tab, "last": _last}
parcelHelpers.export(exports, "empty_stack", ()=>empty_stack
);
parcelHelpers.export(exports, "stack__is_empty", ()=>stack__is_empty
);
parcelHelpers.export(exports, "stack", ()=>stack
);
parcelHelpers.export(exports, "unstack", ()=>unstack
) //export {empty_stack, stack__is_empty, stack, unstack};
;
function empty_stack() {
    return {
        'stack': [],
        'last': -1
    };
}
function stack__is_empty(s) {
    return s.last === -1;
}
function stack(s, element) {
    s.last++;
    const a = element[0];
    const b = element[1];
    s.stack.push([
        a,
        b
    ]);
}
function unstack(s) {
    s.last--;
    return s.stack.pop();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4wns9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Initialization of a puzzle: (x, y) is a valid position in the board.
parcelHelpers.export(exports, "make_puzzle", ()=>make_puzzle
);
parcelHelpers.export(exports, "get__cell_content", ()=>get__cell_content
);
//Fixing Board width and height.
// const HEIGHT = 12;
// const WIDTH = 16;
/**
 * Boolean that decides if a position is valid in a world:
 * "The robot cannot access to black cell". 
*/ parcelHelpers.export(exports, "is_valid_position", ()=>is_valid_position
);
parcelHelpers.export(exports, "get_robot__symbol", ()=>get_robot__symbol
);
//Print Puzzle if robot position is valid. Alert otherwise.
parcelHelpers.export(exports, "print_puzzle", ()=>print_puzzle
);
function make_puzzle(board, robot) {
    return {
        'board': board,
        'robot': robot
    };
}
/**
 * Defining a cell with it's position in the world and it's content.
 * For the project, we use only four colors:
 * Black, green, red, blue.
 * 
 */ let contents = {
    'Black': ' ',
    'Red': 'r',
    'Green': 'g',
    'Blue': 'b',
    'star_in_red_case': 'R',
    'star_in_green_case': 'G',
    'star_in_blue_case': 'B'
};
function get__cell_content(puzzle, x, y) {
    return puzzle.board[x][y];
}
function is_valid_position(puzzle, x, y) {
    return puzzle.board[x][y] !== contents['Black'];
}
//Printing robot direction.
let robot_symbols = [
    ">",
    "v",
    "<",
    "∧"
];
function get_robot__symbol(puzzle) {
    return robot_symbols[puzzle.robot.direction];
}
function print_puzzle(puzzle) {
    if (is_valid_position(puzzle, puzzle.robot.x, puzzle.robot.y)) {
        let save_board_row = puzzle.board[puzzle.robot.x].slice(0, puzzle.robot.y).concat(get_robot__symbol(puzzle)).concat(puzzle.board[puzzle.robot.x].slice(puzzle.robot.y + 1));
        let save_board = [].concat(puzzle.board);
        save_board[puzzle.robot.x] = save_board_row;
        return save_board;
    }
    return "Invalid robot position or program finished";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gTVuZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "make_context", ()=>make_context
);
parcelHelpers.export(exports, "find_function", ()=>find_function
);
parcelHelpers.export(exports, "is_over", ()=>is_over
);
parcelHelpers.export(exports, "execute_and_print", ()=>execute_and_print
);
var _puzzleJs = require("./puzzle.js");
var _robotJs = require("./robot.js");
var _stackJs = require("./stack.js");
function add_sentinel(Function, sentinel) {
    let length = Function.func.length;
    Function.func[length] = sentinel;
}
//This function build a context.
function make_context(program) {
    program.map((func, i)=>{
        if (i === program.length - 1) add_sentinel(func, {
            'func': -2
        });
        else //	    console.log(func);
        add_sentinel(func, {
            'func': -1
        });
    });
    return {
        'program': program,
        's': _stackJs.empty_stack(),
        'Pc': [
            0,
            0
        ],
        'nb_steps': 0,
        'nb_call_func': 0
    };
}
//find a function 'fct' in a program.
function find_function(program1, fct1) {
    function find_function_rec(program, fct, idx) {
        if (program[idx] === fct) return idx;
        else return find_function_rec(program, fct, idx + 1);
    }
    return find_function_rec(program1, fct1, 0);
}
//returns zero in limit cases or if the program was executed.
function is_over(puzzle, context, error_function) {
    if (context.Pc[0] === -1 && context.Pc[1] === -1) return 1;
    return _robotJs.execution_limits(puzzle, context, error_function);
}
//Execute a program on a puzzle and print robot movement.
function execute_and_print(puzzle, context, error_function) {
    console.log(_puzzleJs.print_puzzle(puzzle));
    while(!is_over(puzzle, context, error_function)){
        _robotJs.step(puzzle, context, error_function);
        console.log(_puzzleJs.print_puzzle(puzzle));
    }
}

},{"./puzzle.js":"4wns9","./robot.js":"iwS1q","./stack.js":"dfUzx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7fmqN","8lqZg"], "8lqZg", "parcelRequireb8af")

//# sourceMappingURL=robot.975ef6c8.js.map
