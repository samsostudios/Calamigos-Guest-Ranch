"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`http://localhost:${3e3}/esbuild`).addEventListener(
        "change",
        () => location.reload()
      );
    }
  });

  // node_modules/gsap/gsap-core.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config, _defaults, _suppressOverwrites, _reverting, _context, _bigNum, _tinyNum, _2PI, _HALF_PI, _gsID, _sqrt, _cos, _sin, _isString, _isFunction, _isNumber, _isUndefined, _isObject, _isNotFalse, _windowExists, _isFuncOrString, _isTypedArray, _isArray, _strictNumExp, _numExp, _numWithUnitExp, _complexStringNumExp, _relExp, _delimitedValueExp, _unitExp, _globalTimeline, _win, _coreInitted, _doc, _globals, _installScope, _coreReady, _install, _missingPlugin, _warn, _addGlobal, _emptyFunc, _startAtRevertConfig, _revertConfigNoKill, _revertConfig, _reservedProps, _lazyTweens, _lazyLookup, _lastRenderedFrame, _plugins, _effects, _nextGCFrame, _harnessPlugins, _callbackNames, _harness, _getCache, _getProperty, _forEachName, _round, _roundPrecise, _parseRelative, _arrayContainsAny, _lazyRender, _isRevertWorthy, _lazySafeRender, _numericIfPossible, _passThrough, _setDefaults, _setKeyframeDefaults, _merge, _mergeDeep, _copyExcluding, _inheritDefaults, _arraysMatch, _addLinkedListItem, _removeLinkedListItem, _removeFromParent, _uncache, _recacheAncestors, _rewindStartAt, _hasNoPausedAncestors, _elapsedCycleDuration, _animationCycle, _parentToChildTotalTime, _setEnd, _alignPlayhead, _postAddChecks, _addToTimeline, _scrollTrigger, _attemptInitTween, _parentPlayheadIsBeforeStart, _isFromOrFromStart, _renderZeroDurationTween, _findNextPauseTween, _setDuration, _onUpdateTotalDuration, _zeroPosition, _parsePosition, _createTweenType, _conditionalReturn, _clamp, getUnit, clamp, _slice, _isArrayLike, _flatten, toArray, selector, shuffle, distribute, _roundModifier, snap, random, pipe, unitize, normalize, _wrapArray, wrap, wrapYoyo, _replaceRandom, mapRange, interpolate, _getLabelInDirection, _callback, _interrupt, _quickTween, _registerPluginQueue, _createPlugin, _255, _colorLookup, _hue, splitColor, _colorOrderData, _formatColors, _colorExp, _hslExp, _colorStringFilter, _tickerActive, _ticker, _wake, _easeMap, _customEaseExp, _quotesExp, _parseObjectInString, _valueInParentheses, _configEaseFromString, _invertEase, _propagateYoyoEase, _parseEase, _insertEase, _easeInOutFromOut, _configElastic, _configBack, GSCache, Animation, Timeline, _addComplexStringPropTween, _addPropTween, _processVars, _checkPlugin, _overwritingTween, _forceAllPropTweens, _initTween, _updatePropTweens, _addAliasesToVars, _parseKeyframe, _parseFuncOrString, _staggerTweenProps, _staggerPropsToSkip, Tween, _setterPlain, _setterFunc, _setterFuncWithParam, _setterAttribute, _getSetter, _renderPlain, _renderBoolean, _renderComplexString, _renderPropTweens, _addPluginModifier, _killPropTweensOf, _setterWithModifier, _sortPropTweensByPriority, PropTween, _media, _listeners, _emptyArray, _lastMediaTime, _contextID, _dispatch, _onMediaChange, Context, MatchMedia, _gsap, _getPluginPropTween, _addModifiers, _buildModifierPlugin, gsap, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ;
  var init_gsap_core = __esm({
    "node_modules/gsap/gsap-core.js"() {
      init_live_reload();
      _config = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
          lineHeight: ""
        }
      };
      _defaults = {
        duration: 0.5,
        overwrite: false,
        delay: 0
      };
      _bigNum = 1e8;
      _tinyNum = 1 / _bigNum;
      _2PI = Math.PI * 2;
      _HALF_PI = _2PI / 4;
      _gsID = 0;
      _sqrt = Math.sqrt;
      _cos = Math.cos;
      _sin = Math.sin;
      _isString = function _isString2(value) {
        return typeof value === "string";
      };
      _isFunction = function _isFunction2(value) {
        return typeof value === "function";
      };
      _isNumber = function _isNumber2(value) {
        return typeof value === "number";
      };
      _isUndefined = function _isUndefined2(value) {
        return typeof value === "undefined";
      };
      _isObject = function _isObject2(value) {
        return typeof value === "object";
      };
      _isNotFalse = function _isNotFalse2(value) {
        return value !== false;
      };
      _windowExists = function _windowExists2() {
        return typeof window !== "undefined";
      };
      _isFuncOrString = function _isFuncOrString2(value) {
        return _isFunction(value) || _isString(value);
      };
      _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
      };
      _isArray = Array.isArray;
      _strictNumExp = /(?:-?\.?\d|\.)+/gi;
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
      _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
      _relExp = /[+-]=-?[.\d]+/;
      _delimitedValueExp = /[^,'"\[\]\s]+/gi;
      _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
      _globals = {};
      _installScope = {};
      _install = function _install2(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap;
      };
      _missingPlugin = function _missingPlugin2(property, value) {
        return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
      };
      _warn = function _warn2(message, suppress) {
        return !suppress && console.warn(message);
      };
      _addGlobal = function _addGlobal2(name, obj) {
        return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
      };
      _emptyFunc = function _emptyFunc2() {
        return 0;
      };
      _startAtRevertConfig = {
        suppressEvents: true,
        isStart: true,
        kill: false
      };
      _revertConfigNoKill = {
        suppressEvents: true,
        kill: false
      };
      _revertConfig = {
        suppressEvents: true
      };
      _reservedProps = {};
      _lazyTweens = [];
      _lazyLookup = {};
      _plugins = {};
      _effects = {};
      _nextGCFrame = 30;
      _harnessPlugins = [];
      _callbackNames = "";
      _harness = function _harness2(targets) {
        var target = targets[0], harnessPlugin, i;
        _isObject(target) || _isFunction(target) || (targets = [targets]);
        if (!(harnessPlugin = (target._gsap || {}).harness)) {
          i = _harnessPlugins.length;
          while (i-- && !_harnessPlugins[i].targetTest(target)) {
          }
          harnessPlugin = _harnessPlugins[i];
        }
        i = targets.length;
        while (i--) {
          targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
        }
        return targets;
      };
      _getCache = function _getCache2(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
      };
      _getProperty = function _getProperty2(target, property, v) {
        return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
      };
      _forEachName = function _forEachName2(names, func) {
        return (names = names.split(",")).forEach(func) || names;
      };
      _round = function _round2(value) {
        return Math.round(value * 1e5) / 1e5 || 0;
      };
      _roundPrecise = function _roundPrecise2(value) {
        return Math.round(value * 1e7) / 1e7 || 0;
      };
      _parseRelative = function _parseRelative2(start, value) {
        var operator = value.charAt(0), end = parseFloat(value.substr(2));
        start = parseFloat(start);
        return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
      };
      _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
        var l = toFind.length, i = 0;
        for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
        }
        return i < l;
      };
      _lazyRender = function _lazyRender2() {
        var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
        _lazyLookup = {};
        _lazyTweens.length = 0;
        for (i = 0; i < l; i++) {
          tween = a[i];
          tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
      };
      _isRevertWorthy = function _isRevertWorthy2(animation) {
        return !!(animation._initted || animation._startAt || animation.add);
      };
      _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
        _lazyTweens.length && !_reverting && _lazyRender();
        animation.render(time, suppressEvents, force || !!(_reverting && time < 0 && _isRevertWorthy(animation)));
        _lazyTweens.length && !_reverting && _lazyRender();
      };
      _numericIfPossible = function _numericIfPossible2(value) {
        var n = parseFloat(value);
        return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
      };
      _passThrough = function _passThrough2(p) {
        return p;
      };
      _setDefaults = function _setDefaults2(obj, defaults2) {
        for (var p in defaults2) {
          p in obj || (obj[p] = defaults2[p]);
        }
        return obj;
      };
      _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
        return function(obj, defaults2) {
          for (var p in defaults2) {
            p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
          }
        };
      };
      _merge = function _merge2(base, toMerge) {
        for (var p in toMerge) {
          base[p] = toMerge[p];
        }
        return base;
      };
      _mergeDeep = function _mergeDeep2(base, toMerge) {
        for (var p in toMerge) {
          p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
        }
        return base;
      };
      _copyExcluding = function _copyExcluding2(obj, excluding) {
        var copy = {}, p;
        for (p in obj) {
          p in excluding || (copy[p] = obj[p]);
        }
        return copy;
      };
      _inheritDefaults = function _inheritDefaults2(vars) {
        var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
        if (_isNotFalse(vars.inherit)) {
          while (parent) {
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
          }
        }
        return vars;
      };
      _arraysMatch = function _arraysMatch2(a1, a2) {
        var i = a1.length, match = i === a2.length;
        while (match && i-- && a1[i] === a2[i]) {
        }
        return i < 0;
      };
      _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = parent[lastProp], t2;
        if (sortBy) {
          t2 = child[sortBy];
          while (prev && prev[sortBy] > t2) {
            prev = prev._prev;
          }
        }
        if (prev) {
          child._next = prev._next;
          prev._next = child;
        } else {
          child._next = parent[firstProp];
          parent[firstProp] = child;
        }
        if (child._next) {
          child._next._prev = child;
        } else {
          parent[lastProp] = child;
        }
        child._prev = prev;
        child.parent = child._dp = parent;
        return child;
      };
      _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = child._prev, next = child._next;
        if (prev) {
          prev._next = next;
        } else if (parent[firstProp] === child) {
          parent[firstProp] = next;
        }
        if (next) {
          next._prev = prev;
        } else if (parent[lastProp] === child) {
          parent[lastProp] = prev;
        }
        child._next = child._prev = child.parent = null;
      };
      _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
        child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
        child._act = 0;
      };
      _uncache = function _uncache2(animation, child) {
        if (animation && (!child || child._end > animation._dur || child._start < 0)) {
          var a = animation;
          while (a) {
            a._dirty = 1;
            a = a.parent;
          }
        }
        return animation;
      };
      _recacheAncestors = function _recacheAncestors2(animation) {
        var parent = animation.parent;
        while (parent && parent.parent) {
          parent._dirty = 1;
          parent.totalDuration();
          parent = parent.parent;
        }
        return animation;
      };
      _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
        return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
      };
      _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
        return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
      };
      _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
        return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
      };
      _animationCycle = function _animationCycle2(tTime, cycleDuration) {
        var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
        return tTime && whole === tTime ? whole - 1 : whole;
      };
      _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
        return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
      };
      _setEnd = function _setEnd2(animation) {
        return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
      };
      _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
        var parent = animation._dp;
        if (parent && parent.smoothChildTiming && animation._ts) {
          animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
          _setEnd(animation);
          parent._dirty || _uncache(parent, animation);
        }
        return animation;
      };
      _postAddChecks = function _postAddChecks2(timeline2, child) {
        var t2;
        if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
          t2 = _parentToChildTotalTime(timeline2.rawTime(), child);
          if (!child._dur || _clamp(0, child.totalDuration(), t2) - child._tTime > _tinyNum) {
            child.render(t2, true);
          }
        }
        if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
          if (timeline2._dur < timeline2.duration()) {
            t2 = timeline2;
            while (t2._dp) {
              t2.rawTime() >= 0 && t2.totalTime(t2._tTime);
              t2 = t2._dp;
            }
          }
          timeline2._zTime = -_tinyNum;
        }
      };
      _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
        child.parent && _removeFromParent(child);
        child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
        child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
        _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
        _isFromOrFromStart(child) || (timeline2._recent = child);
        skipChecks || _postAddChecks(timeline2, child);
        timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
        return timeline2;
      };
      _scrollTrigger = function _scrollTrigger2(animation, trigger) {
        return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
      };
      _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
        _initTween(tween, time, tTime);
        if (!tween._initted) {
          return 1;
        }
        if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
          _lazyTweens.push(tween);
          tween._lazy = [tTime, suppressEvents];
          return 1;
        }
      };
      _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
        var parent = _ref.parent;
        return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
      };
      _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
        var data = _ref2.data;
        return data === "isFromStart" || data === "isStart";
      };
      _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
        var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
        if (repeatDelay && tween._repeat) {
          tTime = _clamp(0, tween._tDur, totalTime);
          iteration = _animationCycle(tTime, repeatDelay);
          tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
          if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
          }
        }
        if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
          if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
            return;
          }
          prevIteration = tween._zTime;
          tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
          suppressEvents || (suppressEvents = totalTime && !prevIteration);
          tween.ratio = ratio;
          tween._from && (ratio = 1 - ratio);
          tween._time = 0;
          tween._tTime = tTime;
          pt = tween._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
          totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
          tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
          tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
          if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents && !_reverting) {
              _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
              tween._prom && tween._prom();
            }
          }
        } else if (!tween._zTime) {
          tween._zTime = totalTime;
        }
      };
      _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
        var child;
        if (time > prevTime) {
          child = animation._first;
          while (child && child._start <= time) {
            if (child.data === "isPause" && child._start > prevTime) {
              return child;
            }
            child = child._next;
          }
        } else {
          child = animation._last;
          while (child && child._start >= time) {
            if (child.data === "isPause" && child._start < prevTime) {
              return child;
            }
            child = child._prev;
          }
        }
      };
      _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
        var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
        totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
        animation._dur = dur;
        animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
        totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
        animation.parent && _setEnd(animation);
        skipUncache || _uncache(animation.parent, animation);
        return animation;
      };
      _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
        return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
      };
      _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc,
        totalDuration: _emptyFunc
      };
      _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
        var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
        if (_isString(position) && (isNaN(position) || position in labels)) {
          offset = position.charAt(0);
          isPercent = position.substr(-1) === "%";
          i = position.indexOf("=");
          if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
          }
          if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
          }
          offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
          if (isPercent && percentAnimation) {
            offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
          }
          return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
        }
        return position == null ? clippedDuration : +position;
      };
      _createTweenType = function _createTweenType2(type, params, timeline2) {
        var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
        isLegacy && (vars.duration = params[1]);
        vars.parent = timeline2;
        if (type) {
          irVars = vars;
          parent = timeline2;
          while (parent && !("immediateRender" in irVars)) {
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
          }
          vars.immediateRender = _isNotFalse(irVars.immediateRender);
          type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
        }
        return new Tween(params[0], vars, params[varsIndex + 1]);
      };
      _conditionalReturn = function _conditionalReturn2(value, func) {
        return value || value === 0 ? func(value) : func;
      };
      _clamp = function _clamp2(min, max, value) {
        return value < min ? min : value > max ? max : value;
      };
      getUnit = function getUnit2(value, v) {
        return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
      };
      clamp = function clamp2(min, max, value) {
        return _conditionalReturn(value, function(v) {
          return _clamp(min, max, v);
        });
      };
      _slice = [].slice;
      _isArrayLike = function _isArrayLike2(value, nonEmpty) {
        return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
      };
      _flatten = function _flatten2(ar, leaveStrings, accumulator) {
        if (accumulator === void 0) {
          accumulator = [];
        }
        return ar.forEach(function(value) {
          var _accumulator;
          return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
        }) || accumulator;
      };
      toArray = function toArray2(value, scope, leaveStrings) {
        return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
      };
      selector = function selector2(value) {
        value = toArray(value)[0] || _warn("Invalid scope") || {};
        return function(v) {
          var el = value.current || value.nativeElement || value;
          return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
        };
      };
      shuffle = function shuffle2(a) {
        return a.sort(function() {
          return 0.5 - Math.random();
        });
      };
      distribute = function distribute2(v) {
        if (_isFunction(v)) {
          return v;
        }
        var vars = _isObject(v) ? v : {
          each: v
        }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
        if (_isString(from)) {
          ratioX = ratioY = {
            center: 0.5,
            edges: 0.5,
            end: 1
          }[from] || 0;
        } else if (!isDecimal && ratios) {
          ratioX = from[0];
          ratioY = from[1];
        }
        return function(i, target, a) {
          var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
          if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
            if (!wrapAt) {
              max = -_bigNum;
              while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
              }
              wrapAt < l && wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for (j = 0; j < l; j++) {
              x = j % wrapAt - originX;
              y = originY - (j / wrapAt | 0);
              distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
              d > max && (max = d);
              d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0;
            ease = ease && l < 0 ? _invertEase(ease) : ease;
          }
          l = (distances[i] - distances.min) / distances.max || 0;
          return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
        };
      };
      _roundModifier = function _roundModifier2(v) {
        var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
        return function(raw) {
          var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
          return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
        };
      };
      snap = function snap2(snapTo, value) {
        var isArray = _isArray(snapTo), radius, is2D;
        if (!isArray && _isObject(snapTo)) {
          radius = isArray = snapTo.radius || _bigNum;
          if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) {
              radius *= radius;
            }
          } else {
            snapTo = _roundModifier(snapTo.increment);
          }
        }
        return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
          is2D = snapTo(raw);
          return Math.abs(is2D - raw) <= radius ? is2D : raw;
        } : function(raw) {
          var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
          while (i--) {
            if (is2D) {
              dx = snapTo[i].x - x;
              dy = snapTo[i].y - y;
              dx = dx * dx + dy * dy;
            } else {
              dx = Math.abs(snapTo[i] - x);
            }
            if (dx < min) {
              min = dx;
              closest = i;
            }
          }
          closest = !radius || min <= radius ? snapTo[closest] : raw;
          return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
        });
      };
      random = function random2(min, max, roundingIncrement, returnFunction) {
        return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
          return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
        });
      };
      pipe = function pipe2() {
        for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
          functions[_key] = arguments[_key];
        }
        return function(value) {
          return functions.reduce(function(v, f) {
            return f(v);
          }, value);
        };
      };
      unitize = function unitize2(func, unit) {
        return function(value) {
          return func(parseFloat(value)) + (unit || getUnit(value));
        };
      };
      normalize = function normalize2(min, max, value) {
        return mapRange(min, max, 0, 1, value);
      };
      _wrapArray = function _wrapArray2(a, wrapper, value) {
        return _conditionalReturn(value, function(index) {
          return a[~~wrapper(index)];
        });
      };
      wrap = function wrap2(min, max, value) {
        var range = max - min;
        return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
          return (range + (value2 - min) % range) % range + min;
        });
      };
      wrapYoyo = function wrapYoyo2(min, max, value) {
        var range = max - min, total = range * 2;
        return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
          value2 = (total + (value2 - min) % total) % total || 0;
          return min + (value2 > range ? total - value2 : value2);
        });
      };
      _replaceRandom = function _replaceRandom2(value) {
        var prev = 0, s = "", i, nums, end, isArray;
        while (~(i = value.indexOf("random(", prev))) {
          end = value.indexOf(")", i);
          isArray = value.charAt(i + 7) === "[";
          nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
          s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
          prev = end + 1;
        }
        return s + value.substr(prev, value.length - prev);
      };
      mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
        var inRange = inMax - inMin, outRange = outMax - outMin;
        return _conditionalReturn(value, function(value2) {
          return outMin + ((value2 - inMin) / inRange * outRange || 0);
        });
      };
      interpolate = function interpolate2(start, end, progress, mutate) {
        var func = isNaN(start + end) ? 0 : function(p2) {
          return (1 - p2) * start + p2 * end;
        };
        if (!func) {
          var isString = _isString(start), master = {}, p, i, interpolators, l, il;
          progress === true && (mutate = 1) && (progress = null);
          if (isString) {
            start = {
              p: start
            };
            end = {
              p: end
            };
          } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for (i = 1; i < l; i++) {
              interpolators.push(interpolate2(start[i - 1], start[i]));
            }
            l--;
            func = function func2(p2) {
              p2 *= l;
              var i2 = Math.min(il, ~~p2);
              return interpolators[i2](p2 - i2);
            };
            progress = end;
          } else if (!mutate) {
            start = _merge(_isArray(start) ? [] : {}, start);
          }
          if (!interpolators) {
            for (p in end) {
              _addPropTween.call(master, start, p, "get", end[p]);
            }
            func = function func2(p2) {
              return _renderPropTweens(p2, master) || (isString ? start.p : start);
            };
          }
        }
        return _conditionalReturn(progress, func);
      };
      _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
        var labels = timeline2.labels, min = _bigNum, p, distance, label;
        for (p in labels) {
          distance = labels[p] - fromTime;
          if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
          }
        }
        return label;
      };
      _callback = function _callback2(animation, type, executeLazyFirst) {
        var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
        if (!callback) {
          return;
        }
        params = v[type + "Params"];
        scope = v.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender();
        context3 && (_context = context3);
        result = params ? callback.apply(scope, params) : callback.call(scope);
        _context = prevContext;
        return result;
      };
      _interrupt = function _interrupt2(animation) {
        _removeFromParent(animation);
        animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
        animation.progress() < 1 && _callback(animation, "onInterrupt");
        return animation;
      };
      _registerPluginQueue = [];
      _createPlugin = function _createPlugin2(config3) {
        if (!config3) return;
        config3 = !config3.name && config3["default"] || config3;
        if (_windowExists() || config3.headless) {
          var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
            this._props = [];
          } : config3, instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
          }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0
          };
          _wake();
          if (config3 !== Plugin) {
            if (_plugins[name]) {
              return;
            }
            _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
            _plugins[Plugin.prop = name] = Plugin;
            if (config3.targetTest) {
              _harnessPlugins.push(Plugin);
              _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
          }
          _addGlobal(name, Plugin);
          config3.register && config3.register(gsap, Plugin, PropTween);
        } else {
          _registerPluginQueue.push(config3);
        }
      };
      _255 = 255;
      _colorLookup = {
        aqua: [0, _255, _255],
        lime: [0, _255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _255],
        navy: [0, 0, 128],
        white: [_255, _255, _255],
        olive: [128, 128, 0],
        yellow: [_255, _255, 0],
        orange: [_255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_255, 0, 0],
        pink: [_255, 192, 203],
        cyan: [0, _255, _255],
        transparent: [_255, _255, _255, 0]
      };
      _hue = function _hue2(h, m1, m2) {
        h += h < 0 ? 1 : h > 1 ? -1 : 0;
        return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
      };
      splitColor = function splitColor2(v, toHSL, forceAlpha) {
        var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
        if (!a) {
          if (v.substr(-1) === ",") {
            v = v.substr(0, v.length - 1);
          }
          if (_colorLookup[v]) {
            a = _colorLookup[v];
          } else if (v.charAt(0) === "#") {
            if (v.length < 6) {
              r = v.charAt(1);
              g = v.charAt(2);
              b = v.charAt(3);
              v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
              a = parseInt(v.substr(1, 6), 16);
              return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
            }
            v = parseInt(v.substr(1), 16);
            a = [v >> 16, v >> 8 & _255, v & _255];
          } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
              h = +a[0] % 360 / 360;
              s = +a[1] / 100;
              l = +a[2] / 100;
              g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
              r = l * 2 - g;
              a.length > 3 && (a[3] *= 1);
              a[0] = _hue(h + 1 / 3, r, g);
              a[1] = _hue(h, r, g);
              a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
              a = v.match(_numExp);
              forceAlpha && a.length < 4 && (a[3] = 1);
              return a;
            }
          } else {
            a = v.match(_strictNumExp) || _colorLookup.transparent;
          }
          a = a.map(Number);
        }
        if (toHSL && !wasHSL) {
          r = a[0] / _255;
          g = a[1] / _255;
          b = a[2] / _255;
          max = Math.max(r, g, b);
          min = Math.min(r, g, b);
          l = (max + min) / 2;
          if (max === min) {
            h = s = 0;
          } else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
          }
          a[0] = ~~(h + 0.5);
          a[1] = ~~(s * 100 + 0.5);
          a[2] = ~~(l * 100 + 0.5);
        }
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      };
      _colorOrderData = function _colorOrderData2(v) {
        var values = [], c = [], i = -1;
        v.split(_colorExp).forEach(function(v2) {
          var a = v2.match(_numWithUnitExp) || [];
          values.push.apply(values, a);
          c.push(i += a.length + 1);
        });
        values.c = c;
        return values;
      };
      _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
        var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
        if (!colors) {
          return s;
        }
        colors = colors.map(function(color) {
          return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
        });
        if (orderMatchData) {
          d = _colorOrderData(s);
          c = orderMatchData.c;
          if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for (; i < l; i++) {
              result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
          }
        }
        if (!shell) {
          shell = s.split(_colorExp);
          l = shell.length - 1;
          for (; i < l; i++) {
            result += shell[i] + colors[i];
          }
        }
        return result + shell[l];
      };
      _colorExp = function() {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
        for (p in _colorLookup) {
          s += "|" + p + "\\b";
        }
        return new RegExp(s + ")", "gi");
      }();
      _hslExp = /hsl[a]?\(/;
      _colorStringFilter = function _colorStringFilter2(a) {
        var combined = a.join(" "), toHSL;
        _colorExp.lastIndex = 0;
        if (_colorExp.test(combined)) {
          toHSL = _hslExp.test(combined);
          a[1] = _formatColors(a[1], toHSL);
          a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
          return true;
        }
      };
      _ticker = function() {
        var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
          var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
          (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
          _lastUpdate += elapsed;
          time = _lastUpdate - _startTime;
          overlap = time - _nextTime;
          if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1e3;
            _self.time = time = time / 1e3;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
          }
          manual || (_id = _req(_tick2));
          if (dispatch) {
            for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
              _listeners3[_i2](time, _delta, frame, v);
            }
          }
        };
        _self = {
          time: 0,
          frame: 0,
          tick: function tick() {
            _tick(true);
          },
          deltaRatio: function deltaRatio(fps) {
            return _delta / (1e3 / (fps || 60));
          },
          wake: function wake() {
            if (_coreReady) {
              if (!_coreInitted && _windowExists()) {
                _win = _coreInitted = window;
                _doc = _win.document || {};
                _globals.gsap = gsap;
                (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                _registerPluginQueue.forEach(_createPlugin);
              }
              _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
              _id && _self.sleep();
              _req = _raf || function(f) {
                return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
              };
              _tickerActive = 1;
              _tick(2);
            }
          },
          sleep: function sleep() {
            (_raf ? cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
          },
          lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || Infinity;
            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
          },
          fps: function fps(_fps) {
            _gap = 1e3 / (_fps || 240);
            _nextTime = _self.time * 1e3 + _gap;
          },
          add: function add(callback, once, prioritize) {
            var func = once ? function(t2, d, f, v) {
              callback(t2, d, f, v);
              _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners3[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
          },
          remove: function remove(callback, i) {
            ~(i = _listeners3.indexOf(callback)) && _listeners3.splice(i, 1) && _i2 >= i && _i2--;
          },
          _listeners: _listeners3
        };
        return _self;
      }();
      _wake = function _wake2() {
        return !_tickerActive && _ticker.wake();
      };
      _easeMap = {};
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
      _quotesExp = /["']/g;
      _parseObjectInString = function _parseObjectInString2(value) {
        var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
        for (; i < l; i++) {
          val = split[i];
          index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
          parsedVal = val.substr(0, index);
          obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
          key = val.substr(index + 1).trim();
        }
        return obj;
      };
      _valueInParentheses = function _valueInParentheses2(value) {
        var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
        return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
      };
      _configEaseFromString = function _configEaseFromString2(name) {
        var split = (name + "").split("("), ease = _easeMap[split[0]];
        return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
      };
      _invertEase = function _invertEase2(ease) {
        return function(p) {
          return 1 - ease(1 - p);
        };
      };
      _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
        var child = timeline2._first, ease;
        while (child) {
          if (child instanceof Timeline) {
            _propagateYoyoEase2(child, isYoyo);
          } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) {
              _propagateYoyoEase2(child.timeline, isYoyo);
            } else {
              ease = child._ease;
              child._ease = child._yEase;
              child._yEase = ease;
              child._yoyo = isYoyo;
            }
          }
          child = child._next;
        }
      };
      _parseEase = function _parseEase2(ease, defaultEase) {
        return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
      };
      _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
        if (easeOut === void 0) {
          easeOut = function easeOut2(p) {
            return 1 - easeIn(1 - p);
          };
        }
        if (easeInOut === void 0) {
          easeInOut = function easeInOut2(p) {
            return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
          };
        }
        var ease = {
          easeIn,
          easeOut,
          easeInOut
        }, lowercaseName;
        _forEachName(names, function(name) {
          _easeMap[name] = _globals[name] = ease;
          _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
          for (var p in ease) {
            _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
          }
        });
        return ease;
      };
      _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
        return function(p) {
          return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
        };
      };
      _configElastic = function _configElastic2(type, amplitude, period) {
        var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
          return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        p2 = _2PI / p2;
        ease.config = function(amplitude2, period2) {
          return _configElastic2(type, amplitude2, period2);
        };
        return ease;
      };
      _configBack = function _configBack2(type, overshoot) {
        if (overshoot === void 0) {
          overshoot = 1.70158;
        }
        var easeOut = function easeOut2(p) {
          return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        ease.config = function(overshoot2) {
          return _configBack2(type, overshoot2);
        };
        return ease;
      };
      _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
        var power = i < 5 ? i + 1 : i;
        _insertEase(name + ",Power" + (power - 1), i ? function(p) {
          return Math.pow(p, power);
        } : function(p) {
          return p;
        }, function(p) {
          return 1 - Math.pow(1 - p, power);
        }, function(p) {
          return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
        });
      });
      _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
      _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
      (function(n, c) {
        var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
          return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
        };
        _insertEase("Bounce", function(p) {
          return 1 - easeOut(1 - p);
        }, easeOut);
      })(7.5625, 2.75);
      _insertEase("Expo", function(p) {
        return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
      });
      _insertEase("Circ", function(p) {
        return -(_sqrt(1 - p * p) - 1);
      });
      _insertEase("Sine", function(p) {
        return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
      });
      _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
      _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
        config: function config(steps, immediateStart) {
          if (steps === void 0) {
            steps = 1;
          }
          var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
          return function(p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
          };
        }
      };
      _defaults.ease = _easeMap["quad.out"];
      _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
        return _callbackNames += name + "," + name + "Params,";
      });
      GSCache = function GSCache2(target, harness) {
        this.id = _gsID++;
        target._gsap = this;
        this.target = target;
        this.harness = harness;
        this.get = harness ? harness.get : _getProperty;
        this.set = harness ? harness.getSetter : _getSetter;
      };
      Animation = /* @__PURE__ */ function() {
        function Animation2(vars) {
          this.vars = vars;
          this._delay = +vars.delay || 0;
          if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
          }
          this._ts = 1;
          _setDuration(this, +vars.duration, 1, 1);
          this.data = vars.data;
          if (_context) {
            this._ctx = _context;
            _context.data.push(this);
          }
          _tickerActive || _ticker.wake();
        }
        var _proto = Animation2.prototype;
        _proto.delay = function delay(value) {
          if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
          }
          return this._delay;
        };
        _proto.duration = function duration(value) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
        };
        _proto.totalDuration = function totalDuration(value) {
          if (!arguments.length) {
            return this._tDur;
          }
          this._dirty = 0;
          return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
        };
        _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
          _wake();
          if (!arguments.length) {
            return this._tTime;
          }
          var parent = this._dp;
          if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this);
            while (parent && parent.parent) {
              if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                parent.totalTime(parent._tTime, true);
              }
              parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
              _addToTimeline(this._dp, this, this._start - this._delay);
            }
          }
          if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            this._ts || (this._pTime = _totalTime);
            _lazySafeRender(this, _totalTime, suppressEvents);
          }
          return this;
        };
        _proto.time = function time(value, suppressEvents) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
        };
        _proto.totalProgress = function totalProgress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
        };
        _proto.progress = function progress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
        };
        _proto.iteration = function iteration(value, suppressEvents) {
          var cycleDuration = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
        };
        _proto.timeScale = function timeScale(value, suppressEvents) {
          if (!arguments.length) {
            return this._rts === -_tinyNum ? 0 : this._rts;
          }
          if (this._rts === value) {
            return this;
          }
          var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
          this._rts = +value || 0;
          this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
          this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
          _setEnd(this);
          return _recacheAncestors(this);
        };
        _proto.paused = function paused(value) {
          if (!arguments.length) {
            return this._ps;
          }
          if (this._ps !== value) {
            this._ps = value;
            if (value) {
              this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
              this._ts = this._act = 0;
            } else {
              _wake();
              this._ts = this._rts;
              this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
            }
          }
          return this;
        };
        _proto.startTime = function startTime(value) {
          if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
          }
          return this._start;
        };
        _proto.endTime = function endTime(includeRepeats) {
          return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
        };
        _proto.rawTime = function rawTime(wrapRepeats) {
          var parent = this.parent || this._dp;
          return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
        };
        _proto.revert = function revert(config3) {
          if (config3 === void 0) {
            config3 = _revertConfig;
          }
          var prevIsReverting = _reverting;
          _reverting = config3;
          if (_isRevertWorthy(this)) {
            this.timeline && this.timeline.revert(config3);
            this.totalTime(-0.01, config3.suppressEvents);
          }
          this.data !== "nested" && config3.kill !== false && this.kill();
          _reverting = prevIsReverting;
          return this;
        };
        _proto.globalTime = function globalTime(rawTime) {
          var animation = this, time = arguments.length ? rawTime : animation.rawTime();
          while (animation) {
            time = animation._start + time / (Math.abs(animation._ts) || 1);
            animation = animation._dp;
          }
          return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
        };
        _proto.repeat = function repeat(value) {
          if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
          }
          return this._repeat === -2 ? Infinity : this._repeat;
        };
        _proto.repeatDelay = function repeatDelay(value) {
          if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
          }
          return this._rDelay;
        };
        _proto.yoyo = function yoyo(value) {
          if (arguments.length) {
            this._yoyo = value;
            return this;
          }
          return this._yoyo;
        };
        _proto.seek = function seek(position, suppressEvents) {
          return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
        };
        _proto.restart = function restart(includeDelay, suppressEvents) {
          this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
          this._dur || (this._zTime = -_tinyNum);
          return this;
        };
        _proto.play = function play(from, suppressEvents) {
          from != null && this.seek(from, suppressEvents);
          return this.reversed(false).paused(false);
        };
        _proto.reverse = function reverse(from, suppressEvents) {
          from != null && this.seek(from || this.totalDuration(), suppressEvents);
          return this.reversed(true).paused(false);
        };
        _proto.pause = function pause(atTime, suppressEvents) {
          atTime != null && this.seek(atTime, suppressEvents);
          return this.paused(true);
        };
        _proto.resume = function resume() {
          return this.paused(false);
        };
        _proto.reversed = function reversed(value) {
          if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
            return this;
          }
          return this._rts < 0;
        };
        _proto.invalidate = function invalidate() {
          this._initted = this._act = 0;
          this._zTime = -_tinyNum;
          return this;
        };
        _proto.isActive = function isActive() {
          var parent = this.parent || this._dp, start = this._start, rawTime;
          return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
        };
        _proto.eventCallback = function eventCallback(type, callback, params) {
          var vars = this.vars;
          if (arguments.length > 1) {
            if (!callback) {
              delete vars[type];
            } else {
              vars[type] = callback;
              params && (vars[type + "Params"] = params);
              type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
          }
          return vars[type];
        };
        _proto.then = function then(onFulfilled) {
          var self = this;
          return new Promise(function(resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
              var _then = self.then;
              self.then = null;
              _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
              resolve(f);
              self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
              _resolve();
            } else {
              self._prom = _resolve;
            }
          });
        };
        _proto.kill = function kill() {
          _interrupt(this);
        };
        return Animation2;
      }();
      _setDefaults(Animation.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: false,
        parent: null,
        _initted: false,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -_tinyNum,
        _prom: 0,
        _ps: false,
        _rts: 1
      });
      Timeline = /* @__PURE__ */ function(_Animation) {
        _inheritsLoose(Timeline2, _Animation);
        function Timeline2(vars, position) {
          var _this;
          if (vars === void 0) {
            vars = {};
          }
          _this = _Animation.call(this, vars) || this;
          _this.labels = {};
          _this.smoothChildTiming = !!vars.smoothChildTiming;
          _this.autoRemoveChildren = !!vars.autoRemoveChildren;
          _this._sort = _isNotFalse(vars.sortChildren);
          _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
          vars.reversed && _this.reverse();
          vars.paused && _this.paused(true);
          vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
          return _this;
        }
        var _proto2 = Timeline2.prototype;
        _proto2.to = function to(targets, vars, position) {
          _createTweenType(0, arguments, this);
          return this;
        };
        _proto2.from = function from(targets, vars, position) {
          _createTweenType(1, arguments, this);
          return this;
        };
        _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
          _createTweenType(2, arguments, this);
          return this;
        };
        _proto2.set = function set(targets, vars, position) {
          vars.duration = 0;
          vars.parent = this;
          _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
          vars.immediateRender = !!vars.immediateRender;
          new Tween(targets, vars, _parsePosition(this, position), 1);
          return this;
        };
        _proto2.call = function call(callback, params, position) {
          return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
        };
        _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.duration = duration;
          vars.stagger = vars.stagger || stagger;
          vars.onComplete = onCompleteAll;
          vars.onCompleteParams = onCompleteAllParams;
          vars.parent = this;
          new Tween(targets, vars, _parsePosition(this, position));
          return this;
        };
        _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.runBackwards = 1;
          _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
          return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
          toVars.startAt = fromVars;
          _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
          return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.render = function render4(totalTime, suppressEvents, force) {
          var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
          this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
          if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
              tTime += this._time - prevTime;
              totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
              dur || (prevTime = this._zTime);
              (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
              yoyo = this._yoyo;
              cycleDuration = dur + this._rDelay;
              if (this._repeat < -1 && totalTime < 0) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
              time = _roundPrecise(tTime % cycleDuration);
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                prevIteration = _roundPrecise(tTime / cycleDuration);
                iteration = ~~prevIteration;
                if (iteration && iteration === prevIteration) {
                  time = dur;
                  iteration--;
                }
                time > dur && (time = dur);
              }
              prevIteration = _animationCycle(this._tTime, cycleDuration);
              !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
              if (yoyo && iteration & 1) {
                time = dur - time;
                isYoyo = 1;
              }
              if (iteration !== prevIteration && !this._lock) {
                var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                iteration < prevIteration && (rewinding = !rewinding);
                prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
                this._lock = 1;
                this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                this._tTime = tTime;
                !suppressEvents && this.parent && _callback(this, "onRepeat");
                this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                  return this;
                }
                dur = this._dur;
                tDur = this._tDur;
                if (doesWrap) {
                  this._lock = 2;
                  prevTime = rewinding ? dur : -1e-4;
                  this.render(prevTime, true);
                  this.vars.repeatRefresh && !isYoyo && this.invalidate();
                }
                this._lock = 0;
                if (!this._ts && !prevPaused) {
                  return this;
                }
                _propagateYoyoEase(this, isYoyo);
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
              pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
              if (pauseTween) {
                tTime -= time - (time = pauseTween._start);
              }
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale;
            if (!this._initted) {
              this._onUpdate = this.vars.onUpdate;
              this._initted = 1;
              this._zTime = totalTime;
              prevTime = 0;
            }
            if (!prevTime && tTime && !suppressEvents && !prevIteration) {
              _callback(this, "onStart");
              if (this._tTime !== tTime) {
                return this;
              }
            }
            if (time >= prevTime && totalTime >= 0) {
              child = this._first;
              while (child) {
                next = child._next;
                if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
                  child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = -_tinyNum);
                    break;
                  }
                }
                child = next;
              }
            } else {
              child = this._last;
              var adjustedTime = totalTime < 0 ? totalTime : time;
              while (child) {
                next = child._prev;
                if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
                  child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child));
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                    break;
                  }
                }
                child = next;
              }
            }
            if (pauseTween && !suppressEvents) {
              this.pause();
              pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
              if (this._ts) {
                this._start = prevStart;
                _setEnd(this);
                return this.render(totalTime, suppressEvents, force);
              }
            }
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
              if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                if (!this._lock) {
                  (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                  if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                    _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                  }
                }
              }
            }
          }
          return this;
        };
        _proto2.add = function add(child, position) {
          var _this2 = this;
          _isNumber(position) || (position = _parsePosition(this, position, child));
          if (!(child instanceof Animation)) {
            if (_isArray(child)) {
              child.forEach(function(obj) {
                return _this2.add(obj, position);
              });
              return this;
            }
            if (_isString(child)) {
              return this.addLabel(child, position);
            }
            if (_isFunction(child)) {
              child = Tween.delayedCall(0, child);
            } else {
              return this;
            }
          }
          return this !== child ? _addToTimeline(this, child, position) : this;
        };
        _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
          if (nested === void 0) {
            nested = true;
          }
          if (tweens === void 0) {
            tweens = true;
          }
          if (timelines === void 0) {
            timelines = true;
          }
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = -_bigNum;
          }
          var a = [], child = this._first;
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              if (child instanceof Tween) {
                tweens && a.push(child);
              } else {
                timelines && a.push(child);
                nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
              }
            }
            child = child._next;
          }
          return a;
        };
        _proto2.getById = function getById2(id) {
          var animations = this.getChildren(1, 1, 1), i = animations.length;
          while (i--) {
            if (animations[i].vars.id === id) {
              return animations[i];
            }
          }
        };
        _proto2.remove = function remove(child) {
          if (_isString(child)) {
            return this.removeLabel(child);
          }
          if (_isFunction(child)) {
            return this.killTweensOf(child);
          }
          child.parent === this && _removeLinkedListItem(this, child);
          if (child === this._recent) {
            this._recent = this._last;
          }
          return _uncache(this);
        };
        _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
          if (!arguments.length) {
            return this._tTime;
          }
          this._forcing = 1;
          if (!this._dp && this._ts) {
            this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
          }
          _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
          this._forcing = 0;
          return this;
        };
        _proto2.addLabel = function addLabel(label, position) {
          this.labels[label] = _parsePosition(this, position);
          return this;
        };
        _proto2.removeLabel = function removeLabel(label) {
          delete this.labels[label];
          return this;
        };
        _proto2.addPause = function addPause(position, callback, params) {
          var t2 = Tween.delayedCall(0, callback || _emptyFunc, params);
          t2.data = "isPause";
          this._hasPause = 1;
          return _addToTimeline(this, t2, _parsePosition(this, position));
        };
        _proto2.removePause = function removePause(position) {
          var child = this._first;
          position = _parsePosition(this, position);
          while (child) {
            if (child._start === position && child.data === "isPause") {
              _removeFromParent(child);
            }
            child = child._next;
          }
        };
        _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
          while (i--) {
            _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
          }
          return this;
        };
        _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
          var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
          while (child) {
            if (child instanceof Tween) {
              if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                a.push(child);
              }
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
              a.push.apply(a, children);
            }
            child = child._next;
          }
          return a;
        };
        _proto2.tweenTo = function tweenTo(position, vars) {
          vars = vars || {};
          var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
              tl.pause();
              if (!initted) {
                var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                initted = 1;
              }
              _onStart && _onStart.apply(tween, onStartParams || []);
            }
          }, vars));
          return immediateRender ? tween.render(0) : tween;
        };
        _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
          return this.tweenTo(toPosition, _setDefaults({
            startAt: {
              time: _parsePosition(this, fromPosition)
            }
          }, vars));
        };
        _proto2.recent = function recent() {
          return this._recent;
        };
        _proto2.nextLabel = function nextLabel(afterTime) {
          if (afterTime === void 0) {
            afterTime = this._time;
          }
          return _getLabelInDirection(this, _parsePosition(this, afterTime));
        };
        _proto2.previousLabel = function previousLabel(beforeTime) {
          if (beforeTime === void 0) {
            beforeTime = this._time;
          }
          return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
        };
        _proto2.currentLabel = function currentLabel(value) {
          return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
        };
        _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = 0;
          }
          var child = this._first, labels = this.labels, p;
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              child._start += amount;
              child._end += amount;
            }
            child = child._next;
          }
          if (adjustLabels) {
            for (p in labels) {
              if (labels[p] >= ignoreBeforeTime) {
                labels[p] += amount;
              }
            }
          }
          return _uncache(this);
        };
        _proto2.invalidate = function invalidate(soft) {
          var child = this._first;
          this._lock = 0;
          while (child) {
            child.invalidate(soft);
            child = child._next;
          }
          return _Animation.prototype.invalidate.call(this, soft);
        };
        _proto2.clear = function clear(includeLabels) {
          if (includeLabels === void 0) {
            includeLabels = true;
          }
          var child = this._first, next;
          while (child) {
            next = child._next;
            this.remove(child);
            child = next;
          }
          this._dp && (this._time = this._tTime = this._pTime = 0);
          includeLabels && (this.labels = {});
          return _uncache(this);
        };
        _proto2.totalDuration = function totalDuration(value) {
          var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
          if (arguments.length) {
            return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
          }
          if (self._dirty) {
            parent = self.parent;
            while (child) {
              prev = child._prev;
              child._dirty && child.totalDuration();
              start = child._start;
              if (start > prevStart && self._sort && child._ts && !self._lock) {
                self._lock = 1;
                _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
              } else {
                prevStart = start;
              }
              if (start < 0 && child._ts) {
                max -= start;
                if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                  self._start += start / self._ts;
                  self._time -= start;
                  self._tTime -= start;
                }
                self.shiftChildren(-start, false, -Infinity);
                prevStart = 0;
              }
              child._end > max && child._ts && (max = child._end);
              child = prev;
            }
            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
          }
          return self._tDur;
        };
        Timeline2.updateRoot = function updateRoot(time) {
          if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
          }
          if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
              if (_config.autoSleep && _ticker._listeners.length < 2) {
                while (child && !child._ts) {
                  child = child._next;
                }
                child || _ticker.sleep();
              }
            }
          }
        };
        return Timeline2;
      }(Animation);
      _setDefaults(Timeline.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
        var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (hasRandom = ~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }
        if (stringFilter) {
          a = [start, end];
          stringFilter(a, target, prop);
          start = a[0];
          end = a[1];
        }
        startNums = start.match(_complexStringNumExp) || [];
        while (result = _complexStringNumExp.exec(end)) {
          endNum = result[0];
          chunk = end.substring(index, result.index);
          if (color) {
            color = (color + 1) % 5;
          } else if (chunk.substr(-5) === "rgba(") {
            color = 1;
          }
          if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0;
            pt._pt = {
              _next: pt._pt,
              p: chunk || matchIndex === 1 ? chunk : ",",
              //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
              s: startNum,
              c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
              m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
          }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : "";
        pt.fp = funcParam;
        if (_relExp.test(end) || hasRandom) {
          pt.e = 0;
        }
        this._pt = pt;
        return pt;
      };
      _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
        _isFunction(end) && (end = end(index || 0, target, targets));
        var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
        if (_isString(end)) {
          if (~end.indexOf("random(")) {
            end = _replaceRandom(end);
          }
          if (end.charAt(1) === "=") {
            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) {
              end = pt;
            }
          }
        }
        if (!optional || parsedStart !== end || _forceAllPropTweens) {
          if (!isNaN(parsedStart * end) && end !== "") {
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
          }
          !currentValue && !(prop in target) && _missingPlugin(prop, end);
          return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
        }
      };
      _processVars = function _processVars2(vars, index, target, targets, tween) {
        _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
        if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
          return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
        }
        var copy = {}, p;
        for (p in vars) {
          copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
        }
        return copy;
      };
      _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
        var plugin, pt, ptLookup, i;
        if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
          if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
            i = plugin._props.length;
            while (i--) {
              ptLookup[plugin._props[i]] = pt;
            }
          }
        }
        return plugin;
      };
      _initTween = function _initTween2(tween, time, tTime) {
        var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
        tl && (!keyframes || !ease) && (ease = "none");
        tween._ease = _parseEase(ease, _defaults.ease);
        tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
        if (yoyoEase && tween._yoyo && !tween._repeat) {
          yoyoEase = tween._yEase;
          tween._yEase = tween._ease;
          tween._ease = yoyoEase;
        }
        tween._from = !tl && !!vars.runBackwards;
        if (!tl || keyframes && !vars.stagger) {
          harness = targets[0] ? _getCache(targets[0]).harness : 0;
          harnessVars = harness && vars[harness.prop];
          cleanVars = _copyExcluding(vars, _reservedProps);
          if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1);
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
            prevStartAt._lazy = 0;
          }
          if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
              data: "isStart",
              overwrite: false,
              parent,
              immediateRender: true,
              lazy: !prevStartAt && _isNotFalse(lazy),
              startAt: null,
              delay: 0,
              onUpdate: onUpdate && function() {
                return _callback(tween, "onUpdate");
              },
              stagger: 0
            }, startAt)));
            tween._startAt._dp = 0;
            tween._startAt._sat = tween;
            time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
            if (immediateRender) {
              if (dur && time <= 0 && tTime <= 0) {
                time && (tween._zTime = time);
                return;
              }
            }
          } else if (runBackwards && dur) {
            if (!prevStartAt) {
              time && (immediateRender = false);
              p = _setDefaults({
                overwrite: false,
                data: "isFromStart",
                //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                immediateRender,
                //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                stagger: 0,
                parent
                //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
              }, cleanVars);
              harnessVars && (p[harness.prop] = harnessVars);
              _removeFromParent(tween._startAt = Tween.set(targets, p));
              tween._startAt._dp = 0;
              tween._startAt._sat = tween;
              time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
              tween._zTime = time;
              if (!immediateRender) {
                _initTween2(tween._startAt, _tinyNum, _tinyNum);
              } else if (!time) {
                return;
              }
            }
          }
          tween._pt = tween._ptCache = 0;
          lazy = dur && _isNotFalse(lazy) || lazy && !dur;
          for (i = 0; i < targets.length; i++) {
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
              tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
              plugin._props.forEach(function(name) {
                ptLookup[name] = pt;
              });
              plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
              for (p in cleanVars) {
                if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                  plugin.priority && (hasPriority = 1);
                } else {
                  ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                }
              }
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
              _overwritingTween = tween;
              _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
              overwritten = !tween.parent;
              _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
          }
          hasPriority && _sortPropTweensByPriority(tween);
          tween._onInit && tween._onInit(tween);
        }
        tween._onUpdate = onUpdate;
        tween._initted = (!tween._op || tween._pt) && !overwritten;
        keyframes && time <= 0 && tl.render(_bigNum, true, true);
      };
      _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
        var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
        if (!ptCache) {
          ptCache = tween._ptCache[property] = [];
          lookup = tween._ptLookup;
          i = tween._targets.length;
          while (i--) {
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
              pt = pt.d._pt;
              while (pt && pt.p !== property && pt.fp !== property) {
                pt = pt._next;
              }
            }
            if (!pt) {
              _forceAllPropTweens = 1;
              tween.vars[property] = "+=0";
              _initTween(tween, time);
              _forceAllPropTweens = 0;
              return skipRecursion ? _warn(property + " not eligible for reset") : 1;
            }
            ptCache.push(pt);
          }
        }
        i = ptCache.length;
        while (i--) {
          rootPT = ptCache[i];
          pt = rootPT._pt || rootPT;
          pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
          pt.c = value - pt.s;
          rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
          rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
        }
      };
      _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
        var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
        if (!propertyAliases) {
          return vars;
        }
        copy = _merge({}, vars);
        for (p in propertyAliases) {
          if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i = aliases.length;
            while (i--) {
              copy[aliases[i]] = copy[p];
            }
          }
        }
        return copy;
      };
      _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
        var ease = obj.ease || easeEach || "power1.inOut", p, a;
        if (_isArray(obj)) {
          a = allProps[prop] || (allProps[prop] = []);
          obj.forEach(function(value, i) {
            return a.push({
              t: i / (obj.length - 1) * 100,
              v: value,
              e: ease
            });
          });
        } else {
          for (p in obj) {
            a = allProps[p] || (allProps[p] = []);
            p === "ease" || a.push({
              t: parseFloat(prop),
              v: obj[p],
              e: ease
            });
          }
        }
      };
      _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
        return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
      };
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
      _staggerPropsToSkip = {};
      _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
        return _staggerPropsToSkip[name] = 1;
      });
      Tween = /* @__PURE__ */ function(_Animation2) {
        _inheritsLoose(Tween2, _Animation2);
        function Tween2(targets, vars, position, skipInherit) {
          var _this3;
          if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
          }
          _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
          var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
          _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
          _this3._ptLookup = [];
          _this3._overwrite = overwrite;
          if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
              data: "nested",
              defaults: defaults2 || {},
              targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            });
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
              l = parsedTargets.length;
              staggerFunc = stagger && distribute(stagger);
              if (_isObject(stagger)) {
                for (p in stagger) {
                  if (~_staggerTweenProps.indexOf(p)) {
                    staggerVarsToMerge || (staggerVarsToMerge = {});
                    staggerVarsToMerge[p] = stagger[p];
                  }
                }
              }
              for (i = 0; i < l; i++) {
                copy = _copyExcluding(vars, _staggerPropsToSkip);
                copy.stagger = 0;
                yoyoEase && (copy.yoyoEase = yoyoEase);
                staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                curTarget = parsedTargets[i];
                copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                if (!stagger && l === 1 && copy.delay) {
                  _this3._delay = delay = copy.delay;
                  _this3._start += delay;
                  copy.delay = 0;
                }
                tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                tl._ease = _easeMap.none;
              }
              tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
            } else if (keyframes) {
              _inheritDefaults(_setDefaults(tl.vars.defaults, {
                ease: "none"
              }));
              tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
              var time = 0, a, kf, v;
              if (_isArray(keyframes)) {
                keyframes.forEach(function(frame) {
                  return tl.to(parsedTargets, frame, ">");
                });
                tl.duration();
              } else {
                copy = {};
                for (p in keyframes) {
                  p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                }
                for (p in copy) {
                  a = copy[p].sort(function(a2, b) {
                    return a2.t - b.t;
                  });
                  time = 0;
                  for (i = 0; i < a.length; i++) {
                    kf = a[i];
                    v = {
                      ease: kf.e,
                      duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                    };
                    v[p] = kf.v;
                    tl.to(parsedTargets, v, time);
                    time += v.duration;
                  }
                }
                tl.duration() < duration && tl.to({}, {
                  duration: duration - tl.duration()
                });
              }
            }
            duration || _this3.duration(duration = tl.duration());
          } else {
            _this3.timeline = 0;
          }
          if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
          }
          _addToTimeline(parent, _assertThisInitialized(_this3), position);
          vars.reversed && _this3.reverse();
          vars.paused && _this3.paused(true);
          if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum;
            _this3.render(Math.max(0, -delay) || 0);
          }
          scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
          return _this3;
        }
        var _proto3 = Tween2.prototype;
        _proto3.render = function render4(totalTime, suppressEvents, force) {
          var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
          if (!dur) {
            _renderZeroDurationTween(this, totalTime, suppressEvents, force);
          } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
            time = tTime;
            timeline2 = this.timeline;
            if (this._repeat) {
              cycleDuration = dur + this._rDelay;
              if (this._repeat < -1 && isNegative) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
              time = _roundPrecise(tTime % cycleDuration);
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                prevIteration = _roundPrecise(tTime / cycleDuration);
                iteration = ~~prevIteration;
                if (iteration && iteration === prevIteration) {
                  time = dur;
                  iteration--;
                } else if (time > dur) {
                  time = dur;
                }
              }
              isYoyo = this._yoyo && iteration & 1;
              if (isYoyo) {
                yoyoEase = this._yEase;
                time = dur - time;
              }
              prevIteration = _animationCycle(this._tTime, cycleDuration);
              if (time === prevTime && !force && this._initted && iteration === prevIteration) {
                this._tTime = tTime;
                return this;
              }
              if (iteration !== prevIteration) {
                timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
                if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
                  this._lock = force = 1;
                  this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                }
              }
            }
            if (!this._initted) {
              if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                this._tTime = 0;
                return this;
              }
              if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
                return this;
              }
              if (dur !== this._dur) {
                return this.render(totalTime, suppressEvents, force);
              }
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
              this._act = 1;
              this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) {
              this.ratio = ratio = 1 - ratio;
            }
            if (!prevTime && tTime && !suppressEvents && !prevIteration) {
              _callback(this, "onStart");
              if (this._tTime !== tTime) {
                return this;
              }
            }
            pt = this._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
            timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
              isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
              _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
              isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
              (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
          return this;
        };
        _proto3.targets = function targets() {
          return this._targets;
        };
        _proto3.invalidate = function invalidate(soft) {
          (!soft || !this.vars.runBackwards) && (this._startAt = 0);
          this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
          this._ptLookup = [];
          this.timeline && this.timeline.invalidate(soft);
          return _Animation2.prototype.invalidate.call(this, soft);
        };
        _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
          _tickerActive || _ticker.wake();
          this._ts || this.play();
          var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
          this._initted || _initTween(this, time);
          ratio = this._ease(time / this._dur);
          if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
            return this.resetTo(property, value, start, startIsRelative, 1);
          }
          _alignPlayhead(this, 0);
          this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
          return this.render(0);
        };
        _proto3.kill = function kill(targets, vars) {
          if (vars === void 0) {
            vars = "all";
          }
          if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
            return this;
          }
          if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
            return this;
          }
          var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
          if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
          }
          overwrittenProps = this._op = this._op || [];
          if (vars !== "all") {
            if (_isString(vars)) {
              p = {};
              _forEachName(vars, function(name) {
                return p[name] = 1;
              });
              vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
          }
          i = parsedTargets.length;
          while (i--) {
            if (~killingTargets.indexOf(parsedTargets[i])) {
              curLookup = propTweenLookup[i];
              if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
              } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
              }
              for (p in props) {
                pt = curLookup && curLookup[p];
                if (pt) {
                  if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                    _removeLinkedListItem(this, pt, "_pt");
                  }
                  delete curLookup[p];
                }
                if (curOverwriteProps !== "all") {
                  curOverwriteProps[p] = 1;
                }
              }
            }
          }
          this._initted && !this._pt && firstPT && _interrupt(this);
          return this;
        };
        Tween2.to = function to(targets, vars) {
          return new Tween2(targets, vars, arguments[2]);
        };
        Tween2.from = function from(targets, vars) {
          return _createTweenType(1, arguments);
        };
        Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
          return new Tween2(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
          });
        };
        Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
          return _createTweenType(2, arguments);
        };
        Tween2.set = function set(targets, vars) {
          vars.duration = 0;
          vars.repeatDelay || (vars.repeat = 0);
          return new Tween2(targets, vars);
        };
        Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          return _globalTimeline.killTweensOf(targets, props, onlyActive);
        };
        return Tween2;
      }(Animation);
      _setDefaults(Tween.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      });
      _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
        Tween[name] = function() {
          var tl = new Timeline(), params = _slice.call(arguments, 0);
          params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
          return tl[name].apply(tl, params);
        };
      });
      _setterPlain = function _setterPlain2(target, property, value) {
        return target[property] = value;
      };
      _setterFunc = function _setterFunc2(target, property, value) {
        return target[property](value);
      };
      _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
        return target[property](data.fp, value);
      };
      _setterAttribute = function _setterAttribute2(target, property, value) {
        return target.setAttribute(property, value);
      };
      _getSetter = function _getSetter2(target, property) {
        return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
      };
      _renderPlain = function _renderPlain2(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
      };
      _renderBoolean = function _renderBoolean2(ratio, data) {
        return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
      };
      _renderComplexString = function _renderComplexString2(ratio, data) {
        var pt = data._pt, s = "";
        if (!ratio && data.b) {
          s = data.b;
        } else if (ratio === 1 && data.e) {
          s = data.e;
        } else {
          while (pt) {
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
            pt = pt._next;
          }
          s += data.c;
        }
        data.set(data.t, data.p, s, data);
      };
      _renderPropTweens = function _renderPropTweens2(ratio, data) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      };
      _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
        var pt = this._pt, next;
        while (pt) {
          next = pt._next;
          pt.p === property && pt.modifier(modifier, tween, target);
          pt = next;
        }
      };
      _killPropTweensOf = function _killPropTweensOf2(property) {
        var pt = this._pt, hasNonDependentRemaining, next;
        while (pt) {
          next = pt._next;
          if (pt.p === property && !pt.op || pt.op === property) {
            _removeLinkedListItem(this, pt, "_pt");
          } else if (!pt.dep) {
            hasNonDependentRemaining = 1;
          }
          pt = next;
        }
        return !hasNonDependentRemaining;
      };
      _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
        data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
      };
      _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
        var pt = parent._pt, next, pt2, first, last;
        while (pt) {
          next = pt._next;
          pt2 = first;
          while (pt2 && pt2.pr > pt.pr) {
            pt2 = pt2._next;
          }
          if (pt._prev = pt2 ? pt2._prev : last) {
            pt._prev._next = pt;
          } else {
            first = pt;
          }
          if (pt._next = pt2) {
            pt2._prev = pt;
          } else {
            last = pt;
          }
          pt = next;
        }
        parent._pt = first;
      };
      PropTween = /* @__PURE__ */ function() {
        function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
          this.t = target;
          this.s = start;
          this.c = change;
          this.p = prop;
          this.r = renderer || _renderPlain;
          this.d = data || this;
          this.set = setter || _setterPlain;
          this.pr = priority || 0;
          this._next = next;
          if (next) {
            next._prev = this;
          }
        }
        var _proto4 = PropTween2.prototype;
        _proto4.modifier = function modifier(func, tween, target) {
          this.mSet = this.mSet || this.set;
          this.set = _setterWithModifier;
          this.m = func;
          this.mt = target;
          this.tween = tween;
        };
        return PropTween2;
      }();
      _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
        return _reservedProps[name] = 1;
      });
      _globals.TweenMax = _globals.TweenLite = Tween;
      _globals.TimelineLite = _globals.TimelineMax = Timeline;
      _globalTimeline = new Timeline({
        sortChildren: false,
        defaults: _defaults,
        autoRemoveChildren: true,
        id: "root",
        smoothChildTiming: true
      });
      _config.stringFilter = _colorStringFilter;
      _media = [];
      _listeners = {};
      _emptyArray = [];
      _lastMediaTime = 0;
      _contextID = 0;
      _dispatch = function _dispatch2(type) {
        return (_listeners[type] || _emptyArray).map(function(f) {
          return f();
        });
      };
      _onMediaChange = function _onMediaChange2() {
        var time = Date.now(), matches = [];
        if (time - _lastMediaTime > 2) {
          _dispatch("matchMediaInit");
          _media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for (p in queries) {
              match = _win.matchMedia(queries[p]).matches;
              match && (anyMatch = 1);
              if (match !== conditions[p]) {
                conditions[p] = match;
                toggled = 1;
              }
            }
            if (toggled) {
              c.revert();
              anyMatch && matches.push(c);
            }
          });
          _dispatch("matchMediaRevert");
          matches.forEach(function(c) {
            return c.onMatch(c, function(func) {
              return c.add(null, func);
            });
          });
          _lastMediaTime = time;
          _dispatch("matchMedia");
        }
      };
      Context = /* @__PURE__ */ function() {
        function Context2(func, scope) {
          this.selector = scope && selector(scope);
          this.data = [];
          this._r = [];
          this.isReverted = false;
          this.id = _contextID++;
          func && this.add(func);
        }
        var _proto5 = Context2.prototype;
        _proto5.add = function add(name, func, scope) {
          if (_isFunction(name)) {
            scope = func;
            func = name;
            name = _isFunction;
          }
          var self = this, f = function f2() {
            var prev = _context, prevSelector = self.selector, result;
            prev && prev !== self && prev.data.push(self);
            scope && (self.selector = selector(scope));
            _context = self;
            result = func.apply(self, arguments);
            _isFunction(result) && self._r.push(result);
            _context = prev;
            self.selector = prevSelector;
            self.isReverted = false;
            return result;
          };
          self.last = f;
          return name === _isFunction ? f(self, function(func2) {
            return self.add(null, func2);
          }) : name ? self[name] = f : f;
        };
        _proto5.ignore = function ignore(func) {
          var prev = _context;
          _context = null;
          func(this);
          _context = prev;
        };
        _proto5.getTweens = function getTweens() {
          var a = [];
          this.data.forEach(function(e2) {
            return e2 instanceof Context2 ? a.push.apply(a, e2.getTweens()) : e2 instanceof Tween && !(e2.parent && e2.parent.data === "nested") && a.push(e2);
          });
          return a;
        };
        _proto5.clear = function clear() {
          this._r.length = this.data.length = 0;
        };
        _proto5.kill = function kill(revert, matchMedia2) {
          var _this4 = this;
          if (revert) {
            (function() {
              var tweens = _this4.getTweens(), i2 = _this4.data.length, t2;
              while (i2--) {
                t2 = _this4.data[i2];
                if (t2.data === "isFlip") {
                  t2.revert();
                  t2.getChildren(true, true, false).forEach(function(tween) {
                    return tweens.splice(tweens.indexOf(tween), 1);
                  });
                }
              }
              tweens.map(function(t3) {
                return {
                  g: t3._dur || t3._delay || t3._sat && !t3._sat.vars.immediateRender ? t3.globalTime(0) : -Infinity,
                  t: t3
                };
              }).sort(function(a, b) {
                return b.g - a.g || -Infinity;
              }).forEach(function(o) {
                return o.t.revert(revert);
              });
              i2 = _this4.data.length;
              while (i2--) {
                t2 = _this4.data[i2];
                if (t2 instanceof Timeline) {
                  if (t2.data !== "nested") {
                    t2.scrollTrigger && t2.scrollTrigger.revert();
                    t2.kill();
                  }
                } else {
                  !(t2 instanceof Tween) && t2.revert && t2.revert(revert);
                }
              }
              _this4._r.forEach(function(f) {
                return f(revert, _this4);
              });
              _this4.isReverted = true;
            })();
          } else {
            this.data.forEach(function(e2) {
              return e2.kill && e2.kill();
            });
          }
          this.clear();
          if (matchMedia2) {
            var i = _media.length;
            while (i--) {
              _media[i].id === this.id && _media.splice(i, 1);
            }
          }
        };
        _proto5.revert = function revert(config3) {
          this.kill(config3 || {});
        };
        return Context2;
      }();
      MatchMedia = /* @__PURE__ */ function() {
        function MatchMedia2(scope) {
          this.contexts = [];
          this.scope = scope;
          _context && _context.data.push(this);
        }
        var _proto6 = MatchMedia2.prototype;
        _proto6.add = function add(conditions, func, scope) {
          _isObject(conditions) || (conditions = {
            matches: conditions
          });
          var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
          _context && !context3.selector && (context3.selector = _context.selector);
          this.contexts.push(context3);
          func = context3.add("onMatch", func);
          context3.queries = conditions;
          for (p in conditions) {
            if (p === "all") {
              active = 1;
            } else {
              mq = _win.matchMedia(conditions[p]);
              if (mq) {
                _media.indexOf(context3) < 0 && _media.push(context3);
                (cond[p] = mq.matches) && (active = 1);
                mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
              }
            }
          }
          active && func(context3, function(f) {
            return context3.add(null, f);
          });
          return this;
        };
        _proto6.revert = function revert(config3) {
          this.kill(config3 || {});
        };
        _proto6.kill = function kill(revert) {
          this.contexts.forEach(function(c) {
            return c.kill(revert, true);
          });
        };
        return MatchMedia2;
      }();
      _gsap = {
        registerPlugin: function registerPlugin() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          args.forEach(function(config3) {
            return _createPlugin(config3);
          });
        },
        timeline: function timeline(vars) {
          return new Timeline(vars);
        },
        getTweensOf: function getTweensOf(targets, onlyActive) {
          return _globalTimeline.getTweensOf(targets, onlyActive);
        },
        getProperty: function getProperty(target, property, unit, uncache) {
          _isString(target) && (target = toArray(target)[0]);
          var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
          unit === "native" && (unit = "");
          return !target ? target : !property ? function(property2, unit2, uncache2) {
            return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
          } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        },
        quickSetter: function quickSetter(target, property, unit) {
          target = toArray(target);
          if (target.length > 1) {
            var setters = target.map(function(t2) {
              return gsap.quickSetter(t2, property, unit);
            }), l = setters.length;
            return function(value) {
              var i = l;
              while (i--) {
                setters[i](value);
              }
            };
          }
          target = target[0] || {};
          var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
            var p2 = new Plugin();
            _quickTween._pt = 0;
            p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
            p2.render(1, p2);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
          } : cache.set(target, p);
          return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
          };
        },
        quickTo: function quickTo(target, property, vars) {
          var _setDefaults22;
          var tween = gsap.to(target, _setDefaults((_setDefaults22 = {}, _setDefaults22[property] = "+=0.1", _setDefaults22.paused = true, _setDefaults22.stagger = 0, _setDefaults22), vars || {})), func = function func2(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
          };
          func.tween = tween;
          return func;
        },
        isTweening: function isTweening(targets) {
          return _globalTimeline.getTweensOf(targets, true).length > 0;
        },
        defaults: function defaults(value) {
          value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
          return _mergeDeep(_defaults, value || {});
        },
        config: function config2(value) {
          return _mergeDeep(_config, value || {});
        },
        registerEffect: function registerEffect(_ref3) {
          var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
          (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
          });
          _effects[name] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
          };
          if (extendTimeline) {
            Timeline.prototype[name] = function(targets, vars, position) {
              return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
            };
          }
        },
        registerEase: function registerEase(name, ease) {
          _easeMap[name] = _parseEase(ease);
        },
        parseEase: function parseEase(ease, defaultEase) {
          return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
        },
        getById: function getById(id) {
          return _globalTimeline.getById(id);
        },
        exportRoot: function exportRoot(vars, includeDelayedCalls) {
          if (vars === void 0) {
            vars = {};
          }
          var tl = new Timeline(vars), child, next;
          tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
          _globalTimeline.remove(tl);
          tl._dp = 0;
          tl._time = tl._tTime = _globalTimeline._time;
          child = _globalTimeline._first;
          while (child) {
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
              _addToTimeline(tl, child, child._start - child._delay);
            }
            child = next;
          }
          _addToTimeline(_globalTimeline, tl, 0);
          return tl;
        },
        context: function context(func, scope) {
          return func ? new Context(func, scope) : _context;
        },
        matchMedia: function matchMedia(scope) {
          return new MatchMedia(scope);
        },
        matchMediaRefresh: function matchMediaRefresh() {
          return _media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for (p in cond) {
              if (cond[p]) {
                cond[p] = false;
                found = 1;
              }
            }
            found && c.revert();
          }) || _onMediaChange();
        },
        addEventListener: function addEventListener(type, callback) {
          var a = _listeners[type] || (_listeners[type] = []);
          ~a.indexOf(callback) || a.push(callback);
        },
        removeEventListener: function removeEventListener(type, callback) {
          var a = _listeners[type], i = a && a.indexOf(callback);
          i >= 0 && a.splice(i, 1);
        },
        utils: {
          wrap,
          wrapYoyo,
          distribute,
          random,
          snap,
          normalize,
          getUnit,
          clamp,
          splitColor,
          toArray,
          selector,
          mapRange,
          pipe,
          unitize,
          interpolate,
          shuffle
        },
        install: _install,
        effects: _effects,
        ticker: _ticker,
        updateRoot: Timeline.updateRoot,
        plugins: _plugins,
        globalTimeline: _globalTimeline,
        core: {
          PropTween,
          globals: _addGlobal,
          Tween,
          Timeline,
          Animation,
          getCache: _getCache,
          _removeLinkedListItem,
          reverting: function reverting() {
            return _reverting;
          },
          context: function context2(toAdd) {
            if (toAdd && _context) {
              _context.data.push(toAdd);
              toAdd._ctx = _context;
            }
            return _context;
          },
          suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
          }
        }
      };
      _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
        return _gsap[name] = Tween[name];
      });
      _ticker.add(Timeline.updateRoot);
      _quickTween = _gsap.to({}, {
        duration: 0
      });
      _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
        var pt = plugin._pt;
        while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
          pt = pt._next;
        }
        return pt;
      };
      _addModifiers = function _addModifiers2(tween, modifiers) {
        var targets = tween._targets, p, i, pt;
        for (p in modifiers) {
          i = targets.length;
          while (i--) {
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
              if (pt._pt) {
                pt = _getPluginPropTween(pt, p);
              }
              pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
          }
        }
      };
      _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
        return {
          name,
          headless: 1,
          rawVars: 1,
          //don't pre-process function-based values or "random()" strings.
          init: function init5(target, vars, tween) {
            tween._onInit = function(tween2) {
              var temp, p;
              if (_isString(vars)) {
                temp = {};
                _forEachName(vars, function(name2) {
                  return temp[name2] = 1;
                });
                vars = temp;
              }
              if (modifier) {
                temp = {};
                for (p in vars) {
                  temp[p] = modifier(vars[p]);
                }
                vars = temp;
              }
              _addModifiers(tween2, vars);
            };
          }
        };
      };
      gsap = _gsap.registerPlugin({
        name: "attr",
        init: function init(target, vars, tween, index, targets) {
          var p, pt, v;
          this.tween = tween;
          for (p in vars) {
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v;
            this._props.push(p);
          }
        },
        render: function render(ratio, data) {
          var pt = data._pt;
          while (pt) {
            _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
            pt = pt._next;
          }
        }
      }, {
        name: "endArray",
        headless: 1,
        init: function init2(target, value) {
          var i = value.length;
          while (i--) {
            this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
          }
        }
      }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
      Tween.version = Timeline.version = gsap.version = "3.13.0";
      _coreReady = 1;
      _windowExists() && _wake();
      Power0 = _easeMap.Power0;
      Power1 = _easeMap.Power1;
      Power2 = _easeMap.Power2;
      Power3 = _easeMap.Power3;
      Power4 = _easeMap.Power4;
      Linear = _easeMap.Linear;
      Quad = _easeMap.Quad;
      Cubic = _easeMap.Cubic;
      Quart = _easeMap.Quart;
      Quint = _easeMap.Quint;
      Strong = _easeMap.Strong;
      Elastic = _easeMap.Elastic;
      Back = _easeMap.Back;
      SteppedEase = _easeMap.SteppedEase;
      Bounce = _easeMap.Bounce;
      Sine = _easeMap.Sine;
      Expo = _easeMap.Expo;
      Circ = _easeMap.Circ;
    }
  });

  // node_modules/gsap/CSSPlugin.js
  var _win2, _doc2, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting2, _windowExists3, _transformProps, _RAD2DEG, _DEG2RAD, _atan2, _bigNum2, _capsExp, _horizontalExp, _complexExp, _propertyAliases, _renderCSSProp, _renderPropWithEnd, _renderCSSPropWithBeginning, _renderRoundedCSSProp, _renderNonTweeningValue, _renderNonTweeningValueOnlyAtEnd, _setterCSSStyle, _setterCSSProp, _setterTransform, _setterScale, _setterScaleWithRender, _setterTransformWithRender, _transformProp, _transformOriginProp, _saveStyle, _removeIndependentTransforms, _revertStyle, _getStyleSaver, _supports3D, _createElement, _getComputedProperty, _prefixes, _checkPropPrefix, _initCore, _getReparentedCloneBBox, _getAttributeFallbacks, _getBBox, _isSVG, _removeProperty, _addNonTweeningPT, _nonConvertibleUnits, _nonStandardLayouts, _convertToUnit, _get, _tweenComplexCSSString, _keywordToPercent, _convertKeywordsToPercentages, _renderClearProps, _specialProps, _identity2DMatrix, _rotationalProperties, _isNullTransform, _getComputedTransformMatrixAsArray, _getMatrix, _applySVGOrigin, _parseTransform, _firstTwoOnly, _addPxTranslate, _renderNon3DTransforms, _zeroDeg, _zeroPx, _endParenthesis, _renderCSSTransforms, _renderSVGTransforms, _addRotationalPropTween, _assign, _addRawTransformPTs, CSSPlugin;
  var init_CSSPlugin = __esm({
    "node_modules/gsap/CSSPlugin.js"() {
      init_live_reload();
      init_gsap_core();
      _windowExists3 = function _windowExists4() {
        return typeof window !== "undefined";
      };
      _transformProps = {};
      _RAD2DEG = 180 / Math.PI;
      _DEG2RAD = Math.PI / 180;
      _atan2 = Math.atan2;
      _bigNum2 = 1e8;
      _capsExp = /([A-Z])/g;
      _horizontalExp = /(left|right|width|margin|padding|x)/i;
      _complexExp = /[\s,\(]\S/;
      _propertyAliases = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
      };
      _renderCSSProp = function _renderCSSProp2(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
      };
      _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
        return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
      };
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
        return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
      };
      _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
        var value = data.s + data.c * ratio;
        data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
      };
      _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
      };
      _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
        return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
      };
      _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
        return target.style[property] = value;
      };
      _setterCSSProp = function _setterCSSProp2(target, property, value) {
        return target.style.setProperty(property, value);
      };
      _setterTransform = function _setterTransform2(target, property, value) {
        return target._gsap[property] = value;
      };
      _setterScale = function _setterScale2(target, property, value) {
        return target._gsap.scaleX = target._gsap.scaleY = value;
      };
      _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache.scaleX = cache.scaleY = value;
        cache.renderTransform(ratio, cache);
      };
      _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache[property] = value;
        cache.renderTransform(ratio, cache);
      };
      _transformProp = "transform";
      _transformOriginProp = _transformProp + "Origin";
      _saveStyle = function _saveStyle2(property, isNotCSS) {
        var _this = this;
        var target = this.target, style = target.style, cache = target._gsap;
        if (property in _transformProps && style) {
          this.tfm = this.tfm || {};
          if (property !== "transform") {
            property = _propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
              return _this.tfm[a] = _get(target, a);
            }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
            property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
          } else {
            return _propertyAliases.transform.split(",").forEach(function(p) {
              return _saveStyle2.call(_this, p, isNotCSS);
            });
          }
          if (this.props.indexOf(_transformProp) >= 0) {
            return;
          }
          if (cache.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push(_transformOriginProp, isNotCSS, "");
          }
          property = _transformProp;
        }
        (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
      };
      _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
        if (style.translate) {
          style.removeProperty("translate");
          style.removeProperty("scale");
          style.removeProperty("rotate");
        }
      };
      _revertStyle = function _revertStyle2() {
        var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
        for (i = 0; i < props.length; i += 3) {
          if (!props[i + 1]) {
            props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
          } else if (props[i + 1] === 2) {
            target[props[i]](props[i + 2]);
          } else {
            target[props[i]] = props[i + 2];
          }
        }
        if (this.tfm) {
          for (p in this.tfm) {
            cache[p] = this.tfm[p];
          }
          if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
          }
          i = _reverting2();
          if ((!i || !i.isStart) && !style[_transformProp]) {
            _removeIndependentTransforms(style);
            if (cache.zOrigin && style[_transformOriginProp]) {
              style[_transformOriginProp] += " " + cache.zOrigin + "px";
              cache.zOrigin = 0;
              cache.renderTransform();
            }
            cache.uncache = 1;
          }
        }
      };
      _getStyleSaver = function _getStyleSaver2(target, properties) {
        var saver = {
          target,
          props: [],
          revert: _revertStyle,
          save: _saveStyle
        };
        target._gsap || gsap.core.getCache(target);
        properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
          return saver.save(p);
        });
        return saver;
      };
      _createElement = function _createElement2(type, ns) {
        var e2 = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
        return e2 && e2.style ? e2 : _doc2.createElement(type);
      };
      _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
        var cs = getComputedStyle(target);
        return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
      };
      _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
      _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
        var e2 = element || _tempDiv, s = e2.style, i = 5;
        if (property in s && !preferPrefix) {
          return property;
        }
        property = property.charAt(0).toUpperCase() + property.substr(1);
        while (i-- && !(_prefixes[i] + property in s)) {
        }
        return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
      };
      _initCore = function _initCore2() {
        if (_windowExists3() && window.document) {
          _win2 = window;
          _doc2 = _win2.document;
          _docElement = _doc2.documentElement;
          _tempDiv = _createElement("div") || {
            style: {}
          };
          _tempDivStyler = _createElement("div");
          _transformProp = _checkPropPrefix(_transformProp);
          _transformOriginProp = _transformProp + "Origin";
          _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
          _supports3D = !!_checkPropPrefix("perspective");
          _reverting2 = gsap.core.reverting;
          _pluginInitted = 1;
        }
      };
      _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
        var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
        clone.style.display = "block";
        svg.appendChild(clone);
        _docElement.appendChild(svg);
        try {
          bbox = clone.getBBox();
        } catch (e2) {
        }
        svg.removeChild(clone);
        _docElement.removeChild(svg);
        return bbox;
      };
      _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
        var i = attributesArray.length;
        while (i--) {
          if (target.hasAttribute(attributesArray[i])) {
            return target.getAttribute(attributesArray[i]);
          }
        }
      };
      _getBBox = function _getBBox2(target) {
        var bounds, cloned;
        try {
          bounds = target.getBBox();
        } catch (error) {
          bounds = _getReparentedCloneBBox(target);
          cloned = 1;
        }
        bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
        return bounds && !bounds.width && !bounds.x && !bounds.y ? {
          x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
          y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0
        } : bounds;
      };
      _isSVG = function _isSVG2(e2) {
        return !!(e2.getCTM && (!e2.parentNode || e2.ownerSVGElement) && _getBBox(e2));
      };
      _removeProperty = function _removeProperty2(target, property) {
        if (property) {
          var style = target.style, first2Chars;
          if (property in _transformProps && property !== _transformOriginProp) {
            property = _transformProp;
          }
          if (style.removeProperty) {
            first2Chars = property.substr(0, 2);
            if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
              property = "-" + property;
            }
            style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
          } else {
            style.removeAttribute(property);
          }
        }
      };
      _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
        var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
        plugin._pt = pt;
        pt.b = beginning;
        pt.e = end;
        plugin._props.push(property);
        return pt;
      };
      _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1
      };
      _nonStandardLayouts = {
        grid: 1,
        flex: 1
      };
      _convertToUnit = function _convertToUnit2(target, property, value, unit) {
        var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
        if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
          return curValue;
        }
        curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
        isSVG = target.getCTM && _isSVG(target);
        if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
          px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
          return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
        }
        style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
        parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
        if (isSVG) {
          parent = (target.ownerSVGElement || {}).parentNode;
        }
        if (!parent || parent === _doc2 || !parent.appendChild) {
          parent = _doc2.body;
        }
        cache = parent._gsap;
        if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
          return _round(curValue / cache.width * amount);
        } else {
          if (toPercent && (property === "height" || property === "width")) {
            var v = target.style[property];
            target.style[property] = amount + unit;
            px = target[measureProperty];
            v ? target.style[property] = v : _removeProperty(target, property);
          } else {
            (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
            parent === target && (style.position = "static");
            parent.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent.removeChild(_tempDiv);
            style.position = "absolute";
          }
          if (horizontal && toPercent) {
            cache = _getCache(parent);
            cache.time = _ticker.time;
            cache.width = parent[measureProperty];
          }
        }
        return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
      };
      _get = function _get2(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore();
        if (property in _propertyAliases && property !== "transform") {
          property = _propertyAliases[property];
          if (~property.indexOf(",")) {
            property = property.split(",")[0];
          }
        }
        if (_transformProps[property] && property !== "transform") {
          value = _parseTransform(target, uncache);
          value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
        } else {
          value = target.style[property];
          if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
            value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
          }
        }
        return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
      };
      _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
        if (!start || start === "none") {
          var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
          if (s && s !== start) {
            prop = p;
            start = s;
          } else if (prop === "borderColor") {
            start = _getComputedProperty(target, "borderTopColor");
          }
        }
        var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (end.substring(0, 6) === "var(--") {
          end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
        }
        if (end === "auto") {
          startValue = target.style[prop];
          target.style[prop] = end;
          end = _getComputedProperty(target, prop) || end;
          startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
        }
        a = [start, end];
        _colorStringFilter(a);
        start = a[0];
        end = a[1];
        startValues = start.match(_numWithUnitExp) || [];
        endValues = end.match(_numWithUnitExp) || [];
        if (endValues.length) {
          while (result = _numWithUnitExp.exec(end)) {
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
              color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
              color = 1;
            }
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
              startNum = parseFloat(startValue) || 0;
              startUnit = startValue.substr((startNum + "").length);
              endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
              endNum = parseFloat(endValue);
              endUnit = endValue.substr((endNum + "").length);
              index = _numWithUnitExp.lastIndex - endUnit.length;
              if (!endUnit) {
                endUnit = endUnit || _config.units[prop] || startUnit;
                if (index === end.length) {
                  end += endUnit;
                  pt.e += endUnit;
                }
              }
              if (startUnit !== endUnit) {
                startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
              }
              pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum - startNum,
                m: color && color < 4 || prop === "zIndex" ? Math.round : 0
              };
            }
          }
          pt.c = index < end.length ? end.substring(index, end.length) : "";
        } else {
          pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
        }
        _relExp.test(end) && (pt.e = 0);
        this._pt = pt;
        return pt;
      };
      _keywordToPercent = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
      };
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
        var split = value.split(" "), x = split[0], y = split[1] || "50%";
        if (x === "top" || x === "bottom" || y === "left" || y === "right") {
          value = x;
          x = y;
          y = value;
        }
        split[0] = _keywordToPercent[x] || x;
        split[1] = _keywordToPercent[y] || y;
        return split.join(" ");
      };
      _renderClearProps = function _renderClearProps2(ratio, data) {
        if (data.tween && data.tween._time === data.tween._dur) {
          var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
          if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
          } else {
            props = props.split(",");
            i = props.length;
            while (--i > -1) {
              prop = props[i];
              if (_transformProps[prop]) {
                clearTransforms = 1;
                prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
              }
              _removeProperty(target, prop);
            }
          }
          if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
              cache.svg && target.removeAttribute("transform");
              style.scale = style.rotate = style.translate = "none";
              _parseTransform(target, 1);
              cache.uncache = 1;
              _removeIndependentTransforms(style);
            }
          }
        }
      };
      _specialProps = {
        clearProps: function clearProps(plugin, target, property, endValue, tween) {
          if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
          }
        }
        /* className feature (about 0.4kb gzipped).
        , className(plugin, target, property, endValue, tween) {
        	let _renderClassName = (ratio, data) => {
        			data.css.render(ratio, data.css);
        			if (!ratio || ratio === 1) {
        				let inline = data.rmv,
        					target = data.t,
        					p;
        				target.setAttribute("class", ratio ? data.e : data.b);
        				for (p in inline) {
        					_removeProperty(target, p);
        				}
        			}
        		},
        		_getAllStyles = (target) => {
        			let styles = {},
        				computed = getComputedStyle(target),
        				p;
        			for (p in computed) {
        				if (isNaN(p) && p !== "cssText" && p !== "length") {
        					styles[p] = computed[p];
        				}
        			}
        			_setDefaults(styles, _parseTransform(target, 1));
        			return styles;
        		},
        		startClassList = target.getAttribute("class"),
        		style = target.style,
        		cssText = style.cssText,
        		cache = target._gsap,
        		classPT = cache.classPT,
        		inlineToRemoveAtEnd = {},
        		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
        		changingVars = {},
        		startVars = _getAllStyles(target),
        		transformRelated = /(transform|perspective)/i,
        		endVars, p;
        	if (classPT) {
        		classPT.r(1, classPT.d);
        		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
        	}
        	target.setAttribute("class", data.e);
        	endVars = _getAllStyles(target, true);
        	target.setAttribute("class", startClassList);
        	for (p in endVars) {
        		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
        			changingVars[p] = endVars[p];
        			if (!style[p] && style[p] !== "0") {
        				inlineToRemoveAtEnd[p] = 1;
        			}
        		}
        	}
        	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
        	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
        		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
        	}
        	_parseTransform(target, true); //to clear the caching of transforms
        	data.css = new gsap.plugins.css();
        	data.css.init(target, changingVars, tween);
        	plugin._props.push(...data.css._props);
        	return 1;
        }
        */
      };
      _identity2DMatrix = [1, 0, 0, 1, 0, 0];
      _rotationalProperties = {};
      _isNullTransform = function _isNullTransform2(value) {
        return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
      };
      _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
        var matrixString = _getComputedProperty(target, _transformProp);
        return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
      };
      _getMatrix = function _getMatrix2(target, force2D) {
        var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
        if (cache.svg && target.getAttribute("transform")) {
          temp = target.transform.baseVal.consolidate().matrix;
          matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
          return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
        } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
          temp = style.display;
          style.display = "block";
          parent = target.parentNode;
          if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
            addedToDOM = 1;
            nextSibling = target.nextElementSibling;
            _docElement.appendChild(target);
          }
          matrix = _getComputedTransformMatrixAsArray(target);
          temp ? style.display = temp : _removeProperty(target, "display");
          if (addedToDOM) {
            nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
          }
        }
        return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
      };
      _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
        var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
        if (!originIsAbsolute) {
          bounds = _getBBox(target);
          xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
          yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
        } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
          x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
          y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
          xOrigin = x;
          yOrigin = y;
        }
        if (smooth || smooth !== false && cache.smooth) {
          tx = xOrigin - xOriginOld;
          ty = yOrigin - yOriginOld;
          cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
          cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
        } else {
          cache.xOffset = cache.yOffset = 0;
        }
        cache.xOrigin = xOrigin;
        cache.yOrigin = yOrigin;
        cache.smooth = !!smooth;
        cache.origin = origin;
        cache.originIsAbsolute = !!originIsAbsolute;
        target.style[_transformOriginProp] = "0px 0px";
        if (pluginToAddPropTweensTo) {
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
        }
        target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
      };
      _parseTransform = function _parseTransform2(target, uncache) {
        var cache = target._gsap || new GSCache(target);
        if ("x" in cache && !uncache && !cache.uncache) {
          return cache;
        }
        var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
        x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
        scaleX = scaleY = 1;
        cache.svg = !!(target.getCTM && _isSVG(target));
        if (cs.translate) {
          if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
            style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
          }
          style.scale = style.rotate = style.translate = "none";
        }
        matrix = _getMatrix(target, cache.svg);
        if (cache.svg) {
          if (cache.uncache) {
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
          } else {
            t1 = !uncache && target.getAttribute("data-svg-origin");
          }
          _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
        }
        xOrigin = cache.xOrigin || 0;
        yOrigin = cache.yOrigin || 0;
        if (matrix !== _identity2DMatrix) {
          a = matrix[0];
          b = matrix[1];
          c = matrix[2];
          d = matrix[3];
          x = a12 = matrix[4];
          y = a22 = matrix[5];
          if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
              x -= xOrigin - (xOrigin * a + yOrigin * c);
              y -= yOrigin - (xOrigin * b + yOrigin * d);
            }
          } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a12 * cos + a13 * sin;
              t2 = a22 * cos + a23 * sin;
              t3 = a32 * cos + a33 * sin;
              a13 = a12 * -sin + a13 * cos;
              a23 = a22 * -sin + a23 * cos;
              a33 = a32 * -sin + a33 * cos;
              a43 = a42 * -sin + a43 * cos;
              a12 = t1;
              a22 = t2;
              a32 = t3;
            }
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a * cos - a13 * sin;
              t2 = b * cos - a23 * sin;
              t3 = c * cos - a33 * sin;
              a43 = d * sin + a43 * cos;
              a = t1;
              b = t2;
              c = t3;
            }
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(angle);
              sin = Math.sin(angle);
              t1 = a * cos + b * sin;
              t2 = a12 * cos + a22 * sin;
              b = b * cos - a * sin;
              a22 = a22 * cos - a12 * sin;
              a = t1;
              a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
              rotationX = rotation = 0;
              rotationY = 180 - rotationY;
            }
            scaleX = _round(Math.sqrt(a * a + b * b + c * c));
            scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          }
          if (cache.svg) {
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
          }
        }
        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
          if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
          } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
          }
        }
        uncache = uncache || cache.uncache;
        cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
        cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
        cache.z = z + px;
        cache.scaleX = _round(scaleX);
        cache.scaleY = _round(scaleY);
        cache.rotation = _round(rotation) + deg;
        cache.rotationX = _round(rotationX) + deg;
        cache.rotationY = _round(rotationY) + deg;
        cache.skewX = skewX + deg;
        cache.skewY = skewY + deg;
        cache.transformPerspective = perspective + px;
        if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
          style[_transformOriginProp] = _firstTwoOnly(origin);
        }
        cache.xOffset = cache.yOffset = 0;
        cache.force3D = _config.force3D;
        cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
        cache.uncache = 0;
        return cache;
      };
      _firstTwoOnly = function _firstTwoOnly2(value) {
        return (value = value.split(" "))[0] + " " + value[1];
      };
      _addPxTranslate = function _addPxTranslate2(target, start, value) {
        var unit = getUnit(start);
        return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
      };
      _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
        cache.z = "0px";
        cache.rotationY = cache.rotationX = "0deg";
        cache.force3D = 0;
        _renderCSSTransforms(ratio, cache);
      };
      _zeroDeg = "0deg";
      _zeroPx = "0px";
      _endParenthesis = ") ";
      _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
        var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
          var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
          angle = parseFloat(rotationX) * _DEG2RAD;
          cos = Math.cos(angle);
          x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
          y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
          z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
        }
        if (transformPerspective !== _zeroPx) {
          transforms += "perspective(" + transformPerspective + _endParenthesis;
        }
        if (xPercent || yPercent) {
          transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
        }
        if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
          transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
        }
        if (rotation !== _zeroDeg) {
          transforms += "rotate(" + rotation + _endParenthesis;
        }
        if (rotationY !== _zeroDeg) {
          transforms += "rotateY(" + rotationY + _endParenthesis;
        }
        if (rotationX !== _zeroDeg) {
          transforms += "rotateX(" + rotationX + _endParenthesis;
        }
        if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
          transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
        }
        if (scaleX !== 1 || scaleY !== 1) {
          transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
        }
        target.style[_transformProp] = transforms || "translate(0, 0)";
      };
      _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
        var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
        rotation = parseFloat(rotation);
        skewX = parseFloat(skewX);
        skewY = parseFloat(skewY);
        if (skewY) {
          skewY = parseFloat(skewY);
          skewX += skewY;
          rotation += skewY;
        }
        if (rotation || skewX) {
          rotation *= _DEG2RAD;
          skewX *= _DEG2RAD;
          a11 = Math.cos(rotation) * scaleX;
          a21 = Math.sin(rotation) * scaleX;
          a12 = Math.sin(rotation - skewX) * -scaleY;
          a22 = Math.cos(rotation - skewX) * scaleY;
          if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
              temp = Math.tan(skewY);
              temp = Math.sqrt(1 + temp * temp);
              a11 *= temp;
              a21 *= temp;
            }
          }
          a11 = _round(a11);
          a21 = _round(a21);
          a12 = _round(a12);
          a22 = _round(a22);
        } else {
          a11 = scaleX;
          a22 = scaleY;
          a21 = a12 = 0;
        }
        if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
          tx = _convertToUnit(target, "x", x, "px");
          ty = _convertToUnit(target, "y", y, "px");
        }
        if (xOrigin || yOrigin || xOffset || yOffset) {
          tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
          ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
        }
        if (xPercent || yPercent) {
          temp = target.getBBox();
          tx = _round(tx + xPercent / 100 * temp.width);
          ty = _round(ty + yPercent / 100 * temp.height);
        }
        temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
        target.setAttribute("transform", temp);
        forceCSS && (target.style[_transformProp] = temp);
      };
      _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
        var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
        if (isString) {
          direction = endValue.split("_")[1];
          if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) {
              change += change < 0 ? cap : -cap;
            }
          }
          if (direction === "cw" && change < 0) {
            change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
          } else if (direction === "ccw" && change > 0) {
            change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
          }
        }
        plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
        pt.e = finalValue;
        pt.u = "deg";
        plugin._props.push(property);
        return pt;
      };
      _assign = function _assign2(target, source) {
        for (var p in source) {
          target[p] = source[p];
        }
        return target;
      };
      _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
        var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
        if (startCache.svg) {
          startValue = target.getAttribute("transform");
          target.setAttribute("transform", "");
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
          _removeProperty(target, _transformProp);
          target.setAttribute("transform", startValue);
        } else {
          startValue = getComputedStyle(target)[_transformProp];
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
          style[_transformProp] = startValue;
        }
        for (p in _transformProps) {
          startValue = startCache[p];
          endValue = endCache[p];
          if (startValue !== endValue && exclude.indexOf(p) < 0) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
          }
        }
        _assign(endCache, startCache);
      };
      _forEachName("padding,margin,Width,Radius", function(name, index) {
        var t2 = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t2, r, b, l] : [t2 + l, t2 + r, b + r, b + l]).map(function(side) {
          return index < 2 ? name + side : "border" + side + name;
        });
        _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
          var a, vars;
          if (arguments.length < 4) {
            a = props.map(function(prop) {
              return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
          }
          a = (endValue + "").split(" ");
          vars = {};
          props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
          });
          plugin.init(target, vars, tween);
        };
      });
      CSSPlugin = {
        name: "css",
        register: _initCore,
        targetTest: function targetTest(target) {
          return target.style && target.nodeType;
        },
        init: function init3(target, vars, tween, index, targets) {
          var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
          _pluginInitted || _initCore();
          this.styles = this.styles || _getStyleSaver(target);
          inlineProps = this.styles.props;
          this.tween = tween;
          for (p in vars) {
            if (p === "autoRound") {
              continue;
            }
            endValue = vars[p];
            if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
              continue;
            }
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
              endValue = endValue.call(tween, index, target, targets);
              type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) {
              endValue = _replaceRandom(endValue);
            }
            if (specialProp) {
              specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            } else if (p.substr(0, 2) === "--") {
              startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
              endValue += "";
              _colorExp.lastIndex = 0;
              if (!_colorExp.test(startValue)) {
                startUnit = getUnit(startValue);
                endUnit = getUnit(endValue);
              }
              endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
              this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
              props.push(p);
              inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
              if (startAt && p in startAt) {
                startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
                (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
              } else {
                startValue = _get(target, p);
              }
              startNum = parseFloat(startValue);
              relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
              relative && (endValue = endValue.substr(2));
              endNum = parseFloat(endValue);
              if (p in _propertyAliases) {
                if (p === "autoAlpha") {
                  if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                    startNum = 0;
                  }
                  inlineProps.push("visibility", 0, style.visibility);
                  _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                }
                if (p !== "scale" && p !== "transform") {
                  p = _propertyAliases[p];
                  ~p.indexOf(",") && (p = p.split(",")[0]);
                }
              }
              isTransformRelated = p in _transformProps;
              if (isTransformRelated) {
                this.styles.save(p);
                if (type === "string" && endValue.substring(0, 6) === "var(--") {
                  endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
                  endNum = parseFloat(endValue);
                }
                if (!transformPropTween) {
                  cache = target._gsap;
                  cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                  smooth = vars.smoothOrigin !== false && cache.smooth;
                  transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                  transformPropTween.dep = 1;
                }
                if (p === "scale") {
                  this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                  this._pt.u = 0;
                  props.push("scaleY", p);
                  p += "X";
                } else if (p === "transformOrigin") {
                  inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                  endValue = _convertKeywordsToPercentages(endValue);
                  if (cache.svg) {
                    _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                  } else {
                    endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                    endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                    _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                  }
                  continue;
                } else if (p === "svgOrigin") {
                  _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                  continue;
                } else if (p in _rotationalProperties) {
                  _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                  continue;
                } else if (p === "smoothOrigin") {
                  _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                  continue;
                } else if (p === "force3D") {
                  cache[p] = endValue;
                  continue;
                } else if (p === "transform") {
                  _addRawTransformPTs(this, endValue, target);
                  continue;
                }
              } else if (!(p in style)) {
                p = _checkPropPrefix(p) || p;
              }
              if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                startUnit = (startValue + "").substr((startNum + "").length);
                endNum || (endNum = 0);
                endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                this._pt.u = endUnit || 0;
                if (startUnit !== endUnit && endUnit !== "%") {
                  this._pt.b = startValue;
                  this._pt.r = _renderCSSPropWithBeginning;
                }
              } else if (!(p in style)) {
                if (p in target) {
                  this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                } else if (p !== "parseTransform") {
                  _missingPlugin(p, endValue);
                  continue;
                }
              } else {
                _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
              }
              isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
              props.push(p);
            }
          }
          hasPriority && _sortPropTweensByPriority(this);
        },
        render: function render2(ratio, data) {
          if (data.tween._time || !_reverting2()) {
            var pt = data._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
          } else {
            data.styles.revert();
          }
        },
        get: _get,
        aliases: _propertyAliases,
        getSetter: function getSetter(target, property, plugin) {
          var p = _propertyAliases[property];
          p && p.indexOf(",") < 0 && (property = p);
          return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
        },
        core: {
          _removeProperty,
          _getMatrix
        }
      };
      gsap.utils.checkPrefix = _checkPropPrefix;
      gsap.core.getStyleSaver = _getStyleSaver;
      (function(positionAndScale, rotation, others, aliases) {
        var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
          _transformProps[name] = 1;
        });
        _forEachName(rotation, function(name) {
          _config.units[name] = "deg";
          _rotationalProperties[name] = 1;
        });
        _propertyAliases[all[13]] = positionAndScale + "," + rotation;
        _forEachName(aliases, function(name) {
          var split = name.split(":");
          _propertyAliases[split[1]] = all[split[0]];
        });
      })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
      _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
        _config.units[name] = "px";
      });
      gsap.registerPlugin(CSSPlugin);
    }
  });

  // node_modules/gsap/index.js
  var gsapWithCSS, TweenMaxWithCSS;
  var init_gsap = __esm({
    "node_modules/gsap/index.js"() {
      init_live_reload();
      init_gsap_core();
      init_CSSPlugin();
      gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
      TweenMaxWithCSS = gsapWithCSS.core.Tween;
    }
  });

  // node_modules/gsap/Observer.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap2, _coreInitted2, _clamp3, _win3, _doc3, _docEl, _body, _isTouch, _pointerType, ScrollTrigger, _root, _normalizer, _eventTypes, _context2, _getGSAP, _startup, _observers, _scrollers, _proxies, _getTime, _bridge, _integrate, _getProxyProp, _isViewport, _addListener, _removeListener, _scrollLeft, _scrollTop, _onScroll, _scrollCacheFunc, _horizontal, _vertical, _getTarget, _isWithin, _getScrollFunc, _getVelocityProp, _getEvent, _getAbsoluteMax, _setScrollTrigger, _initCore3, Observer;
  var init_Observer = __esm({
    "node_modules/gsap/Observer.js"() {
      init_live_reload();
      _getGSAP = function _getGSAP2() {
        return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
      };
      _startup = 1;
      _observers = [];
      _scrollers = [];
      _proxies = [];
      _getTime = Date.now;
      _bridge = function _bridge2(name, value) {
        return value;
      };
      _integrate = function _integrate2() {
        var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
        scrollers.push.apply(scrollers, _scrollers);
        proxies.push.apply(proxies, _proxies);
        _scrollers = scrollers;
        _proxies = proxies;
        _bridge = function _bridge3(name, value) {
          return data[name](value);
        };
      };
      _getProxyProp = function _getProxyProp2(element, property) {
        return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
      };
      _isViewport = function _isViewport2(el) {
        return !!~_root.indexOf(el);
      };
      _addListener = function _addListener2(element, type, func, passive, capture) {
        return element.addEventListener(type, func, {
          passive: passive !== false,
          capture: !!capture
        });
      };
      _removeListener = function _removeListener2(element, type, func, capture) {
        return element.removeEventListener(type, func, !!capture);
      };
      _scrollLeft = "scrollLeft";
      _scrollTop = "scrollTop";
      _onScroll = function _onScroll2() {
        return _normalizer && _normalizer.isPressed || _scrollers.cache++;
      };
      _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
        var cachingFunc = function cachingFunc2(value) {
          if (value || value === 0) {
            _startup && (_win3.history.scrollRestoration = "manual");
            var isNormalizing = _normalizer && _normalizer.isPressed;
            value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
            f(value);
            cachingFunc2.cacheID = _scrollers.cache;
            isNormalizing && _bridge("ss", value);
          } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
            cachingFunc2.cacheID = _scrollers.cache;
            cachingFunc2.v = f();
          }
          return cachingFunc2.v + cachingFunc2.offset;
        };
        cachingFunc.offset = 0;
        return f && cachingFunc;
      };
      _horizontal = {
        s: _scrollLeft,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: _scrollCacheFunc(function(value) {
          return arguments.length ? _win3.scrollTo(value, _vertical.sc()) : _win3.pageXOffset || _doc3[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
        })
      };
      _vertical = {
        s: _scrollTop,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: _horizontal,
        sc: _scrollCacheFunc(function(value) {
          return arguments.length ? _win3.scrollTo(_horizontal.sc(), value) : _win3.pageYOffset || _doc3[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
        })
      };
      _getTarget = function _getTarget2(t2, self) {
        return (self && self._ctx && self._ctx.selector || gsap2.utils.toArray)(t2)[0] || (typeof t2 === "string" && gsap2.config().nullTargetWarn !== false ? console.warn("Element not found:", t2) : null);
      };
      _isWithin = function _isWithin2(element, list) {
        var i = list.length;
        while (i--) {
          if (list[i] === element || list[i].contains(element)) {
            return true;
          }
        }
        return false;
      };
      _getScrollFunc = function _getScrollFunc2(element, _ref) {
        var s = _ref.s, sc = _ref.sc;
        _isViewport(element) && (element = _doc3.scrollingElement || _docEl);
        var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
        !~i && (i = _scrollers.push(element) - 1);
        _scrollers[i + offset] || _addListener(element, "scroll", _onScroll);
        var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
          return arguments.length ? element[s] = value : element[s];
        })));
        func.target = element;
        prev || (func.smooth = gsap2.getProperty(element, "scrollBehavior") === "smooth");
        return func;
      };
      _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
        var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
          var t3 = _getTime();
          if (force || t3 - t1 > min) {
            v2 = v1;
            v1 = value2;
            t2 = t1;
            t1 = t3;
          } else if (useDelta) {
            v1 += value2;
          } else {
            v1 = v2 + (value2 - v2) / (t3 - t2) * (t1 - t2);
          }
        }, reset = function reset2() {
          v2 = v1 = useDelta ? 0 : v1;
          t2 = t1 = 0;
        }, getVelocity = function getVelocity2(latestValue) {
          var tOld = t2, vOld = v2, t3 = _getTime();
          (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
          return t1 === t2 || t3 - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t3 : t1) - tOld) * 1e3;
        };
        return {
          update,
          reset,
          getVelocity
        };
      };
      _getEvent = function _getEvent2(e2, preventDefault) {
        preventDefault && !e2._gsapAllow && e2.preventDefault();
        return e2.changedTouches ? e2.changedTouches[0] : e2;
      };
      _getAbsoluteMax = function _getAbsoluteMax2(a) {
        var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
        return Math.abs(max) >= Math.abs(min) ? max : min;
      };
      _setScrollTrigger = function _setScrollTrigger2() {
        ScrollTrigger = gsap2.core.globals().ScrollTrigger;
        ScrollTrigger && ScrollTrigger.core && _integrate();
      };
      _initCore3 = function _initCore4(core) {
        gsap2 = core || _getGSAP();
        if (!_coreInitted2 && gsap2 && typeof document !== "undefined" && document.body) {
          _win3 = window;
          _doc3 = document;
          _docEl = _doc3.documentElement;
          _body = _doc3.body;
          _root = [_win3, _doc3, _docEl, _body];
          _clamp3 = gsap2.utils.clamp;
          _context2 = gsap2.core.context || function() {
          };
          _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
          _isTouch = Observer.isTouch = _win3.matchMedia && _win3.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win3 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
          _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
          setTimeout(function() {
            return _startup = 0;
          }, 500);
          _setScrollTrigger();
          _coreInitted2 = 1;
        }
        return _coreInitted2;
      };
      _horizontal.op = _vertical;
      _scrollers.cache = 0;
      Observer = /* @__PURE__ */ function() {
        function Observer2(vars) {
          this.init(vars);
        }
        var _proto = Observer2.prototype;
        _proto.init = function init5(vars) {
          _coreInitted2 || _initCore3(gsap2) || console.warn("Please gsap.registerPlugin(Observer)");
          ScrollTrigger || _setScrollTrigger();
          var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
          this.target = target = _getTarget(target) || _docEl;
          this.vars = vars;
          ignore && (ignore = gsap2.utils.toArray(ignore));
          tolerance = tolerance || 1e-9;
          dragMinimum = dragMinimum || 0;
          wheelSpeed = wheelSpeed || 1;
          scrollSpeed = scrollSpeed || 1;
          type = type || "wheel,touch,pointer";
          debounce = debounce !== false;
          lineHeight || (lineHeight = parseFloat(_win3.getComputedStyle(_body).lineHeight) || 22);
          var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault && vars.passive !== false, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc3, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
            return onClickTime = _getTime();
          }, _ignoreCheck = function _ignoreCheck2(e2, isPointerOrTouch) {
            return (self.event = e2) && ignore && _isWithin(e2.target, ignore) || isPointerOrTouch && limitToTouch && e2.pointerType !== "touch" || ignoreCheck && ignoreCheck(e2, isPointerOrTouch);
          }, onStopFunc = function onStopFunc2() {
            self._vx.reset();
            self._vy.reset();
            onStopDelayedCall.pause();
            onStop && onStop(self);
          }, update = function update2() {
            var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
            onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
            if (changedX) {
              onRight && self.deltaX > 0 && onRight(self);
              onLeft && self.deltaX < 0 && onLeft(self);
              onChangeX && onChangeX(self);
              onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
              prevDeltaX = self.deltaX;
              deltaX[0] = deltaX[1] = deltaX[2] = 0;
            }
            if (changedY) {
              onDown && self.deltaY > 0 && onDown(self);
              onUp && self.deltaY < 0 && onUp(self);
              onChangeY && onChangeY(self);
              onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
              prevDeltaY = self.deltaY;
              deltaY[0] = deltaY[1] = deltaY[2] = 0;
            }
            if (moved || dragged) {
              onMove && onMove(self);
              if (dragged) {
                onDragStart && dragged === 1 && onDragStart(self);
                onDrag && onDrag(self);
                dragged = 0;
              }
              moved = false;
            }
            locked && !(locked = false) && onLockAxis && onLockAxis(self);
            if (wheeled) {
              onWheel(self);
              wheeled = false;
            }
            id = 0;
          }, onDelta = function onDelta2(x, y, index) {
            deltaX[index] += x;
            deltaY[index] += y;
            self._vx.update(x);
            self._vy.update(y);
            debounce ? id || (id = requestAnimationFrame(update)) : update();
          }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
            if (lockAxis && !axis) {
              self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
              locked = true;
            }
            if (axis !== "y") {
              deltaX[2] += x;
              self._vx.update(x, true);
            }
            if (axis !== "x") {
              deltaY[2] += y;
              self._vy.update(y, true);
            }
            debounce ? id || (id = requestAnimationFrame(update)) : update();
          }, _onDrag = function _onDrag2(e2) {
            if (_ignoreCheck(e2, 1)) {
              return;
            }
            e2 = _getEvent(e2, preventDefault);
            var x = e2.clientX, y = e2.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
            self.x = x;
            self.y = y;
            if (isDragging || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
              dragged = isDragging ? 2 : 1;
              isDragging || (self.isDragging = true);
              onTouchOrPointerDelta(dx, dy);
            }
          }, _onPress = self.onPress = function(e2) {
            if (_ignoreCheck(e2, 1) || e2 && e2.button) {
              return;
            }
            self.axis = axis = null;
            onStopDelayedCall.pause();
            self.isPressed = true;
            e2 = _getEvent(e2);
            prevDeltaX = prevDeltaY = 0;
            self.startX = self.x = e2.clientX;
            self.startY = self.y = e2.clientY;
            self._vx.reset();
            self._vy.reset();
            _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
            self.deltaX = self.deltaY = 0;
            onPress && onPress(self);
          }, _onRelease = self.onRelease = function(e2) {
            if (_ignoreCheck(e2, 1)) {
              return;
            }
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
            var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e2);
            if (!isDragNotClick && isTrackingDrag) {
              self._vx.reset();
              self._vy.reset();
              if (preventDefault && allowClicks) {
                gsap2.delayedCall(0.08, function() {
                  if (_getTime() - onClickTime > 300 && !e2.defaultPrevented) {
                    if (e2.target.click) {
                      e2.target.click();
                    } else if (ownerDoc.createEvent) {
                      var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                      syntheticEvent.initMouseEvent("click", true, true, _win3, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                      e2.target.dispatchEvent(syntheticEvent);
                    }
                  }
                });
              }
            }
            self.isDragging = self.isGesturing = self.isPressed = false;
            onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
            dragged && update();
            onDragEnd && wasDragging && onDragEnd(self);
            onRelease && onRelease(self, isDragNotClick);
          }, _onGestureStart = function _onGestureStart2(e2) {
            return e2.touches && e2.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e2, self.isDragging);
          }, _onGestureEnd = function _onGestureEnd2() {
            return (self.isGesturing = false) || onGestureEnd(self);
          }, onScroll = function onScroll2(e2) {
            if (_ignoreCheck(e2)) {
              return;
            }
            var x = scrollFuncX(), y = scrollFuncY();
            onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
            scrollX = x;
            scrollY = y;
            onStop && onStopDelayedCall.restart(true);
          }, _onWheel = function _onWheel2(e2) {
            if (_ignoreCheck(e2)) {
              return;
            }
            e2 = _getEvent(e2, preventDefault);
            onWheel && (wheeled = true);
            var multiplier = (e2.deltaMode === 1 ? lineHeight : e2.deltaMode === 2 ? _win3.innerHeight : 1) * wheelSpeed;
            onDelta(e2.deltaX * multiplier, e2.deltaY * multiplier, 0);
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
          }, _onMove = function _onMove2(e2) {
            if (_ignoreCheck(e2)) {
              return;
            }
            var x = e2.clientX, y = e2.clientY, dx = x - self.x, dy = y - self.y;
            self.x = x;
            self.y = y;
            moved = true;
            onStop && onStopDelayedCall.restart(true);
            (dx || dy) && onTouchOrPointerDelta(dx, dy);
          }, _onHover = function _onHover2(e2) {
            self.event = e2;
            onHover(self);
          }, _onHoverEnd = function _onHoverEnd2(e2) {
            self.event = e2;
            onHoverEnd(self);
          }, _onClick = function _onClick2(e2) {
            return _ignoreCheck(e2) || _getEvent(e2, preventDefault) && onClick(self);
          };
          onStopDelayedCall = self._dc = gsap2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
          self.deltaX = self.deltaY = 0;
          self._vx = _getVelocityProp(0, 50, true);
          self._vy = _getVelocityProp(0, 50, true);
          self.scrollX = scrollFuncX;
          self.scrollY = scrollFuncY;
          self.isDragging = self.isGesturing = self.isPressed = false;
          _context2(this);
          self.enable = function(e2) {
            if (!self.isEnabled) {
              _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
              type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
              type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
              if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
                _addListener(target, _eventTypes[0], _onPress, passive, capture);
                _addListener(ownerDoc, _eventTypes[2], _onRelease);
                _addListener(ownerDoc, _eventTypes[3], _onRelease);
                allowClicks && _addListener(target, "click", clickCapture, true, true);
                onClick && _addListener(target, "click", _onClick);
                onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
                onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
                onHover && _addListener(target, _pointerType + "enter", _onHover);
                onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
                onMove && _addListener(target, _pointerType + "move", _onMove);
              }
              self.isEnabled = true;
              self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;
              self._vx.reset();
              self._vy.reset();
              scrollX = scrollFuncX();
              scrollY = scrollFuncY();
              e2 && e2.type && _onPress(e2);
              onEnable && onEnable(self);
            }
            return self;
          };
          self.disable = function() {
            if (self.isEnabled) {
              _observers.filter(function(o) {
                return o !== self && _isViewport(o.target);
              }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
              if (self.isPressed) {
                self._vx.reset();
                self._vy.reset();
                _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
              }
              _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
              _removeListener(target, "wheel", _onWheel, capture);
              _removeListener(target, _eventTypes[0], _onPress, capture);
              _removeListener(ownerDoc, _eventTypes[2], _onRelease);
              _removeListener(ownerDoc, _eventTypes[3], _onRelease);
              _removeListener(target, "click", clickCapture, true);
              _removeListener(target, "click", _onClick);
              _removeListener(ownerDoc, "gesturestart", _onGestureStart);
              _removeListener(ownerDoc, "gestureend", _onGestureEnd);
              _removeListener(target, _pointerType + "enter", _onHover);
              _removeListener(target, _pointerType + "leave", _onHoverEnd);
              _removeListener(target, _pointerType + "move", _onMove);
              self.isEnabled = self.isPressed = self.isDragging = false;
              onDisable && onDisable(self);
            }
          };
          self.kill = self.revert = function() {
            self.disable();
            var i = _observers.indexOf(self);
            i >= 0 && _observers.splice(i, 1);
            _normalizer === self && (_normalizer = 0);
          };
          _observers.push(self);
          isNormalizer && _isViewport(target) && (_normalizer = self);
          self.enable(event);
        };
        _createClass(Observer2, [{
          key: "velocityX",
          get: function get() {
            return this._vx.getVelocity();
          }
        }, {
          key: "velocityY",
          get: function get() {
            return this._vy.getVelocity();
          }
        }]);
        return Observer2;
      }();
      Observer.version = "3.13.0";
      Observer.create = function(vars) {
        return new Observer(vars);
      };
      Observer.register = _initCore3;
      Observer.getAll = function() {
        return _observers.slice();
      };
      Observer.getById = function(id) {
        return _observers.filter(function(o) {
          return o.vars.id === id;
        })[0];
      };
      _getGSAP() && gsap2.registerPlugin(Observer);
    }
  });

  // node_modules/gsap/ScrollTrigger.js
  var gsap3, _coreInitted3, _win4, _doc4, _docEl2, _body2, _root2, _resizeDelay, _toArray, _clamp4, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp2, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites2, _ignoreResize, _normalizer2, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context3, _scrollRestoration, _div100vh, _100vh, _isReverted, _clampingMax, _limitCallbacks, _startup2, _getTime2, _time1, _lastScrollTime, _enabled, _parseClamp, _keepClamp, _rafBugFix, _pointerDownHandler, _pointerUpHandler, _passThrough3, _round3, _windowExists5, _getGSAP3, _isViewport3, _getViewportDimension, _getBoundsFunc, _getSizeFunc, _getOffsetsFunc, _maxScroll, _iterateAutoRefresh, _isString3, _isFunction3, _isNumber3, _isObject3, _endAnimation, _callback3, _abs, _left, _top, _right, _bottom, _width, _height, _Right, _Left, _Top, _Bottom, _padding, _margin, _Width, _Height, _px, _getComputedStyle, _makePositionable, _setDefaults3, _getBounds, _getSize, _getLabelRatioArray, _getClosestLabel, _snapDirectional, _getLabelAtDirection, _multiListener, _addListener3, _removeListener3, _wheelListener, _markerDefaults, _defaults2, _keywords, _offsetToPx, _createMarker, _positionMarker, _triggers, _ids, _rafID, _sync, _onScroll3, _setBaseDimensions, _onResize, _listeners2, _emptyArray2, _softRefresh, _dispatch3, _savedStyles, _revertRecorded, _revertAll, _clearScrollMemory, _refreshingAll, _refreshID, _queueRefreshID, _queueRefreshAll, _refresh100vh, _hideAllMarkers, _refreshAll, _lastScroll, _direction, _primary, _updateAll, _propNamesToCopy, _stateProps, _swapPinOut, _swapPinIn, _capsExp2, _setState, _getState, _copyState, _winOffsets, _parsePosition3, _prefixExp, _reparent, _interruptionTracker, _shiftMarker, _getTweenCreator, ScrollTrigger2, _clampScrollAndGetDurationMultiplier, _allowNativePanning, _overflow, _nestedScroll, _inputObserver, _inputExp, _inputIsFocused, _captureInputs, _getScrollNormalizer;
  var init_ScrollTrigger = __esm({
    "node_modules/gsap/ScrollTrigger.js"() {
      init_live_reload();
      init_Observer();
      _startup2 = 1;
      _getTime2 = Date.now;
      _time1 = _getTime2();
      _lastScrollTime = 0;
      _enabled = 0;
      _parseClamp = function _parseClamp2(value, type, self) {
        var clamp3 = _isString3(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
        self["_" + type + "Clamp"] = clamp3;
        return clamp3 ? value.substr(6, value.length - 7) : value;
      };
      _keepClamp = function _keepClamp2(value, clamp3) {
        return clamp3 && (!_isString3(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
      };
      _rafBugFix = function _rafBugFix2() {
        return _enabled && requestAnimationFrame(_rafBugFix2);
      };
      _pointerDownHandler = function _pointerDownHandler2() {
        return _pointerIsDown = 1;
      };
      _pointerUpHandler = function _pointerUpHandler2() {
        return _pointerIsDown = 0;
      };
      _passThrough3 = function _passThrough4(v) {
        return v;
      };
      _round3 = function _round4(value) {
        return Math.round(value * 1e5) / 1e5 || 0;
      };
      _windowExists5 = function _windowExists6() {
        return typeof window !== "undefined";
      };
      _getGSAP3 = function _getGSAP4() {
        return gsap3 || _windowExists5() && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
      };
      _isViewport3 = function _isViewport4(e2) {
        return !!~_root2.indexOf(e2);
      };
      _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
        return (dimensionProperty === "Height" ? _100vh : _win4["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body2["client" + dimensionProperty];
      };
      _getBoundsFunc = function _getBoundsFunc2(element) {
        return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
          _winOffsets.width = _win4.innerWidth;
          _winOffsets.height = _100vh;
          return _winOffsets;
        } : function() {
          return _getBounds(element);
        });
      };
      _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
        var d = _ref.d, d2 = _ref.d2, a = _ref.a;
        return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
          return a()[d];
        } : function() {
          return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
        };
      };
      _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
        return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
          return _winOffsets;
        };
      };
      _maxScroll = function _maxScroll2(element, _ref2) {
        var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
        return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body2[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
      };
      _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
        for (var i = 0; i < _autoRefresh.length; i += 3) {
          (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
        }
      };
      _isString3 = function _isString4(value) {
        return typeof value === "string";
      };
      _isFunction3 = function _isFunction4(value) {
        return typeof value === "function";
      };
      _isNumber3 = function _isNumber4(value) {
        return typeof value === "number";
      };
      _isObject3 = function _isObject4(value) {
        return typeof value === "object";
      };
      _endAnimation = function _endAnimation2(animation, reversed, pause) {
        return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
      };
      _callback3 = function _callback4(self, func) {
        if (self.enabled) {
          var result = self._ctx ? self._ctx.add(function() {
            return func(self);
          }) : func(self);
          result && result.totalTime && (self.callbackAnimation = result);
        }
      };
      _abs = Math.abs;
      _left = "left";
      _top = "top";
      _right = "right";
      _bottom = "bottom";
      _width = "width";
      _height = "height";
      _Right = "Right";
      _Left = "Left";
      _Top = "Top";
      _Bottom = "Bottom";
      _padding = "padding";
      _margin = "margin";
      _Width = "Width";
      _Height = "Height";
      _px = "px";
      _getComputedStyle = function _getComputedStyle2(element) {
        return _win4.getComputedStyle(element);
      };
      _makePositionable = function _makePositionable2(element) {
        var position = _getComputedStyle(element).position;
        element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
      };
      _setDefaults3 = function _setDefaults4(obj, defaults2) {
        for (var p in defaults2) {
          p in obj || (obj[p] = defaults2[p]);
        }
        return obj;
      };
      _getBounds = function _getBounds2(element, withoutTransforms) {
        var tween = withoutTransforms && _getComputedStyle(element)[_transformProp2] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap3.to(element, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1), bounds = element.getBoundingClientRect();
        tween && tween.progress(0).kill();
        return bounds;
      };
      _getSize = function _getSize2(element, _ref3) {
        var d2 = _ref3.d2;
        return element["offset" + d2] || element["client" + d2] || 0;
      };
      _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
        var a = [], labels = timeline2.labels, duration = timeline2.duration(), p;
        for (p in labels) {
          a.push(labels[p] / duration);
        }
        return a;
      };
      _getClosestLabel = function _getClosestLabel2(animation) {
        return function(value) {
          return gsap3.utils.snap(_getLabelRatioArray(animation), value);
        };
      };
      _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
        var snap3 = gsap3.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
          return a2 - b;
        });
        return a ? function(value, direction, threshold) {
          if (threshold === void 0) {
            threshold = 1e-3;
          }
          var i;
          if (!direction) {
            return snap3(value);
          }
          if (direction > 0) {
            value -= threshold;
            for (i = 0; i < a.length; i++) {
              if (a[i] >= value) {
                return a[i];
              }
            }
            return a[i - 1];
          } else {
            i = a.length;
            value += threshold;
            while (i--) {
              if (a[i] <= value) {
                return a[i];
              }
            }
          }
          return a[0];
        } : function(value, direction, threshold) {
          if (threshold === void 0) {
            threshold = 1e-3;
          }
          var snapped = snap3(value);
          return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
        };
      };
      _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
        return function(value, st) {
          return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
        };
      };
      _multiListener = function _multiListener2(func, element, types, callback) {
        return types.split(",").forEach(function(type) {
          return func(element, type, callback);
        });
      };
      _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
        return element.addEventListener(type, func, {
          passive: !nonPassive,
          capture: !!capture
        });
      };
      _removeListener3 = function _removeListener4(element, type, func, capture) {
        return element.removeEventListener(type, func, !!capture);
      };
      _wheelListener = function _wheelListener2(func, el, scrollFunc) {
        scrollFunc = scrollFunc && scrollFunc.wheelHandler;
        if (scrollFunc) {
          func(el, "wheel", scrollFunc);
          func(el, "touchmove", scrollFunc);
        }
      };
      _markerDefaults = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
      };
      _defaults2 = {
        toggleActions: "play",
        anticipatePin: 0
      };
      _keywords = {
        top: 0,
        left: 0,
        center: 0.5,
        bottom: 1,
        right: 1
      };
      _offsetToPx = function _offsetToPx2(value, size) {
        if (_isString3(value)) {
          var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
          if (~eqIndex) {
            value.indexOf("%") > eqIndex && (relative *= size / 100);
            value = value.substr(0, eqIndex - 1);
          }
          value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
        }
        return value;
      };
      _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
        var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
        var e2 = _doc4.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
        (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
        matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
        e2._isStart = isStart;
        e2.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
        e2.style.cssText = css;
        e2.innerText = name || name === 0 ? type + "-" + name : type;
        parent.children[0] ? parent.insertBefore(e2, parent.children[0]) : parent.appendChild(e2);
        e2._offset = e2["offset" + direction.op.d2];
        _positionMarker(e2, 0, direction, isStart);
        return e2;
      };
      _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
        var vars = {
          display: "block"
        }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
        marker._isFlipped = flipped;
        vars[direction.a + "Percent"] = flipped ? -100 : 0;
        vars[direction.a] = flipped ? "1px" : 0;
        vars["border" + side + _Width] = 1;
        vars["border" + oppositeSide + _Width] = 0;
        vars[direction.p] = start + "px";
        gsap3.set(marker, vars);
      };
      _triggers = [];
      _ids = {};
      _sync = function _sync2() {
        return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
      };
      _onScroll3 = function _onScroll4() {
        if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
          _scrollers.cache++;
          if (_normalizer2) {
            _rafID || (_rafID = requestAnimationFrame(_updateAll));
          } else {
            _updateAll();
          }
          _lastScrollTime || _dispatch3("scrollStart");
          _lastScrollTime = _getTime2();
        }
      };
      _setBaseDimensions = function _setBaseDimensions2() {
        _baseScreenWidth = _win4.innerWidth;
        _baseScreenHeight = _win4.innerHeight;
      };
      _onResize = function _onResize2(force) {
        _scrollers.cache++;
        (force === true || !_refreshing && !_ignoreResize && !_doc4.fullscreenElement && !_doc4.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win4.innerWidth || Math.abs(_win4.innerHeight - _baseScreenHeight) > _win4.innerHeight * 0.25)) && _resizeDelay.restart(true);
      };
      _listeners2 = {};
      _emptyArray2 = [];
      _softRefresh = function _softRefresh2() {
        return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
      };
      _dispatch3 = function _dispatch4(type) {
        return _listeners2[type] && _listeners2[type].map(function(f) {
          return f();
        }) || _emptyArray2;
      };
      _savedStyles = [];
      _revertRecorded = function _revertRecorded2(media) {
        for (var i = 0; i < _savedStyles.length; i += 5) {
          if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
            _savedStyles[i].style.cssText = _savedStyles[i + 1];
            _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
            _savedStyles[i + 3].uncache = 1;
          }
        }
      };
      _revertAll = function _revertAll2(kill, media) {
        var trigger;
        for (_i = 0; _i < _triggers.length; _i++) {
          trigger = _triggers[_i];
          if (trigger && (!media || trigger._ctx === media)) {
            if (kill) {
              trigger.kill(1);
            } else {
              trigger.revert(true, true);
            }
          }
        }
        _isReverted = true;
        media && _revertRecorded(media);
        media || _dispatch3("revert");
      };
      _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
        _scrollers.cache++;
        (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
          return _isFunction3(obj) && obj.cacheID++ && (obj.rec = 0);
        });
        _isString3(scrollRestoration) && (_win4.history.scrollRestoration = _scrollRestoration = scrollRestoration);
      };
      _refreshID = 0;
      _queueRefreshAll = function _queueRefreshAll2() {
        if (_queueRefreshID !== _refreshID) {
          var id = _queueRefreshID = _refreshID;
          requestAnimationFrame(function() {
            return id === _refreshID && _refreshAll(true);
          });
        }
      };
      _refresh100vh = function _refresh100vh2() {
        _body2.appendChild(_div100vh);
        _100vh = !_normalizer2 && _div100vh.offsetHeight || _win4.innerHeight;
        _body2.removeChild(_div100vh);
      };
      _hideAllMarkers = function _hideAllMarkers2(hide) {
        return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
          return el.style.display = hide ? "none" : "block";
        });
      };
      _refreshAll = function _refreshAll2(force, skipRevert) {
        _docEl2 = _doc4.documentElement;
        _body2 = _doc4.body;
        _root2 = [_win4, _doc4, _docEl2, _body2];
        if (_lastScrollTime && !force && !_isReverted) {
          _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
          return;
        }
        _refresh100vh();
        _refreshingAll = ScrollTrigger2.isRefreshing = true;
        _scrollers.forEach(function(obj) {
          return _isFunction3(obj) && ++obj.cacheID && (obj.rec = obj());
        });
        var refreshInits = _dispatch3("refreshInit");
        _sort && ScrollTrigger2.sort();
        skipRevert || _revertAll();
        _scrollers.forEach(function(obj) {
          if (_isFunction3(obj)) {
            obj.smooth && (obj.target.style.scrollBehavior = "auto");
            obj(0);
          }
        });
        _triggers.slice(0).forEach(function(t2) {
          return t2.refresh();
        });
        _isReverted = false;
        _triggers.forEach(function(t2) {
          if (t2._subPinOffset && t2.pin) {
            var prop = t2.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t2.pin[prop];
            t2.revert(true, 1);
            t2.adjustPinSpacing(t2.pin[prop] - original);
            t2.refresh();
          }
        });
        _clampingMax = 1;
        _hideAllMarkers(true);
        _triggers.forEach(function(t2) {
          var max = _maxScroll(t2.scroller, t2._dir), endClamp = t2.vars.end === "max" || t2._endClamp && t2.end > max, startClamp = t2._startClamp && t2.start >= max;
          (endClamp || startClamp) && t2.setPositions(startClamp ? max - 1 : t2.start, endClamp ? Math.max(startClamp ? max : t2.start + 1, max) : t2.end, true);
        });
        _hideAllMarkers(false);
        _clampingMax = 0;
        refreshInits.forEach(function(result) {
          return result && result.render && result.render(-1);
        });
        _scrollers.forEach(function(obj) {
          if (_isFunction3(obj)) {
            obj.smooth && requestAnimationFrame(function() {
              return obj.target.style.scrollBehavior = "smooth";
            });
            obj.rec && obj(obj.rec);
          }
        });
        _clearScrollMemory(_scrollRestoration, 1);
        _resizeDelay.pause();
        _refreshID++;
        _refreshingAll = 2;
        _updateAll(2);
        _triggers.forEach(function(t2) {
          return _isFunction3(t2.vars.onRefresh) && t2.vars.onRefresh(t2);
        });
        _refreshingAll = ScrollTrigger2.isRefreshing = false;
        _dispatch3("refresh");
      };
      _lastScroll = 0;
      _direction = 1;
      _updateAll = function _updateAll2(force) {
        if (force === 2 || !_refreshingAll && !_isReverted) {
          ScrollTrigger2.isUpdating = true;
          _primary && _primary.update(0);
          var l = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
          _direction = _lastScroll > scroll ? -1 : 1;
          _refreshingAll || (_lastScroll = scroll);
          if (recordVelocity) {
            if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
              _lastScrollTime = 0;
              _dispatch3("scrollEnd");
            }
            _time2 = _time1;
            _time1 = time;
          }
          if (_direction < 0) {
            _i = l;
            while (_i-- > 0) {
              _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            }
            _direction = 1;
          } else {
            for (_i = 0; _i < l; _i++) {
              _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            }
          }
          ScrollTrigger2.isUpdating = false;
        }
        _rafID = 0;
      };
      _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
      _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
      _swapPinOut = function _swapPinOut2(pin, spacer, state) {
        _setState(state);
        var cache = pin._gsap;
        if (cache.spacerIsNative) {
          _setState(cache.spacerState);
        } else if (pin._gsap.swappedIn) {
          var parent = spacer.parentNode;
          if (parent) {
            parent.insertBefore(pin, spacer);
            parent.removeChild(spacer);
          }
        }
        pin._gsap.swappedIn = false;
      };
      _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
        if (!pin._gsap.swappedIn) {
          var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
          while (i--) {
            p = _propNamesToCopy[i];
            spacerStyle[p] = cs[p];
          }
          spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
          cs.display === "inline" && (spacerStyle.display = "inline-block");
          pinStyle[_bottom] = pinStyle[_right] = "auto";
          spacerStyle.flexBasis = cs.flexBasis || "auto";
          spacerStyle.overflow = "visible";
          spacerStyle.boxSizing = "border-box";
          spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
          spacerStyle[_height] = _getSize(pin, _vertical) + _px;
          spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
          _setState(spacerState);
          pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
          pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
          pinStyle[_padding] = cs[_padding];
          if (pin.parentNode !== spacer) {
            pin.parentNode.insertBefore(spacer, pin);
            spacer.appendChild(pin);
          }
          pin._gsap.swappedIn = true;
        }
      };
      _capsExp2 = /([A-Z])/g;
      _setState = function _setState2(state) {
        if (state) {
          var style = state.t.style, l = state.length, i = 0, p, value;
          (state.t._gsap || gsap3.core.getCache(state.t)).uncache = 1;
          for (; i < l; i += 2) {
            value = state[i + 1];
            p = state[i];
            if (value) {
              style[p] = value;
            } else if (style[p]) {
              style.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
            }
          }
        }
      };
      _getState = function _getState2(element) {
        var l = _stateProps.length, style = element.style, state = [], i = 0;
        for (; i < l; i++) {
          state.push(_stateProps[i], style[_stateProps[i]]);
        }
        state.t = element;
        return state;
      };
      _copyState = function _copyState2(state, override, omitOffsets) {
        var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
        for (; i < l; i += 2) {
          p = state[i];
          result.push(p, p in override ? override[p] : state[i + 1]);
        }
        result.t = state.t;
        return result;
      };
      _winOffsets = {
        left: 0,
        top: 0
      };
      _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
        _isFunction3(value) && (value = value(self));
        if (_isString3(value) && value.substr(0, 3) === "max") {
          value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
        }
        var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
        containerAnimation && containerAnimation.seek(0);
        isNaN(value) || (value = +value);
        if (!_isNumber3(value)) {
          _isFunction3(trigger) && (trigger = trigger(self));
          var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
          element = _getTarget(trigger, self) || _body2;
          bounds = _getBounds(element) || {};
          if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
            display = element.style.display;
            element.style.display = "block";
            bounds = _getBounds(element);
            display ? element.style.display = display : element.style.removeProperty("display");
          }
          localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
          globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
          value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
          markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
          scrollerSize -= scrollerSize - globalOffset;
        } else {
          containerAnimation && (value = gsap3.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
          markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
        }
        if (clampZeroProp) {
          self[clampZeroProp] = value || -1e-3;
          value < 0 && (value = 0);
        }
        if (marker) {
          var position = value + scrollerSize, isStart = marker._isStart;
          p1 = "scroll" + direction.d2;
          _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
          if (useFixedPosition) {
            scrollerBounds = _getBounds(markerScroller);
            useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
          }
        }
        if (containerAnimation && element) {
          p1 = _getBounds(element);
          containerAnimation.seek(scrollerMax);
          p2 = _getBounds(element);
          containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
          value = value / containerAnimation._caScrollDist * scrollerMax;
        }
        containerAnimation && containerAnimation.seek(time);
        return containerAnimation ? value : Math.round(value);
      };
      _prefixExp = /(webkit|moz|length|cssText|inset)/i;
      _reparent = function _reparent2(element, parent, top, left) {
        if (element.parentNode !== parent) {
          var style = element.style, p, cs;
          if (parent === _body2) {
            element._stOrig = style.cssText;
            cs = _getComputedStyle(element);
            for (p in cs) {
              if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
                style[p] = cs[p];
              }
            }
            style.top = top;
            style.left = left;
          } else {
            style.cssText = element._stOrig;
          }
          gsap3.core.getCache(element).uncache = 1;
          parent.appendChild(element);
        }
      };
      _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
        var last1 = initialValue, last2 = last1;
        return function(value) {
          var current = Math.round(getValueFunc());
          if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
            value = current;
            onInterrupt && onInterrupt();
          }
          last2 = last1;
          last1 = Math.round(value);
          return last1;
        };
      };
      _shiftMarker = function _shiftMarker2(marker, direction, value) {
        var vars = {};
        vars[direction.p] = "+=" + value;
        gsap3.set(marker, vars);
      };
      _getTweenCreator = function _getTweenCreator2(scroller, direction) {
        var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
          var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
          initialValue = initialValue || getScroll();
          var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
            tween.kill();
            getTween2.tween = 0;
          });
          change2 = change1 && change2 || 0;
          change1 = change1 || scrollTo - initialValue;
          tween && tween.kill();
          vars[prop] = scrollTo;
          vars.inherit = false;
          vars.modifiers = modifiers;
          modifiers[prop] = function() {
            return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
          };
          vars.onUpdate = function() {
            _scrollers.cache++;
            getTween2.tween && _updateAll();
          };
          vars.onComplete = function() {
            getTween2.tween = 0;
            onComplete && onComplete.call(tween);
          };
          tween = getTween2.tween = gsap3.to(scroller, vars);
          return tween;
        };
        scroller[prop] = getScroll;
        getScroll.wheelHandler = function() {
          return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
        };
        _addListener3(scroller, "wheel", getScroll.wheelHandler);
        ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
        return getTween;
      };
      ScrollTrigger2 = /* @__PURE__ */ function() {
        function ScrollTrigger3(vars, animation) {
          _coreInitted3 || ScrollTrigger3.register(gsap3) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
          _context3(this);
          this.init(vars, animation);
        }
        var _proto = ScrollTrigger3.prototype;
        _proto.init = function init5(vars, animation) {
          this.progress = this.start = 0;
          this.vars && this.kill(true, true);
          if (!_enabled) {
            this.update = this.refresh = this.kill = _passThrough3;
            return;
          }
          vars = _setDefaults3(_isString3(vars) || _isNumber3(vars) || vars.nodeType ? {
            trigger: vars
          } : vars, _defaults2);
          var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win4), scrollerCache = gsap3.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
            return vars.onRefreshInit(self);
          }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
          self._startClamp = self._endClamp = false;
          self._dir = direction;
          anticipatePin *= 45;
          self.scroller = scroller;
          self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
          scroll1 = scrollFunc();
          self.vars = vars;
          animation = animation || vars.animation;
          if ("refreshPriority" in vars) {
            _sort = 1;
            vars.refreshPriority === -9999 && (_primary = self);
          }
          scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
            top: _getTweenCreator(scroller, _vertical),
            left: _getTweenCreator(scroller, _horizontal)
          };
          self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
          self.scrubDuration = function(value) {
            scrubSmooth = _isNumber3(value) && value;
            if (!scrubSmooth) {
              scrubTween && scrubTween.progress(1).kill();
              scrubTween = 0;
            } else {
              scrubTween ? scrubTween.duration(value) : scrubTween = gsap3.to(animation, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: false,
                duration: scrubSmooth,
                paused: true,
                onComplete: function onComplete() {
                  return onScrubComplete && onScrubComplete(self);
                }
              });
            }
          };
          if (animation) {
            animation.vars.lazy = false;
            animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
            self.animation = animation.pause();
            animation.scrollTrigger = self;
            self.scrubDuration(scrub);
            snap1 = 0;
            id || (id = animation.vars.id);
          }
          if (snap3) {
            if (!_isObject3(snap3) || snap3.push) {
              snap3 = {
                snapTo: snap3
              };
            }
            "scrollBehavior" in _body2.style && gsap3.set(isViewport ? [_body2, _docEl2] : scroller, {
              scrollBehavior: "auto"
            });
            _scrollers.forEach(function(o) {
              return _isFunction3(o) && o.target === (isViewport ? _doc4.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
            });
            snapFunc = _isFunction3(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
              return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
            } : gsap3.utils.snap(snap3.snapTo);
            snapDurClamp = snap3.duration || {
              min: 0.1,
              max: 2
            };
            snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
            snapDelayedCall = gsap3.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
              var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
              if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
                var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap3.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
                endValue = snapFunc(naturalEnd, self);
                _isNumber3(endValue) || (endValue = naturalEnd);
                endScroll = Math.max(0, Math.round(start + endValue * change));
                if (scroll <= end && scroll >= start && endScroll !== scroll) {
                  if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                    return;
                  }
                  if (snap3.inertia === false) {
                    change1 = endValue - progress;
                  }
                  tweenTo(endScroll, {
                    duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                    ease: snap3.ease || "power3",
                    data: _abs(endScroll - scroll),
                    // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                    onInterrupt: function onInterrupt() {
                      return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                    },
                    onComplete: function onComplete() {
                      self.update();
                      lastSnap = scrollFunc();
                      if (animation && !isToggle) {
                        scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                      }
                      snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self.progress;
                      onSnapComplete && onSnapComplete(self);
                      _onComplete && _onComplete(self);
                    }
                  }, scroll, change1 * change, endScroll - scroll - change1 * change);
                  onStart && onStart(self, tweenTo.tween);
                }
              } else if (self.isActive && lastSnap !== scroll) {
                snapDelayedCall.restart(true);
              }
            }).pause();
          }
          id && (_ids[id] = self);
          trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
          customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
          customRevertReturn && (customRevertReturn = customRevertReturn(self));
          pin = pin === true ? trigger : _getTarget(pin);
          _isString3(toggleClass) && (toggleClass = {
            targets: trigger,
            className: toggleClass
          });
          if (pin) {
            pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
            self.pin = pin;
            pinCache = gsap3.core.getCache(pin);
            if (!pinCache.spacer) {
              if (pinSpacer) {
                pinSpacer = _getTarget(pinSpacer);
                pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
                pinCache.spacerIsNative = !!pinSpacer;
                pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
              }
              pinCache.spacer = spacer = pinSpacer || _doc4.createElement("div");
              spacer.classList.add("pin-spacer");
              id && spacer.classList.add("pin-spacer-" + id);
              pinCache.pinState = pinOriginalState = _getState(pin);
            } else {
              pinOriginalState = pinCache.pinState;
            }
            vars.force3D !== false && gsap3.set(pin, {
              force3D: true
            });
            self.spacer = spacer = pinCache.spacer;
            cs = _getComputedStyle(pin);
            spacingStart = cs[pinSpacing + direction.os2];
            pinGetter = gsap3.getProperty(pin);
            pinSetter = gsap3.quickSetter(pin, direction.a, _px);
            _swapPinIn(pin, spacer, cs);
            pinState = _getState(pin);
          }
          if (markers) {
            markerVars = _isObject3(markers) ? _setDefaults3(markers, _markerDefaults) : _markerDefaults;
            markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
            markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
            offset = markerStartTrigger["offset" + direction.op.d2];
            var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
            markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
            markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
            containerAnimation && (caMarkerSetter = gsap3.quickSetter([markerStart, markerEnd], direction.a, _px));
            if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
              _makePositionable(isViewport ? _body2 : scroller);
              gsap3.set([markerStartTrigger, markerEndTrigger], {
                force3D: true
              });
              markerStartSetter = gsap3.quickSetter(markerStartTrigger, direction.a, _px);
              markerEndSetter = gsap3.quickSetter(markerEndTrigger, direction.a, _px);
            }
          }
          if (containerAnimation) {
            var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
            containerAnimation.eventCallback("onUpdate", function() {
              self.update(0, 0, 1);
              oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
            });
          }
          self.previous = function() {
            return _triggers[_triggers.indexOf(self) - 1];
          };
          self.next = function() {
            return _triggers[_triggers.indexOf(self) + 1];
          };
          self.revert = function(revert, temp) {
            if (!temp) {
              return self.kill(true);
            }
            var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
            if (r !== self.isReverted) {
              if (r) {
                prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
                prevProgress = self.progress;
                prevAnimProgress = animation && animation.progress();
              }
              markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
                return m.style.display = r ? "none" : "block";
              });
              if (r) {
                _refreshing = self;
                self.update(r);
              }
              if (pin && (!pinReparent || !self.isActive)) {
                if (r) {
                  _swapPinOut(pin, spacer, pinOriginalState);
                } else {
                  _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
                }
              }
              r || self.update(r);
              _refreshing = prevRefreshing;
              self.isReverted = r;
            }
          };
          self.refresh = function(soft, force, position, pinOffset) {
            if ((_refreshing || !self.enabled) && !force) {
              return;
            }
            if (pin && soft && _lastScrollTime) {
              _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
              return;
            }
            !_refreshingAll && onRefreshInit && onRefreshInit(self);
            _refreshing = self;
            if (tweenTo.tween && !position) {
              tweenTo.tween.kill();
              tweenTo.tween = 0;
            }
            scrubTween && scrubTween.pause();
            if (invalidateOnRefresh && animation) {
              animation.revert({
                kill: false
              }).invalidate();
              animation.getChildren && animation.getChildren(true, true, false).forEach(function(t2) {
                return t2.vars.immediateRender && t2.render(0, true, true);
              });
            }
            self.isReverted || self.revert(true, true);
            self._subPinOffset = false;
            var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01 || !change, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject3(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject3(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
            if (markers && _isObject3(position)) {
              markerStartOffset = gsap3.getProperty(markerStartTrigger, direction.p);
              markerEndOffset = gsap3.getProperty(markerEndTrigger, direction.p);
            }
            while (i-- > 0) {
              curTrigger = _triggers[i];
              curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
              curPin = curTrigger.pin;
              if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
                revertedPins || (revertedPins = []);
                revertedPins.unshift(curTrigger);
                curTrigger.revert(true, true);
              }
              if (curTrigger !== _triggers[i]) {
                triggerIndex--;
                i--;
              }
            }
            _isFunction3(parsedStart) && (parsedStart = parsedStart(self));
            parsedStart = _parseClamp(parsedStart, "start", self);
            start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
            _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self));
            if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
              if (~parsedEnd.indexOf(" ")) {
                parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
              } else {
                offset2 = _offsetToPx(parsedEnd.substr(2), size);
                parsedEnd = _isString3(parsedStart) ? parsedStart : (containerAnimation ? gsap3.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
                parsedEndTrigger = trigger;
              }
            }
            parsedEnd = _parseClamp(parsedEnd, "end", self);
            end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -1e-3;
            offset2 = 0;
            i = triggerIndex;
            while (i--) {
              curTrigger = _triggers[i];
              curPin = curTrigger.pin;
              if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
                cs2 = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
                if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
                  offset2 += cs2 * (1 - curTrigger.progress);
                }
                curPin === pin && (otherPinOffset += cs2);
              }
            }
            start += offset2;
            end += offset2;
            self._startClamp && (self._startClamp += offset2);
            if (self._endClamp && !_refreshingAll) {
              self._endClamp = end || -1e-3;
              end = Math.min(end, _maxScroll(scroller, direction));
            }
            change = end - start || (start -= 0.01) && 1e-3;
            if (isFirstRefresh) {
              prevProgress = gsap3.utils.clamp(0, 1, gsap3.utils.normalize(start, end, prevScroll));
            }
            self._pinPush = otherPinOffset;
            if (markerStart && offset2) {
              cs2 = {};
              cs2[direction.a] = "+=" + offset2;
              pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
              gsap3.set([markerStart, markerEnd], cs2);
            }
            if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
              cs2 = _getComputedStyle(pin);
              isVertical = direction === _vertical;
              scroll = scrollFunc();
              pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
              if (!max && end > 1) {
                forcedOverflow = (isViewport ? _doc4.scrollingElement || _docEl2 : scroller).style;
                forcedOverflow = {
                  style: forcedOverflow,
                  value: forcedOverflow["overflow" + direction.a.toUpperCase()]
                };
                if (isViewport && _getComputedStyle(_body2)["overflow" + direction.a.toUpperCase()] !== "scroll") {
                  forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
                }
              }
              _swapPinIn(pin, spacer, cs2);
              pinState = _getState(pin);
              bounds = _getBounds(pin, true);
              oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
              if (pinSpacing) {
                spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
                spacerState.t = spacer;
                i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                if (i) {
                  spacerState.push(direction.d, i + _px);
                  spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
                }
                _setState(spacerState);
                if (pinnedContainer) {
                  _triggers.forEach(function(t2) {
                    if (t2.pin === pinnedContainer && t2.vars.pinSpacing !== false) {
                      t2._subPinOffset = true;
                    }
                  });
                }
                useFixedPosition && scrollFunc(prevScroll);
              } else {
                i = _getSize(pin, direction);
                i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
              }
              if (useFixedPosition) {
                override = {
                  top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                  left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                  boxSizing: "border-box",
                  position: "fixed"
                };
                override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                override[_padding] = cs2[_padding];
                override[_padding + _Top] = cs2[_padding + _Top];
                override[_padding + _Right] = cs2[_padding + _Right];
                override[_padding + _Bottom] = cs2[_padding + _Bottom];
                override[_padding + _Left] = cs2[_padding + _Left];
                pinActiveState = _copyState(pinOriginalState, override, pinReparent);
                _refreshingAll && scrollFunc(0);
              }
              if (animation) {
                initted = animation._initted;
                _suppressOverwrites2(1);
                animation.render(animation.duration(), true, true);
                pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                pinMoves = Math.abs(change - pinChange) > 1;
                useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
                animation.render(0, true, true);
                initted || animation.invalidate(true);
                animation.parent || animation.totalTime(animation.totalTime());
                _suppressOverwrites2(0);
              } else {
                pinChange = change;
              }
              forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
            } else if (trigger && scrollFunc() && !containerAnimation) {
              bounds = trigger.parentNode;
              while (bounds && bounds !== _body2) {
                if (bounds._pinOffset) {
                  start -= bounds._pinOffset;
                  end -= bounds._pinOffset;
                }
                bounds = bounds.parentNode;
              }
            }
            revertedPins && revertedPins.forEach(function(t2) {
              return t2.revert(false, true);
            });
            self.start = start;
            self.end = end;
            scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
            if (!containerAnimation && !_refreshingAll) {
              scroll1 < prevScroll && scrollFunc(prevScroll);
              self.scroll.rec = 0;
            }
            self.revert(false, true);
            lastRefresh = _getTime2();
            if (snapDelayedCall) {
              lastSnap = -1;
              snapDelayedCall.restart(true);
            }
            _refreshing = 0;
            animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
            if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
              animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap3.utils.normalize(start, end, 0) : prevProgress, true);
              self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
            }
            pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
            scrubTween && scrubTween.invalidate();
            if (!isNaN(markerStartOffset)) {
              markerStartOffset -= gsap3.getProperty(markerStartTrigger, direction.p);
              markerEndOffset -= gsap3.getProperty(markerEndTrigger, direction.p);
              _shiftMarker(markerStartTrigger, direction, markerStartOffset);
              _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
              _shiftMarker(markerEndTrigger, direction, markerEndOffset);
              _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
            }
            isFirstRefresh && !_refreshingAll && self.update();
            if (onRefresh && !_refreshingAll && !executingOnRefresh) {
              executingOnRefresh = true;
              onRefresh(self);
              executingOnRefresh = false;
            }
          };
          self.getVelocity = function() {
            return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
          };
          self.endAnimation = function() {
            _endAnimation(self.callbackAnimation);
            if (animation) {
              scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
            }
          };
          self.labelToScroll = function(label) {
            return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
          };
          self.getTrailing = function(name) {
            var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
            return (_isString3(name) ? a.filter(function(t2) {
              return t2.vars.preventOverlaps === name;
            }) : a).filter(function(t2) {
              return self.direction > 0 ? t2.end <= start : t2.start >= end;
            });
          };
          self.update = function(reset, recordVelocity, forceFake) {
            if (containerAnimation && !forceFake && !reset) {
              return;
            }
            var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
            if (recordVelocity) {
              scroll2 = scroll1;
              scroll1 = containerAnimation ? scrollFunc() : scroll;
              if (snap3) {
                snap22 = snap1;
                snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
              }
            }
            if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
              if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
                clipped = 1e-4;
              } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
                clipped = 0.9999;
              }
            }
            if (clipped !== prevProgress2 && self.enabled) {
              isActive = self.isActive = !!clipped && clipped < 1;
              wasActive = !!prevProgress2 && prevProgress2 < 1;
              toggled = isActive !== wasActive;
              stateChanged = toggled || !!clipped !== !!prevProgress2;
              self.direction = clipped > prevProgress2 ? 1 : -1;
              self.progress = clipped;
              if (stateChanged && !_refreshing) {
                toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
                if (isToggle) {
                  action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
                  isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
                }
              }
              preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t2) {
                return t2.endAnimation();
              }));
              if (!isToggle) {
                if (scrubTween && !_refreshing && !_startup2) {
                  scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
                  if (scrubTween.resetTo) {
                    scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                  } else {
                    scrubTween.vars.totalProgress = clipped;
                    scrubTween.invalidate().restart();
                  }
                } else if (animation) {
                  animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
                }
              }
              if (pin) {
                reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                if (!useFixedPosition) {
                  pinSetter(_round3(pinStart + pinChange * clipped));
                } else if (stateChanged) {
                  isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
                  if (pinReparent) {
                    if (!reset && (isActive || isAtMax)) {
                      var bounds = _getBounds(pin, true), _offset = scroll - start;
                      _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                    } else {
                      _reparent(pin, spacer);
                    }
                  }
                  _setState(isActive || isAtMax ? pinActiveState : pinState);
                  pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
                }
              }
              snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
              toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
                return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
              });
              onUpdate && !isToggle && !reset && onUpdate(self);
              if (stateChanged && !_refreshing) {
                if (isToggle) {
                  if (isTakingAction) {
                    if (action === "complete") {
                      animation.pause().totalProgress(1);
                    } else if (action === "reset") {
                      animation.restart(true).pause();
                    } else if (action === "restart") {
                      animation.restart(true);
                    } else {
                      animation[action]();
                    }
                  }
                  onUpdate && onUpdate(self);
                }
                if (toggled || !_limitCallbacks) {
                  onToggle && toggled && _callback3(self, onToggle);
                  callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
                  once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
                  if (!toggled) {
                    toggleState = clipped === 1 ? 1 : 3;
                    callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
                  }
                }
                if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500)) {
                  _endAnimation(self.callbackAnimation);
                  scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
                }
              } else if (isToggle && onUpdate && !_refreshing) {
                onUpdate(self);
              }
            }
            if (markerEndSetter) {
              var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
              markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
              markerEndSetter(n);
            }
            caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
          };
          self.enable = function(reset, refresh) {
            if (!self.enabled) {
              self.enabled = true;
              _addListener3(scroller, "resize", _onResize);
              isViewport || _addListener3(scroller, "scroll", _onScroll3);
              onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
              if (reset !== false) {
                self.progress = prevProgress = 0;
                scroll1 = scroll2 = lastSnap = scrollFunc();
              }
              refresh !== false && self.refresh();
            }
          };
          self.getTween = function(snap4) {
            return snap4 && tweenTo ? tweenTo.tween : scrubTween;
          };
          self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
            if (containerAnimation) {
              var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
              newStart = st.start + _change * newStart / duration;
              newEnd = st.start + _change * newEnd / duration;
            }
            self.refresh(false, false, {
              start: _keepClamp(newStart, keepClamp && !!self._startClamp),
              end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
            }, pinOffset);
            self.update();
          };
          self.adjustPinSpacing = function(amount) {
            if (spacerState && amount) {
              var i = spacerState.indexOf(direction.d) + 1;
              spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
              spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
              _setState(spacerState);
            }
          };
          self.disable = function(reset, allowAnimation) {
            if (self.enabled) {
              reset !== false && self.revert(true, true);
              self.enabled = self.isActive = false;
              allowAnimation || scrubTween && scrubTween.pause();
              prevScroll = 0;
              pinCache && (pinCache.uncache = 1);
              onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
              if (snapDelayedCall) {
                snapDelayedCall.pause();
                tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
              }
              if (!isViewport) {
                var i = _triggers.length;
                while (i--) {
                  if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                    return;
                  }
                }
                _removeListener3(scroller, "resize", _onResize);
                isViewport || _removeListener3(scroller, "scroll", _onScroll3);
              }
            }
          };
          self.kill = function(revert, allowAnimation) {
            self.disable(revert, allowAnimation);
            scrubTween && !allowAnimation && scrubTween.kill();
            id && delete _ids[id];
            var i = _triggers.indexOf(self);
            i >= 0 && _triggers.splice(i, 1);
            i === _i && _direction > 0 && _i--;
            i = 0;
            _triggers.forEach(function(t2) {
              return t2.scroller === self.scroller && (i = 1);
            });
            i || _refreshingAll || (self.scroll.rec = 0);
            if (animation) {
              animation.scrollTrigger = null;
              revert && animation.revert({
                kill: false
              });
              allowAnimation || animation.kill();
            }
            markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
              return m.parentNode && m.parentNode.removeChild(m);
            });
            _primary === self && (_primary = 0);
            if (pin) {
              pinCache && (pinCache.uncache = 1);
              i = 0;
              _triggers.forEach(function(t2) {
                return t2.pin === pin && i++;
              });
              i || (pinCache.spacer = 0);
            }
            vars.onKill && vars.onKill(self);
          };
          _triggers.push(self);
          self.enable(false, false);
          customRevertReturn && customRevertReturn(self);
          if (animation && animation.add && !change) {
            var updateFunc = self.update;
            self.update = function() {
              self.update = updateFunc;
              _scrollers.cache++;
              start || end || self.refresh();
            };
            gsap3.delayedCall(0.01, self.update);
            change = 0.01;
            start = end = 0;
          } else {
            self.refresh();
          }
          pin && _queueRefreshAll();
        };
        ScrollTrigger3.register = function register2(core) {
          if (!_coreInitted3) {
            gsap3 = core || _getGSAP3();
            _windowExists5() && window.document && ScrollTrigger3.enable();
            _coreInitted3 = _enabled;
          }
          return _coreInitted3;
        };
        ScrollTrigger3.defaults = function defaults2(config3) {
          if (config3) {
            for (var p in config3) {
              _defaults2[p] = config3[p];
            }
          }
          return _defaults2;
        };
        ScrollTrigger3.disable = function disable(reset, kill) {
          _enabled = 0;
          _triggers.forEach(function(trigger) {
            return trigger[kill ? "kill" : "disable"](reset);
          });
          _removeListener3(_win4, "wheel", _onScroll3);
          _removeListener3(_doc4, "scroll", _onScroll3);
          clearInterval(_syncInterval);
          _removeListener3(_doc4, "touchcancel", _passThrough3);
          _removeListener3(_body2, "touchstart", _passThrough3);
          _multiListener(_removeListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_removeListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
          _resizeDelay.kill();
          _iterateAutoRefresh(_removeListener3);
          for (var i = 0; i < _scrollers.length; i += 3) {
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
          }
        };
        ScrollTrigger3.enable = function enable() {
          _win4 = window;
          _doc4 = document;
          _docEl2 = _doc4.documentElement;
          _body2 = _doc4.body;
          if (gsap3) {
            _toArray = gsap3.utils.toArray;
            _clamp4 = gsap3.utils.clamp;
            _context3 = gsap3.core.context || _passThrough3;
            _suppressOverwrites2 = gsap3.core.suppressOverwrites || _passThrough3;
            _scrollRestoration = _win4.history.scrollRestoration || "auto";
            _lastScroll = _win4.pageYOffset || 0;
            gsap3.core.globals("ScrollTrigger", ScrollTrigger3);
            if (_body2) {
              _enabled = 1;
              _div100vh = document.createElement("div");
              _div100vh.style.height = "100vh";
              _div100vh.style.position = "absolute";
              _refresh100vh();
              _rafBugFix();
              Observer.register(gsap3);
              ScrollTrigger3.isTouch = Observer.isTouch;
              _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
              _ignoreMobileResize = Observer.isTouch === 1;
              _addListener3(_win4, "wheel", _onScroll3);
              _root2 = [_win4, _doc4, _docEl2, _body2];
              if (gsap3.matchMedia) {
                ScrollTrigger3.matchMedia = function(vars) {
                  var mm = gsap3.matchMedia(), p;
                  for (p in vars) {
                    mm.add(p, vars[p]);
                  }
                  return mm;
                };
                gsap3.addEventListener("matchMediaInit", function() {
                  return _revertAll();
                });
                gsap3.addEventListener("matchMediaRevert", function() {
                  return _revertRecorded();
                });
                gsap3.addEventListener("matchMedia", function() {
                  _refreshAll(0, 1);
                  _dispatch3("matchMedia");
                });
                gsap3.matchMedia().add("(orientation: portrait)", function() {
                  _setBaseDimensions();
                  return _setBaseDimensions;
                });
              } else {
                console.warn("Requires GSAP 3.11.0 or later");
              }
              _setBaseDimensions();
              _addListener3(_doc4, "scroll", _onScroll3);
              var bodyHasStyle = _body2.hasAttribute("style"), bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap3.core.Animation.prototype, bounds, i;
              AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
                value: function value() {
                  return this.time(-0.01, true);
                }
              });
              bodyStyle.borderTopStyle = "solid";
              bounds = _getBounds(_body2);
              _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
              _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
              border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
              if (!bodyHasStyle) {
                _body2.setAttribute("style", "");
                _body2.removeAttribute("style");
              }
              _syncInterval = setInterval(_sync, 250);
              gsap3.delayedCall(0.5, function() {
                return _startup2 = 0;
              });
              _addListener3(_doc4, "touchcancel", _passThrough3);
              _addListener3(_body2, "touchstart", _passThrough3);
              _multiListener(_addListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
              _multiListener(_addListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
              _transformProp2 = gsap3.utils.checkPrefix("transform");
              _stateProps.push(_transformProp2);
              _coreInitted3 = _getTime2();
              _resizeDelay = gsap3.delayedCall(0.2, _refreshAll).pause();
              _autoRefresh = [_doc4, "visibilitychange", function() {
                var w = _win4.innerWidth, h = _win4.innerHeight;
                if (_doc4.hidden) {
                  _prevWidth = w;
                  _prevHeight = h;
                } else if (_prevWidth !== w || _prevHeight !== h) {
                  _onResize();
                }
              }, _doc4, "DOMContentLoaded", _refreshAll, _win4, "load", _refreshAll, _win4, "resize", _onResize];
              _iterateAutoRefresh(_addListener3);
              _triggers.forEach(function(trigger) {
                return trigger.enable(0, 1);
              });
              for (i = 0; i < _scrollers.length; i += 3) {
                _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
                _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
              }
            }
          }
        };
        ScrollTrigger3.config = function config3(vars) {
          "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
          var ms = vars.syncInterval;
          ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
          "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
          if ("autoRefreshEvents" in vars) {
            _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
            _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
          }
        };
        ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
          var t2 = _getTarget(target), i = _scrollers.indexOf(t2), isViewport = _isViewport3(t2);
          if (~i) {
            _scrollers.splice(i, isViewport ? 6 : 2);
          }
          if (vars) {
            isViewport ? _proxies.unshift(_win4, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t2, vars);
          }
        };
        ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
          _triggers.forEach(function(t2) {
            return t2._ctx && t2._ctx.query === query && t2._ctx.kill(true, true);
          });
        };
        ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
          var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
          return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win4.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win4.innerHeight;
        };
        ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
          _isString3(element) && (element = _getTarget(element));
          var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
          return horizontal ? (bounds.left + offset) / _win4.innerWidth : (bounds.top + offset) / _win4.innerHeight;
        };
        ScrollTrigger3.killAll = function killAll(allowListeners) {
          _triggers.slice(0).forEach(function(t2) {
            return t2.vars.id !== "ScrollSmoother" && t2.kill();
          });
          if (allowListeners !== true) {
            var listeners = _listeners2.killAll || [];
            _listeners2 = {};
            listeners.forEach(function(f) {
              return f();
            });
          }
        };
        return ScrollTrigger3;
      }();
      ScrollTrigger2.version = "3.13.0";
      ScrollTrigger2.saveStyles = function(targets) {
        return targets ? _toArray(targets).forEach(function(target) {
          if (target && target.style) {
            var i = _savedStyles.indexOf(target);
            i >= 0 && _savedStyles.splice(i, 5);
            _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap3.core.getCache(target), _context3());
          }
        }) : _savedStyles;
      };
      ScrollTrigger2.revert = function(soft, media) {
        return _revertAll(!soft, media);
      };
      ScrollTrigger2.create = function(vars, animation) {
        return new ScrollTrigger2(vars, animation);
      };
      ScrollTrigger2.refresh = function(safe) {
        return safe ? _onResize(true) : (_coreInitted3 || ScrollTrigger2.register()) && _refreshAll(true);
      };
      ScrollTrigger2.update = function(force) {
        return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
      };
      ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
      ScrollTrigger2.maxScroll = function(element, horizontal) {
        return _maxScroll(element, horizontal ? _horizontal : _vertical);
      };
      ScrollTrigger2.getScrollFunc = function(element, horizontal) {
        return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
      };
      ScrollTrigger2.getById = function(id) {
        return _ids[id];
      };
      ScrollTrigger2.getAll = function() {
        return _triggers.filter(function(t2) {
          return t2.vars.id !== "ScrollSmoother";
        });
      };
      ScrollTrigger2.isScrolling = function() {
        return !!_lastScrollTime;
      };
      ScrollTrigger2.snapDirectional = _snapDirectional;
      ScrollTrigger2.addEventListener = function(type, callback) {
        var a = _listeners2[type] || (_listeners2[type] = []);
        ~a.indexOf(callback) || a.push(callback);
      };
      ScrollTrigger2.removeEventListener = function(type, callback) {
        var a = _listeners2[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
      };
      ScrollTrigger2.batch = function(targets, vars) {
        var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
          var elements = [], triggers = [], delay = gsap3.delayedCall(interval, function() {
            callback(elements, triggers);
            elements = [];
            triggers = [];
          }).pause();
          return function(self) {
            elements.length || delay.restart(true);
            elements.push(self.trigger);
            triggers.push(self);
            batchMax <= elements.length && delay.progress(1);
          };
        }, p;
        for (p in vars) {
          varsCopy[p] = p.substr(0, 2) === "on" && _isFunction3(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
        }
        if (_isFunction3(batchMax)) {
          batchMax = batchMax();
          _addListener3(ScrollTrigger2, "refresh", function() {
            return batchMax = vars.batchMax();
          });
        }
        _toArray(targets).forEach(function(target) {
          var config3 = {};
          for (p in varsCopy) {
            config3[p] = varsCopy[p];
          }
          config3.trigger = target;
          result.push(ScrollTrigger2.create(config3));
        });
        return result;
      };
      _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
        current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
        return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
      };
      _allowNativePanning = function _allowNativePanning2(target, direction) {
        if (direction === true) {
          target.style.removeProperty("touch-action");
        } else {
          target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
        }
        target === _docEl2 && _allowNativePanning2(_body2, direction);
      };
      _overflow = {
        auto: 1,
        scroll: 1
      };
      _nestedScroll = function _nestedScroll2(_ref5) {
        var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
        var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap3.core.getCache(node), time = _getTime2(), cs;
        if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
          while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
            node = node.parentNode;
          }
          cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
          cache._isScrollT = time;
        }
        if (cache._isScroll || axis === "x") {
          event.stopPropagation();
          event._gsapAllow = true;
        }
      };
      _inputObserver = function _inputObserver2(target, type, inputs, nested) {
        return Observer.create({
          target,
          capture: true,
          debounce: false,
          lockAxis: true,
          type,
          onWheel: nested = nested && _nestedScroll,
          onPress: nested,
          onDrag: nested,
          onScroll: nested,
          onEnable: function onEnable() {
            return inputs && _addListener3(_doc4, Observer.eventTypes[0], _captureInputs, false, true);
          },
          onDisable: function onDisable() {
            return _removeListener3(_doc4, Observer.eventTypes[0], _captureInputs, true);
          }
        });
      };
      _inputExp = /(input|label|select|textarea)/i;
      _captureInputs = function _captureInputs2(e2) {
        var isInput = _inputExp.test(e2.target.tagName);
        if (isInput || _inputIsFocused) {
          e2._gsapAllow = true;
          _inputIsFocused = isInput;
        }
      };
      _getScrollNormalizer = function _getScrollNormalizer2(vars) {
        _isObject3(vars) || (vars = {});
        vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
        vars.type || (vars.type = "wheel,touch");
        vars.debounce = !!vars.debounce;
        vars.id = vars.id || "normalizer";
        var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap3.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win4.visualViewport ? _win4.visualViewport.scale * _win4.visualViewport.width : _win4.outerWidth) / _win4.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
          return momentum(self);
        } : function() {
          return momentum || 2.8;
        }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
          return skipTouchMove = false;
        }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
          maxY = _maxScroll(target, _vertical);
          scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
          normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal)));
          lastRefreshID = _refreshID;
        }, removeContentOffset = function removeContentOffset2() {
          content._gsap.y = _round3(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
          scrollFuncY.offset = scrollFuncY.cacheID = 0;
        }, ignoreDrag = function ignoreDrag2() {
          if (skipTouchMove) {
            requestAnimationFrame(resumeTouchMove);
            var offset = _round3(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
            if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
              scrollFuncY.offset = scroll - scrollFuncY.v;
              var y = _round3((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
              content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
              content._gsap.y = y + "px";
              scrollFuncY.cacheID = _scrollers.cache;
              _updateAll();
            }
            return true;
          }
          scrollFuncY.offset && removeContentOffset();
          skipTouchMove = true;
        }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
          updateClamps();
          if (tween.isActive() && tween.vars.scrollY > maxY) {
            scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
          }
        };
        content && gsap3.set(content, {
          y: "+=0"
        });
        vars.ignoreCheck = function(e2) {
          return _fixIOSBug && e2.type === "touchmove" && ignoreDrag(e2) || scale > 1.05 && e2.type !== "touchstart" || self.isGesturing || e2.touches && e2.touches.length > 1;
        };
        vars.onPress = function() {
          skipTouchMove = false;
          var prevScale = scale;
          scale = _round3((_win4.visualViewport && _win4.visualViewport.scale || 1) / initialScale);
          tween.pause();
          prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
          startScrollX = scrollFuncX();
          startScrollY = scrollFuncY();
          updateClamps();
          lastRefreshID = _refreshID;
        };
        vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
          scrollFuncY.offset && removeContentOffset();
          if (!wasDragging) {
            onStopDelayedCall.restart(true);
          } else {
            _scrollers.cache++;
            var dur = resolveMomentumDuration(), currentScroll, endScroll;
            if (normalizeScrollX) {
              currentScroll = scrollFuncX();
              endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
              dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
              tween.vars.scrollX = scrollClampX(endScroll);
            }
            currentScroll = scrollFuncY();
            endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
            dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
            tween.vars.scrollY = scrollClampY(endScroll);
            tween.invalidate().duration(dur).play(0.01);
            if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
              gsap3.to({}, {
                onUpdate: onResize,
                duration: dur
              });
            }
          }
          onRelease && onRelease(self2);
        };
        vars.onWheel = function() {
          tween._ts && tween.pause();
          if (_getTime2() - wheelRefresh > 1e3) {
            lastRefreshID = 0;
            wheelRefresh = _getTime2();
          }
        };
        vars.onChange = function(self2, dx, dy, xArray, yArray) {
          _refreshID !== lastRefreshID && updateClamps();
          dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
          if (dy) {
            scrollFuncY.offset && removeContentOffset();
            var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
            isTouch && y !== yClamped && (startScrollY += yClamped - y);
            scrollFuncY(yClamped);
          }
          (dy || dx) && _updateAll();
        };
        vars.onEnable = function() {
          _allowNativePanning(target, normalizeScrollX ? false : "x");
          ScrollTrigger2.addEventListener("refresh", onResize);
          _addListener3(_win4, "resize", onResize);
          if (scrollFuncY.smooth) {
            scrollFuncY.target.style.scrollBehavior = "auto";
            scrollFuncY.smooth = scrollFuncX.smooth = false;
          }
          inputObserver.enable();
        };
        vars.onDisable = function() {
          _allowNativePanning(target, true);
          _removeListener3(_win4, "resize", onResize);
          ScrollTrigger2.removeEventListener("refresh", onResize);
          inputObserver.kill();
        };
        vars.lockAxis = vars.lockAxis !== false;
        self = new Observer(vars);
        self.iOS = _fixIOSBug;
        _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
        _fixIOSBug && gsap3.ticker.add(_passThrough3);
        onStopDelayedCall = self._dc;
        tween = gsap3.to(self, {
          ease: "power4",
          paused: true,
          inherit: false,
          scrollX: normalizeScrollX ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
              return tween.pause();
            })
          },
          onUpdate: _updateAll,
          onComplete: onStopDelayedCall.vars.onComplete
        });
        return self;
      };
      ScrollTrigger2.sort = function(func) {
        if (_isFunction3(func)) {
          return _triggers.sort(func);
        }
        var scroll = _win4.pageYOffset || 0;
        ScrollTrigger2.getAll().forEach(function(t2) {
          return t2._sortY = t2.trigger ? scroll + t2.trigger.getBoundingClientRect().top : t2.start + _win4.innerHeight;
        });
        return _triggers.sort(func || function(a, b) {
          return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
        });
      };
      ScrollTrigger2.observe = function(vars) {
        return new Observer(vars);
      };
      ScrollTrigger2.normalizeScroll = function(vars) {
        if (typeof vars === "undefined") {
          return _normalizer2;
        }
        if (vars === true && _normalizer2) {
          return _normalizer2.enable();
        }
        if (vars === false) {
          _normalizer2 && _normalizer2.kill();
          _normalizer2 = vars;
          return;
        }
        var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
        _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
        _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
        return normalizer;
      };
      ScrollTrigger2.core = {
        // smaller file size way to leverage in ScrollSmoother and Observer
        _getVelocityProp,
        _inputObserver,
        _scrollers,
        _proxies,
        bridge: {
          // when normalizeScroll sets the scroll position (ss = setScroll)
          ss: function ss() {
            _lastScrollTime || _dispatch3("scrollStart");
            _lastScrollTime = _getTime2();
          },
          // a way to get the _refreshing value in Observer
          ref: function ref() {
            return _refreshing;
          }
        }
      };
      _getGSAP3() && gsap3.registerPlugin(ScrollTrigger2);
    }
  });

  // node_modules/@studio-freight/lenis/dist/lenis.mjs
  function t(t2, e2, i) {
    return Math.max(t2, Math.min(e2, i));
  }
  var Animate, Dimensions, Emitter, e, VirtualScroll, Lenis;
  var init_lenis = __esm({
    "node_modules/@studio-freight/lenis/dist/lenis.mjs"() {
      init_live_reload();
      Animate = class {
        advance(e2) {
          if (!this.isRunning) return;
          let i = false;
          if (this.lerp) this.value = (s = this.value, o = this.to, n = 60 * this.lerp, r = e2, function(t2, e3, i2) {
            return (1 - i2) * t2 + i2 * e3;
          }(s, o, 1 - Math.exp(-n * r))), Math.round(this.value) === this.to && (this.value = this.to, i = true);
          else {
            this.currentTime += e2;
            const s2 = t(0, this.currentTime / this.duration, 1);
            i = s2 >= 1;
            const o2 = i ? 1 : this.easing(s2);
            this.value = this.from + (this.to - this.from) * o2;
          }
          var s, o, n, r;
          this.onUpdate?.(this.value, i), i && this.stop();
        }
        stop() {
          this.isRunning = false;
        }
        fromTo(t2, e2, { lerp: i = 0.1, duration: s = 1, easing: o = (t3) => t3, onStart: n, onUpdate: r }) {
          this.from = this.value = t2, this.to = e2, this.lerp = i, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = true, n?.(), this.onUpdate = r;
        }
      };
      Dimensions = class {
        constructor({ wrapper: t2, content: e2, autoResize: i = true, debounce: s = 250 } = {}) {
          this.wrapper = t2, this.content = e2, i && (this.debouncedResize = /* @__PURE__ */ function(t3, e3) {
            let i2;
            return function() {
              let s2 = arguments, o = this;
              clearTimeout(i2), i2 = setTimeout(function() {
                t3.apply(o, s2);
              }, e3);
            };
          }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, false) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
        }
        destroy() {
          this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), window.removeEventListener("resize", this.debouncedResize, false);
        }
        resize = () => {
          this.onWrapperResize(), this.onContentResize();
        };
        onWrapperResize = () => {
          this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
        };
        onContentResize = () => {
          this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
        };
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      };
      Emitter = class {
        constructor() {
          this.events = {};
        }
        emit(t2, ...e2) {
          let i = this.events[t2] || [];
          for (let t3 = 0, s = i.length; t3 < s; t3++) i[t3](...e2);
        }
        on(t2, e2) {
          return this.events[t2]?.push(e2) || (this.events[t2] = [e2]), () => {
            this.events[t2] = this.events[t2]?.filter((t3) => e2 !== t3);
          };
        }
        off(t2, e2) {
          this.events[t2] = this.events[t2]?.filter((t3) => e2 !== t3);
        }
        destroy() {
          this.events = {};
        }
      };
      e = 100 / 6;
      VirtualScroll = class {
        constructor(t2, { wheelMultiplier: e2 = 1, touchMultiplier: i = 1 }) {
          this.element = t2, this.wheelMultiplier = e2, this.touchMultiplier = i, this.touchStart = { x: null, y: null }, this.emitter = new Emitter(), window.addEventListener("resize", this.onWindowResize, false), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, { passive: false }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: false });
        }
        on(t2, e2) {
          return this.emitter.on(t2, e2);
        }
        destroy() {
          this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, false), this.element.removeEventListener("wheel", this.onWheel, { passive: false }), this.element.removeEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.removeEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.removeEventListener("touchend", this.onTouchEnd, { passive: false });
        }
        onTouchStart = (t2) => {
          const { clientX: e2, clientY: i } = t2.targetTouches ? t2.targetTouches[0] : t2;
          this.touchStart.x = e2, this.touchStart.y = i, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t2 });
        };
        onTouchMove = (t2) => {
          const { clientX: e2, clientY: i } = t2.targetTouches ? t2.targetTouches[0] : t2, s = -(e2 - this.touchStart.x) * this.touchMultiplier, o = -(i - this.touchStart.y) * this.touchMultiplier;
          this.touchStart.x = e2, this.touchStart.y = i, this.lastDelta = { x: s, y: o }, this.emitter.emit("scroll", { deltaX: s, deltaY: o, event: t2 });
        };
        onTouchEnd = (t2) => {
          this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t2 });
        };
        onWheel = (t2) => {
          let { deltaX: i, deltaY: s, deltaMode: o } = t2;
          i *= 1 === o ? e : 2 === o ? this.windowWidth : 1, s *= 1 === o ? e : 2 === o ? this.windowHeight : 1, i *= this.wheelMultiplier, s *= this.wheelMultiplier, this.emitter.emit("scroll", { deltaX: i, deltaY: s, event: t2 });
        };
        onWindowResize = () => {
          this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
        };
      };
      Lenis = class {
        constructor({ wrapper: t2 = window, content: e2 = document.documentElement, wheelEventsTarget: i = t2, eventsTarget: s = i, smoothWheel: o = true, syncTouch: n = false, syncTouchLerp: r = 0.075, touchInertiaMultiplier: l = 35, duration: h, easing: a = (t3) => Math.min(1, 1.001 - Math.pow(2, -10 * t3)), lerp: c = !h && 0.1, infinite: d = false, orientation: p = "vertical", gestureOrientation: u = "vertical", touchMultiplier: m = 1, wheelMultiplier: v = 1, autoResize: g = true, __experimental__naiveDimensions: S = false } = {}) {
          this.__isSmooth = false, this.__isScrolling = false, this.__isStopped = false, this.__isLocked = false, this.onVirtualScroll = ({ deltaX: t3, deltaY: e3, event: i2 }) => {
            if (i2.ctrlKey) return;
            const s2 = i2.type.includes("touch"), o2 = i2.type.includes("wheel");
            if (this.options.syncTouch && s2 && "touchstart" === i2.type && !this.isStopped && !this.isLocked) return void this.reset();
            const n2 = 0 === t3 && 0 === e3, r2 = "vertical" === this.options.gestureOrientation && 0 === e3 || "horizontal" === this.options.gestureOrientation && 0 === t3;
            if (n2 || r2) return;
            let l2 = i2.composedPath();
            if (l2 = l2.slice(0, l2.indexOf(this.rootElement)), l2.find((t4) => {
              var e4, i3, n3, r3, l3;
              return (null === (e4 = t4.hasAttribute) || void 0 === e4 ? void 0 : e4.call(t4, "data-lenis-prevent")) || s2 && (null === (i3 = t4.hasAttribute) || void 0 === i3 ? void 0 : i3.call(t4, "data-lenis-prevent-touch")) || o2 && (null === (n3 = t4.hasAttribute) || void 0 === n3 ? void 0 : n3.call(t4, "data-lenis-prevent-wheel")) || (null === (r3 = t4.classList) || void 0 === r3 ? void 0 : r3.contains("lenis")) && !(null === (l3 = t4.classList) || void 0 === l3 ? void 0 : l3.contains("lenis-stopped"));
            })) return;
            if (this.isStopped || this.isLocked) return void i2.preventDefault();
            if (this.isSmooth = this.options.syncTouch && s2 || this.options.smoothWheel && o2, !this.isSmooth) return this.isScrolling = false, void this.animate.stop();
            i2.preventDefault();
            let h2 = e3;
            "both" === this.options.gestureOrientation ? h2 = Math.abs(e3) > Math.abs(t3) ? e3 : t3 : "horizontal" === this.options.gestureOrientation && (h2 = t3);
            const a2 = s2 && this.options.syncTouch, c2 = s2 && "touchend" === i2.type && Math.abs(h2) > 5;
            c2 && (h2 = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + h2, Object.assign({ programmatic: false }, a2 ? { lerp: c2 ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }));
          }, this.onNativeScroll = () => {
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
              const t3 = this.animatedScroll;
              this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - t3), this.emit();
            }
          }, window.lenisVersion = "1.0.42", t2 !== document.documentElement && t2 !== document.body || (t2 = window), this.options = { wrapper: t2, content: e2, wheelEventsTarget: i, eventsTarget: s, smoothWheel: o, syncTouch: n, syncTouchLerp: r, touchInertiaMultiplier: l, duration: h, easing: a, lerp: c, infinite: d, gestureOrientation: u, orientation: p, touchMultiplier: m, wheelMultiplier: v, autoResize: g, __experimental__naiveDimensions: S }, this.animate = new Animate(), this.emitter = new Emitter(), this.dimensions = new Dimensions({ wrapper: t2, content: e2, autoResize: g }), this.toggleClassName("lenis", true), this.velocity = 0, this.isLocked = false, this.isStopped = false, this.isSmooth = n || o, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false), this.virtualScroll = new VirtualScroll(s, { touchMultiplier: m, wheelMultiplier: v }), this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", false), this.toggleClassName("lenis-smooth", false), this.toggleClassName("lenis-scrolling", false), this.toggleClassName("lenis-stopped", false), this.toggleClassName("lenis-locked", false);
        }
        on(t2, e2) {
          return this.emitter.on(t2, e2);
        }
        off(t2, e2) {
          return this.emitter.off(t2, e2);
        }
        setScroll(t2) {
          this.isHorizontal ? this.rootElement.scrollLeft = t2 : this.rootElement.scrollTop = t2;
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        reset() {
          this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
        }
        start() {
          this.isStopped && (this.isStopped = false, this.reset());
        }
        stop() {
          this.isStopped || (this.isStopped = true, this.animate.stop(), this.reset());
        }
        raf(t2) {
          const e2 = t2 - (this.time || t2);
          this.time = t2, this.animate.advance(1e-3 * e2);
        }
        scrollTo(e2, { offset: i = 0, immediate: s = false, lock: o = false, duration: n = this.options.duration, easing: r = this.options.easing, lerp: l = !n && this.options.lerp, onComplete: h, force: a = false, programmatic: c = true } = {}) {
          if (!this.isStopped && !this.isLocked || a) {
            if (["top", "left", "start"].includes(e2)) e2 = 0;
            else if (["bottom", "right", "end"].includes(e2)) e2 = this.limit;
            else {
              let t2;
              if ("string" == typeof e2 ? t2 = document.querySelector(e2) : (null == e2 ? void 0 : e2.nodeType) && (t2 = e2), t2) {
                if (this.options.wrapper !== window) {
                  const t3 = this.options.wrapper.getBoundingClientRect();
                  i -= this.isHorizontal ? t3.left : t3.top;
                }
                const s2 = t2.getBoundingClientRect();
                e2 = (this.isHorizontal ? s2.left : s2.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof e2) {
              if (e2 += i, e2 = Math.round(e2), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e2 = t(0, e2, this.limit), s) return this.animatedScroll = this.targetScroll = e2, this.setScroll(this.scroll), this.reset(), void (null == h || h(this));
              if (!c) {
                if (e2 === this.targetScroll) return;
                this.targetScroll = e2;
              }
              this.animate.fromTo(this.animatedScroll, e2, { duration: n, easing: r, lerp: l, onStart: () => {
                o && (this.isLocked = true), this.isScrolling = true;
              }, onUpdate: (t2, e3) => {
                this.isScrolling = true, this.velocity = t2 - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t2, this.setScroll(this.scroll), c && (this.targetScroll = t2), e3 || this.emit(), e3 && (this.reset(), this.emit(), null == h || h(this), this.__preventNextScrollEvent = true, requestAnimationFrame(() => {
                  delete this.__preventNextScrollEvent;
                }));
              } });
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite ? (t2 = this.animatedScroll, e2 = this.limit, (t2 % e2 + e2) % e2) : this.animatedScroll;
          var t2, e2;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isSmooth() {
          return this.__isSmooth;
        }
        set isSmooth(t2) {
          this.__isSmooth !== t2 && (this.__isSmooth = t2, this.toggleClassName("lenis-smooth", t2));
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(t2) {
          this.__isScrolling !== t2 && (this.__isScrolling = t2, this.toggleClassName("lenis-scrolling", t2));
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(t2) {
          this.__isStopped !== t2 && (this.__isStopped = t2, this.toggleClassName("lenis-stopped", t2));
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(t2) {
          this.__isLocked !== t2 && (this.__isLocked = t2, this.toggleClassName("lenis-locked", t2));
        }
        get className() {
          let t2 = "lenis";
          return this.isStopped && (t2 += " lenis-stopped"), this.isLocked && (t2 += " lenis-locked"), this.isScrolling && (t2 += " lenis-scrolling"), this.isSmooth && (t2 += " lenis-smooth"), t2;
        }
        toggleClassName(t2, e2) {
          this.rootElement.classList.toggle(t2, e2), this.emitter.emit("className change", this);
        }
      };
    }
  });

  // src/utils/webflowEnvChecks.ts
  function getWebflowEnv() {
    const wf = window.Webflow;
    const isEditor = document.documentElement.hasAttribute("w-editor") || typeof window.WebflowEditor !== "undefined" || wf?.env?.("editor") === true;
    const isPreview = wf?.env?.("preview") === true;
    return isEditor ? "editor" : isPreview ? "preview" : "published";
  }
  var init_webflowEnvChecks = __esm({
    "src/utils/webflowEnvChecks.ts"() {
      "use strict";
      init_live_reload();
    }
  });

  // src/utils/smoothScroll.ts
  function initSmoothScroll() {
    const env = getWebflowEnv();
    if (env === "editor") {
      console.log("[SmoothScroll] Editor detected \u2014 disabling Lenis.");
      disableScrollStyles();
      return;
    }
    lenis = new Lenis({
      duration: 0.8,
      easing: (t2) => 1 - Math.pow(1 - t2, 3),
      // cubic ease-out
      // easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // easeOutExpo
      lerp: 0.1,
      // Experiment with values between 0.1 and 0.25.
      // A higher value will make it less floaty and more responsive.
      wheelMultiplier: 1,
      touchMultiplier: 1,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      infinite: false
    });
    function raf(time) {
      if (!lenis) return;
      lenis.raf(time);
      ScrollTrigger2.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    ScrollTrigger2.refresh();
  }
  function destroySmoothScroll() {
    if (!lenis) return;
    lenis.stop();
    lenis.destroy();
    lenis = null;
    disableScrollStyles();
  }
  function disableScrollStyles() {
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.overflow = "";
  }
  function stopSmoothScroll() {
    lenis?.stop();
  }
  function startSmoothScroll() {
    lenis?.start();
  }
  var lenis;
  var init_smoothScroll = __esm({
    "src/utils/smoothScroll.ts"() {
      "use strict";
      init_live_reload();
      init_lenis();
      init_gsap();
      init_ScrollTrigger();
      init_webflowEnvChecks();
      gsapWithCSS.registerPlugin(ScrollTrigger2);
      lenis = null;
    }
  });

  // node_modules/gsap/DrawSVGPlugin.js
  var gsap4, _toArray2, _doc5, _win5, _isEdge, _coreInitted4, _warned, _getStyleSaver3, _reverting3, _windowExists7, _getGSAP5, _numExp2, _types, _round5, _parseNum, _parseSingleVal, _getAttributeAsNumber, _sqrt2, _getDistance, _warn3, _hasNonScalingStroke, _bonusValidated, _parse, _getLength, _getPosition, _initCore5, DrawSVGPlugin;
  var init_DrawSVGPlugin = __esm({
    "node_modules/gsap/DrawSVGPlugin.js"() {
      init_live_reload();
      _windowExists7 = function _windowExists8() {
        return typeof window !== "undefined";
      };
      _getGSAP5 = function _getGSAP6() {
        return gsap4 || _windowExists7() && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
      };
      _numExp2 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi;
      _types = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"]
      };
      _round5 = function _round6(value) {
        return Math.round(value * 1e4) / 1e4;
      };
      _parseNum = function _parseNum2(value) {
        return parseFloat(value) || 0;
      };
      _parseSingleVal = function _parseSingleVal2(value, length) {
        var num = _parseNum(value);
        return ~value.indexOf("%") ? num / 100 * length : num;
      };
      _getAttributeAsNumber = function _getAttributeAsNumber2(target, attr) {
        return _parseNum(target.getAttribute(attr));
      };
      _sqrt2 = Math.sqrt;
      _getDistance = function _getDistance2(x1, y1, x2, y2, scaleX, scaleY) {
        return _sqrt2(Math.pow((_parseNum(x2) - _parseNum(x1)) * scaleX, 2) + Math.pow((_parseNum(y2) - _parseNum(y1)) * scaleY, 2));
      };
      _warn3 = function _warn4(message) {
        return console.warn(message);
      };
      _hasNonScalingStroke = function _hasNonScalingStroke2(target) {
        return target.getAttribute("vector-effect") === "non-scaling-stroke";
      };
      _bonusValidated = 1;
      _parse = function _parse2(value, length, defaultStart) {
        var i = value.indexOf(" "), s, e2;
        if (i < 0) {
          s = defaultStart !== void 0 ? defaultStart + "" : value;
          e2 = value;
        } else {
          s = value.substr(0, i);
          e2 = value.substr(i + 1);
        }
        s = _parseSingleVal(s, length);
        e2 = _parseSingleVal(e2, length);
        return s > e2 ? [e2, s] : [s, e2];
      };
      _getLength = function _getLength2(target) {
        target = _toArray2(target)[0];
        if (!target) {
          return 0;
        }
        var type = target.tagName.toLowerCase(), style = target.style, scaleX = 1, scaleY = 1, length, bbox, points, prevPoint, i, rx, ry;
        if (_hasNonScalingStroke(target)) {
          scaleY = target.getScreenCTM();
          scaleX = _sqrt2(scaleY.a * scaleY.a + scaleY.b * scaleY.b);
          scaleY = _sqrt2(scaleY.d * scaleY.d + scaleY.c * scaleY.c);
        }
        try {
          bbox = target.getBBox();
        } catch (e2) {
          _warn3("Some browsers won't measure invisible elements (like display:none or masks inside defs).");
        }
        var _ref = bbox || {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }, x = _ref.x, y = _ref.y, width = _ref.width, height = _ref.height;
        if ((!bbox || !width && !height) && _types[type]) {
          width = _getAttributeAsNumber(target, _types[type][0]);
          height = _getAttributeAsNumber(target, _types[type][1]);
          if (type !== "rect" && type !== "line") {
            width *= 2;
            height *= 2;
          }
          if (type === "line") {
            x = _getAttributeAsNumber(target, "x1");
            y = _getAttributeAsNumber(target, "y1");
            width = Math.abs(width - x);
            height = Math.abs(height - y);
          }
        }
        if (type === "path") {
          prevPoint = style.strokeDasharray;
          style.strokeDasharray = "none";
          length = target.getTotalLength() || 0;
          _round5(scaleX) !== _round5(scaleY) && !_warned && (_warned = 1) && _warn3("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled.");
          length *= (scaleX + scaleY) / 2;
          style.strokeDasharray = prevPoint;
        } else if (type === "rect") {
          length = width * 2 * scaleX + height * 2 * scaleY;
        } else if (type === "line") {
          length = _getDistance(x, y, x + width, y + height, scaleX, scaleY);
        } else if (type === "polyline" || type === "polygon") {
          points = target.getAttribute("points").match(_numExp2) || [];
          type === "polygon" && points.push(points[0], points[1]);
          length = 0;
          for (i = 2; i < points.length; i += 2) {
            length += _getDistance(points[i - 2], points[i - 1], points[i], points[i + 1], scaleX, scaleY) || 0;
          }
        } else if (type === "circle" || type === "ellipse") {
          rx = width / 2 * scaleX;
          ry = height / 2 * scaleY;
          length = Math.PI * (3 * (rx + ry) - _sqrt2((3 * rx + ry) * (rx + 3 * ry)));
        }
        return length || 0;
      };
      _getPosition = function _getPosition2(target, length) {
        target = _toArray2(target)[0];
        if (!target) {
          return [0, 0];
        }
        length || (length = _getLength(target) + 1);
        var cs = _win5.getComputedStyle(target), dash = cs.strokeDasharray || "", offset = _parseNum(cs.strokeDashoffset), i = dash.indexOf(",");
        i < 0 && (i = dash.indexOf(" "));
        dash = i < 0 ? length : _parseNum(dash.substr(0, i));
        dash > length && (dash = length);
        return [-offset || 0, dash - offset || 0];
      };
      _initCore5 = function _initCore6() {
        if (_windowExists7()) {
          _doc5 = document;
          _win5 = window;
          _coreInitted4 = gsap4 = _getGSAP5();
          _toArray2 = gsap4.utils.toArray;
          _getStyleSaver3 = gsap4.core.getStyleSaver;
          _reverting3 = gsap4.core.reverting || function() {
          };
          _isEdge = ((_win5.navigator || {}).userAgent || "").indexOf("Edge") !== -1;
        }
      };
      DrawSVGPlugin = {
        version: "3.13.0",
        name: "drawSVG",
        register: function register(core) {
          gsap4 = core;
          _initCore5();
        },
        init: function init4(target, value, tween, index, targets) {
          if (!target.getBBox) {
            return false;
          }
          _coreInitted4 || _initCore5();
          var length = _getLength(target), start, end, cs;
          this.styles = _getStyleSaver3 && _getStyleSaver3(target, "strokeDashoffset,strokeDasharray,strokeMiterlimit");
          this.tween = tween;
          this._style = target.style;
          this._target = target;
          if (value + "" === "true") {
            value = "0 100%";
          } else if (!value) {
            value = "0 0";
          } else if ((value + "").indexOf(" ") === -1) {
            value = "0 " + value;
          }
          start = _getPosition(target, length);
          end = _parse(value, length, start[0]);
          this._length = _round5(length);
          this._dash = _round5(start[1] - start[0]);
          this._offset = _round5(-start[0]);
          this._dashPT = this.add(this, "_dash", this._dash, _round5(end[1] - end[0]), 0, 0, 0, 0, 0, 1);
          this._offsetPT = this.add(this, "_offset", this._offset, _round5(-end[0]), 0, 0, 0, 0, 0, 1);
          if (_isEdge) {
            cs = _win5.getComputedStyle(target);
            if (cs.strokeLinecap !== cs.strokeLinejoin) {
              end = _parseNum(cs.strokeMiterlimit);
              this.add(target.style, "strokeMiterlimit", end, end + 0.01);
            }
          }
          this._live = _hasNonScalingStroke(target) || ~(value + "").indexOf("live");
          this._nowrap = ~(value + "").indexOf("nowrap");
          this._props.push("drawSVG");
          return _bonusValidated;
        },
        render: function render3(ratio, data) {
          if (data.tween._time || !_reverting3()) {
            var pt = data._pt, style = data._style, length, lengthRatio, dash, offset;
            if (pt) {
              if (data._live) {
                length = _getLength(data._target);
                if (length !== data._length) {
                  lengthRatio = length / data._length;
                  data._length = length;
                  if (data._offsetPT) {
                    data._offsetPT.s *= lengthRatio;
                    data._offsetPT.c *= lengthRatio;
                  }
                  if (data._dashPT) {
                    data._dashPT.s *= lengthRatio;
                    data._dashPT.c *= lengthRatio;
                  } else {
                    data._dash *= lengthRatio;
                  }
                }
              }
              while (pt) {
                pt.r(ratio, pt.d);
                pt = pt._next;
              }
              dash = data._dash || ratio && ratio !== 1 && 1e-4 || 0;
              length = data._length - dash + 0.1;
              offset = data._offset;
              dash && offset && dash + Math.abs(offset % data._length) > data._length - 0.05 && (offset += offset < 0 ? 5e-3 : -5e-3) && (length += 5e-3);
              style.strokeDashoffset = dash ? offset : offset + 1e-3;
              style.strokeDasharray = length < 0.1 ? "none" : dash ? dash + "px," + (data._nowrap ? 999999 : length) + "px" : "0px, 999999px";
            }
          } else {
            data.styles.revert();
          }
        },
        getLength: _getLength,
        getPosition: _getPosition
      };
      _getGSAP5() && gsap4.registerPlugin(DrawSVGPlugin);
    }
  });

  // node_modules/@finsweet/ts-utils/dist/animations/index.js
  var init_animations = __esm({
    "node_modules/@finsweet/ts-utils/dist/animations/index.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/type-guards/instances.js
  var init_instances = __esm({
    "node_modules/@finsweet/ts-utils/dist/type-guards/instances.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/type-guards/primitives.js
  var init_primitives = __esm({
    "node_modules/@finsweet/ts-utils/dist/type-guards/primitives.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/type-guards/index.js
  var init_type_guards = __esm({
    "node_modules/@finsweet/ts-utils/dist/type-guards/index.js"() {
      init_live_reload();
      init_instances();
      init_primitives();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/webflow/css.js
  var init_css = __esm({
    "node_modules/@finsweet/ts-utils/dist/webflow/css.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/helpers/index.js
  var init_helpers = __esm({
    "node_modules/@finsweet/ts-utils/dist/helpers/index.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/components/index.js
  var init_components = __esm({
    "node_modules/@finsweet/ts-utils/dist/components/index.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/types/apis/Greenhouse.js
  var init_Greenhouse = __esm({
    "node_modules/@finsweet/ts-utils/dist/types/apis/Greenhouse.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/types/index.js
  var init_types = __esm({
    "node_modules/@finsweet/ts-utils/dist/types/index.js"() {
      init_live_reload();
      init_Greenhouse();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/webflow/breakpoints.js
  var WEBFLOW_BREAKPOINTS;
  var init_breakpoints = __esm({
    "node_modules/@finsweet/ts-utils/dist/webflow/breakpoints.js"() {
      init_live_reload();
      WEBFLOW_BREAKPOINTS = /* @__PURE__ */ new Map([
        ["tiny", "(max-width: 479px)"],
        ["small", "(max-width: 767px)"],
        ["medium", "(max-width: 991px)"],
        ["main", "(min-width: 992px)"]
      ]);
    }
  });

  // node_modules/@finsweet/ts-utils/dist/webflow/Webflow.js
  var init_Webflow = __esm({
    "node_modules/@finsweet/ts-utils/dist/webflow/Webflow.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/webflow/WebflowElements.js
  var init_WebflowElements = __esm({
    "node_modules/@finsweet/ts-utils/dist/webflow/WebflowElements.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/webflow/index.js
  var init_webflow = __esm({
    "node_modules/@finsweet/ts-utils/dist/webflow/index.js"() {
      init_live_reload();
      init_breakpoints();
      init_css();
      init_Webflow();
      init_WebflowElements();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/index.js
  var init_dist = __esm({
    "node_modules/@finsweet/ts-utils/dist/index.js"() {
      init_live_reload();
      init_animations();
      init_components();
      init_helpers();
      init_type_guards();
      init_types();
      init_webflow();
    }
  });

  // src/utils/deviceInfo.ts
  var breakpoints;
  var init_deviceInfo = __esm({
    "src/utils/deviceInfo.ts"() {
      "use strict";
      init_live_reload();
      init_dist();
      breakpoints = () => {
        let device = "";
        const wBreakpoints = [...WEBFLOW_BREAKPOINTS];
        const breakpoints2 = {
          tiny: 0,
          small: 0,
          medium: 0,
          main: 0
        };
        window.addEventListener("resize", () => {
          init5();
        });
        init5();
        function init5() {
          for (const i in wBreakpoints) {
            const nametTemp = wBreakpoints[i][0];
            const pointTemp = parseInt(wBreakpoints[i][1].split(":")[1].split("p")[0]);
            breakpoints2[nametTemp] = pointTemp;
          }
          const curWidth = window.innerWidth;
          if (curWidth > breakpoints2.main) {
            device = "desktop";
          } else if (curWidth < breakpoints2.main && curWidth > breakpoints2.small) {
            device = "tablet";
          } else if (curWidth < breakpoints2.medium && curWidth > breakpoints2.tiny) {
            device = "mobile-landscape";
          } else if (curWidth < breakpoints2.small) {
            device = "mobile-portrait";
          }
        }
        return [device, window.innerWidth, window.innerHeight];
      };
    }
  });

  // src/components/preloader.ts
  var preloader_exports = {};
  __export(preloader_exports, {
    default: () => preloader_default,
    preloader: () => preloader
  });
  var Preloader, preloader, preloader_default;
  var init_preloader = __esm({
    "src/components/preloader.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      init_DrawSVGPlugin();
      init_deviceInfo();
      gsapWithCSS.registerPlugin(DrawSVGPlugin);
      Preloader = class {
        component;
        loaderHighlights;
        LoaderTracks;
        logo;
        heroVideo;
        paths;
        bp;
        constructor() {
          this.component = document.querySelector(".component_preloader");
          this.loaderHighlights = [
            ...this.component.querySelectorAll(".component_span.is-highlight")
          ];
          this.LoaderTracks = [
            ...this.component.querySelectorAll(".component_span.is-track")
          ];
          this.logo = this.component.querySelector("#preloadLogoMain");
          this.heroVideo = document.querySelector("#homeHeroVideo");
          this.paths = [...this.logo.querySelectorAll("path")];
          this.bp = breakpoints()[0];
          if (this.heroVideo) this.heroVideo.pause();
          gsapWithCSS.set(this.component, { display: "block" });
          gsapWithCSS.set(this.paths, { stroke: "currentColor", strokeWidth: 1, fill: "none" });
          this.animate();
        }
        animate() {
          const tl = gsapWithCSS.timeline({
            onComplete: () => {
              this.reveal();
            }
          });
          tl.fromTo(
            this.paths,
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 1, ease: "power1.inOut" },
            "<"
          );
          tl.fromTo(
            this.LoaderTracks,
            { opacity: 0 },
            { duration: 1, opacity: 0.2, ease: "power3.inOut" },
            "<"
          );
          tl.fromTo(
            this.paths,
            { fillOpacity: 0 },
            { duration: 1, fill: "currentColor", fillOpacity: 1, strokeOpacity: 0, ease: "power1.inOut" },
            "<0.5"
          );
          if (this.bp !== "mobile-portrait") {
            tl.to(this.loaderHighlights[0], { duration: 1, width: "100%", ease: "power3.in" }, "<");
          }
          tl.to(this.loaderHighlights[1], { duration: 1, width: "100%", ease: "power3.out" });
        }
        reveal() {
          const hero = document.querySelector(".section_hero");
          const heroHeader = hero.querySelector(".hero_header");
          const nav = document.querySelector(".component_nav");
          const tl = gsapWithCSS.timeline({});
          tl.to(this.loaderHighlights[0], { x: "100%", ease: "power3.in" });
          tl.to(this.logo, { opacity: 0, ease: "power4.out" }, "<");
          tl.to(this.loaderHighlights[1], { x: "100%", ease: "power3.out" });
          tl.to(this.LoaderTracks, { duration: 1, opacity: 0, ease: "circ.out" }, "<0.5");
          tl.to(this.component, { duration: 2, opacity: 0, display: "none", ease: "power3.out" }, "<");
          tl.from(
            heroHeader,
            { duration: 1, filter: "blur(100px)", opacity: 0, ease: "power3.out" },
            "<"
          );
          tl.from(nav, { duration: 1, filter: "blur(100px)", opacity: 0, ease: "power3.out" }, "<");
          const tlDur = tl.duration();
          if (this.heroVideo) {
            setTimeout(
              () => {
                this.heroVideo.play().catch((err) => {
                  console.warn(`Failed to play video (${this.heroVideo}):`, err);
                });
              },
              tlDur * 0.35 * 1e3
            );
          }
        }
      };
      preloader = () => {
        new Preloader();
      };
      preloader_default = preloader;
    }
  });

  // src/components/menu.ts
  var menu_exports = {};
  __export(menu_exports, {
    default: () => menu_default,
    menu: () => menu
  });
  var Menu, menu, menu_default;
  var init_menu = __esm({
    "src/components/menu.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      init_smoothScroll();
      Menu = class {
        component;
        menuMain;
        menuOpenIcon;
        menuCloseIcon;
        menuLinks;
        bgMain;
        bgGlass;
        bgTexture;
        menuInfo;
        menuOverflow;
        menuWidth;
        constructor() {
          this.component = document.querySelector(".component_menu");
          this.menuOpenIcon = document.querySelector("#menuOpen");
          this.menuCloseIcon = document.querySelector("#menuClose");
          this.menuMain = this.component.querySelector(".menu_wrap");
          this.bgMain = this.component.querySelector(".menu-bg_main");
          this.bgGlass = this.component.querySelector(".menu-bg_glass");
          this.bgTexture = this.component.querySelector(".menu_texture");
          this.menuLinks = [...document.querySelectorAll(".menu_link")];
          this.menuInfo = this.component.querySelector(".menu_info");
          this.menuOverflow = this.component.querySelector(".menu_overflow");
          this.menuWidth = this.component.clientWidth;
          this.setup();
          this.addListeners();
        }
        setup() {
          gsapWithCSS.set([this.bgMain, this.bgGlass], { width: 0 });
          this.measureMenu();
        }
        addListeners() {
          this.menuOpenIcon.addEventListener("click", () => {
            this.openMenu();
          });
          this.menuCloseIcon.addEventListener("click", () => {
            this.closeMenu();
          });
          this.menuOverflow.addEventListener("click", () => {
            this.closeMenu();
          });
        }
        openMenu() {
          stopSmoothScroll();
          const tl = gsapWithCSS.timeline({
            onComplete: () => {
              console.log("complete");
            }
          });
          tl.set(this.component, { display: "flex" });
          tl.to(this.component, { duration: 0.5, opacity: 1, ease: "powe2.out" });
          tl.to(this.bgGlass, { duration: 0.8, width: this.menuWidth, ease: "power4.inOut" }, "<");
          tl.to(this.bgMain, { duration: 0.8, width: this.menuWidth - 16, ease: "power1.inOut" }, "<");
          tl.to(this.menuCloseIcon, { duration: 0.8, opacity: 1, ease: "power2.out" }, "<");
          tl.fromTo(
            this.bgTexture,
            { opacity: 0 },
            { duration: 0.8, opacity: 0.05, ease: "sine.out" },
            "<0.1"
          );
          tl.fromTo(
            this.menuLinks,
            { opacity: 0, y: "2rem" },
            { duration: 0.5, opacity: 1, y: "0rem", ease: "sine.out", stagger: 0.1 }
          );
          tl.fromTo(
            this.menuInfo.children,
            { opacity: 0, y: "2rem" },
            { duration: 0.5, opacity: 1, y: "0rem", ease: "sine.out", stagger: 0.1 },
            "<0.5"
          );
        }
        closeMenu() {
          startSmoothScroll();
          const tl = gsapWithCSS.timeline();
          tl.to(this.menuLinks, {
            duration: 0.5,
            opacity: 0,
            y: "-2rem",
            ease: "sine.out",
            stagger: 0.1
          });
          tl.to(
            this.menuInfo.children,
            { duration: 0.5, opacity: 0, y: "-2rem", ease: "sine.out", stagger: 0.1 },
            "<0.5"
          );
          tl.to(this.menuCloseIcon, { duration: 0.8, opacity: 0, ease: "power1.inOut" }, "<");
          tl.to(this.bgTexture, { duration: 0.8, opacity: 0, ease: "power1.inOut" }, "<0.1");
          tl.to(this.bgGlass, { duration: 0.8, width: 0, ease: "power4.inOut" });
          tl.to(this.bgMain, { duration: 0.8, width: 0, ease: "power1.inOut" }, "<");
          tl.to(this.component, { duration: 0.8, opacity: 0, ease: "powe3.out" });
          tl.set(this.component, { display: "none" });
        }
        measureMenu() {
          gsapWithCSS.set(this.component, { x: "-100%", display: "block" });
          this.menuWidth = this.menuMain.getBoundingClientRect().width;
          gsapWithCSS.set(this.component, { x: "0%", display: "none" });
        }
      };
      menu = () => {
        new Menu();
      };
      menu_default = menu;
    }
  });

  // src/components/pageTransition.ts
  var pageTransition_exports = {};
  __export(pageTransition_exports, {
    default: () => pageTransition_default,
    pageTransition: () => pageTransition
  });
  var PageTransition, pageTransition, pageTransition_default;
  var init_pageTransition = __esm({
    "src/components/pageTransition.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      PageTransition = class {
        component;
        links;
        filteredLinks;
        transitionPane;
        transitionFilter;
        constructor() {
          this.component = document.querySelector(".component_transition");
          this.links = [...document.querySelectorAll("a")].map((item) => item);
          this.filteredLinks = this.filterLinks();
          this.transitionPane = this.component.querySelector(".transition_container");
          this.transitionFilter = document.querySelector(".transition_filter");
          this.checkPage();
          this.setListeners();
        }
        checkPage() {
          const windowLocation = window.location.pathname;
          if (windowLocation === "/") {
            gsapWithCSS.to(this.component, { display: "none" });
          }
          this.animateOut();
        }
        setListeners() {
          this.filteredLinks.forEach((item) => {
            item.addEventListener("click", (e2) => {
              e2.preventDefault();
              const destination = item.href;
              this.animateIn(destination);
            });
          });
          window.onpageshow = function(event) {
            if (event.persisted) {
              window.location.reload();
            }
          };
        }
        animateIn(link) {
          const tl = gsapWithCSS.timeline({
            onComplete: () => {
              window.location.href = link;
            }
          });
          tl.set(this.component, { display: "block" });
          tl.set(this.transitionFilter, { display: "block" });
          tl.fromTo(
            this.transitionPane,
            { y: "100%", scale: 0.6, borderRadius: "3rem" },
            { duration: 1.5, y: "0%", scale: 1, borderRadius: 0, ease: "power4.out" }
          );
          tl.fromTo(
            this.transitionFilter,
            { opacity: 0 },
            { duration: 1.5, opacity: 1, ease: "power4.out" },
            "<"
          );
        }
        animateOut() {
          const tl = gsapWithCSS.timeline({
            onComplete: () => {
              gsapWithCSS.set("html", { height: "auto" });
              gsapWithCSS.set("body", { overflow: "auto" });
            }
          });
          tl.to(this.transitionPane, {
            duration: 2,
            y: "-100%",
            scale: 0.8,
            borderRadius: "3rem",
            ease: "power4.out"
          });
          tl.to(this.transitionFilter, { duration: 2, opacity: 0, ease: "power4.out" }, "<");
          tl.set(this.component, { display: "none" });
          tl.set(this.transitionFilter, { display: "none" });
        }
        filterLinks() {
          const returnFilter = this.links.filter((link) => {
            const temp = new URL(link.href, window.location.origin);
            const classList = link.className;
            const isInternal = temp.hostname === window.location.host;
            const isNotAnchor = !temp.href.includes("#");
            const isNotExternal = link.target !== "_blank";
            const isExcluded = /(w-commerce|cart_)/.test(classList);
            return isInternal && isNotAnchor && isNotExternal && !isExcluded;
          });
          return returnFilter;
        }
      };
      pageTransition = () => {
        new PageTransition();
      };
      pageTransition_default = pageTransition;
    }
  });

  // src/components/heroParallax.ts
  var heroParallax_exports = {};
  __export(heroParallax_exports, {
    default: () => heroParallax_default,
    heroParallax: () => heroParallax
  });
  var HeroParallax, heroParallax, heroParallax_default;
  var init_heroParallax = __esm({
    "src/components/heroParallax.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      init_ScrollTrigger();
      gsapWithCSS.registerPlugin(ScrollTrigger2);
      HeroParallax = class {
        component;
        heroBg;
        heroContent;
        heroSpacer;
        constructor() {
          this.component = document.querySelector(".section_hero");
          this.heroBg = this.component.querySelector("img");
          this.heroContent = this.component.querySelector(".hero_layout");
          this.heroSpacer = document.querySelector(".hero_spacer");
          const heroOffset = this.heroSpacer.clientHeight;
          this.setScroller(heroOffset);
        }
        setScroller(offset) {
          gsapWithCSS.set(this.heroBg, { scale: 1.2 });
          const st = gsapWithCSS.timeline({
            scrollTrigger: {
              trigger: this.component,
              start: `top top`,
              end: `bottom+=${offset} top`,
              scrub: 1
              // markers: true,
            }
          });
          st.to(this.heroBg, { scale: 1, ease: "linear" });
          st.to(this.heroContent, { y: "-50%", filter: "blur(15px)", opacity: 0, ease: "linear" }, "<");
        }
      };
      heroParallax = () => {
        new HeroParallax();
      };
      heroParallax_default = heroParallax;
    }
  });

  // src/components/sliderFade.ts
  var sliderFade_exports = {};
  __export(sliderFade_exports, {
    default: () => sliderFade_default,
    sliderFade: () => sliderFade
  });
  var SliderFade, sliderFade, sliderFade_default;
  var init_sliderFade = __esm({
    "src/components/sliderFade.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      init_ScrollTrigger();
      gsapWithCSS.registerPlugin(ScrollTrigger2);
      SliderFade = class {
        component;
        sliderMask;
        sliderImages;
        sliderIndicators;
        sliderDuration;
        currentIndex = 0;
        progressTL = null;
        constructor() {
          this.component = document.querySelector(".component_slider-full");
          this.sliderMask = this.component.querySelector(".slider-full_mask");
          this.sliderImages = [
            ...this.component.querySelectorAll(".slider-full_img")
          ];
          this.sliderIndicators = [
            ...this.component.querySelectorAll(".slider-full_pill.is-fill")
          ];
          this.sliderDuration = Number(this.component.dataset.sliderSpeed);
          if (Number.isNaN(this.sliderDuration)) this.sliderDuration = 8;
          this.setup();
          this.scroller();
          this.startSlider();
        }
        setup() {
          gsapWithCSS.set(this.sliderMask, { width: "100%", height: "80svh" });
          gsapWithCSS.set(this.sliderImages, {
            position: "absolute",
            width: "100%",
            height: "100%",
            scale: 1.2
          });
        }
        scroller() {
          const st = gsapWithCSS.timeline({
            scrollTrigger: {
              trigger: this.component,
              start: "top 20%",
              end: "bottom 20%",
              scrub: true
              // markers: true,
            }
          });
          st.to(this.sliderImages, { scale: 1, ease: "linear" });
        }
        startSlider() {
          if (this.sliderImages.length <= 1) return;
          this.sliderImages.forEach((img, index) => {
            gsapWithCSS.set(img, { autoAlpha: index === this.currentIndex ? 1 : 0 });
          });
          if (this.sliderIndicators.length !== 0) this.animateProgess(this.currentIndex);
          setInterval(() => this.advanceSlider(), this.sliderDuration * 1e3);
        }
        advanceSlider() {
          const previous = this.currentIndex;
          const next = (this.currentIndex + 1) % this.sliderImages.length;
          this.currentIndex = next;
          gsapWithCSS.to(this.sliderImages[previous], { autoAlpha: 0, duration: 1, ease: "power2.inOut" });
          gsapWithCSS.to(this.sliderImages[next], { autoAlpha: 1, duration: 1, ease: "power2.inOut" });
          if (this.sliderIndicators.length !== 0) this.animateProgess(this.currentIndex);
        }
        animateProgess(index) {
          if (this.sliderIndicators.length === 0) return;
          this.progressTL?.kill();
          this.sliderIndicators.forEach((item, i) => {
            if (i !== index) gsapWithCSS.set(item, { x: "-100%" });
          });
          const bar = this.sliderIndicators[index];
          this.progressTL = gsapWithCSS.timeline();
          this.progressTL.fromTo(
            bar,
            { x: "-100%" },
            { duration: this.sliderDuration - 0.2, x: "0%", ease: "linear" }
          );
          this.progressTL.to(bar, {
            x: "100%",
            duration: 0.2,
            ease: "power1.out"
          });
        }
      };
      sliderFade = () => {
        new SliderFade();
      };
      sliderFade_default = sliderFade;
    }
  });

  // src/components/bentoSlider.ts
  var bentoSlider_exports = {};
  __export(bentoSlider_exports, {
    bentoSlider: () => bentoSlider,
    default: () => bentoSlider_default
  });
  var BentoSlider, bentoSlider, bentoSlider_default;
  var init_bentoSlider = __esm({
    "src/components/bentoSlider.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      BentoSlider = class {
        component;
        main;
        mainImages;
        preview;
        previewImages;
        nextButton;
        prevButton;
        currentIndex = 0;
        constructor() {
          this.component = document.querySelector(".component_slider-bento");
          this.main = this.component.querySelector(".slider-bento_main");
          this.mainImages = [...this.main.querySelectorAll("img")];
          this.preview = this.component.querySelector(".slider-bento_preview");
          this.previewImages = [...this.preview.querySelectorAll("img")];
          this.nextButton = document.querySelector("#bentoNext");
          this.prevButton = document.querySelector("#bentoPrev");
          this.setup();
          this.setListeners();
        }
        setup() {
          this.mainImages.forEach((img, i) => {
            if (i !== this.currentIndex) img.style.display = "none";
          });
          this.previewImages.forEach((img, i) => {
            if (i !== this.currentIndex) {
              const imgParent = img.parentElement;
              imgParent.classList.remove("is-active");
            }
          });
        }
        setListeners() {
          this.nextButton.addEventListener("click", () => {
            const nextIndex = (this.currentIndex + 1) % this.mainImages.length;
            this.handleSwap(nextIndex, "next");
          });
          this.prevButton.addEventListener("click", () => {
            const prevIndex = (this.currentIndex - 1 + this.mainImages.length) % this.mainImages.length;
            this.handleSwap(prevIndex, "prev");
          });
          this.previewImages.forEach((img, i) => {
            img.addEventListener("click", () => {
              if (i !== this.currentIndex) {
                const total = this.mainImages.length;
                const diff = (i - this.currentIndex + total) % total;
                const direction = diff === 0 ? "jump" : diff <= total / 2 ? "next" : "prev";
                this.handleSwap(i, direction);
              }
            });
          });
        }
        handleSwap(targetIndex, direction) {
          if (targetIndex === this.currentIndex) return;
          const currentImg = this.mainImages[this.currentIndex];
          const nextImg = this.mainImages[targetIndex];
          const currentPreview = this.previewImages[this.currentIndex];
          const currentPreviewParent = currentPreview.parentElement;
          const nextPreview = this.previewImages[targetIndex];
          const nextPreviewParent = nextPreview.parentElement;
          const tl = gsapWithCSS.timeline();
          const outY = direction === "prev" ? "100%" : "-100%";
          const inY = direction === "prev" ? "-100%" : "100%";
          tl.set(currentImg, { zIndex: 1 });
          tl.set(nextImg, { zIndex: 0, display: "block", y: inY });
          tl.to(currentImg, { duration: 1.5, y: outY, ease: "power3.inOut" });
          tl.to(nextImg, { duration: 1.5, y: "0%", ease: "power3.inOut" }, "<");
          tl.set(currentImg, { display: "none", y: "0%", zIndex: 0 });
          tl.set(nextImg, { zIndex: 1 });
          currentPreviewParent.classList.remove("is-active");
          nextPreviewParent.classList.add("is-active");
          this.currentIndex = targetIndex;
        }
      };
      bentoSlider = () => {
        new BentoSlider();
      };
      bentoSlider_default = bentoSlider;
    }
  });

  // src/components/formPopup.ts
  var formPopup_exports = {};
  __export(formPopup_exports, {
    default: () => formPopup_default,
    formPopup: () => formPopup
  });
  var FormPopup, formPopup, formPopup_default;
  var init_formPopup = __esm({
    "src/components/formPopup.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      init_smoothScroll();
      FormPopup = class {
        component;
        closeButton;
        compoentForm;
        componentGlass;
        constructor(component) {
          this.component = component;
          this.closeButton = this.component.querySelector("[data-popup=close]");
          this.compoentForm = this.component.querySelector(".pop-form_main");
          this.componentGlass = this.component.querySelector(".component_glass");
          this.setListeners();
        }
        setListeners() {
          this.componentGlass.addEventListener("click", () => {
            this.closeModal();
          });
          if (this.closeButton) {
            this.closeButton.addEventListener("click", () => {
              this.closeModal();
            });
          }
        }
        openModal() {
          stopSmoothScroll();
          const tl = gsapWithCSS.timeline();
          gsapWithCSS.set(this.component, { display: "block" });
          tl.fromTo(
            this.componentGlass,
            { opacity: 0 },
            { duration: 1.5, opacity: 1, ease: "power4.out" }
          );
          tl.fromTo(
            this.compoentForm,
            { y: "50%", opacity: 0 },
            { duration: 1.5, y: "0%", opacity: 1, ease: "power4.out" },
            "<0.5"
          );
        }
        closeModal() {
          startSmoothScroll();
          const tl = gsapWithCSS.timeline();
          tl.to(this.compoentForm, { duration: 1, y: "50%", opacity: 0, ease: "power4.out" });
          tl.to(this.componentGlass, { duration: 1.5, opacity: 0, ease: "power4.out" }, "<0.5");
          tl.set(this.component, { display: "none" });
        }
        setOtherInput() {
          const input = document.querySelector("#otherInput");
        }
      };
      formPopup = () => {
        const forms = [...document.querySelectorAll(".component_pop-form")];
        const instances = {};
        forms.forEach((el, i) => {
          const id = el.getAttribute("data-popup-id") || `default-${i}`;
          instances[id] = new FormPopup(el);
        });
        const buttons = [...document.querySelectorAll("[data-popup=open]")];
        buttons.forEach((btn) => {
          const target = btn.getAttribute("data-popup-target");
          if (target && instances[target]) {
            btn.addEventListener("click", () => instances[target].openModal());
            console.log("[data-popup-form] => mutiple forms - using instances", instances[target]);
          } else if (!target && forms.length === 1) {
            const defaultInstance = Object.values(instances)[0];
            btn.addEventListener("click", () => defaultInstance.openModal());
            console.log("[data-popup-form] => single form - using default", defaultInstance);
          } else {
            console.warn("[data-popup-form] => trigger has no valid target or no popup is available");
          }
        });
      };
      formPopup_default = formPopup;
    }
  });

  // src/index.ts
  init_live_reload();

  // src/components/parallaxImages.ts
  init_live_reload();
  init_gsap();
  init_ScrollTrigger();
  gsapWithCSS.registerPlugin(ScrollTrigger2);
  var ParallaxImages = class {
    images;
    constructor() {
      this.images = [...document.querySelectorAll("[data-parallax]")];
      this.setScroller();
    }
    setScroller() {
      this.images.forEach((img, i) => {
        let scale = Number(img.dataset.parallax);
        if (scale === 0) scale = 1.2;
        let parent = img.parentElement;
        while (parent && parent.tagName !== "SECTION") {
          parent = parent.parentElement;
        }
        gsapWithCSS.set(img, { scale });
        const st = gsapWithCSS.timeline({
          scrollTrigger: {
            trigger: parent,
            start: "top bottom",
            end: "bottom top",
            scrub: true
            // markers: true,
          }
        });
        st.to(img, { scale: 1, ease: "linear" });
        if (parent) {
          console.log(`Image ${i} belongs to section:`, parent, scale);
        } else {
          console.warn(`No section found for image ${i}`);
        }
      });
    }
  };
  var parallaxImages = () => {
    new ParallaxImages();
  };
  var parallaxImages_default = parallaxImages;

  // src/utils/loadComponent.ts
  init_live_reload();
  var loadComponent = (selector3, importModule) => {
    const element = document.querySelector(selector3);
    if (element) {
      importModule().then((module) => {
        module.default();
      });
    }
  };
  var loadComponent_default = loadComponent;

  // src/utils/skipperFix.ts
  init_live_reload();
  init_smoothScroll();
  var SkipperFix = class {
    skipperModal;
    isScrollDisabled = false;
    constructor() {
      this.skipperModal = document.querySelector("#skipper-target");
      this.waitSkipper();
    }
    waitSkipper() {
      const interval = setInterval(() => {
        this.skipperModal = document.querySelector("#skipper-target");
        const isReady = this.skipperModal;
        if (isReady) {
          console.log("[ss.boot.skipper] => ready", this.skipperModal);
          clearInterval(interval);
          this.observeSkipper();
        }
      }, 200);
      setTimeout(() => clearInterval(interval), 5e3);
    }
    async observeSkipper() {
      if (!this.skipperModal) return;
      const modal = this.skipperModal;
      const observer = new MutationObserver(() => {
        const isClosed = getComputedStyle(this.skipperModal).display === "none" || this.skipperModal.classList.contains("collapsed");
        if (!isClosed && !this.isScrollDisabled) {
          console.log("[SkipperFix] Modal opened \u2013 disabling smooth scroll");
          destroySmoothScroll();
          this.isScrollDisabled = true;
        }
        if (isClosed && this.isScrollDisabled) {
          console.log("[SkipperFix] Modal closed \u2013 enabling smooth scroll");
          initSmoothScroll();
          this.isScrollDisabled = false;
        }
      });
      observer.observe(modal, { attributes: true, attributeFilter: ["style", "class"] });
    }
  };
  var skipperFix = () => {
    new SkipperFix();
  };
  var skipperFix_default = skipperFix;

  // src/index.ts
  init_smoothScroll();
  window.Webflow ||= [];
  window.Webflow.push(() => {
    console.log("\u{1F30F} Calamigos Guest Ranch \u{1F343}");
    initSmoothScroll();
    skipperFix_default();
    parallaxImages_default();
    loadComponent_default(".component_preloader", () => Promise.resolve().then(() => (init_preloader(), preloader_exports)));
    loadComponent_default(".component_menu", () => Promise.resolve().then(() => (init_menu(), menu_exports)));
    loadComponent_default(".component_transition", () => Promise.resolve().then(() => (init_pageTransition(), pageTransition_exports)));
    loadComponent_default("[data-hero-parallax]", () => Promise.resolve().then(() => (init_heroParallax(), heroParallax_exports)));
    loadComponent_default(".component_slider-full", () => Promise.resolve().then(() => (init_sliderFade(), sliderFade_exports)));
    loadComponent_default(".component_slider-bento", () => Promise.resolve().then(() => (init_bentoSlider(), bentoSlider_exports)));
    loadComponent_default(".component_pop-form", () => Promise.resolve().then(() => (init_formPopup(), formPopup_exports)));
  });
})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/DrawSVGPlugin.js:
  (*!
   * DrawSVGPlugin 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map
