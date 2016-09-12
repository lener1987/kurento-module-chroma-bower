require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var disguise = kurentoClient.disguise;

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;


var Transaction = kurentoClient.TransactionsManager.Transaction;

var Filter = kurentoClient.register.abstracts.Filter;


function noop(error, result) {
  if (error) console.trace(error);

  return result
};


/**
 * Create a {@link module:chroma.ChromaFilter ChromaFilter}
 *
 * @classdesc
 *  ChromaFilter interface. This type of {@link module:core/abstracts.Filter 
 *  Filter} makes transparent a colour
 *  range in the top layer, revealing another image behind
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:chroma.ChromaFilter
 */
function ChromaFilter(){
  ChromaFilter.super_.call(this);
};
inherits(ChromaFilter, Filter);


//
// Public methods
//

/**
 * Sets the image to show on the detected chroma surface.
 *
 * @alias module:chroma.ChromaFilter.setBackground
 *
 * @param {external:String} uri
 *  URI where the image is located
 *
 * @param {module:chroma.ChromaFilter~setBackgroundCallback} [callback]
 *
 * @return {external:Promise}
 */
ChromaFilter.prototype.setBackground = function(uri, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('String', 'uri', uri, {required: true});

  var params = {
    uri: uri
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setBackground', params, callback), this)
};
/**
 * @callback module:chroma.ChromaFilter~setBackgroundCallback
 * @param {external:Error} error
 */

/**
 * Clears the image used to be shown behind the chroma surface.
 *
 * @alias module:chroma.ChromaFilter.unsetBackground
 *
 * @param {module:chroma.ChromaFilter~unsetBackgroundCallback} [callback]
 *
 * @return {external:Promise}
 */
ChromaFilter.prototype.unsetBackground = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  var usePromise = false;
  
  if (callback == undefined) {
    usePromise = true;
  }
  
  if(!arguments.length) callback = undefined;

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'unsetBackground', callback), this)
};
/**
 * @callback module:chroma.ChromaFilter~unsetBackgroundCallback
 * @param {external:Error} error
 */


/**
 * @alias module:chroma.ChromaFilter.constructorParams
 *
 * @property {external:String} [backgroundImage]
 *  url of image to be used to replace the detected background
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the {@link module:core.MediaPipeline MediaPipeline} to which the filter 
 *  belongs
 *
 * @property {module:chroma/complexTypes.WindowParam} window
 *  Window of replacement for the {@link module:chroma.ChromaFilter 
 *  ChromaFilter}
 */
ChromaFilter.constructorParams = {
  backgroundImage: {
    type: 'String'  },
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  },
  window: {
    type: 'chroma.WindowParam',
    required: true
  }
};

/**
 * @alias module:chroma.ChromaFilter.events
 *
 * @extends module:core/abstracts.Filter.events
 */
ChromaFilter.events = Filter.events;


/**
 * Checker for {@link module:chroma.ChromaFilter}
 *
 * @memberof module:chroma
 *
 * @param {external:String} key
 * @param {module:chroma.ChromaFilter} value
 */
function checkChromaFilter(key, value)
{
  if(!(value instanceof ChromaFilter))
    throw ChecktypeError(key, ChromaFilter, value);
};


module.exports = ChromaFilter;

ChromaFilter.check = checkChromaFilter;

},{"inherits":"inherits","kurento-client":"kurento-client"}],2:[function(require,module,exports){
/**
 * Loader for the kurento-module-chroma package on the browser
 */

require('.');

},{".":"kurento-module-chroma"}],3:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var ComplexType = kurentoClient.register.complexTypes.ComplexType;


/**
 * Parameter representing a window in a video stream.
 * It is used in command and constructor for media elements.
 * All units are in pixels, X runs from left to right, Y from top to bottom.
 *
 * @constructor module:chroma/complexTypes.WindowParam
 *
 * @property {external:Integer} topRightCornerX
 *  X coordinate of the left upper point of the window
 * @property {external:Integer} topRightCornerY
 *  Y coordinate of the left upper point of the window
 * @property {external:Integer} width
 *  width in pixels of the window
 * @property {external:Integer} height
 *  height in pixels of the window
 */
function WindowParam(windowParamDict){
  if(!(this instanceof WindowParam))
    return new WindowParam(windowParamDict)

  windowParamDict = windowParamDict || {}

  // Check windowParamDict has the required fields
  checkType('int', 'windowParamDict.topRightCornerX', windowParamDict.topRightCornerX, {required: true});
  checkType('int', 'windowParamDict.topRightCornerY', windowParamDict.topRightCornerY, {required: true});
  checkType('int', 'windowParamDict.width', windowParamDict.width, {required: true});
  checkType('int', 'windowParamDict.height', windowParamDict.height, {required: true});

  // Init parent class
  WindowParam.super_.call(this, windowParamDict)

  // Set object properties
  Object.defineProperties(this, {
    topRightCornerX: {
      writable: true,
      enumerable: true,
      value: windowParamDict.topRightCornerX
    },
    topRightCornerY: {
      writable: true,
      enumerable: true,
      value: windowParamDict.topRightCornerY
    },
    width: {
      writable: true,
      enumerable: true,
      value: windowParamDict.width
    },
    height: {
      writable: true,
      enumerable: true,
      value: windowParamDict.height
    }
  })
}
inherits(WindowParam, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(WindowParam.prototype, {
  __module__: {
    enumerable: true,
    value: "chroma"
  },
  __type__: {
    enumerable: true,
    value: "WindowParam"
  }
})

/**
 * Checker for {@link module:chroma/complexTypes.WindowParam}
 *
 * @memberof module:chroma/complexTypes
 *
 * @param {external:String} key
 * @param {module:chroma/complexTypes.WindowParam} value
 */
function checkWindowParam(key, value)
{
  if(!(value instanceof WindowParam))
    throw ChecktypeError(key, WindowParam, value);
};


module.exports = WindowParam;

WindowParam.check = checkWindowParam;

},{"inherits":"inherits","kurento-client":"kurento-client"}],4:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module chroma/complexTypes
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license ALv2
 */

var WindowParam = require('./WindowParam');


exports.WindowParam = WindowParam;

},{"./WindowParam":3}],"kurento-module-chroma":[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module chroma
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license ALv2
 */

Object.defineProperty(exports, 'name',    {value: 'chroma'});
Object.defineProperty(exports, 'version', {value: '6.6.1-dev'});


var ChromaFilter = require('./ChromaFilter');


exports.ChromaFilter = ChromaFilter;

exports.complexTypes = require('./complexTypes');

},{"./ChromaFilter":1,"./complexTypes":4}]},{},[2]);
