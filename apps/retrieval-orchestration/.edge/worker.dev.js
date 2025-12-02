
/**
 * Built with Azion CLI
 * For more information, visit: https://www.azion.com/en/documentation/products/cli/
 */

/**
 * WARNING: DEVELOPMENT BUILD
 * 
 * This file is a development build and contains additional injected code
 * to facilitate the development and debugging process.
 * 
 * IMPORTANT NOTICES:
 * - DO NOT use this build in a production environment.
 * - The injected code may cause unexpected behaviors in production.
 * - Performance of this build is not optimized for production use.
 * - This build may include sensitive debugging information.
 * 
 * To generate an optimized and secure production build use 'azion build'.
 * 
 * If you are seeing this message in a production environment, stop immediately
 * and replace this file with a proper production build.
 * 
 * For any issues or questions, please refer to the documentation or contact
 * the development team.
 */
 globalThis.bundler={};globalThis.bundler = { ...globalThis.bundler, FS_PATH_PREFIX_TO_REMOVE: '""'};
globalThis.bundler.__FILES__={};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-setImmediate.js
var import_node_timers;
var init_global_polyfill_setImmediate = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-setImmediate.js"() {
    import_node_timers = __toESM(require_timers_browserify());
    globalThis.setImmediate = import_node_timers.setImmediate;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/bundler/src/polyfills/azion/env-vars/env-vars.polyfills.js
var init_env_vars_polyfills = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/bundler/src/polyfills/azion/env-vars/env-vars.polyfills.js"() {
    globalThis.Azion = globalThis.Azion || {};
    globalThis.Azion.env = {};
    globalThis.Azion.env.get = (key) => {
      const value = ENV_VARS_CONTEXT.get(key);
      return value;
    };
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/bundler/src/polyfills/azion/network-list/network-list.polyfills.js
var instanceNetworkList;
var init_network_list_polyfills = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/bundler/src/polyfills/azion/network-list/network-list.polyfills.js"() {
    globalThis.Azion = globalThis.Azion || {};
    globalThis.Azion.networkList = {};
    instanceNetworkList = new NETWORK_LIST_CONTEXT(false);
    globalThis.Azion.networkList.contains = (network_list_id, value) => {
      return instanceNetworkList.contains(network_list_id, value);
    };
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/bundler/src/polyfills/azion/storage/storage.polyfills.js
var PRIVATE_CONSTRUCTOR, Storage, StorageObject, StorageObjectList;
var init_storage_polyfills = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/bundler/src/polyfills/azion/storage/storage.polyfills.js"() {
    PRIVATE_CONSTRUCTOR = Symbol("PRIVATE_CONSTRUCTOR");
    Storage = class {
      static {
        __name(this, "Storage");
      }
      #bucketName;
      /**
       * Creates an instance of Storage.
       * @constructor
       * @param {string} bucketName - The name of the storage bucket.
       * @throws {Error} Throws an error if bucketName is not a string.
       */
      constructor(bucketName) {
        if (typeof bucketName !== "string") {
          throw new Error("bucketName must be a string");
        }
        this.#bucketName = bucketName;
      }
      /**
       * Retrieves the content of a stored object.
       * @async
       * @param {string} key - The key of the object to retrieve.
       * @returns {Promise<StorageObject>} A promise that resolves to a StorageObject representing the retrieved object.
       */
      async get(key) {
        const asset = await new STORAGE_CONTEXT(this.#bucketName).get(key);
        return new StorageObject(asset, PRIVATE_CONSTRUCTOR);
      }
      /**
       * Stores a key-value pair in the storage.
       * @async
       * @param {string} key - The key under which to store the value.
       * @param {any} value - The value to store.
       * @param {Object} options - Additional options for the operation.
       * @returns {Promise<StorageObject>} A promise that resolves to a StorageObject representing the stored object.
       */
      async put(key, value, options) {
        const asset = await new STORAGE_CONTEXT(this.#bucketName).put(key, value, options);
        return new StorageObject(asset, PRIVATE_CONSTRUCTOR);
      }
      /**
       * Deletes an object from the storage.
       * @async
       * @param {string} key - The key of the object to delete.
       * @returns {Promise<void>} A promise that resolves when the object is successfully deleted.
       */
      async delete(key) {
        return await new STORAGE_CONTEXT(this.#bucketName).delete(key);
      }
      /**
       * Lists objects in the storage under a specified path.
       * @async
       * @param {string} path - The path under which to list objects.
       * @returns {Promise<StorageObjectList>} A promise that resolves to a StorageObjectList representing the list of objects.
       */
      async list(path) {
        let asset_list = await new STORAGE_CONTEXT(this.#bucketName).list();
        return new StorageObjectList(asset_list?.key_list, PRIVATE_CONSTRUCTOR);
      }
    };
    StorageObject = class {
      static {
        __name(this, "StorageObject");
      }
      #metadata;
      #contentType;
      #contentLength;
      #content;
      /**
       * Creates an instance of StorageObject.
       * @constructor
       * @param {Object} asset - The asset data representing the storage object.
       * @param {Symbol} privateConstructor - Symbol used for private constructor validation.
       * @throws {Error} Throws an error if the constructor is not called with the privateConstructor symbol.
       */
      constructor(asset, privateConstructor) {
        if (privateConstructor !== PRIVATE_CONSTRUCTOR) {
          throw new Error("StorageObject constructor is private.");
        }
        this.#content = asset.contentRid;
        this.#contentLength = asset?.contentLength;
        this.#metadata = asset.metadata === null ? /* @__PURE__ */ new Map() : new Map(Object.entries(asset.metadata));
        this.#contentType = asset?.contentType;
      }
      /**
       * Gets the content of the storage object as a string.
       * @type {string}
       */
      get content() {
        return this.#content.toString();
      }
      /**
       * Retrieves the content of the storage object as an ArrayBuffer.
       * @async
       * @returns {Promise<ArrayBuffer>} A promise that resolves to an ArrayBuffer containing the content of the storage object.
       */
      async arrayBuffer() {
        return this.#content;
      }
      /**
       * Gets the metadata associated with the storage object.
       * @type {Map<string, any>}
       */
      get metadata() {
        return this.#metadata;
      }
      /**
       * Gets the content type of the storage object.
       * @type {string}
       */
      get contentType() {
        return this.#contentType;
      }
      /**
       * Gets the content length of the storage object.
       * @type {number}
       */
      get contentLength() {
        return this.#contentLength;
      }
    };
    StorageObjectList = class {
      static {
        __name(this, "StorageObjectList");
      }
      /**
       * Creates an instance of StorageObjectList.
       * @constructor
       * @param {Array<string>} list - The list of storage object keys.
       * @param {Symbol} privateConstructor - Symbol used for private constructor validation.
       * @throws {Error} Throws an error if the constructor is not called with the privateConstructor symbol.
       */
      constructor(list, privateConstructor) {
        if (privateConstructor !== PRIVATE_CONSTRUCTOR) {
          throw new Error("StorageObjectList constructor is private.");
        }
        this.entries = list;
      }
    };
    globalThis.Azion = globalThis.Azion || {};
    globalThis.Azion.Storage = Storage;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/console.js
var _console, console_default;
var init_console = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/console.js"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    globalThis.__mockTimers = /* @__PURE__ */ new Map();
    _console = globalThis.console;
    _console.time = (label = "default") => {
      globalThis.__mockTimers.set(label, Date.now());
    };
    _console.timeEnd = (label = "default") => {
      const startTime = globalThis.__mockTimers.get(label);
      if (startTime) {
        const duration = Date.now() - startTime;
        globalThis.__mockTimers.delete(label);
        return duration;
      }
      return 0;
    };
    globalThis.console = _console;
    console_default = globalThis.console;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-console.js
var init_global_polyfill_console = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-console.js"() {
    init_console();
    globalThis.console = console_default;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/clear-interval.js
var _clearInterval, clear_interval_default;
var init_clear_interval = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/clear-interval.js"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    _clearInterval = globalThis.clearInterval;
    globalThis.clearInterval = (interval) => {
      let idToClear = interval;
      if (interval && typeof interval === "object") {
        if ("id" in interval) {
          idToClear = interval.id;
        } else if ("_id" in interval) {
          idToClear = interval._id;
        }
      }
      if (typeof idToClear === "number" && Number.isFinite(idToClear)) {
        _clearInterval(idToClear);
      } else if (interval && typeof interval.close === "function") {
        interval.close();
      }
    };
    clear_interval_default = globalThis.clearInterval;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-clearInterval.js
var init_global_polyfill_clearInterval = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-clearInterval.js"() {
    init_clear_interval();
    globalThis.clearInterval = clear_interval_default;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/set-interval.js
var _setInterval, _clearInterval2, set_interval_default;
var init_set_interval = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/set-interval.js"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    _setInterval = globalThis.setInterval;
    _clearInterval2 = globalThis.clearInterval;
    globalThis.setInterval = (...args) => {
      const id = _setInterval(...args);
      if (typeof id === "object" && id !== null) {
        if (typeof id.unref !== "function") {
          id.unref = () => {
          };
        }
        return id;
      }
      return {
        id,
        unref: /* @__PURE__ */ __name(() => {
        }, "unref"),
        ref: /* @__PURE__ */ __name(() => {
        }, "ref"),
        clear: /* @__PURE__ */ __name(() => _clearInterval2(id), "clear")
      };
    };
    set_interval_default = globalThis.setInterval;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-setInterval.js
var init_global_polyfill_setInterval = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-setInterval.js"() {
    init_set_interval();
    globalThis.setInterval = set_interval_default;
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
var init_utils = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/web/performance/_polyfills.mjs
var _timeOrigin, _performanceNow, _supportedEntryTypes, _PerformanceEntry, _PerformanceMark, _PerformanceMeasure, _PerformanceResourceTiming, _PerformanceObserver, _PerformanceObserverEntryList, _Performance;
var init_polyfills = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/web/performance/_polyfills.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    _supportedEntryTypes = [
      "event",
      "mark",
      "measure",
      "resource"
    ];
    _PerformanceEntry = class {
      static {
        __name(this, "_PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    _PerformanceMark = class extends _PerformanceEntry {
      static {
        __name(this, "_PerformanceMark");
      }
      entryType = "mark";
    };
    _PerformanceMeasure = class extends _PerformanceEntry {
      static {
        __name(this, "_PerformanceMeasure");
      }
      entryType = "measure";
    };
    _PerformanceResourceTiming = class extends _PerformanceEntry {
      static {
        __name(this, "_PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    _PerformanceObserver = class {
      static {
        __name(this, "_PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = _supportedEntryTypes;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
    };
    _PerformanceObserverEntryList = class {
      static {
        __name(this, "_PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type2) {
        return [];
      }
    };
    _Performance = class {
      static {
        __name(this, "_Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type2) {
        return this._entries.filter((e) => e.name === name && (!type2 || e.entryType === type2));
      }
      getEntriesByType(type2) {
        return this._entries.filter((e) => e.entryType === type2);
      }
      mark(name, options) {
        const entry = new _PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new _PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      toJSON() {
        return this;
      }
      addEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
    };
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/web/performance/index.mjs
var PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserver, Performance, PerformanceObserverEntryList, performance;
var init_performance = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/web/performance/index.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_polyfills();
    PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry;
    PerformanceMark = globalThis.PerformanceMark || _PerformanceMark;
    PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure;
    PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming;
    PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver;
    Performance = globalThis.Performance || _Performance;
    PerformanceObserverEntryList = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList;
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new _Performance();
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/polyfill/performance.mjs
var performance_default;
var init_performance2 = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/polyfill/performance.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_performance();
    globalThis.performance ||= performance;
    globalThis.Performance ||= Performance;
    globalThis.PerformanceEntry ||= PerformanceEntry;
    globalThis.PerformanceMark ||= PerformanceMark;
    globalThis.PerformanceMeasure ||= PerformanceMeasure;
    globalThis.PerformanceObserver ||= PerformanceObserver;
    globalThis.PerformanceObserverEntryList ||= PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming ||= PerformanceResourceTiming;
    performance_default = globalThis.performance;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-performance.js
var init_global_polyfill_performance = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-performance.js"() {
    init_performance2();
    globalThis.performance = performance_default;
  }
});

// internal-env-dev:async_hooks
var AsyncLocalStorage, AsyncResource;
var init_async_hooks = __esm({
  "internal-env-dev:async_hooks"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    AsyncLocalStorage = class extends ASYNC_LOCAL_STORAGE.AsyncLocalStorage {
      static {
        __name(this, "AsyncLocalStorage");
      }
    };
    AsyncResource = class extends ASYNC_LOCAL_STORAGE.AsyncResource {
      static {
        __name(this, "AsyncResource");
      }
    };
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/events/events.mjs
function isEventTarget(emitter) {
  return typeof emitter?.addEventListener === "function";
}
function checkListener(listener) {
}
function addCatch(that, promise, type2, args) {
  if (!that[kCapture]) {
    return;
  }
  try {
    const then = promise.then;
    if (typeof then === "function") {
      then.call(promise, void 0, function(err) {
        setTimeout(emitUnhandledRejectionOrErr, 0, that, err, type2, args);
      });
    }
  } catch (error_) {
    that.emit("error", error_);
  }
}
function emitUnhandledRejectionOrErr(ee, err, type2, args) {
  if (typeof ee[kRejection] === "function") {
    ee[kRejection](err, type2, ...args);
  } else {
    const prev = ee[kCapture];
    try {
      ee[kCapture] = false;
      ee.emit("error", err);
    } finally {
      ee[kCapture] = prev;
    }
  }
}
function _getMaxListeners(that) {
  if (that._maxListeners === void 0) return defaultMaxListeners;
  return that._maxListeners;
}
function enhanceStackTrace(err, own) {
  let ctorInfo = "";
  try {
    const { name } = this.constructor;
    if (name !== "EventEmitter") ctorInfo = ` on ${name} instance`;
  } catch {
  }
  const sep3 = `
Emitted 'error' event${ctorInfo} at:
`;
  const ownStack = (own.stack || "").split("\n").slice(1);
  return err.stack + sep3 + ownStack.join("\n");
}
function _addListener(target, type2, listener, prepend) {
  let m2;
  let events;
  let existing;
  checkListener(listener);
  events = target._events;
  if (events === void 0) {
    events = target._events = { __proto__: null };
    target._eventsCount = 0;
  } else {
    if (events.newListener !== void 0) {
      target.emit("newListener", type2, listener.listener ?? listener);
      events = target._events;
    }
    existing = events[type2];
  }
  if (existing === void 0) {
    events[type2] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === "function") {
      existing = events[type2] = prepend ? [listener, existing] : [existing, listener];
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }
    m2 = _getMaxListeners(target);
    if (m2 > 0 && existing.length > m2 && !existing.warned) {
      existing.warned = true;
      const w2 = new genericNodeError(`Possible EventEmitter memory leak detected. ${existing.length} ${String(type2)} listeners added to ${inspect(target, { depth: -1 })}. MaxListeners is ${m2}. Use emitter.setMaxListeners() to increase limit`, {
        name: "MaxListenersExceededWarning",
        emitter: target,
        type: type2,
        count: existing.length
      });
      console.warn(w2);
    }
  }
  return target;
}
function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}
function _onceWrap(target, type2, listener) {
  const state = {
    fired: false,
    wrapFn: void 0,
    target,
    type: type2,
    listener
  };
  const wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}
function _listeners(target, type2, unwrap) {
  const events = target._events;
  if (events === void 0) return [];
  const evlistener = events[type2];
  if (evlistener === void 0) return [];
  if (typeof evlistener === "function") return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener);
}
function arrayClone(arr) {
  switch (arr.length) {
    case 2:
      return [arr[0], arr[1]];
    case 3:
      return [
        arr[0],
        arr[1],
        arr[2]
      ];
    case 4:
      return [
        arr[0],
        arr[1],
        arr[2],
        arr[3]
      ];
    case 5:
      return [
        arr[0],
        arr[1],
        arr[2],
        arr[3],
        arr[4]
      ];
    case 6:
      return [
        arr[0],
        arr[1],
        arr[2],
        arr[3],
        arr[4],
        arr[5]
      ];
  }
  return Array.prototype.slice.call(arr);
}
function unwrapListeners(arr) {
  const ret = arrayClone(arr);
  for (let i = 0; i < ret.length; ++i) {
    const orig = ret[i].listener;
    if (typeof orig === "function") ret[i] = orig;
  }
  return ret;
}
function createIterResult(value, done) {
  return {
    value,
    done
  };
}
function eventTargetAgnosticRemoveListener(emitter, name, listener, flags) {
  if (typeof emitter.removeListener === "function") {
    emitter.removeListener(name, listener);
  } else if (typeof emitter.removeEventListener === "function") {
    emitter.removeEventListener(name, listener, flags);
  } else {
    throw new ERR_INVALID_ARG_TYPE("emitter", "EventEmitter", emitter);
  }
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === "function") {
    if (flags?.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === "function") {
    emitter.addEventListener(name, listener, flags);
  } else {
    throw new ERR_INVALID_ARG_TYPE("emitter", "EventEmitter", emitter);
  }
}
function listenersController() {
  const listeners2 = [];
  return {
    addEventListener(emitter, event, handler, flags) {
      eventTargetAgnosticAddListener(emitter, event, handler, flags);
      Array.prototype.push(listeners2, [
        emitter,
        event,
        handler,
        flags
      ]);
    },
    removeAll() {
      while (listeners2.length > 0) {
        Reflect.apply(eventTargetAgnosticRemoveListener, void 0, listeners2.pop());
      }
    }
  };
}
function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  list.pop();
}
var defaultMaxListeners, AsyncIteratorPrototype, inspect, ERR_INVALID_THIS, ERR_UNHANDLED_ERROR, ERR_INVALID_ARG_TYPE, AbortError, genericNodeError, kRejection, kCapture, kErrorMonitor, kShapeMode, kMaxEventTargetListeners, kEnhanceStackBeforeInspector, kWatermarkData, kEventEmitter, kAsyncResource, kFirstEventParam, kResistStopPropagation, kMaxEventTargetListenersWarned, _EventEmitter, EventEmitterAsyncResource, EventEmitterReferencingAsyncResource, on, once, addAbortListener, getEventListeners, getMaxListeners, kSize, kMask, FixedCircularBuffer, FixedQueue;
var init_events = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/events/events.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_async_hooks();
    defaultMaxListeners = 10;
    AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
    }).prototype);
    inspect = /* @__PURE__ */ __name((value, _opts) => value, "inspect");
    ERR_INVALID_THIS = Error;
    ERR_UNHANDLED_ERROR = Error;
    ERR_INVALID_ARG_TYPE = Error;
    AbortError = Error;
    genericNodeError = Error;
    kRejection = /* @__PURE__ */ Symbol.for("nodejs.rejection");
    kCapture = /* @__PURE__ */ Symbol.for("kCapture");
    kErrorMonitor = /* @__PURE__ */ Symbol.for("events.errorMonitor");
    kShapeMode = /* @__PURE__ */ Symbol.for("shapeMode");
    kMaxEventTargetListeners = /* @__PURE__ */ Symbol.for("events.maxEventTargetListeners");
    kEnhanceStackBeforeInspector = /* @__PURE__ */ Symbol.for("kEnhanceStackBeforeInspector");
    kWatermarkData = /* @__PURE__ */ Symbol.for("nodejs.watermarkData");
    kEventEmitter = /* @__PURE__ */ Symbol.for("kEventEmitter");
    kAsyncResource = /* @__PURE__ */ Symbol.for("kAsyncResource");
    kFirstEventParam = /* @__PURE__ */ Symbol.for("kFirstEventParam");
    kResistStopPropagation = /* @__PURE__ */ Symbol.for("kResistStopPropagation");
    kMaxEventTargetListenersWarned = /* @__PURE__ */ Symbol.for("events.maxEventTargetListenersWarned");
    _EventEmitter = class __EventEmitter {
      static {
        __name(this, "_EventEmitter");
      }
      // Internal state
      _events = void 0;
      _eventsCount = 0;
      _maxListeners = defaultMaxListeners;
      [kCapture] = false;
      [kShapeMode] = false;
      // Symbols
      static captureRejectionSymbol = kRejection;
      static errorMonitor = kErrorMonitor;
      static kMaxEventTargetListeners = kMaxEventTargetListeners;
      static kMaxEventTargetListenersWarned = kMaxEventTargetListenersWarned;
      // Static utils
      static usingDomains = false;
      static get on() {
        return on;
      }
      static get once() {
        return once;
      }
      static get getEventListeners() {
        return getEventListeners;
      }
      static get getMaxListeners() {
        return getMaxListeners;
      }
      static get addAbortListener() {
        return addAbortListener;
      }
      static get EventEmitterAsyncResource() {
        return EventEmitterAsyncResource;
      }
      static get EventEmitter() {
        return __EventEmitter;
      }
      static setMaxListeners(n = defaultMaxListeners, ...eventTargets) {
        if (eventTargets.length === 0) {
          defaultMaxListeners = n;
        } else {
          for (const target of eventTargets) {
            if (isEventTarget(target)) {
              target[kMaxEventTargetListeners] = n;
              target[kMaxEventTargetListenersWarned] = false;
            } else if (typeof target.setMaxListeners === "function") {
              target.setMaxListeners(n);
            } else {
              throw new ERR_INVALID_ARG_TYPE(
                "eventTargets",
                ["EventEmitter", "EventTarget"],
                // @ts-expect-error
                target
              );
            }
          }
        }
      }
      static listenerCount(emitter, type2) {
        if (typeof emitter.listenerCount === "function") {
          return emitter.listenerCount(type2);
        }
        __EventEmitter.prototype.listenerCount.call(emitter, type2);
      }
      static init() {
        throw new Error("EventEmitter.init() is not implemented.");
      }
      static get captureRejections() {
        return this[kCapture];
      }
      static set captureRejections(value) {
        this[kCapture] = value;
      }
      static get defaultMaxListeners() {
        return defaultMaxListeners;
      }
      static set defaultMaxListeners(arg) {
        defaultMaxListeners = arg;
      }
      // Constructor
      constructor(opts) {
        if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
          this._events = { __proto__: null };
          this._eventsCount = 0;
          this[kShapeMode] = false;
        } else {
          this[kShapeMode] = true;
        }
        this._maxListeners = this._maxListeners || void 0;
        if (opts?.captureRejections) {
          this[kCapture] = Boolean(opts.captureRejections);
        } else {
          this[kCapture] = __EventEmitter.prototype[kCapture];
        }
      }
      /**
      * Increases the max listeners of the event emitter.
      * @param {number} n
      * @returns {EventEmitter}
      */
      setMaxListeners(n) {
        this._maxListeners = n;
        return this;
      }
      /**
      * Returns the current max listener value for the event emitter.
      * @returns {number}
      */
      getMaxListeners() {
        return _getMaxListeners(this);
      }
      /**
      * Synchronously calls each of the listeners registered
      * for the event.
      * @param {...any} [args]
      * @returns {boolean}
      */
      emit(type2, ...args) {
        let doError = type2 === "error";
        const events = this._events;
        if (events !== void 0) {
          if (doError && events[kErrorMonitor] !== void 0) this.emit(kErrorMonitor, ...args);
          doError = doError && events.error === void 0;
        } else if (!doError) return false;
        if (doError) {
          let er;
          if (args.length > 0) er = args[0];
          if (er instanceof Error) {
            try {
              const capture = {};
              Error.captureStackTrace?.(capture, __EventEmitter.prototype.emit);
              Object.defineProperty(er, kEnhanceStackBeforeInspector, {
                __proto__: null,
                value: Function.prototype.bind(enhanceStackTrace, this, er, capture),
                configurable: true
              });
            } catch {
            }
            throw er;
          }
          let stringifiedEr;
          try {
            stringifiedEr = inspect(er);
          } catch {
            stringifiedEr = er;
          }
          const err = new ERR_UNHANDLED_ERROR(stringifiedEr);
          err.context = er;
          throw err;
        }
        const handler = events[type2];
        if (handler === void 0) return false;
        if (typeof handler === "function") {
          const result = handler.apply(this, args);
          if (result !== void 0 && result !== null) {
            addCatch(this, result, type2, args);
          }
        } else {
          const len = handler.length;
          const listeners2 = arrayClone(handler);
          for (let i = 0; i < len; ++i) {
            const result = listeners2[i].apply(this, args);
            if (result !== void 0 && result !== null) {
              addCatch(this, result, type2, args);
            }
          }
        }
        return true;
      }
      /**
      * Adds a listener to the event emitter.
      * @returns {EventEmitter}
      */
      addListener(type2, listener) {
        _addListener(this, type2, listener, false);
        return this;
      }
      on(type2, listener) {
        return this.addListener(type2, listener);
      }
      /**
      * Adds the `listener` function to the beginning of
      * the listeners array.
      */
      prependListener(type2, listener) {
        _addListener(this, type2, listener, true);
        return this;
      }
      /**
      * Adds a one-time `listener` function to the event emitter.
      */
      once(type2, listener) {
        checkListener(listener);
        this.on(type2, _onceWrap(this, type2, listener));
        return this;
      }
      /**
      * Adds a one-time `listener` function to the beginning of
      * the listeners array.
      */
      prependOnceListener(type2, listener) {
        checkListener(listener);
        this.prependListener(type2, _onceWrap(this, type2, listener));
        return this;
      }
      /**
      * Removes the specified `listener` from the listeners array.
      * @param {string | symbol} type
      * @param {Function} listener
      * @returns {EventEmitter}
      */
      removeListener(type2, listener) {
        checkListener(listener);
        const events = this._events;
        if (events === void 0) return this;
        const list = events[type2];
        if (list === void 0) return this;
        if (list === listener || list.listener === listener) {
          this._eventsCount -= 1;
          if (this[kShapeMode]) {
            events[type2] = void 0;
          } else if (this._eventsCount === 0) {
            this._events = { __proto__: null };
          } else {
            delete events[type2];
            if (events.removeListener) this.emit("removeListener", type2, list.listener || listener);
          }
        } else if (typeof list !== "function") {
          let position = -1;
          for (let i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              position = i;
              break;
            }
          }
          if (position < 0) return this;
          if (position === 0) list.shift();
          else {
            spliceOne(list, position);
          }
          if (list.length === 1) events[type2] = list[0];
          if (events.removeListener !== void 0) this.emit("removeListener", type2, listener);
        }
        return this;
      }
      off(type2, listener) {
        return this.removeListener(type2, listener);
      }
      /**
      * Removes all listeners from the event emitter. (Only
      * removes listeners for a specific event name if specified
      * as `type`).
      */
      removeAllListeners(type2) {
        const events = this._events;
        if (events === void 0) return this;
        if (events.removeListener === void 0) {
          if (arguments.length === 0) {
            this._events = { __proto__: null };
            this._eventsCount = 0;
          } else if (events[type2] !== void 0) {
            if (--this._eventsCount === 0) this._events = { __proto__: null };
            else delete events[type2];
          }
          this[kShapeMode] = false;
          return this;
        }
        if (arguments.length === 0) {
          for (const key of Reflect.ownKeys(events)) {
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners("removeListener");
          this._events = { __proto__: null };
          this._eventsCount = 0;
          this[kShapeMode] = false;
          return this;
        }
        const listeners2 = events[type2];
        if (typeof listeners2 === "function") {
          this.removeListener(type2, listeners2);
        } else if (listeners2 !== void 0) {
          for (let i = listeners2.length - 1; i >= 0; i--) {
            this.removeListener(type2, listeners2[i]);
          }
        }
        return this;
      }
      /**
      * Returns a copy of the array of listeners for the event name
      * specified as `type`.
      * @param {string | symbol} type
      * @returns {Function[]}
      */
      listeners(type2) {
        return _listeners(this, type2, true);
      }
      /**
      * Returns a copy of the array of listeners and wrappers for
      * the event name specified as `type`.
      * @returns {Function[]}
      */
      rawListeners(type2) {
        return _listeners(this, type2, false);
      }
      /**
      * Returns an array listing the events for which
      * the emitter has registered listeners.
      * @returns {any[]}
      */
      eventNames() {
        return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
      }
      /**
      * Returns the number of listeners listening to event name
      */
      listenerCount(eventName, listener) {
        const events = this._events;
        if (events !== void 0) {
          const evlistener = events[eventName];
          if (typeof evlistener === "function") {
            if (listener != null) {
              return listener === evlistener || listener === evlistener.listener ? 1 : 0;
            }
            return 1;
          } else if (evlistener !== void 0) {
            if (listener != null) {
              let matching = 0;
              for (let i = 0, l = evlistener.length; i < l; i++) {
                if (evlistener[i] === listener || evlistener[i].listener === listener) {
                  matching++;
                }
              }
              return matching;
            }
            return evlistener.length;
          }
        }
        return 0;
      }
    };
    EventEmitterAsyncResource = class extends _EventEmitter {
      static {
        __name(this, "EventEmitterAsyncResource");
      }
      /**
      * @param {{
      *   name?: string,
      *   triggerAsyncId?: number,
      *   requireManualDestroy?: boolean,
      * }} [options]
      */
      constructor(options) {
        let name;
        if (typeof options === "string") {
          name = options;
          options = void 0;
        } else {
          name = options?.name || new.target.name;
        }
        super(options);
        this[kAsyncResource] = new EventEmitterReferencingAsyncResource(this, name, options);
      }
      /**
      * @param {symbol,string} event
      * @param  {...any} args
      * @returns {boolean}
      */
      emit(event, ...args) {
        if (this[kAsyncResource] === void 0) throw new ERR_INVALID_THIS("EventEmitterAsyncResource");
        const { asyncResource } = this;
        Array.prototype.unshift(args, super.emit, this, event);
        return Reflect.apply(asyncResource.runInAsyncScope, asyncResource, args);
      }
      /**
      * @returns {void}
      */
      emitDestroy() {
        if (this[kAsyncResource] === void 0) throw new ERR_INVALID_THIS("EventEmitterAsyncResource");
        this.asyncResource.emitDestroy();
      }
      /**
      * @type {number}
      */
      get asyncId() {
        if (this[kAsyncResource] === void 0) throw new ERR_INVALID_THIS("EventEmitterAsyncResource");
        return this.asyncResource.asyncId();
      }
      /**
      * @type {number}
      */
      get triggerAsyncId() {
        if (this[kAsyncResource] === void 0) throw new ERR_INVALID_THIS("EventEmitterAsyncResource");
        return this.asyncResource.triggerAsyncId();
      }
      /**
      * @type {EventEmitterReferencingAsyncResource}
      */
      get asyncResource() {
        if (this[kAsyncResource] === void 0) throw new ERR_INVALID_THIS("EventEmitterAsyncResource");
        return this[kAsyncResource];
      }
    };
    EventEmitterReferencingAsyncResource = class extends AsyncResource {
      static {
        __name(this, "EventEmitterReferencingAsyncResource");
      }
      /**
      * @param {EventEmitter} ee
      * @param {string} [type]
      * @param {{
      *   triggerAsyncId?: number,
      *   requireManualDestroy?: boolean,
      * }} [options]
      */
      constructor(ee, type2, options) {
        super(type2, options);
        this[kEventEmitter] = ee;
      }
      /**
      * @type {EventEmitter}
      */
      get eventEmitter() {
        if (this[kEventEmitter] === void 0) throw new ERR_INVALID_THIS("EventEmitterReferencingAsyncResource");
        return this[kEventEmitter];
      }
    };
    on = /* @__PURE__ */ __name(function on2(emitter, event, options = {}) {
      const signal = options.signal;
      if (signal?.aborted) {
        throw new AbortError(void 0, { cause: signal?.reason });
      }
      const highWatermark = options.highWaterMark ?? options.highWatermark ?? Number.MAX_SAFE_INTEGER;
      const lowWatermark = options.lowWaterMark ?? options.lowWatermark ?? 1;
      const unconsumedEvents = new FixedQueue();
      const unconsumedPromises = new FixedQueue();
      let paused = false;
      let error = null;
      let finished = false;
      let size = 0;
      const iterator = Object.setPrototypeOf({
        next() {
          if (size) {
            const value = unconsumedEvents.shift();
            size--;
            if (paused && size < lowWatermark) {
              emitter.resume?.();
              paused = false;
            }
            return Promise.resolve(createIterResult(value, false));
          }
          if (error) {
            const p2 = Promise.reject(error);
            error = null;
            return p2;
          }
          if (finished) return closeHandler();
          return new Promise(function(resolve2, reject) {
            unconsumedPromises.push({
              resolve: resolve2,
              reject
            });
          });
        },
        return() {
          return closeHandler();
        },
        throw(err) {
          if (!err || !(err instanceof Error)) {
            throw new ERR_INVALID_ARG_TYPE(
              "EventEmitter.AsyncIterator",
              "Error",
              // @ts-expect-error
              err
            );
          }
          errorHandler2(err);
        },
        [Symbol.asyncIterator]() {
          return this;
        },
        [kWatermarkData]: {
          get size() {
            return size;
          },
          get low() {
            return lowWatermark;
          },
          get high() {
            return highWatermark;
          },
          get isPaused() {
            return paused;
          }
        }
      }, AsyncIteratorPrototype);
      const { addEventListener: addEventListener2, removeAll } = listenersController();
      addEventListener2(emitter, event, options[kFirstEventParam] ? eventHandler : function(...args) {
        return eventHandler(args);
      });
      if (event !== "error" && typeof emitter.on === "function") {
        addEventListener2(emitter, "error", errorHandler2);
      }
      const closeEvents = options?.close;
      if (closeEvents?.length) {
        for (const closeEvent of closeEvents) {
          addEventListener2(emitter, closeEvent, closeHandler);
        }
      }
      const abortListenerDisposable = signal ? addAbortListener(signal, abortListener) : null;
      return iterator;
      function abortListener() {
        errorHandler2(new AbortError(void 0, { cause: signal?.reason }));
      }
      __name(abortListener, "abortListener");
      function eventHandler(value) {
        if (unconsumedPromises.isEmpty()) {
          size++;
          if (!paused && size > highWatermark) {
            paused = true;
            emitter.pause?.();
          }
          unconsumedEvents.push(value);
        } else unconsumedPromises.shift().resolve(createIterResult(value, false));
      }
      __name(eventHandler, "eventHandler");
      function errorHandler2(err) {
        if (unconsumedPromises.isEmpty()) error = err;
        else unconsumedPromises.shift().reject(err);
        closeHandler();
      }
      __name(errorHandler2, "errorHandler");
      function closeHandler() {
        abortListenerDisposable?.[Symbol.dispose]();
        removeAll();
        finished = true;
        const doneResult = createIterResult(void 0, true);
        while (!unconsumedPromises.isEmpty()) {
          unconsumedPromises.shift().resolve(doneResult);
        }
        return Promise.resolve(doneResult);
      }
      __name(closeHandler, "closeHandler");
    }, "on");
    once = /* @__PURE__ */ __name(async function once2(emitter, name, options = {}) {
      const signal = options?.signal;
      if (signal?.aborted) {
        throw new AbortError(void 0, { cause: signal?.reason });
      }
      return new Promise((resolve2, reject) => {
        const errorListener = /* @__PURE__ */ __name((err) => {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener(name, resolver);
          }
          if (signal != null) {
            eventTargetAgnosticRemoveListener(signal, "abort", abortListener);
          }
          reject(err);
        }, "errorListener");
        const resolver = /* @__PURE__ */ __name((...args) => {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          if (signal != null) {
            eventTargetAgnosticRemoveListener(signal, "abort", abortListener);
          }
          resolve2(args);
        }, "resolver");
        const opts = {
          __proto__: null,
          once: true,
          [kResistStopPropagation]: true
        };
        eventTargetAgnosticAddListener(emitter, name, resolver, opts);
        if (name !== "error" && typeof emitter.once === "function") {
          emitter.once("error", errorListener);
        }
        function abortListener() {
          eventTargetAgnosticRemoveListener(emitter, name, resolver);
          eventTargetAgnosticRemoveListener(emitter, "error", errorListener);
          reject(new AbortError(void 0, { cause: signal?.reason }));
        }
        __name(abortListener, "abortListener");
        if (signal != null) {
          eventTargetAgnosticAddListener(signal, "abort", abortListener, {
            __proto__: null,
            once: true,
            [kResistStopPropagation]: true
          });
        }
      });
    }, "once");
    addAbortListener = /* @__PURE__ */ __name(function addAbortListener2(signal, listener) {
      if (signal === void 0) {
        throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", signal);
      }
      let removeEventListener;
      if (signal.aborted) {
        queueMicrotask(() => listener());
      } else {
        signal.addEventListener("abort", listener, {
          __proto__: null,
          once: true,
          [kResistStopPropagation]: true
        });
        removeEventListener = /* @__PURE__ */ __name(() => {
          signal.removeEventListener("abort", listener);
        }, "removeEventListener");
      }
      return {
        __proto__: null,
        [Symbol.dispose]() {
          removeEventListener?.();
        }
      };
    }, "addAbortListener");
    getEventListeners = /* @__PURE__ */ __name(function getEventListeners2(emitterOrTarget, type2) {
      if (typeof emitterOrTarget.listeners === "function") {
        return emitterOrTarget.listeners(type2);
      }
      if (isEventTarget(emitterOrTarget)) {
        const root = emitterOrTarget[kEvents].get(type2);
        const listeners2 = [];
        let handler = root?.next;
        while (handler?.listener !== void 0) {
          const listener = handler.listener?.deref ? handler.listener.deref() : handler.listener;
          listeners2.push(listener);
          handler = handler.next;
        }
        return listeners2;
      }
      throw new ERR_INVALID_ARG_TYPE(
        "emitter",
        ["EventEmitter", "EventTarget"],
        // @ts-expect-error
        emitterOrTarget
      );
    }, "getEventListeners");
    getMaxListeners = /* @__PURE__ */ __name(function getMaxListeners2(emitterOrTarget) {
      if (typeof emitterOrTarget?.getMaxListeners === "function") {
        return _getMaxListeners(emitterOrTarget);
      } else if (emitterOrTarget?.[kMaxEventTargetListeners]) {
        return emitterOrTarget[kMaxEventTargetListeners];
      }
      throw new ERR_INVALID_ARG_TYPE(
        "emitter",
        ["EventEmitter", "EventTarget"],
        // @ts-expect-error
        emitterOrTarget
      );
    }, "getMaxListeners");
    kSize = 2048;
    kMask = kSize - 1;
    FixedCircularBuffer = class {
      static {
        __name(this, "FixedCircularBuffer");
      }
      bottom;
      top;
      list;
      next;
      constructor() {
        this.bottom = 0;
        this.top = 0;
        this.list = new Array(kSize);
        this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return (this.top + 1 & kMask) === this.bottom;
      }
      push(data) {
        this.list[this.top] = data;
        this.top = this.top + 1 & kMask;
      }
      shift() {
        const nextItem = this.list[this.bottom];
        if (nextItem === void 0) return null;
        this.list[this.bottom] = void 0;
        this.bottom = this.bottom + 1 & kMask;
        return nextItem;
      }
    };
    FixedQueue = class {
      static {
        __name(this, "FixedQueue");
      }
      head;
      tail;
      constructor() {
        this.head = this.tail = new FixedCircularBuffer();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(data) {
        if (this.head.isFull()) {
          this.head = this.head.next = new FixedCircularBuffer();
        }
        this.head.push(data);
      }
      shift() {
        const tail = this.tail;
        const next = tail.shift();
        if (tail.isEmpty() && tail.next !== null) {
          this.tail = tail.next;
          tail.next = null;
        }
        return next;
      }
    };
    __name(isEventTarget, "isEventTarget");
    __name(checkListener, "checkListener");
    __name(addCatch, "addCatch");
    __name(emitUnhandledRejectionOrErr, "emitUnhandledRejectionOrErr");
    __name(_getMaxListeners, "_getMaxListeners");
    __name(enhanceStackTrace, "enhanceStackTrace");
    __name(_addListener, "_addListener");
    __name(onceWrapper, "onceWrapper");
    __name(_onceWrap, "_onceWrap");
    __name(_listeners, "_listeners");
    __name(arrayClone, "arrayClone");
    __name(unwrapListeners, "unwrapListeners");
    __name(createIterResult, "createIterResult");
    __name(eventTargetAgnosticRemoveListener, "eventTargetAgnosticRemoveListener");
    __name(eventTargetAgnosticAddListener, "eventTargetAgnosticAddListener");
    __name(listenersController, "listenersController");
    __name(spliceOne, "spliceOne");
  }
});

// node-built-in-modules:unenv/node/events
var init_events2 = __esm({
  "node-built-in-modules:unenv/node/events"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_events();
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x2, y2, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env3) {
        return 1;
      }
      hasColors(count, env3) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node-built-in-modules:unenv/node/tty
var init_tty = __esm({
  "node-built-in-modules:unenv/node/tty"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_read_stream();
    init_write_stream();
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    NODE_VERSION = "22.14.0";
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
var Process;
var init_process = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_events2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends _EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(_EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type2, code2) {
        console.warn(`${code2 ? `[${code2}] ` : ""}${type2 ? `${type2}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd3) {
        this.#cwd = cwd3;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/env.mjs
var _envShim, originalProcess, _getEnv, env;
var init_env = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/env.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    _envShim = /* @__PURE__ */ Object.create(null);
    originalProcess = globalThis["process"];
    _getEnv = /* @__PURE__ */ __name((useShim) => globalThis.__env__ || originalProcess?.env || (useShim ? _envShim : globalThis), "_getEnv");
    env = /* @__PURE__ */ new Proxy(_envShim, {
      get(_, prop) {
        const env3 = _getEnv();
        return env3[prop] ?? _envShim[prop];
      },
      has(_, prop) {
        const env3 = _getEnv();
        return prop in env3 || prop in _envShim;
      },
      set(_, prop, value) {
        const env3 = _getEnv(true);
        env3[prop] = value;
        return true;
      },
      deleteProperty(_, prop) {
        const env3 = _getEnv(true);
        delete env3[prop];
        return true;
      },
      ownKeys() {
        const env3 = _getEnv();
        return Object.keys(env3);
      },
      getOwnPropertyDescriptor(_, prop) {
        const env3 = _getEnv();
        if (prop in env3) {
          return {
            value: env3[prop],
            writable: true,
            enumerable: true,
            configurable: true
          };
        }
        return void 0;
      }
    });
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/nexttick.mjs
function createNextTickWithTimeout() {
  let queue = [];
  let draining = false;
  let currentQueue;
  let queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length > 0) {
      queue = [...currentQueue, ...queue];
    } else {
      queueIndex = -1;
    }
    if (queue.length > 0) {
      drainQueue();
    }
  }
  __name(cleanUpNextTick, "cleanUpNextTick");
  function drainQueue() {
    if (draining) {
      return;
    }
    const timeout = setTimeout(cleanUpNextTick);
    draining = true;
    let len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex]();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = void 0;
    draining = false;
    clearTimeout(timeout);
  }
  __name(drainQueue, "drainQueue");
  const nextTick3 = /* @__PURE__ */ __name((cb, ...args) => {
    queue.push(cb.bind(void 0, ...args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue);
    }
  }, "nextTick");
  return nextTick3;
}
var nextTick;
var init_nexttick = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/nexttick.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    nextTick = globalThis.queueMicrotask ? (cb, ...args) => {
      globalThis.queueMicrotask(cb.bind(void 0, ...args));
    } : /* @__PURE__ */ createNextTickWithTimeout();
    __name(createNextTickWithTimeout, "createNextTickWithTimeout");
  }
});

// node-built-in-modules:unenv/node/process
var unenvProcess, process_default, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env2, eventNames, execArgv, execPath, exit, finalization, features, getBuiltinModule, getActiveResourcesInfo, getMaxListeners3, hrtime3, kill, listeners, listenerCount, memoryUsage, nextTick2, on3, off, once3, pid, platform, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, ref, unref, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding;
var init_process2 = __esm({
  "node-built-in-modules:unenv/node/process"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_process();
    init_env();
    init_hrtime();
    init_nexttick();
    unenvProcess = new Process({
      env,
      hrtime,
      nextTick
    });
    process_default = unenvProcess;
    ({ abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env: env2, eventNames, execArgv, execPath, exit, finalization, features, getBuiltinModule, getActiveResourcesInfo, getMaxListeners: getMaxListeners3, hrtime: hrtime3, kill, listeners, listenerCount, memoryUsage, nextTick: nextTick2, on: on3, off, once: once3, pid, platform, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, ref, unref, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding } = unenvProcess);
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/path-filename.js
var path_filename_default;
var init_path_filename = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/path-filename.js"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_process2();
    globalThis.__filename = process_default.cwd();
    path_filename_default = globalThis.__filename;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-__filename.js
var init_global_polyfill_filename = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-__filename.js"() {
    init_path_filename();
    globalThis.__filename = path_filename_default;
  }
});

// ../../node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
function cwd2() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var _DRIVE_LETTER_START_RE, _UNC_REGEX, _IS_ABSOLUTE_RE, _DRIVE_LETTER_RE, _ROOT_FOLDER_RE, _EXTNAME_RE, _PATH_ROOT_RE, normalize, join, resolve, isAbsolute, toNamespacedPath, extname, relative, dirname, format, basename, parse;
var init_pathe_M_eThtNZ = __esm({
  "../../node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
    __name(normalizeWindowsPath, "normalizeWindowsPath");
    _UNC_REGEX = /^[/\\]{2}/;
    _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
    _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
    _ROOT_FOLDER_RE = /^\/([A-Za-z]:)?$/;
    _EXTNAME_RE = /.(\.[^./]+|\.)$/;
    _PATH_ROOT_RE = /^[/\\]|^[a-zA-Z]:[/\\]/;
    normalize = /* @__PURE__ */ __name(function(path) {
      if (path.length === 0) {
        return ".";
      }
      path = normalizeWindowsPath(path);
      const isUNCPath = path.match(_UNC_REGEX);
      const isPathAbsolute = isAbsolute(path);
      const trailingSeparator = path[path.length - 1] === "/";
      path = normalizeString(path, !isPathAbsolute);
      if (path.length === 0) {
        if (isPathAbsolute) {
          return "/";
        }
        return trailingSeparator ? "./" : ".";
      }
      if (trailingSeparator) {
        path += "/";
      }
      if (_DRIVE_LETTER_RE.test(path)) {
        path += "/";
      }
      if (isUNCPath) {
        if (!isPathAbsolute) {
          return `//./${path}`;
        }
        return `//${path}`;
      }
      return isPathAbsolute && !isAbsolute(path) ? `/${path}` : path;
    }, "normalize");
    join = /* @__PURE__ */ __name(function(...segments) {
      let path = "";
      for (const seg of segments) {
        if (!seg) {
          continue;
        }
        if (path.length > 0) {
          const pathTrailing = path[path.length - 1] === "/";
          const segLeading = seg[0] === "/";
          const both = pathTrailing && segLeading;
          if (both) {
            path += seg.slice(1);
          } else {
            path += pathTrailing || segLeading ? seg : `/${seg}`;
          }
        } else {
          path += seg;
        }
      }
      return normalize(path);
    }, "join");
    __name(cwd2, "cwd");
    resolve = /* @__PURE__ */ __name(function(...arguments_) {
      arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
      let resolvedPath = "";
      let resolvedAbsolute = false;
      for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
        const path = index >= 0 ? arguments_[index] : cwd2();
        if (!path || path.length === 0) {
          continue;
        }
        resolvedPath = `${path}/${resolvedPath}`;
        resolvedAbsolute = isAbsolute(path);
      }
      resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
      if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
        return `/${resolvedPath}`;
      }
      return resolvedPath.length > 0 ? resolvedPath : ".";
    }, "resolve");
    __name(normalizeString, "normalizeString");
    isAbsolute = /* @__PURE__ */ __name(function(p2) {
      return _IS_ABSOLUTE_RE.test(p2);
    }, "isAbsolute");
    toNamespacedPath = /* @__PURE__ */ __name(function(p2) {
      return normalizeWindowsPath(p2);
    }, "toNamespacedPath");
    extname = /* @__PURE__ */ __name(function(p2) {
      if (p2 === "..") return "";
      const match2 = _EXTNAME_RE.exec(normalizeWindowsPath(p2));
      return match2 && match2[1] || "";
    }, "extname");
    relative = /* @__PURE__ */ __name(function(from2, to) {
      const _from = resolve(from2).replace(_ROOT_FOLDER_RE, "$1").split("/");
      const _to = resolve(to).replace(_ROOT_FOLDER_RE, "$1").split("/");
      if (_to[0][1] === ":" && _from[0][1] === ":" && _from[0] !== _to[0]) {
        return _to.join("/");
      }
      const _fromCopy = [..._from];
      for (const segment of _fromCopy) {
        if (_to[0] !== segment) {
          break;
        }
        _from.shift();
        _to.shift();
      }
      return [..._from.map(() => ".."), ..._to].join("/");
    }, "relative");
    dirname = /* @__PURE__ */ __name(function(p2) {
      const segments = normalizeWindowsPath(p2).replace(/\/$/, "").split("/").slice(0, -1);
      if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
        segments[0] += "/";
      }
      return segments.join("/") || (isAbsolute(p2) ? "/" : ".");
    }, "dirname");
    format = /* @__PURE__ */ __name(function(p2) {
      const ext = p2.ext ? p2.ext.startsWith(".") ? p2.ext : `.${p2.ext}` : "";
      const segments = [p2.root, p2.dir, p2.base ?? (p2.name ?? "") + ext].filter(
        Boolean
      );
      return normalizeWindowsPath(
        p2.root ? resolve(...segments) : segments.join("/")
      );
    }, "format");
    basename = /* @__PURE__ */ __name(function(p2, extension) {
      const segments = normalizeWindowsPath(p2).split("/");
      let lastSegment = "";
      for (let i = segments.length - 1; i >= 0; i--) {
        const val = segments[i];
        if (val) {
          lastSegment = val;
          break;
        }
      }
      return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
    }, "basename");
    parse = /* @__PURE__ */ __name(function(p2) {
      const root = _PATH_ROOT_RE.exec(p2)?.[0]?.replace(/\\/g, "/") || "";
      const base = basename(p2);
      const extension = extname(base);
      return {
        root,
        dir: dirname(p2),
        base,
        ext: extension,
        name: base.slice(0, base.length - extension.length)
      };
    }, "parse");
  }
});

// ../../node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs
var init_dist = __esm({
  "../../node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_pathe_M_eThtNZ();
  }
});

// node-built-in-modules:unenv/node/path
var path_exports = {};
__export(path_exports, {
  _makeLong: () => _makeLong,
  basename: () => basename,
  default: () => path_default,
  delimiter: () => delimiter,
  dirname: () => dirname,
  extname: () => extname,
  format: () => format,
  isAbsolute: () => isAbsolute,
  join: () => join,
  matchesGlob: () => matchesGlob2,
  normalize: () => normalize,
  parse: () => parse,
  posix: () => posix,
  relative: () => relative,
  resolve: () => resolve,
  sep: () => sep2,
  toNamespacedPath: () => toNamespacedPath,
  win32: () => win32
});
var sep2, delimiter, _pathModule, posix, win32, _makeLong, matchesGlob2, path_default;
var init_path = __esm({
  "node-built-in-modules:unenv/node/path"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_utils();
    init_dist();
    init_dist();
    sep2 = "/";
    delimiter = ":";
    _pathModule = {
      sep: sep2,
      delimiter,
      basename,
      dirname,
      extname,
      format,
      isAbsolute,
      join,
      normalize,
      parse,
      relative,
      resolve,
      toNamespacedPath,
      posix: void 0,
      win32: void 0,
      _makeLong: /* @__PURE__ */ __name((path) => path, "_makeLong"),
      matchesGlob: /* @__PURE__ */ notImplemented(`path.matchesGlob`)
    };
    _pathModule.posix = _pathModule;
    _pathModule.win32 = _pathModule;
    posix = _pathModule;
    win32 = _pathModule;
    _makeLong = _pathModule._makeLong;
    matchesGlob2 = _pathModule.matchesGlob;
    path_default = _pathModule;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/path-dirname.js
var path_dirname_default;
var init_path_dirname = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/path-dirname.js"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_path();
    init_process2();
    globalThis.__dirname = path_default.dirname(process_default.cwd());
    path_dirname_default = globalThis.__dirname;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-__dirname.js
var init_global_polyfill_dirname = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-__dirname.js"() {
    init_path_dirname();
    globalThis.__dirname = path_dirname_default;
  }
});

// ../../node_modules/.pnpm/setimmediate@1.0.5/node_modules/setimmediate/setImmediate.js
var require_setImmediate = __commonJS({
  "../../node_modules/.pnpm/setimmediate@1.0.5/node_modules/setimmediate/setImmediate.js"(exports) {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    (function(global2, undefined2) {
      "use strict";
      if (global2.setImmediate) {
        return;
      }
      var nextHandle = 1;
      var tasksByHandle = {};
      var currentlyRunningATask = false;
      var doc = global2.document;
      var registerImmediate;
      function setImmediate2(callback) {
        if (typeof callback !== "function") {
          callback = new Function("" + callback);
        }
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
        }
        var task = { callback, args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
      }
      __name(setImmediate2, "setImmediate");
      function clearImmediate2(handle2) {
        delete tasksByHandle[handle2];
      }
      __name(clearImmediate2, "clearImmediate");
      function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
          case 0:
            callback();
            break;
          case 1:
            callback(args[0]);
            break;
          case 2:
            callback(args[0], args[1]);
            break;
          case 3:
            callback(args[0], args[1], args[2]);
            break;
          default:
            callback.apply(undefined2, args);
            break;
        }
      }
      __name(run, "run");
      function runIfPresent(handle2) {
        if (currentlyRunningATask) {
          setTimeout(runIfPresent, 0, handle2);
        } else {
          var task = tasksByHandle[handle2];
          if (task) {
            currentlyRunningATask = true;
            try {
              run(task);
            } finally {
              clearImmediate2(handle2);
              currentlyRunningATask = false;
            }
          }
        }
      }
      __name(runIfPresent, "runIfPresent");
      function installNextTickImplementation() {
        registerImmediate = /* @__PURE__ */ __name(function(handle2) {
          process.nextTick(function() {
            runIfPresent(handle2);
          });
        }, "registerImmediate");
      }
      __name(installNextTickImplementation, "installNextTickImplementation");
      function canUsePostMessage() {
        if (global2.postMessage && !global2.importScripts) {
          var postMessageIsAsynchronous = true;
          var oldOnMessage = global2.onmessage;
          global2.onmessage = function() {
            postMessageIsAsynchronous = false;
          };
          global2.postMessage("", "*");
          global2.onmessage = oldOnMessage;
          return postMessageIsAsynchronous;
        }
      }
      __name(canUsePostMessage, "canUsePostMessage");
      function installPostMessageImplementation() {
        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = /* @__PURE__ */ __name(function(event) {
          if (event.source === global2 && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
            runIfPresent(+event.data.slice(messagePrefix.length));
          }
        }, "onGlobalMessage");
        if (global2.addEventListener) {
          global2.addEventListener("message", onGlobalMessage, false);
        } else {
          global2.attachEvent("onmessage", onGlobalMessage);
        }
        registerImmediate = /* @__PURE__ */ __name(function(handle2) {
          global2.postMessage(messagePrefix + handle2, "*");
        }, "registerImmediate");
      }
      __name(installPostMessageImplementation, "installPostMessageImplementation");
      function installMessageChannelImplementation() {
        var channel2 = new MessageChannel();
        channel2.port1.onmessage = function(event) {
          var handle2 = event.data;
          runIfPresent(handle2);
        };
        registerImmediate = /* @__PURE__ */ __name(function(handle2) {
          channel2.port2.postMessage(handle2);
        }, "registerImmediate");
      }
      __name(installMessageChannelImplementation, "installMessageChannelImplementation");
      function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = /* @__PURE__ */ __name(function(handle2) {
          var script = doc.createElement("script");
          script.onreadystatechange = function() {
            runIfPresent(handle2);
            script.onreadystatechange = null;
            html.removeChild(script);
            script = null;
          };
          html.appendChild(script);
        }, "registerImmediate");
      }
      __name(installReadyStateChangeImplementation, "installReadyStateChangeImplementation");
      function installSetTimeoutImplementation() {
        registerImmediate = /* @__PURE__ */ __name(function(handle2) {
          setTimeout(runIfPresent, 0, handle2);
        }, "registerImmediate");
      }
      __name(installSetTimeoutImplementation, "installSetTimeoutImplementation");
      var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global2);
      attachTo = attachTo && attachTo.setTimeout ? attachTo : global2;
      if ({}.toString.call(global2.process) === "[object process]") {
        installNextTickImplementation();
      } else if (canUsePostMessage()) {
        installPostMessageImplementation();
      } else if (global2.MessageChannel) {
        installMessageChannelImplementation();
      } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        installReadyStateChangeImplementation();
      } else {
        installSetTimeoutImplementation();
      }
      attachTo.setImmediate = setImmediate2;
      attachTo.clearImmediate = clearImmediate2;
    })(typeof self === "undefined" ? typeof globalThis === "undefined" ? exports : globalThis : self);
  }
});

// node-built-in-modules:timers-browserify/
var require_timers_browserify = __commonJS({
  "node-built-in-modules:timers-browserify/"(exports) {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    var scope = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || window;
    var apply = Function.prototype.apply;
    exports.setTimeout = function() {
      return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
    };
    exports.setInterval = function() {
      return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
    };
    exports.clearTimeout = exports.clearInterval = function(timeout) {
      if (timeout) {
        timeout.close();
      }
    };
    function Timeout(id, clearFn) {
      this._id = id;
      this._clearFn = clearFn;
    }
    __name(Timeout, "Timeout");
    Timeout.prototype.unref = Timeout.prototype.ref = function() {
    };
    Timeout.prototype.close = function() {
      this._clearFn.call(scope, this._id);
    };
    exports.enroll = function(item, msecs) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = msecs;
    };
    exports.unenroll = function(item) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = -1;
    };
    exports._unrefActive = exports.active = function(item) {
      clearTimeout(item._idleTimeoutId);
      var msecs = item._idleTimeout;
      if (msecs >= 0) {
        item._idleTimeoutId = setTimeout(/* @__PURE__ */ __name(function onTimeout() {
          if (item._onTimeout)
            item._onTimeout();
        }, "onTimeout"), msecs);
      }
    };
    require_setImmediate();
    exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof globalThis !== "undefined" && globalThis.setImmediate || exports && exports.setImmediate;
    exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof globalThis !== "undefined" && globalThis.clearImmediate || exports && exports.clearImmediate;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-clearImmediate.js
var import_node_timers2;
var init_global_polyfill_clearImmediate = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-clearImmediate.js"() {
    import_node_timers2 = __toESM(require_timers_browserify());
    globalThis.clearImmediate = import_node_timers2.clearImmediate;
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/buffer/base64.mjs
function getLens(b64) {
  const len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  let validLen = b64.indexOf("=");
  if (validLen === -1) {
    validLen = len;
  }
  const placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
}
function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
  let tmp;
  const lens = getLens(b64);
  const validLen = lens[0];
  const placeHoldersLen = lens[1];
  const arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  let curByte = 0;
  const len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  let i;
  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 255;
    arr[curByte++] = tmp >> 8 & 255;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 255;
    arr[curByte++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  let tmp;
  const output = [];
  for (let i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  let tmp;
  const len = uint8.length;
  const extraBytes = len % 3;
  const parts = [];
  const maxChunkLength = 16383;
  for (let i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
  }
  return parts.join("");
}
var lookup, revLookup, Arr, code;
var init_base64 = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/buffer/base64.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    lookup = [];
    revLookup = [];
    Arr = typeof Uint8Array === "undefined" ? Array : Uint8Array;
    code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (let i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    __name(getLens, "getLens");
    __name(_byteLength, "_byteLength");
    __name(toByteArray, "toByteArray");
    __name(tripletToBase64, "tripletToBase64");
    __name(encodeChunk, "encodeChunk");
    __name(fromByteArray, "fromByteArray");
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/buffer/ieee754.mjs
function read(buffer, offset, isLE, mLen, nBytes) {
  let e, m2;
  const eLen = nBytes * 8 - mLen - 1;
  const eMax = (1 << eLen) - 1;
  const eBias = eMax >> 1;
  let nBits = -7;
  let i = isLE ? nBytes - 1 : 0;
  const d2 = isLE ? -1 : 1;
  let s = buffer[offset + i];
  i += d2;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  while (nBits > 0) {
    e = e * 256 + buffer[offset + i];
    i += d2;
    nBits -= 8;
  }
  m2 = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  while (nBits > 0) {
    m2 = m2 * 256 + buffer[offset + i];
    i += d2;
    nBits -= 8;
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m2 ? Number.NaN : (s ? -1 : 1) * Number.POSITIVE_INFINITY;
  } else {
    m2 = m2 + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m2 * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  let e, m2, c;
  let eLen = nBytes * 8 - mLen - 1;
  const eMax = (1 << eLen) - 1;
  const eBias = eMax >> 1;
  const rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  let i = isLE ? 0 : nBytes - 1;
  const d2 = isLE ? 1 : -1;
  const s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (Number.isNaN(value) || value === Number.POSITIVE_INFINITY) {
    m2 = Number.isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log2(value));
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias);
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m2 = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m2 = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m2 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  while (mLen >= 8) {
    buffer[offset + i] = m2 & 255;
    i += d2;
    m2 /= 256;
    mLen -= 8;
  }
  e = e << mLen | m2;
  eLen += mLen;
  while (eLen > 0) {
    buffer[offset + i] = e & 255;
    i += d2;
    e /= 256;
    eLen -= 8;
  }
  buffer[offset + i - d2] |= s * 128;
}
var init_ieee754 = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/buffer/ieee754.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    __name(read, "read");
    __name(write, "write");
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/buffer/buffer.mjs
function typedArraySupport() {
  try {
    const arr = new Uint8Array(1);
    const proto = { foo: /* @__PURE__ */ __name(function() {
      return 42;
    }, "foo") };
    Object.setPrototypeOf(proto, Uint8Array.prototype);
    Object.setPrototypeOf(arr, proto);
    return arr.foo() === 42;
  } catch {
    return false;
  }
}
function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"');
  }
  const buf = new Uint8Array(length);
  Object.setPrototypeOf(buf, Buffer2.prototype);
  return buf;
}
function Buffer2(arg, encodingOrOffset, length) {
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new TypeError('The "string" argument must be of type string. Received type number');
    }
    return allocUnsafe(arg);
  }
  return from(arg, encodingOrOffset, length);
}
function from(value, encodingOrOffset, length) {
  if (typeof value === "string") {
    return fromString(value, encodingOrOffset);
  }
  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value);
  }
  if (value == null) {
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
  }
  if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }
  if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }
  if (typeof value === "number") {
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  }
  const valueOf = value.valueOf && value.valueOf();
  if (valueOf != null && valueOf !== value) {
    return Buffer2.from(valueOf, encodingOrOffset, length);
  }
  const b = fromObject(value);
  if (b) {
    return b;
  }
  if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
    return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
  }
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
function assertSize(size) {
  if (typeof size !== "number") {
    throw new TypeError('"size" argument must be of type number');
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"');
  }
}
function alloc(size, fill2, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(size);
  }
  if (fill2 !== void 0) {
    return typeof encoding === "string" ? createBuffer(size).fill(fill2, encoding) : createBuffer(size).fill(fill2);
  }
  return createBuffer(size);
}
function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
function fromString(string, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer2.isEncoding(encoding)) {
    throw new TypeError("Unknown encoding: " + encoding);
  }
  const length = byteLength(string, encoding) | 0;
  let buf = createBuffer(length);
  const actual = buf.write(string, encoding);
  if (actual !== length) {
    buf = buf.slice(0, actual);
  }
  return buf;
}
function fromArrayLike(array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0;
  const buf = createBuffer(length);
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf;
}
function fromArrayView(arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy2 = new Uint8Array(arrayView);
    return fromArrayBuffer(copy2.buffer, copy2.byteOffset, copy2.byteLength);
  }
  return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds');
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds');
  }
  let buf;
  if (byteOffset === void 0 && length === void 0) {
    buf = new Uint8Array(array);
  } else if (length === void 0) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }
  Object.setPrototypeOf(buf, Buffer2.prototype);
  return buf;
}
function fromObject(obj) {
  if (Buffer2.isBuffer(obj)) {
    const len = checked(obj.length) | 0;
    const buf = createBuffer(len);
    if (buf.length === 0) {
      return buf;
    }
    obj.copy(buf, 0, 0, len);
    return buf;
  }
  if (obj.length !== void 0) {
    if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
      return createBuffer(0);
    }
    return fromArrayLike(obj);
  }
  if (obj.type === "Buffer" && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}
function checked(length) {
  if (length >= K_MAX_LENGTH) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
  }
  return length | 0;
}
function byteLength(string, encoding) {
  if (Buffer2.isBuffer(string)) {
    return string.length;
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== "string") {
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
  }
  const len = string.length;
  const mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) {
    return 0;
  }
  let loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
        return utf8ToBytes(string).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes(string).length;
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length;
        }
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
function slowToString(encoding, start, end) {
  let loweredCase = false;
  if (start === void 0 || start < 0) {
    start = 0;
  }
  if (start > this.length) {
    return "";
  }
  if (end === void 0 || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return "";
  }
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return "";
  }
  if (!encoding) {
    encoding = "utf8";
  }
  while (true) {
    switch (encoding) {
      case "hex":
        return hexSlice(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, start, end);
      case "ascii":
        return asciiSlice(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice(this, start, end);
      case "base64":
        return base64Slice(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        encoding = (encoding + "").toLowerCase();
        loweredCase = true;
    }
  }
}
function swap(b, n, m2) {
  const i = b[n];
  b[n] = b[m2];
  b[m2] = i;
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0) {
    return -1;
  }
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (numberIsNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length - 1;
  }
  if (byteOffset < 0) {
    byteOffset = buffer.length + byteOffset;
  }
  if (byteOffset >= buffer.length) {
    if (dir) {
      return -1;
    } else {
      byteOffset = buffer.length - 1;
    }
  } else if (byteOffset < 0) {
    if (dir) {
      byteOffset = 0;
    } else {
      return -1;
    }
  }
  if (typeof val === "string") {
    val = Buffer2.from(val, encoding);
  }
  if (Buffer2.isBuffer(val)) {
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === "number") {
    val = val & 255;
    if (typeof Uint8Array.prototype.indexOf === "function") {
      return dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  let indexSize = 1;
  let arrLength = arr.length;
  let valLength = val.length;
  if (encoding !== void 0) {
    encoding = String(encoding).toLowerCase();
    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read2(buf, i2) {
    return indexSize === 1 ? buf[i2] : buf.readUInt16BE(i2 * indexSize);
  }
  __name(read2, "read");
  let i;
  if (dir) {
    let foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) {
          foundIndex = i;
        }
        if (i - foundIndex + 1 === valLength) {
          return foundIndex * indexSize;
        }
      } else {
        if (foundIndex !== -1) {
          i -= i - foundIndex;
        }
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) {
      byteOffset = arrLength - valLength;
    }
    for (i = byteOffset; i >= 0; i--) {
      let found = true;
      for (let j2 = 0; j2 < valLength; j2++) {
        if (read2(arr, i + j2) !== read2(val, j2)) {
          found = false;
          break;
        }
      }
      if (found) {
        return i;
      }
    }
  }
  return -1;
}
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  const remaining = buf.length - offset;
  if (length) {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  } else {
    length = remaining;
  }
  const strLen = string.length;
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  let i;
  for (i = 0; i < length; ++i) {
    const parsed = Number.parseInt(string.slice(i * 2, i * 2 + 2), 16);
    if (numberIsNaN(parsed)) {
      return i;
    }
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
function base64Slice(buf, start, end) {
  return start === 0 && end === buf.length ? fromByteArray(buf) : fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  const res = [];
  let i = start;
  while (i < end) {
    const firstByte = buf[i];
    let codePoint = null;
    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  let res = "";
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  let ret = "";
  end = Math.min(buf.length, end);
  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 127);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  let ret = "";
  end = Math.min(buf.length, end);
  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  const len = buf.length;
  if (!start || start < 0) {
    start = 0;
  }
  if (!end || end < 0 || end > len) {
    end = len;
  }
  let out = "";
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]];
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  const bytes = buf.slice(start, end);
  let res = "";
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) {
    throw new RangeError("offset is not uint");
  }
  if (offset + ext > length) {
    throw new RangeError("Trying to access beyond buffer length");
  }
}
function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer2.isBuffer(buf)) {
    throw new TypeError('"buffer" argument must be a Buffer instance');
  }
  if (value > max || value < min) {
    throw new RangeError('"value" argument is out of bounds');
  }
  if (offset + ext > buf.length) {
    throw new RangeError("Index out of range");
  }
}
function wrtBigUInt64LE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(4294967295));
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(4294967295));
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(4294967295));
  buf[offset + 7] = lo;
  lo = lo >> 8;
  buf[offset + 6] = lo;
  lo = lo >> 8;
  buf[offset + 5] = lo;
  lo = lo >> 8;
  buf[offset + 4] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(4294967295));
  buf[offset + 3] = hi;
  hi = hi >> 8;
  buf[offset + 2] = hi;
  hi = hi >> 8;
  buf[offset + 1] = hi;
  hi = hi >> 8;
  buf[offset] = hi;
  return offset + 8;
}
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) {
    throw new RangeError("Index out of range");
  }
  if (offset < 0) {
    throw new RangeError("Index out of range");
  }
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
function E(sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    static {
      __name(this, "NodeError");
    }
    constructor() {
      super();
      Object.defineProperty(this, "message", {
        value: Reflect.apply(getMessage, this, arguments),
        writable: true,
        configurable: true
      });
      this.name = `${this.name} [${sym}]`;
      this.stack;
      delete this.name;
    }
    get code() {
      return sym;
    }
    set code(value) {
      Object.defineProperty(this, "code", {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    }
    toString() {
      return `${this.name} [${sym}]: ${this.message}`;
    }
  };
}
function addNumericalSeparator(val) {
  let res = "";
  let i = val.length;
  const start = val[0] === "-" ? 1 : 0;
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`;
  }
  return `${val.slice(0, i)}${res}`;
}
function checkBounds(buf, offset, byteLength2) {
  validateNumber(offset, "offset");
  if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
    boundsError(offset, buf.length - (byteLength2 + 1));
  }
}
function checkIntBI(value, min, max, buf, offset, byteLength2) {
  if (value > max || value < min) {
    const n = typeof min === "bigint" ? "n" : "";
    let range;
    if (byteLength2 > 3) {
      range = min === 0 || min === BigInt(0) ? `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}` : `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`;
    }
    throw new errors.ERR_OUT_OF_RANGE("value", range, value);
  }
  checkBounds(buf, offset, byteLength2);
}
function validateNumber(value, name) {
  if (typeof value !== "number") {
    throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
  }
}
function boundsError(value, length, type2) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type2);
    throw new errors.ERR_OUT_OF_RANGE(type2 || "offset", "an integer", value);
  }
  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
  }
  throw new errors.ERR_OUT_OF_RANGE(type2 || "offset", `>= ${type2 ? 1 : 0} and <= ${length}`, value);
}
function base64clean(str) {
  str = str.split("=")[0];
  str = str.trim().replace(INVALID_BASE64_RE, "");
  if (str.length < 2) {
    return "";
  }
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function utf8ToBytes(string, units) {
  units = units || Number.POSITIVE_INFINITY;
  let codePoint;
  const length = string.length;
  let leadSurrogate = null;
  const bytes = [];
  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1) {
            bytes.push(239, 191, 189);
          }
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1) {
            bytes.push(239, 191, 189);
          }
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1) {
          bytes.push(239, 191, 189);
        }
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate && (units -= 3) > -1) {
      bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0) {
        break;
      }
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0) {
        break;
      }
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0) {
        break;
      }
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0) {
        break;
      }
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  const byteArray = [];
  for (let i = 0; i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 255);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  let c, hi, lo;
  const byteArray = [];
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) {
      break;
    }
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo, hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  let i;
  for (i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) {
      break;
    }
    dst[i + offset] = src[i];
  }
  return i;
}
function isInstance(obj, type2) {
  return obj instanceof type2 || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type2.name;
}
function numberIsNaN(obj) {
  return obj !== obj;
}
function defineBigIntMethod(fn) {
  return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
  throw new Error("BigInt not supported");
}
var customInspectSymbol, INSPECT_MAX_BYTES, K_MAX_LENGTH, MAX_ARGUMENTS_LENGTH, errors, INVALID_BASE64_RE, hexSliceLookupTable;
var init_buffer = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/buffer/buffer.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_base64();
    init_ieee754();
    customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    INSPECT_MAX_BYTES = 50;
    K_MAX_LENGTH = 2147483647;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    __name(typedArraySupport, "typedArraySupport");
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        if (!Buffer2.isBuffer(this)) {
          return;
        }
        return this.buffer;
      }, "get")
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: /* @__PURE__ */ __name(function() {
        if (!Buffer2.isBuffer(this)) {
          return;
        }
        return this.byteOffset;
      }, "get")
    });
    __name(createBuffer, "createBuffer");
    __name(Buffer2, "Buffer");
    Buffer2.poolSize = 8192;
    __name(from, "from");
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    __name(assertSize, "assertSize");
    __name(alloc, "alloc");
    Buffer2.alloc = function(size, fill2, encoding) {
      return alloc(size, fill2, encoding);
    };
    __name(allocUnsafe, "allocUnsafe");
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    __name(fromString, "fromString");
    __name(fromArrayLike, "fromArrayLike");
    __name(fromArrayView, "fromArrayView");
    __name(fromArrayBuffer, "fromArrayBuffer");
    __name(fromObject, "fromObject");
    __name(checked, "checked");
    Buffer2.isBuffer = /* @__PURE__ */ __name(function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    }, "isBuffer");
    Buffer2.compare = /* @__PURE__ */ __name(function compare(a, b) {
      if (isInstance(a, Uint8Array)) {
        a = Buffer2.from(a, a.offset, a.byteLength);
      }
      if (isInstance(b, Uint8Array)) {
        b = Buffer2.from(b, b.offset, b.byteLength);
      }
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b) {
        return 0;
      }
      let x2 = a.length;
      let y2 = b.length;
      for (let i = 0, len = Math.min(x2, y2); i < len; ++i) {
        if (a[i] !== b[i]) {
          x2 = a[i];
          y2 = b[i];
          break;
        }
      }
      if (x2 < y2) {
        return -1;
      }
      if (y2 < x2) {
        return 1;
      }
      return 0;
    }, "compare");
    Buffer2.isEncoding = /* @__PURE__ */ __name(function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, "isEncoding");
    Buffer2.concat = /* @__PURE__ */ __name(function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer2.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer2.isBuffer(buf)) {
              buf = Buffer2.from(buf.buffer, buf.byteOffset, buf.byteLength);
            }
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (Buffer2.isBuffer(buf)) {
          buf.copy(buffer, pos);
        } else {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        pos += buf.length;
      }
      return buffer;
    }, "concat");
    __name(byteLength, "byteLength");
    Buffer2.byteLength = byteLength;
    __name(slowToString, "slowToString");
    Buffer2.prototype._isBuffer = true;
    __name(swap, "swap");
    Buffer2.prototype.swap16 = /* @__PURE__ */ __name(function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    }, "swap16");
    Buffer2.prototype.swap32 = /* @__PURE__ */ __name(function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    }, "swap32");
    Buffer2.prototype.swap64 = /* @__PURE__ */ __name(function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    }, "swap64");
    Buffer2.prototype.toString = /* @__PURE__ */ __name(function toString() {
      const length = this.length;
      if (length === 0) {
        return "";
      }
      if (arguments.length === 0) {
        return utf8Slice(this, 0, length);
      }
      return Reflect.apply(slowToString, this, arguments);
    }, "toString");
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = /* @__PURE__ */ __name(function equals(b) {
      if (!Buffer2.isBuffer(b)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (this === b) {
        return true;
      }
      return Buffer2.compare(this, b) === 0;
    }, "equals");
    Buffer2.prototype.inspect = /* @__PURE__ */ __name(function inspect2() {
      let str = "";
      const max = INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) {
        str += " ... ";
      }
      return "<Buffer " + str + ">";
    }, "inspect");
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = /* @__PURE__ */ __name(function compare2(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) {
        return 0;
      }
      let x2 = thisEnd - thisStart;
      let y2 = end - start;
      const len = Math.min(x2, y2);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x2 = thisCopy[i];
          y2 = targetCopy[i];
          break;
        }
      }
      if (x2 < y2) {
        return -1;
      }
      if (y2 < x2) {
        return 1;
      }
      return 0;
    }, "compare");
    __name(bidirectionalIndexOf, "bidirectionalIndexOf");
    __name(arrayIndexOf, "arrayIndexOf");
    Buffer2.prototype.includes = /* @__PURE__ */ __name(function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    }, "includes");
    Buffer2.prototype.indexOf = /* @__PURE__ */ __name(function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    }, "indexOf");
    Buffer2.prototype.lastIndexOf = /* @__PURE__ */ __name(function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    }, "lastIndexOf");
    __name(hexWrite, "hexWrite");
    __name(utf8Write, "utf8Write");
    __name(asciiWrite, "asciiWrite");
    __name(base64Write, "base64Write");
    __name(ucs2Write, "ucs2Write");
    Buffer2.prototype.write = /* @__PURE__ */ __name(function write2(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (Number.isFinite(offset)) {
        offset = offset >>> 0;
        if (Number.isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) {
            encoding = "utf8";
          }
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining) {
        length = remaining;
      }
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) {
        encoding = "utf8";
      }
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) {
              throw new TypeError("Unknown encoding: " + encoding);
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }, "write");
    Buffer2.prototype.toJSON = /* @__PURE__ */ __name(function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    }, "toJSON");
    __name(base64Slice, "base64Slice");
    __name(utf8Slice, "utf8Slice");
    MAX_ARGUMENTS_LENGTH = 4096;
    __name(decodeCodePointsArray, "decodeCodePointsArray");
    __name(asciiSlice, "asciiSlice");
    __name(latin1Slice, "latin1Slice");
    __name(hexSlice, "hexSlice");
    __name(utf16leSlice, "utf16leSlice");
    Buffer2.prototype.slice = /* @__PURE__ */ __name(function slice(start, end) {
      const len = this.length;
      start = Math.trunc(start);
      end = end === void 0 ? len : Math.trunc(end);
      if (start < 0) {
        start += len;
        if (start < 0) {
          start = 0;
        }
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) {
          end = 0;
        }
      } else if (end > len) {
        end = len;
      }
      if (end < start) {
        end = start;
      }
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    }, "slice");
    __name(checkOffset, "checkOffset");
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = /* @__PURE__ */ __name(function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    }, "readUIntLE");
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = /* @__PURE__ */ __name(function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    }, "readUIntBE");
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = /* @__PURE__ */ __name(function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 1, this.length);
      }
      return this[offset];
    }, "readUInt8");
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = /* @__PURE__ */ __name(function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this.length);
      }
      return this[offset] | this[offset + 1] << 8;
    }, "readUInt16LE");
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = /* @__PURE__ */ __name(function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this.length);
      }
      return this[offset] << 8 | this[offset + 1];
    }, "readUInt16BE");
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = /* @__PURE__ */ __name(function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this.length);
      }
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    }, "readUInt32LE");
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = /* @__PURE__ */ __name(function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this.length);
      }
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    }, "readUInt32BE");
    Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    }, "readBigUInt64LE"));
    Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    }, "readBigUInt64BE"));
    Buffer2.prototype.readIntLE = /* @__PURE__ */ __name(function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul) {
        val -= Math.pow(2, 8 * byteLength2);
      }
      return val;
    }, "readIntLE");
    Buffer2.prototype.readIntBE = /* @__PURE__ */ __name(function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul) {
        val -= Math.pow(2, 8 * byteLength2);
      }
      return val;
    }, "readIntBE");
    Buffer2.prototype.readInt8 = /* @__PURE__ */ __name(function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 1, this.length);
      }
      if (!(this[offset] & 128)) {
        return this[offset];
      }
      return (255 - this[offset] + 1) * -1;
    }, "readInt8");
    Buffer2.prototype.readInt16LE = /* @__PURE__ */ __name(function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this.length);
      }
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    }, "readInt16LE");
    Buffer2.prototype.readInt16BE = /* @__PURE__ */ __name(function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 2, this.length);
      }
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    }, "readInt16BE");
    Buffer2.prototype.readInt32LE = /* @__PURE__ */ __name(function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this.length);
      }
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    }, "readInt32LE");
    Buffer2.prototype.readInt32BE = /* @__PURE__ */ __name(function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this.length);
      }
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    }, "readInt32BE");
    Buffer2.prototype.readBigInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    }, "readBigInt64LE"));
    Buffer2.prototype.readBigInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    }, "readBigInt64BE"));
    Buffer2.prototype.readFloatLE = /* @__PURE__ */ __name(function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this.length);
      }
      return read(this, offset, true, 23, 4);
    }, "readFloatLE");
    Buffer2.prototype.readFloatBE = /* @__PURE__ */ __name(function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 4, this.length);
      }
      return read(this, offset, false, 23, 4);
    }, "readFloatBE");
    Buffer2.prototype.readDoubleLE = /* @__PURE__ */ __name(function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 8, this.length);
      }
      return read(this, offset, true, 52, 8);
    }, "readDoubleLE");
    Buffer2.prototype.readDoubleBE = /* @__PURE__ */ __name(function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) {
        checkOffset(offset, 8, this.length);
      }
      return read(this, offset, false, 52, 8);
    }, "readDoubleBE");
    __name(checkInt, "checkInt");
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = /* @__PURE__ */ __name(function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    }, "writeUIntLE");
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = /* @__PURE__ */ __name(function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    }, "writeUIntBE");
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = /* @__PURE__ */ __name(function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 1, 255, 0);
      }
      this[offset] = value & 255;
      return offset + 1;
    }, "writeUInt8");
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = /* @__PURE__ */ __name(function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 2, 65535, 0);
      }
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    }, "writeUInt16LE");
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = /* @__PURE__ */ __name(function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 2, 65535, 0);
      }
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    }, "writeUInt16BE");
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = /* @__PURE__ */ __name(function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 4, 4294967295, 0);
      }
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    }, "writeUInt32LE");
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = /* @__PURE__ */ __name(function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 4, 4294967295, 0);
      }
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    }, "writeUInt32BE");
    __name(wrtBigUInt64LE, "wrtBigUInt64LE");
    __name(wrtBigUInt64BE, "wrtBigUInt64BE");
    Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64LE"));
    Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64BE"));
    Buffer2.prototype.writeIntLE = /* @__PURE__ */ __name(function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = Math.trunc(value / mul) - sub & 255;
      }
      return offset + byteLength2;
    }, "writeIntLE");
    Buffer2.prototype.writeIntBE = /* @__PURE__ */ __name(function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = Math.trunc(value / mul) - sub & 255;
      }
      return offset + byteLength2;
    }, "writeIntBE");
    Buffer2.prototype.writeInt8 = /* @__PURE__ */ __name(function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 1, 127, -128);
      }
      if (value < 0) {
        value = 255 + value + 1;
      }
      this[offset] = value & 255;
      return offset + 1;
    }, "writeInt8");
    Buffer2.prototype.writeInt16LE = /* @__PURE__ */ __name(function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 2, 32767, -32768);
      }
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    }, "writeInt16LE");
    Buffer2.prototype.writeInt16BE = /* @__PURE__ */ __name(function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 2, 32767, -32768);
      }
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    }, "writeInt16BE");
    Buffer2.prototype.writeInt32LE = /* @__PURE__ */ __name(function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      }
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    }, "writeInt32LE");
    Buffer2.prototype.writeInt32BE = /* @__PURE__ */ __name(function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      }
      if (value < 0) {
        value = 4294967295 + value + 1;
      }
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    }, "writeInt32BE");
    Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64LE"));
    Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64BE"));
    __name(checkIEEE754, "checkIEEE754");
    __name(writeFloat, "writeFloat");
    Buffer2.prototype.writeFloatLE = /* @__PURE__ */ __name(function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    }, "writeFloatLE");
    Buffer2.prototype.writeFloatBE = /* @__PURE__ */ __name(function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    }, "writeFloatBE");
    __name(writeDouble, "writeDouble");
    Buffer2.prototype.writeDoubleLE = /* @__PURE__ */ __name(function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    }, "writeDoubleLE");
    Buffer2.prototype.writeDoubleBE = /* @__PURE__ */ __name(function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    }, "writeDoubleBE");
    Buffer2.prototype.copy = /* @__PURE__ */ __name(function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError("argument should be a Buffer");
      }
      if (!start) {
        start = 0;
      }
      if (!end && end !== 0) {
        end = this.length;
      }
      if (targetStart >= target.length) {
        targetStart = target.length;
      }
      if (!targetStart) {
        targetStart = 0;
      }
      if (end > 0 && end < start) {
        end = start;
      }
      if (end === start) {
        return 0;
      }
      if (target.length === 0 || this.length === 0) {
        return 0;
      }
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) {
        throw new RangeError("Index out of range");
      }
      if (end < 0) {
        throw new RangeError("sourceEnd out of bounds");
      }
      if (end > this.length) {
        end = this.length;
      }
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    }, "copy");
    Buffer2.prototype.fill = /* @__PURE__ */ __name(function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code2 = val.charCodeAt(0);
          if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
            val = code2;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) {
        val = 0;
      }
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    }, "fill");
    errors = {};
    __name(E, "E");
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);
    __name(addNumericalSeparator, "addNumericalSeparator");
    __name(checkBounds, "checkBounds");
    __name(checkIntBI, "checkIntBI");
    __name(validateNumber, "validateNumber");
    __name(boundsError, "boundsError");
    INVALID_BASE64_RE = /[^\w+/-]/g;
    __name(base64clean, "base64clean");
    __name(utf8ToBytes, "utf8ToBytes");
    __name(asciiToBytes, "asciiToBytes");
    __name(utf16leToBytes, "utf16leToBytes");
    __name(base64ToBytes, "base64ToBytes");
    __name(blitBuffer, "blitBuffer");
    __name(isInstance, "isInstance");
    __name(numberIsNaN, "numberIsNaN");
    hexSliceLookupTable = (function() {
      const alphabet = "0123456789abcdef";
      const table = Array.from({ length: 256 });
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j2 = 0; j2 < 16; ++j2) {
          table[i16 + j2] = alphabet[i] + alphabet[j2];
        }
      }
      return table;
    })();
    __name(defineBigIntMethod, "defineBigIntMethod");
    __name(BufferBigIntNotDefined, "BufferBigIntNotDefined");
  }
});

// node-built-in-modules:unenv/node/buffer
var Buffer3, Blob, btoa, atob;
var init_buffer2 = __esm({
  "node-built-in-modules:unenv/node/buffer"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_buffer();
    Buffer3 = globalThis.Buffer || Buffer2;
    Blob = globalThis.Blob;
    btoa = globalThis.btoa.bind(globalThis);
    atob = globalThis.atob.bind(globalThis);
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-Buffer.js
var init_global_polyfill_Buffer = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-Buffer.js"() {
    init_buffer2();
    globalThis.Buffer = Buffer3;
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/polyfill/globalthis.mjs
var globalthis_default;
var init_globalthis = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/polyfill/globalthis.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    globalthis_default = globalThis;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-global.js
var init_global_polyfill_global = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-global.js"() {
    init_globalthis();
    globalThis.global = globalthis_default;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/process.cjs
var require_process = __commonJS({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/unenv-preset/src/polyfills/node/globals/process.cjs"(exports, module) {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    globalThis.startTime = globalThis.startTime || Date.now();
    var processShim = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    __name(defaultSetTimout, "defaultSetTimout");
    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }
    __name(defaultClearTimeout, "defaultClearTimeout");
    (function() {
      try {
        if (typeof setTimeout === "function") {
          cachedSetTimeout = setTimeout;
        } else {
          cachedSetTimeout = defaultSetTimout;
        }
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        if (typeof clearTimeout === "function") {
          cachedClearTimeout = clearTimeout;
        } else {
          cachedClearTimeout = defaultClearTimeout;
        }
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
      }
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e2) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    __name(runTimeout, "runTimeout");
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
        return clearTimeout(marker);
      }
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          return cachedClearTimeout.call(null, marker);
        } catch (e2) {
          return cachedClearTimeout.call(this, marker);
        }
      }
    }
    __name(runClearTimeout, "runClearTimeout");
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
      if (!draining || !currentQueue) {
        return;
      }
      draining = false;
      if (currentQueue.length) {
        queue = currentQueue.concat(queue);
      } else {
        queueIndex = -1;
      }
      if (queue.length) {
        drainQueue();
      }
    }
    __name(cleanUpNextTick, "cleanUpNextTick");
    function drainQueue() {
      if (draining) {
        return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
          if (currentQueue) {
            currentQueue[queueIndex].run();
          }
        }
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }
    __name(drainQueue, "drainQueue");
    processShim.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
      }
    };
    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    __name(Item, "Item");
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    processShim.title = "browser";
    processShim.browser = true;
    var initialValues = globalThis.process !== "undefined" && globalThis.process?.env ? globalThis.process.env : {};
    Object.defineProperty(processShim, "env", {
      value: new Proxy(
        { ...initialValues },
        {
          get(target, prop) {
            return target[prop] || void 0;
          },
          set(target, prop, value) {
            target[prop] = value;
            return true;
          }
        }
      ),
      writable: true,
      enumerable: true,
      configurable: true
    });
    processShim.argv = [];
    processShim.version = "";
    processShim.versions = { node: "18.3.1" };
    function noop() {
    }
    __name(noop, "noop");
    processShim.on = noop;
    processShim.addListener = noop;
    processShim.once = noop;
    processShim.off = noop;
    processShim.removeListener = noop;
    processShim.removeAllListeners = noop;
    processShim.emit = noop;
    processShim.prependListener = noop;
    processShim.prependOnceListener = noop;
    processShim.uptime = function() {
      return (Date.now() - globalThis.startTime) / 1e3;
    };
    processShim.listeners = function(name) {
      return [];
    };
    processShim.binding = function(name) {
      throw new Error("process.binding is not supported");
    };
    processShim.cwd = function() {
      return "/";
    };
    processShim.chdir = function(dir) {
      return dir ?? "/";
    };
    processShim.umask = function() {
      return 0;
    };
    globalThis.process = processShim;
    module.exports = processShim;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-process.js
var import_process4;
var init_global_polyfill_process = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/_global_polyfill-process.js"() {
    import_process4 = __toESM(require_process());
    globalThis.process = import_process4.default;
  }
});

// ../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/bundler/src/polyfills/fs/promises/promises.polyfills.js
async function open(path, ...args) {
  path = join(BUILD_PATH_PREFIX, path);
  return FS_CONTEXT.promises.open(path, ...args);
}
async function stat(path, ...args) {
  path = join(BUILD_PATH_PREFIX, path);
  return FS_CONTEXT.promises.stat(path, ...args);
}
async function lstat(path, ...args) {
  path = join(BUILD_PATH_PREFIX, path);
  return FS_CONTEXT.promises.lstat(path, ...args);
}
async function readFile(path, ...args) {
  path = join(BUILD_PATH_PREFIX, path);
  return FS_CONTEXT.promises.readFile(path, ...args);
}
async function readdir(path, ...args) {
  path = join(BUILD_PATH_PREFIX, path);
  return FS_CONTEXT.promises.readdir(path, ...args);
}
async function mkdir(path, ...args) {
  path = join(BUILD_PATH_PREFIX, path);
  return FS_CONTEXT.promises.mkdir(path, ...args);
}
async function rmdir(path, ...args) {
  path = join(BUILD_PATH_PREFIX, path);
  return FS_CONTEXT.promises.rmdir(path, ...args);
}
async function copyFile(src, dest, ...args) {
  src = `${BUILD_PATH_PREFIX}/${src}`;
  dest = `${BUILD_PATH_PREFIX}/${dest}`;
  return FS_CONTEXT.promises.copyFile(src, dest, ...args);
}
async function cp(src, dest, ...args) {
  src = `${BUILD_PATH_PREFIX}/${src}`;
  dest = `${BUILD_PATH_PREFIX}/${dest}`;
  return FS_CONTEXT.promises.cp(src, dest, ...args);
}
async function writeFile(path, data, ...args) {
  path = `${BUILD_PATH_PREFIX}/${path}`;
  return FS_CONTEXT.promises.writeFile(path, data, ...args);
}
async function rename(src, dest) {
  src = `${BUILD_PATH_PREFIX}/${src}`;
  dest = `${BUILD_PATH_PREFIX}/${dest}`;
  return FS_CONTEXT.promises.rename(src, dest);
}
async function realpath(src, ...args) {
  src = `${BUILD_PATH_PREFIX}/${src}`;
  return FS_CONTEXT.promises.realpath(src, ...args);
}
var localFsPromises, BUILD_PATH_PREFIX, constants, promises_polyfills_default;
var init_promises_polyfills = __esm({
  "../../node_modules/.pnpm/azion@1.20.11_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/bundler/src/polyfills/fs/promises/promises.polyfills.js"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_path();
    localFsPromises = {};
    BUILD_PATH_PREFIX = ".edge/storage";
    __name(open, "open");
    __name(stat, "stat");
    __name(lstat, "lstat");
    __name(readFile, "readFile");
    __name(readdir, "readdir");
    __name(mkdir, "mkdir");
    __name(rmdir, "rmdir");
    __name(copyFile, "copyFile");
    __name(cp, "cp");
    __name(writeFile, "writeFile");
    __name(rename, "rename");
    __name(realpath, "realpath");
    constants = {
      COPYFILE_EXCL: 1,
      COPYFILE_FICLONE: 2,
      COPYFILE_FICLONE_FORCE: 4,
      F_OK: 0,
      O_APPEND: 8,
      O_CREAT: 512,
      O_DIRECTORY: 1048576,
      O_DSYNC: 4194304,
      O_EXCL: 2048,
      O_NOCTTY: 131072,
      O_NOFOLLOW: 256,
      O_NONBLOCK: 4,
      O_RDONLY: 0,
      O_RDWR: 2,
      O_SYMLINK: 2097152,
      O_SYNC: 128,
      O_TRUNC: 1024,
      O_WRONLY: 1,
      R_OK: 4,
      S_IRGRP: 32,
      S_IROTH: 4,
      S_IRUSR: 256,
      S_IWGRP: 16,
      S_IWOTH: 2,
      S_IWUSR: 128,
      S_IXGRP: 8,
      S_IXOTH: 1,
      S_IXUSR: 64,
      UV_FS_COPYFILE_EXCL: 1,
      UV_FS_COPYFILE_FICLONE: 2,
      UV_FS_COPYFILE_FICLONE_FORCE: 4,
      W_OK: 2,
      X_OK: 1
    };
    localFsPromises.open = open;
    localFsPromises.stat = stat;
    localFsPromises.lstat = lstat;
    localFsPromises.readFile = readFile;
    localFsPromises.readdir = readdir;
    localFsPromises.mkdir = mkdir;
    localFsPromises.rmdir = rmdir;
    localFsPromises.copyFile = copyFile;
    localFsPromises.cp = cp;
    localFsPromises.constants = constants;
    localFsPromises.writeFile = writeFile;
    localFsPromises.rename = rename;
    localFsPromises.realpath = realpath;
    promises_polyfills_default = localFsPromises;
  }
});

// internal-env-dev:fs
var fs_exports = {};
__export(fs_exports, {
  F_OK: () => F_OK,
  O_APPEND: () => O_APPEND,
  O_CREAT: () => O_CREAT,
  O_DIRECTORY: () => O_DIRECTORY,
  O_DSYNC: () => O_DSYNC,
  O_EXCL: () => O_EXCL,
  O_NOCTTY: () => O_NOCTTY,
  O_NOFOLLOW: () => O_NOFOLLOW,
  O_NONBLOCK: () => O_NONBLOCK,
  O_RDONLY: () => O_RDONLY,
  O_RDWR: () => O_RDWR,
  O_SYMLINK: () => O_SYMLINK,
  O_SYNC: () => O_SYNC,
  O_TRUNC: () => O_TRUNC,
  O_WRONLY: () => O_WRONLY,
  R_OK: () => R_OK,
  W_OK: () => W_OK,
  X_OK: () => X_OK,
  close: () => close,
  closeSync: () => closeSync,
  constants: () => constants2,
  copyFile: () => copyFile2,
  cp: () => cp2,
  default: () => fs_default,
  existsSync: () => existsSync,
  lstat: () => lstat2,
  lstatSync: () => lstatSync,
  mkdir: () => mkdir2,
  open: () => open2,
  openSync: () => openSync,
  promises: () => promises_polyfills_default,
  readFile: () => readFile2,
  readFileSync: () => readFileSync,
  readdir: () => readdir2,
  readdirSync: () => readdirSync,
  realpath: () => realpath2,
  rename: () => rename2,
  rmdir: () => rmdir2,
  stat: () => stat2,
  statSync: () => statSync,
  writeFile: () => writeFile2
});
function open2(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.open(path, ...args);
}
function openSync(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.openSync(path, ...args);
}
function close(...args) {
  return FS_CONTEXT.close(...args);
}
function closeSync(...args) {
  return FS_CONTEXT.closeSync(...args);
}
function existsSync(path) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.existsSync(path);
}
function stat2(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.stat(path, ...args);
}
function statSync(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.statSync(path, ...args);
}
function lstat2(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.lstat(path, ...args);
}
function lstatSync(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.lstatSync(path, ...args);
}
function readFile2(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.readFile(path, ...args);
}
function readFileSync(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.readFileSync(path, ...args);
}
function readdir2(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.readdir(path, ...args);
}
function readdirSync(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.readdirSync(path, ...args);
}
function mkdir2(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.mkdir(path, ...args);
}
function rmdir2(path, ...args) {
  path = join(BUILD_PATH_PREFIX2, path);
  return FS_CONTEXT.rmdir(path, ...args);
}
function copyFile2(src, dest, ...args) {
  src = `${BUILD_PATH_PREFIX2}/${src}`;
  dest = `${BUILD_PATH_PREFIX2}/${dest}`;
  return FS_CONTEXT.copyFile(src, dest, ...args);
}
function cp2(src, dest, ...args) {
  src = `${BUILD_PATH_PREFIX2}/${src}`;
  dest = `${BUILD_PATH_PREFIX2}/${dest}`;
  return FS_CONTEXT.cp(src, dest, ...args);
}
async function writeFile2(path, data, ...args) {
  path = `${BUILD_PATH_PREFIX2}/${path}`;
  return FS_CONTEXT.writeFile(path, data, ...args);
}
async function rename2(src, dest, ...args) {
  src = `${BUILD_PATH_PREFIX2}/${src}`;
  dest = `${BUILD_PATH_PREFIX2}/${dest}`;
  return FS_CONTEXT.rename(src, dest, ...args);
}
async function realpath2(src, ...args) {
  src = `${BUILD_PATH_PREFIX2}/${src}`;
  return FS_CONTEXT.realpath(src, ...args);
}
var localFs, BUILD_PATH_PREFIX2, constants2, F_OK, O_APPEND, O_CREAT, O_DIRECTORY, O_DSYNC, O_EXCL, O_NOCTTY, O_NOFOLLOW, O_NONBLOCK, O_RDONLY, O_RDWR, O_SYMLINK, O_SYNC, O_TRUNC, O_WRONLY, R_OK, W_OK, X_OK, fs_default;
var init_fs = __esm({
  "internal-env-dev:fs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_path();
    init_promises_polyfills();
    localFs = {};
    BUILD_PATH_PREFIX2 = ".edge/storage";
    __name(open2, "open");
    __name(openSync, "openSync");
    __name(close, "close");
    __name(closeSync, "closeSync");
    __name(existsSync, "existsSync");
    __name(stat2, "stat");
    __name(statSync, "statSync");
    __name(lstat2, "lstat");
    __name(lstatSync, "lstatSync");
    __name(readFile2, "readFile");
    __name(readFileSync, "readFileSync");
    __name(readdir2, "readdir");
    __name(readdirSync, "readdirSync");
    __name(mkdir2, "mkdir");
    __name(rmdir2, "rmdir");
    __name(copyFile2, "copyFile");
    __name(cp2, "cp");
    __name(writeFile2, "writeFile");
    __name(rename2, "rename");
    __name(realpath2, "realpath");
    constants2 = {
      COPYFILE_EXCL: 1,
      COPYFILE_FICLONE: 2,
      COPYFILE_FICLONE_FORCE: 4,
      F_OK: 0,
      O_APPEND: 8,
      O_CREAT: 512,
      O_DIRECTORY: 1048576,
      O_DSYNC: 4194304,
      O_EXCL: 2048,
      O_NOCTTY: 131072,
      O_NOFOLLOW: 256,
      O_NONBLOCK: 4,
      O_RDONLY: 0,
      O_RDWR: 2,
      O_SYMLINK: 2097152,
      O_SYNC: 128,
      O_TRUNC: 1024,
      O_WRONLY: 1,
      R_OK: 4,
      S_IRGRP: 32,
      S_IROTH: 4,
      S_IRUSR: 256,
      S_IWGRP: 16,
      S_IWOTH: 2,
      S_IWUSR: 128,
      S_IXGRP: 8,
      S_IXOTH: 1,
      S_IXUSR: 64,
      UV_FS_COPYFILE_EXCL: 1,
      UV_FS_COPYFILE_FICLONE: 2,
      UV_FS_COPYFILE_FICLONE_FORCE: 4,
      W_OK: 2,
      X_OK: 1
    };
    F_OK = 0;
    O_APPEND = 8;
    O_CREAT = 512;
    O_DIRECTORY = 1048576;
    O_DSYNC = 4194304;
    O_EXCL = 2048;
    O_NOCTTY = 131072;
    O_NOFOLLOW = 256;
    O_NONBLOCK = 4;
    O_RDONLY = 0;
    O_RDWR = 2;
    O_SYMLINK = 2097152;
    O_SYNC = 128;
    O_TRUNC = 1024;
    O_WRONLY = 1;
    R_OK = 4;
    W_OK = 2;
    X_OK = 1;
    localFs.promises = promises_polyfills_default;
    localFs.open = open2;
    localFs.openSync = openSync;
    localFs.close = close;
    localFs.closeSync = closeSync;
    localFs.existsSync = existsSync;
    localFs.stat = stat2;
    localFs.statSync = statSync;
    localFs.lstat = lstat2;
    localFs.lstatSync = lstatSync;
    localFs.readFile = readFile2;
    localFs.readFileSync = readFileSync;
    localFs.readdir = readdir2;
    localFs.readdirSync = readdirSync;
    localFs.mkdir = mkdir2;
    localFs.rmdir = rmdir2;
    localFs.copyFile = copyFile2;
    localFs.cp = cp2;
    localFs.writeFile = writeFile2;
    localFs.rename = rename2;
    localFs.realpath = realpath2;
    localFs.constants = constants2;
    localFs.F_OK = F_OK;
    localFs.O_APPEND = O_APPEND;
    localFs.O_CREAT = O_CREAT;
    localFs.O_DIRECTORY = O_DIRECTORY;
    localFs.O_DSYNC = O_DSYNC;
    localFs.O_EXCL = O_EXCL;
    localFs.O_NOCTTY = O_NOCTTY;
    localFs.O_NOFOLLOW = O_NOFOLLOW;
    localFs.O_NONBLOCK = O_NONBLOCK;
    localFs.O_RDONLY = O_RDONLY;
    localFs.O_RDWR = O_RDWR;
    localFs.O_SYMLINK = O_SYMLINK;
    localFs.O_SYNC = O_SYNC;
    localFs.O_TRUNC = O_TRUNC;
    localFs.O_WRONLY = O_WRONLY;
    localFs.R_OK = R_OK;
    localFs.W_OK = W_OK;
    localFs.X_OK = X_OK;
    fs_default = localFs;
  }
});

// ../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/os/constants.mjs
var UV_UDP_REUSEADDR, dlopen2, errno, signals, priority;
var init_constants = __esm({
  "../../node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/os/constants.mjs"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    UV_UDP_REUSEADDR = 4;
    dlopen2 = {
      RTLD_LAZY: 1,
      RTLD_NOW: 2,
      RTLD_GLOBAL: 256,
      RTLD_LOCAL: 0,
      RTLD_DEEPBIND: 8
    };
    errno = {
      E2BIG: 7,
      EACCES: 13,
      EADDRINUSE: 98,
      EADDRNOTAVAIL: 99,
      EAFNOSUPPORT: 97,
      EAGAIN: 11,
      EALREADY: 114,
      EBADF: 9,
      EBADMSG: 74,
      EBUSY: 16,
      ECANCELED: 125,
      ECHILD: 10,
      ECONNABORTED: 103,
      ECONNREFUSED: 111,
      ECONNRESET: 104,
      EDEADLK: 35,
      EDESTADDRREQ: 89,
      EDOM: 33,
      EDQUOT: 122,
      EEXIST: 17,
      EFAULT: 14,
      EFBIG: 27,
      EHOSTUNREACH: 113,
      EIDRM: 43,
      EILSEQ: 84,
      EINPROGRESS: 115,
      EINTR: 4,
      EINVAL: 22,
      EIO: 5,
      EISCONN: 106,
      EISDIR: 21,
      ELOOP: 40,
      EMFILE: 24,
      EMLINK: 31,
      EMSGSIZE: 90,
      EMULTIHOP: 72,
      ENAMETOOLONG: 36,
      ENETDOWN: 100,
      ENETRESET: 102,
      ENETUNREACH: 101,
      ENFILE: 23,
      ENOBUFS: 105,
      ENODATA: 61,
      ENODEV: 19,
      ENOENT: 2,
      ENOEXEC: 8,
      ENOLCK: 37,
      ENOLINK: 67,
      ENOMEM: 12,
      ENOMSG: 42,
      ENOPROTOOPT: 92,
      ENOSPC: 28,
      ENOSR: 63,
      ENOSTR: 60,
      ENOSYS: 38,
      ENOTCONN: 107,
      ENOTDIR: 20,
      ENOTEMPTY: 39,
      ENOTSOCK: 88,
      ENOTSUP: 95,
      ENOTTY: 25,
      ENXIO: 6,
      EOPNOTSUPP: 95,
      EOVERFLOW: 75,
      EPERM: 1,
      EPIPE: 32,
      EPROTO: 71,
      EPROTONOSUPPORT: 93,
      EPROTOTYPE: 91,
      ERANGE: 34,
      EROFS: 30,
      ESPIPE: 29,
      ESRCH: 3,
      ESTALE: 116,
      ETIME: 62,
      ETIMEDOUT: 110,
      ETXTBSY: 26,
      EWOULDBLOCK: 11,
      EXDEV: 18
    };
    signals = {
      SIGHUP: 1,
      SIGINT: 2,
      SIGQUIT: 3,
      SIGILL: 4,
      SIGTRAP: 5,
      SIGABRT: 6,
      SIGIOT: 6,
      SIGBUS: 7,
      SIGFPE: 8,
      SIGKILL: 9,
      SIGUSR1: 10,
      SIGSEGV: 11,
      SIGUSR2: 12,
      SIGPIPE: 13,
      SIGALRM: 14,
      SIGTERM: 15,
      SIGCHLD: 17,
      SIGSTKFLT: 16,
      SIGCONT: 18,
      SIGSTOP: 19,
      SIGTSTP: 20,
      SIGTTIN: 21,
      SIGTTOU: 22,
      SIGURG: 23,
      SIGXCPU: 24,
      SIGXFSZ: 25,
      SIGVTALRM: 26,
      SIGPROF: 27,
      SIGWINCH: 28,
      SIGIO: 29,
      SIGPOLL: 29,
      SIGPWR: 30,
      SIGSYS: 31
    };
    priority = {
      PRIORITY_LOW: 19,
      PRIORITY_BELOW_NORMAL: 10,
      PRIORITY_NORMAL: 0,
      PRIORITY_ABOVE_NORMAL: -7,
      PRIORITY_HIGH: -14,
      PRIORITY_HIGHEST: -20
    };
  }
});

// node-built-in-modules:unenv/node/os
var os_exports = {};
__export(os_exports, {
  EOL: () => EOL,
  arch: () => arch2,
  availableParallelism: () => availableParallelism,
  constants: () => constants3,
  cpus: () => cpus,
  default: () => os_default,
  devNull: () => devNull,
  endianness: () => endianness,
  freemem: () => freemem,
  getPriority: () => getPriority,
  homedir: () => homedir,
  hostname: () => hostname,
  loadavg: () => loadavg,
  machine: () => machine,
  networkInterfaces: () => networkInterfaces,
  platform: () => platform2,
  release: () => release2,
  setPriority: () => setPriority,
  tmpdir: () => tmpdir,
  totalmem: () => totalmem,
  type: () => type,
  uptime: () => uptime2,
  userInfo: () => userInfo,
  version: () => version2
});
var constants3, NUM_CPUS, availableParallelism, arch2, machine, endianness, cpus, getPriority, setPriority, homedir, tmpdir, devNull, freemem, totalmem, loadavg, uptime2, hostname, networkInterfaces, platform2, type, release2, version2, userInfo, EOL, os_default;
var init_os = __esm({
  "node-built-in-modules:unenv/node/os"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    init_utils();
    init_constants();
    constants3 = {
      UV_UDP_REUSEADDR,
      dlopen: dlopen2,
      errno,
      signals,
      priority
    };
    NUM_CPUS = 8;
    availableParallelism = /* @__PURE__ */ __name(() => NUM_CPUS, "availableParallelism");
    arch2 = /* @__PURE__ */ __name(() => "", "arch");
    machine = /* @__PURE__ */ __name(() => "", "machine");
    endianness = /* @__PURE__ */ __name(() => "LE", "endianness");
    cpus = /* @__PURE__ */ __name(() => {
      const info = {
        model: "",
        speed: 0,
        times: {
          user: 0,
          nice: 0,
          sys: 0,
          idle: 0,
          irq: 0
        }
      };
      return Array.from({ length: NUM_CPUS }, () => info);
    }, "cpus");
    getPriority = /* @__PURE__ */ __name(() => 0, "getPriority");
    setPriority = /* @__PURE__ */ notImplemented("os.setPriority");
    homedir = /* @__PURE__ */ __name(() => "/", "homedir");
    tmpdir = /* @__PURE__ */ __name(() => "/tmp", "tmpdir");
    devNull = "/dev/null";
    freemem = /* @__PURE__ */ __name(() => 0, "freemem");
    totalmem = /* @__PURE__ */ __name(() => 0, "totalmem");
    loadavg = /* @__PURE__ */ __name(() => [
      0,
      0,
      0
    ], "loadavg");
    uptime2 = /* @__PURE__ */ __name(() => 0, "uptime");
    hostname = /* @__PURE__ */ __name(() => "", "hostname");
    networkInterfaces = /* @__PURE__ */ __name(() => {
      return { lo0: [
        {
          address: "127.0.0.1",
          netmask: "255.0.0.0",
          family: "IPv4",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "127.0.0.1/8"
        },
        {
          address: "::1",
          netmask: "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
          family: "IPv6",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "::1/128",
          scopeid: 0
        },
        {
          address: "fe80::1",
          netmask: "ffff:ffff:ffff:ffff::",
          family: "IPv6",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "fe80::1/64",
          scopeid: 1
        }
      ] };
    }, "networkInterfaces");
    platform2 = /* @__PURE__ */ __name(() => "linux", "platform");
    type = /* @__PURE__ */ __name(() => "Linux", "type");
    release2 = /* @__PURE__ */ __name(() => "", "release");
    version2 = /* @__PURE__ */ __name(() => "", "version");
    userInfo = /* @__PURE__ */ __name((opts) => {
      const encode = /* @__PURE__ */ __name((str) => {
        if (opts?.encoding) {
          const buff = Buffer.from(str);
          return opts.encoding === "buffer" ? buff : buff.toString(opts.encoding);
        }
        return str;
      }, "encode");
      return {
        gid: 1e3,
        uid: 1e3,
        homedir: encode("/"),
        shell: encode("/bin/sh"),
        username: encode("root")
      };
    }, "userInfo");
    EOL = "\n";
    os_default = {
      arch: arch2,
      availableParallelism,
      constants: constants3,
      cpus,
      EOL,
      endianness,
      devNull,
      freemem,
      getPriority,
      homedir,
      hostname,
      loadavg,
      machine,
      networkInterfaces,
      platform: platform2,
      release: release2,
      setPriority,
      tmpdir,
      totalmem,
      type,
      uptime: uptime2,
      userInfo,
      version: version2
    };
  }
});

// internal-env-dev:crypto
var crypto_exports = {};
__export(crypto_exports, {
  Cipher: () => Cipher,
  Decipher: () => Decipher,
  DiffieHellman: () => DiffieHellman,
  DiffieHellmanGroup: () => DiffieHellmanGroup,
  Hash: () => Hash,
  Hmac: () => Hmac,
  Sign: () => Sign,
  Verify: () => Verify,
  constants: () => constants4,
  createCipheriv: () => createCipheriv,
  createDecipheriv: () => createDecipheriv,
  createDiffieHellman: () => createDiffieHellman,
  createDiffieHellmanGroup: () => createDiffieHellmanGroup,
  createECDH: () => createECDH,
  createHash: () => createHash,
  createHmac: () => createHmac,
  createSign: () => createSign,
  createVerify: () => createVerify,
  default: () => crypto_default,
  generateKeyPair: () => generateKeyPair,
  getCiphers: () => getCiphers,
  getDiffieHellman: () => getDiffieHellman,
  getHashes: () => getHashes,
  getRandomValues: () => getRandomValues,
  pbkdf2: () => pbkdf2,
  pbkdf2Sync: () => pbkdf2Sync,
  privateDecrypt: () => privateDecrypt,
  privateEncrypt: () => privateEncrypt,
  pseudoRandomBytes: () => pseudoRandomBytes,
  publicDecrypt: () => publicDecrypt,
  publicEncrypt: () => publicEncrypt,
  randomBytes: () => randomBytes,
  randomFill: () => randomFill,
  randomFillSync: () => randomFillSync,
  randomUUID: () => randomUUID
});
var Cipher, Decipher, DiffieHellman, DiffieHellmanGroup, Hash, Hmac, Sign, Verify, constants4, createCipheriv, createDecipheriv, createDiffieHellman, createDiffieHellmanGroup, createECDH, createHash, createHmac, createSign, createVerify, getCiphers, getDiffieHellman, getHashes, pbkdf2, pbkdf2Sync, privateDecrypt, privateEncrypt, pseudoRandomBytes, publicDecrypt, publicEncrypt, randomBytes, randomFill, randomFillSync, getRandomValues, randomUUID, generateKeyPair, crypto_default;
var init_crypto = __esm({
  "internal-env-dev:crypto"() {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    ({ Cipher } = CRYPTO_CONTEXT.cryptoContext);
    ({ Decipher } = CRYPTO_CONTEXT.cryptoContext);
    ({ DiffieHellman } = CRYPTO_CONTEXT.cryptoContext);
    ({ DiffieHellmanGroup } = CRYPTO_CONTEXT.cryptoContext);
    ({ Hash } = CRYPTO_CONTEXT.cryptoContext);
    ({ Hmac } = CRYPTO_CONTEXT.cryptoContext);
    ({ Sign } = CRYPTO_CONTEXT.cryptoContext);
    ({ Verify } = CRYPTO_CONTEXT.cryptoContext);
    ({ constants: constants4 } = CRYPTO_CONTEXT.cryptoContext);
    ({ createCipheriv } = CRYPTO_CONTEXT.cryptoContext);
    ({ createDecipheriv } = CRYPTO_CONTEXT.cryptoContext);
    ({ createDiffieHellman } = CRYPTO_CONTEXT.cryptoContext);
    ({ createDiffieHellmanGroup } = CRYPTO_CONTEXT.cryptoContext);
    ({ createECDH } = CRYPTO_CONTEXT.cryptoContext);
    ({ createHash } = CRYPTO_CONTEXT.cryptoContext);
    ({ createHmac } = CRYPTO_CONTEXT.cryptoContext);
    ({ createSign } = CRYPTO_CONTEXT.cryptoContext);
    ({ createVerify } = CRYPTO_CONTEXT.cryptoContext);
    ({ getCiphers } = CRYPTO_CONTEXT.cryptoContext);
    ({ getDiffieHellman } = CRYPTO_CONTEXT.cryptoContext);
    ({ getHashes } = CRYPTO_CONTEXT.cryptoContext);
    ({ pbkdf2 } = CRYPTO_CONTEXT.cryptoContext);
    ({ pbkdf2Sync } = CRYPTO_CONTEXT.cryptoContext);
    ({ privateDecrypt } = CRYPTO_CONTEXT.cryptoContext);
    ({ privateEncrypt } = CRYPTO_CONTEXT.cryptoContext);
    ({ pseudoRandomBytes } = CRYPTO_CONTEXT.cryptoContext);
    ({ publicDecrypt } = CRYPTO_CONTEXT.cryptoContext);
    ({ publicEncrypt } = CRYPTO_CONTEXT.cryptoContext);
    ({ randomBytes } = CRYPTO_CONTEXT.cryptoContext);
    ({ randomFill } = CRYPTO_CONTEXT.cryptoContext);
    ({ randomFillSync } = CRYPTO_CONTEXT.cryptoContext);
    ({ getRandomValues } = CRYPTO_CONTEXT.cryptoContext);
    ({ randomUUID } = CRYPTO_CONTEXT.cryptoContext);
    ({ generateKeyPair } = CRYPTO_CONTEXT.cryptoContext);
    crypto_default = {
      Cipher,
      Decipher,
      DiffieHellman,
      DiffieHellmanGroup,
      Hash,
      Hmac,
      Sign,
      Verify,
      constants: constants4,
      createCipheriv,
      createDecipheriv,
      createDiffieHellman,
      createDiffieHellmanGroup,
      createECDH,
      createHash,
      createHmac,
      createSign,
      createVerify,
      getCiphers,
      getDiffieHellman,
      getHashes,
      pbkdf2,
      pbkdf2Sync,
      privateDecrypt,
      privateEncrypt,
      pseudoRandomBytes,
      publicDecrypt,
      publicEncrypt,
      randomBytes,
      randomFill,
      randomFillSync,
      getRandomValues,
      randomUUID,
      generateKeyPair
    };
  }
});

// ../../node_modules/.pnpm/dotenv@17.2.3/node_modules/dotenv/package.json
var require_package = __commonJS({
  "../../node_modules/.pnpm/dotenv@17.2.3/node_modules/dotenv/package.json"(exports, module) {
    module.exports = {
      name: "dotenv",
      version: "17.2.3",
      description: "Loads environment variables from .env file",
      main: "lib/main.js",
      types: "lib/main.d.ts",
      exports: {
        ".": {
          types: "./lib/main.d.ts",
          require: "./lib/main.js",
          default: "./lib/main.js"
        },
        "./config": "./config.js",
        "./config.js": "./config.js",
        "./lib/env-options": "./lib/env-options.js",
        "./lib/env-options.js": "./lib/env-options.js",
        "./lib/cli-options": "./lib/cli-options.js",
        "./lib/cli-options.js": "./lib/cli-options.js",
        "./package.json": "./package.json"
      },
      scripts: {
        "dts-check": "tsc --project tests/types/tsconfig.json",
        lint: "standard",
        pretest: "npm run lint && npm run dts-check",
        test: "tap run tests/**/*.js --allow-empty-coverage --disable-coverage --timeout=60000",
        "test:coverage": "tap run tests/**/*.js --show-full-coverage --timeout=60000 --coverage-report=text --coverage-report=lcov",
        prerelease: "npm test",
        release: "standard-version"
      },
      repository: {
        type: "git",
        url: "git://github.com/motdotla/dotenv.git"
      },
      homepage: "https://github.com/motdotla/dotenv#readme",
      funding: "https://dotenvx.com",
      keywords: [
        "dotenv",
        "env",
        ".env",
        "environment",
        "variables",
        "config",
        "settings"
      ],
      readmeFilename: "README.md",
      license: "BSD-2-Clause",
      devDependencies: {
        "@types/node": "^18.11.3",
        decache: "^4.6.2",
        sinon: "^14.0.1",
        standard: "^17.0.0",
        "standard-version": "^9.5.0",
        tap: "^19.2.0",
        typescript: "^4.8.4"
      },
      engines: {
        node: ">=12"
      },
      browser: {
        fs: false
      }
    };
  }
});

// ../../node_modules/.pnpm/dotenv@17.2.3/node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "../../node_modules/.pnpm/dotenv@17.2.3/node_modules/dotenv/lib/main.js"(exports, module) {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    var fs = (init_fs(), __toCommonJS(fs_exports));
    var path = (init_path(), __toCommonJS(path_exports));
    var os = (init_os(), __toCommonJS(os_exports));
    var crypto = (init_crypto(), __toCommonJS(crypto_exports));
    var packageJson = require_package();
    var version3 = packageJson.version;
    var TIPS = [
      "\u{1F510} encrypt with Dotenvx: https://dotenvx.com",
      "\u{1F510} prevent committing .env to code: https://dotenvx.com/precommit",
      "\u{1F510} prevent building .env in docker: https://dotenvx.com/prebuild",
      "\u{1F4E1} add observability to secrets: https://dotenvx.com/ops",
      "\u{1F465} sync secrets across teammates & machines: https://dotenvx.com/ops",
      "\u{1F5C2}\uFE0F backup and recover secrets: https://dotenvx.com/ops",
      "\u2705 audit secrets and track compliance: https://dotenvx.com/ops",
      "\u{1F504} add secrets lifecycle management: https://dotenvx.com/ops",
      "\u{1F511} add access controls to secrets: https://dotenvx.com/ops",
      "\u{1F6E0}\uFE0F  run anywhere with `dotenvx run -- yourcommand`",
      "\u2699\uFE0F  specify custom .env file path with { path: '/custom/path/.env' }",
      "\u2699\uFE0F  enable debug logging with { debug: true }",
      "\u2699\uFE0F  override existing env vars with { override: true }",
      "\u2699\uFE0F  suppress all logs with { quiet: true }",
      "\u2699\uFE0F  write to custom object with { processEnv: myObject }",
      "\u2699\uFE0F  load multiple .env files with { path: ['.env.local', '.env'] }"
    ];
    function _getRandomTip() {
      return TIPS[Math.floor(Math.random() * TIPS.length)];
    }
    __name(_getRandomTip, "_getRandomTip");
    function parseBoolean(value) {
      if (typeof value === "string") {
        return !["false", "0", "no", "off", ""].includes(value.toLowerCase());
      }
      return Boolean(value);
    }
    __name(parseBoolean, "parseBoolean");
    function supportsAnsi() {
      return process.stdout.isTTY;
    }
    __name(supportsAnsi, "supportsAnsi");
    function dim(text) {
      return supportsAnsi() ? `\x1B[2m${text}\x1B[0m` : text;
    }
    __name(dim, "dim");
    var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function parse2(src) {
      const obj = {};
      let lines = src.toString();
      lines = lines.replace(/\r\n?/mg, "\n");
      let match2;
      while ((match2 = LINE.exec(lines)) != null) {
        const key = match2[1];
        let value = match2[2] || "";
        value = value.trim();
        const maybeQuote = value[0];
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        if (maybeQuote === '"') {
          value = value.replace(/\\n/g, "\n");
          value = value.replace(/\\r/g, "\r");
        }
        obj[key] = value;
      }
      return obj;
    }
    __name(parse2, "parse");
    function _parseVault(options) {
      options = options || {};
      const vaultPath = _vaultPath(options);
      options.path = vaultPath;
      const result = DotenvModule.configDotenv(options);
      if (!result.parsed) {
        const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
        err.code = "MISSING_DATA";
        throw err;
      }
      const keys = _dotenvKey(options).split(",");
      const length = keys.length;
      let decrypted;
      for (let i = 0; i < length; i++) {
        try {
          const key = keys[i].trim();
          const attrs = _instructions(result, key);
          decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
          break;
        } catch (error) {
          if (i + 1 >= length) {
            throw error;
          }
        }
      }
      return DotenvModule.parse(decrypted);
    }
    __name(_parseVault, "_parseVault");
    function _warn(message) {
      console.error(`[dotenv@${version3}][WARN] ${message}`);
    }
    __name(_warn, "_warn");
    function _debug(message) {
      console.log(`[dotenv@${version3}][DEBUG] ${message}`);
    }
    __name(_debug, "_debug");
    function _log(message) {
      console.log(`[dotenv@${version3}] ${message}`);
    }
    __name(_log, "_log");
    function _dotenvKey(options) {
      if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
        return options.DOTENV_KEY;
      }
      if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
        return process.env.DOTENV_KEY;
      }
      return "";
    }
    __name(_dotenvKey, "_dotenvKey");
    function _instructions(result, dotenvKey) {
      let uri;
      try {
        uri = new URL(dotenvKey);
      } catch (error) {
        if (error.code === "ERR_INVALID_URL") {
          const err = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
          err.code = "INVALID_DOTENV_KEY";
          throw err;
        }
        throw error;
      }
      const key = uri.password;
      if (!key) {
        const err = new Error("INVALID_DOTENV_KEY: Missing key part");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      }
      const environment = uri.searchParams.get("environment");
      if (!environment) {
        const err = new Error("INVALID_DOTENV_KEY: Missing environment part");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      }
      const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
      const ciphertext = result.parsed[environmentKey];
      if (!ciphertext) {
        const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
        err.code = "NOT_FOUND_DOTENV_ENVIRONMENT";
        throw err;
      }
      return { ciphertext, key };
    }
    __name(_instructions, "_instructions");
    function _vaultPath(options) {
      let possibleVaultPath = null;
      if (options && options.path && options.path.length > 0) {
        if (Array.isArray(options.path)) {
          for (const filepath of options.path) {
            if (fs.existsSync(filepath)) {
              possibleVaultPath = filepath.endsWith(".vault") ? filepath : `${filepath}.vault`;
            }
          }
        } else {
          possibleVaultPath = options.path.endsWith(".vault") ? options.path : `${options.path}.vault`;
        }
      } else {
        possibleVaultPath = path.resolve(process.cwd(), ".env.vault");
      }
      if (fs.existsSync(possibleVaultPath)) {
        return possibleVaultPath;
      }
      return null;
    }
    __name(_vaultPath, "_vaultPath");
    function _resolveHome(envPath) {
      return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
    }
    __name(_resolveHome, "_resolveHome");
    function _configVault(options) {
      const debug = parseBoolean(process.env.DOTENV_CONFIG_DEBUG || options && options.debug);
      const quiet = parseBoolean(process.env.DOTENV_CONFIG_QUIET || options && options.quiet);
      if (debug || !quiet) {
        _log("Loading env from encrypted .env.vault");
      }
      const parsed = DotenvModule._parseVault(options);
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      DotenvModule.populate(processEnv, parsed, options);
      return { parsed };
    }
    __name(_configVault, "_configVault");
    function configDotenv(options) {
      const dotenvPath = path.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      let debug = parseBoolean(processEnv.DOTENV_CONFIG_DEBUG || options && options.debug);
      let quiet = parseBoolean(processEnv.DOTENV_CONFIG_QUIET || options && options.quiet);
      if (options && options.encoding) {
        encoding = options.encoding;
      } else {
        if (debug) {
          _debug("No encoding is specified. UTF-8 is used by default");
        }
      }
      let optionPaths = [dotenvPath];
      if (options && options.path) {
        if (!Array.isArray(options.path)) {
          optionPaths = [_resolveHome(options.path)];
        } else {
          optionPaths = [];
          for (const filepath of options.path) {
            optionPaths.push(_resolveHome(filepath));
          }
        }
      }
      let lastError;
      const parsedAll = {};
      for (const path2 of optionPaths) {
        try {
          const parsed = DotenvModule.parse(fs.readFileSync(path2, { encoding }));
          DotenvModule.populate(parsedAll, parsed, options);
        } catch (e) {
          if (debug) {
            _debug(`Failed to load ${path2} ${e.message}`);
          }
          lastError = e;
        }
      }
      const populated = DotenvModule.populate(processEnv, parsedAll, options);
      debug = parseBoolean(processEnv.DOTENV_CONFIG_DEBUG || debug);
      quiet = parseBoolean(processEnv.DOTENV_CONFIG_QUIET || quiet);
      if (debug || !quiet) {
        const keysCount = Object.keys(populated).length;
        const shortPaths = [];
        for (const filePath of optionPaths) {
          try {
            const relative2 = path.relative(process.cwd(), filePath);
            shortPaths.push(relative2);
          } catch (e) {
            if (debug) {
              _debug(`Failed to load ${filePath} ${e.message}`);
            }
            lastError = e;
          }
        }
        _log(`injecting env (${keysCount}) from ${shortPaths.join(",")} ${dim(`-- tip: ${_getRandomTip()}`)}`);
      }
      if (lastError) {
        return { parsed: parsedAll, error: lastError };
      } else {
        return { parsed: parsedAll };
      }
    }
    __name(configDotenv, "configDotenv");
    function config2(options) {
      if (_dotenvKey(options).length === 0) {
        return DotenvModule.configDotenv(options);
      }
      const vaultPath = _vaultPath(options);
      if (!vaultPath) {
        _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);
        return DotenvModule.configDotenv(options);
      }
      return DotenvModule._configVault(options);
    }
    __name(config2, "config");
    function decrypt(encrypted, keyStr) {
      const key = Buffer.from(keyStr.slice(-64), "hex");
      let ciphertext = Buffer.from(encrypted, "base64");
      const nonce = ciphertext.subarray(0, 12);
      const authTag = ciphertext.subarray(-16);
      ciphertext = ciphertext.subarray(12, -16);
      try {
        const aesgcm = crypto.createDecipheriv("aes-256-gcm", key, nonce);
        aesgcm.setAuthTag(authTag);
        return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
      } catch (error) {
        const isRange = error instanceof RangeError;
        const invalidKeyLength = error.message === "Invalid key length";
        const decryptionFailed = error.message === "Unsupported state or unable to authenticate data";
        if (isRange || invalidKeyLength) {
          const err = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
          err.code = "INVALID_DOTENV_KEY";
          throw err;
        } else if (decryptionFailed) {
          const err = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
          err.code = "DECRYPTION_FAILED";
          throw err;
        } else {
          throw error;
        }
      }
    }
    __name(decrypt, "decrypt");
    function populate(processEnv, parsed, options = {}) {
      const debug = Boolean(options && options.debug);
      const override = Boolean(options && options.override);
      const populated = {};
      if (typeof parsed !== "object") {
        const err = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
        err.code = "OBJECT_REQUIRED";
        throw err;
      }
      for (const key of Object.keys(parsed)) {
        if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
          if (override === true) {
            processEnv[key] = parsed[key];
            populated[key] = parsed[key];
          }
          if (debug) {
            if (override === true) {
              _debug(`"${key}" is already defined and WAS overwritten`);
            } else {
              _debug(`"${key}" is already defined and was NOT overwritten`);
            }
          }
        } else {
          processEnv[key] = parsed[key];
          populated[key] = parsed[key];
        }
      }
      return populated;
    }
    __name(populate, "populate");
    var DotenvModule = {
      configDotenv,
      _configVault,
      _parseVault,
      config: config2,
      decrypt,
      parse: parse2,
      populate
    };
    module.exports.configDotenv = DotenvModule.configDotenv;
    module.exports._configVault = DotenvModule._configVault;
    module.exports._parseVault = DotenvModule._parseVault;
    module.exports.config = DotenvModule.config;
    module.exports.decrypt = DotenvModule.decrypt;
    module.exports.parse = DotenvModule.parse;
    module.exports.populate = DotenvModule.populate;
    module.exports = DotenvModule;
  }
});

// ../../node_modules/.pnpm/dotenv@17.2.3/node_modules/dotenv/lib/env-options.js
var require_env_options = __commonJS({
  "../../node_modules/.pnpm/dotenv@17.2.3/node_modules/dotenv/lib/env-options.js"(exports, module) {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    var options = {};
    if (process.env.DOTENV_CONFIG_ENCODING != null) {
      options.encoding = process.env.DOTENV_CONFIG_ENCODING;
    }
    if (process.env.DOTENV_CONFIG_PATH != null) {
      options.path = process.env.DOTENV_CONFIG_PATH;
    }
    if (process.env.DOTENV_CONFIG_QUIET != null) {
      options.quiet = process.env.DOTENV_CONFIG_QUIET;
    }
    if (process.env.DOTENV_CONFIG_DEBUG != null) {
      options.debug = process.env.DOTENV_CONFIG_DEBUG;
    }
    if (process.env.DOTENV_CONFIG_OVERRIDE != null) {
      options.override = process.env.DOTENV_CONFIG_OVERRIDE;
    }
    if (process.env.DOTENV_CONFIG_DOTENV_KEY != null) {
      options.DOTENV_KEY = process.env.DOTENV_CONFIG_DOTENV_KEY;
    }
    module.exports = options;
  }
});

// ../../node_modules/.pnpm/dotenv@17.2.3/node_modules/dotenv/lib/cli-options.js
var require_cli_options = __commonJS({
  "../../node_modules/.pnpm/dotenv@17.2.3/node_modules/dotenv/lib/cli-options.js"(exports, module) {
    init_global_polyfill_process();
    init_global_polyfill_global();
    init_global_polyfill_Buffer();
    init_global_polyfill_clearImmediate();
    init_global_polyfill_setImmediate();
    init_global_polyfill_dirname();
    init_global_polyfill_filename();
    init_global_polyfill_performance();
    init_global_polyfill_setInterval();
    init_global_polyfill_clearInterval();
    init_global_polyfill_console();
    init_env_vars_polyfills();
    init_network_list_polyfills();
    init_storage_polyfills();
    var re = /^dotenv_config_(encoding|path|quiet|debug|override|DOTENV_KEY)=(.+)$/;
    module.exports = /* @__PURE__ */ __name(function optionMatcher(args) {
      const options = args.reduce(function(acc, cur) {
        const matches = cur.match(re);
        if (matches) {
          acc[matches[1]] = matches[2];
        }
        return acc;
      }, {});
      if (!("quiet" in options)) {
        options.quiet = "true";
      }
      return options;
    }, "optionMatcher");
  }
});

// src/azion-index-20251202.temp.ts
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/index.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/hono.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/hono-base.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/compose.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/context.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/request.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/http-exception.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/request/constants.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var GET_MATCH_RESULT = Symbol();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/utils/body.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/utils/url.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match2, index) => {
    const mark = `@${index}`;
    groups.push([mark, match2]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j2 = paths.length - 1; j2 >= 0; j2--) {
      if (paths[j2].includes(mark)) {
        paths[j2] = paths[j2].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match2 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match2) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match2[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match2[1], new RegExp(`^${match2[2]}(?=/${next})`)] : [label, match2[1], new RegExp(`^${match2[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match2[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match2) => {
      try {
        return decoder(match2);
      } catch {
        return match2;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v2, i, a) => a.indexOf(v2) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1) {
      return void 0;
    }
    if (!url.startsWith(key, keyIndex2 + 1)) {
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = class {
  static {
    __name(this, "HonoRequest");
  }
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = /* @__PURE__ */ __name((key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  }, "#cachedBody");
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/utils/html.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = /* @__PURE__ */ __name((contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
}, "setDefaultContentType");
var Context = class {
  static {
    __name(this, "Context");
  }
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    return this.#res ||= new Response(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  set res(_res) {
    if (this.#res && _res) {
      _res = new Response(_res.body, _res);
      for (const [k, v2] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v2);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = /* @__PURE__ */ __name((...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  }, "render");
  setLayout = /* @__PURE__ */ __name((layout) => this.#layout = layout, "setLayout");
  getLayout = /* @__PURE__ */ __name(() => this.#layout, "getLayout");
  setRenderer = /* @__PURE__ */ __name((renderer) => {
    this.#renderer = renderer;
  }, "setRenderer");
  header = /* @__PURE__ */ __name((name, value, options) => {
    if (this.finalized) {
      this.#res = new Response(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  }, "header");
  status = /* @__PURE__ */ __name((status) => {
    this.#status = status;
  }, "status");
  set = /* @__PURE__ */ __name((key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  }, "set");
  get = /* @__PURE__ */ __name((key) => {
    return this.#var ? this.#var.get(key) : void 0;
  }, "get");
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k, v2] of Object.entries(headers)) {
        if (typeof v2 === "string") {
          responseHeaders.set(k, v2);
        } else {
          responseHeaders.delete(k);
          for (const v22 of v2) {
            responseHeaders.append(k, v22);
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return new Response(data, { status, headers: responseHeaders });
  }
  newResponse = /* @__PURE__ */ __name((...args) => this.#newResponse(...args), "newResponse");
  body = /* @__PURE__ */ __name((data, arg, headers) => this.#newResponse(data, arg, headers), "body");
  text = /* @__PURE__ */ __name((text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
      text,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  }, "text");
  json = /* @__PURE__ */ __name((object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  }, "json");
  html = /* @__PURE__ */ __name((html, arg, headers) => {
    const res = /* @__PURE__ */ __name((html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers)), "res");
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  }, "html");
  redirect = /* @__PURE__ */ __name((location, status) => {
    const locationString = String(location);
    this.header(
      "Location",
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status ?? 302);
  }, "redirect");
  notFound = /* @__PURE__ */ __name(() => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  }, "notFound");
};

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
  static {
    __name(this, "UnsupportedPathError");
  }
};

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/utils/constants.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = class {
  static {
    __name(this, "Hono");
  }
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p2 of [path].flat()) {
        this.#path = p2;
        for (const m2 of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m2.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = /* @__PURE__ */ __name((handler) => {
    this.errorHandler = handler;
    return this;
  }, "onError");
  notFound = /* @__PURE__ */ __name((handler) => {
    this.#notFoundHandler = handler;
    return this;
  }, "notFound");
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { basePath: this._basePath, path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env3, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env3, "GET")))();
    }
    const path = this.getPath(request, { env: env3 });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env: env3,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = /* @__PURE__ */ __name((request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  }, "fetch");
  request = /* @__PURE__ */ __name((input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  }, "request");
  fire = /* @__PURE__ */ __name(() => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  }, "fire");
};

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/reg-exp-router/index.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/reg-exp-router/router.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/reg-exp-router/matcher.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match2 = /* @__PURE__ */ __name((method2, path2) => {
    const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
    const staticMatch = matcher[2][path2];
    if (staticMatch) {
      return staticMatch;
    }
    const match3 = path2.match(matcher[0]);
    if (!match3) {
      return [[], emptyParam];
    }
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  }, "match2");
  this.match = match2;
  return match2(method, path);
}
__name(match, "match");

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/reg-exp-router/node.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = class {
  static {
    __name(this, "Node");
  }
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        if (regexpStr === ".*") {
          throw PATH_ERROR;
        }
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/reg-exp-router/trie.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var Trie = class {
  static {
    __name(this, "Trie");
  }
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m2) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m2];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j2 = tokens.length - 1; j2 >= 0; j2--) {
        if (tokens[j2].indexOf(mark) !== -1) {
          tokens[j2] = tokens[j2].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/reg-exp-router/router.js
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j2 = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h2]) => [h2, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j2++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j2, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j2] = handlers.map(([h2, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h2, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j2 = 0, len2 = handlerData[i].length; j2 < len2; j2++) {
      const map = handlerData[i][j2]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = class {
  static {
    __name(this, "RegExpRouter");
  }
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p2) => {
          handlerMap[method][p2] = [...handlerMap[METHOD_NAME_ALL][p2]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m2) => {
          middleware[m2][path] ||= findMiddleware(middleware[m2], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(middleware[m2]).forEach((p2) => {
            re.test(p2) && middleware[m2][p2].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(routes[m2]).forEach(
            (p2) => re.test(p2) && routes[m2][p2].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          routes[m2][path2] ||= [
            ...findMiddleware(middleware[m2], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m2][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    clearWildcardRegExpCache();
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/reg-exp-router/prepared-router.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/smart-router/index.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/smart-router/router.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var SmartRouter = class {
  static {
    __name(this, "SmartRouter");
  }
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/trie-router/index.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/trie-router/router.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/trie-router/node.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = class {
  static {
    __name(this, "Node");
  }
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m2 = /* @__PURE__ */ Object.create(null);
      m2[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m2];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p2 = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p2, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p2;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler,
        possibleKeys: possibleKeys.filter((v2, i, a) => a.indexOf(v2) === i),
        score: this.#order
      }
    });
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m2 = node.#methods[i];
      const handlerSet = m2[method] || m2[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j2 = 0, len2 = curNodes.length; j2 < len2; j2++) {
        const node = curNodes[j2];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(nextNode.#children["*"], method, node.#params)
              );
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          const [key, name, matcher] = pattern;
          if (!part && !(matcher instanceof RegExp)) {
            continue;
          }
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m2 = matcher.exec(restPathString);
            if (m2) {
              params[name] = m2[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m2[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  static {
    __name(this, "TrieRouter");
  }
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  static {
    __name(this, "Hono");
  }
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/middleware/cors/index.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var cors = /* @__PURE__ */ __name((options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  const findAllowMethods = ((optsAllowMethods) => {
    if (typeof optsAllowMethods === "function") {
      return optsAllowMethods;
    } else if (Array.isArray(optsAllowMethods)) {
      return () => optsAllowMethods;
    } else {
      return () => [];
    }
  })(opts.allowMethods);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = await findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.origin !== "*") {
        set("Vary", "Origin");
      }
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      const allowMethods = await findAllowMethods(c.req.header("origin") || "", c);
      if (allowMethods.length) {
        set("Access-Control-Allow-Methods", allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
    if (opts.origin !== "*") {
      c.header("Vary", "Origin", { append: true });
    }
  }, "cors2");
}, "cors");

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/adapter/service-worker/index.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/adapter/service-worker/handler.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var handle = /* @__PURE__ */ __name((app2, opts = {
  fetch: globalThis.fetch.bind(globalThis)
}) => {
  return (evt) => {
    evt.respondWith(
      (async () => {
        const res = await app2.fetch(evt.request, {}, evt);
        if (opts.fetch && res.status === 404) {
          return await opts.fetch(evt.request);
        }
        return res;
      })()
    );
  };
}, "handle");

// ../../node_modules/.pnpm/hono@4.10.7/node_modules/hono/dist/adapter/service-worker/index.js
var fire = /* @__PURE__ */ __name((app2, options = {
  fetch: void 0
}) => {
  addEventListener("fetch", handle(app2, options));
}, "fire");

// src/services/rag.ts
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../libs/ai/main.ts
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();

// ../../node_modules/.pnpm/dotenv@17.2.3/node_modules/dotenv/config.js
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
(function() {
  require_main().config(
    Object.assign(
      {},
      require_env_options(),
      require_cli_options()(process.argv)
    )
  );
})();

// ../../libs/ai/main.ts
var ai = /* @__PURE__ */ __name(async (model, options, type2 = "chat", forceFetch = false) => {
  const AI_INFERENCE_BASE_URL = process.env.AI_INFERENCE_BASE_URL;
  const IS_PROD = true;
  const body = {
    model,
    ...options
  };
  const url = {
    embedding: `${AI_INFERENCE_BASE_URL}/v1/embeddings`,
    chat: `${AI_INFERENCE_BASE_URL}/v1/chat/completions`,
    rerank: `${AI_INFERENCE_BASE_URL}/v1/rerank`
  };
  console.log("[AI] Using Fetch");
  const response = await fetch(url[type2], {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return response.json();
}, "ai");
var embedding = /* @__PURE__ */ __name(async (text, dimension = 1536, forceFetch = false) => {
  console.log("[AI] Embedding");
  const model = "Qwen/Qwen3-Embedding-4B";
  const options = {
    input: text,
    encoding_format: "float",
    dimension
  };
  return ai(model, options, "embedding", forceFetch);
}, "embedding");
var chat = /* @__PURE__ */ __name(async (messages, forceFetch = false) => {
  console.log("[AI] Chat");
  const model = "casperhansen-mistral-small-24b-instruct-2501-awq";
  const options = {
    messages
  };
  console.log("[AI] Chat options: ", forceFetch);
  return ai(model, options, "chat", forceFetch);
}, "chat");
var rerank = /* @__PURE__ */ __name(async (query, documents, forceFetch = false) => {
  console.log("[AI] Rerank");
  const model = "baai-bge-reranker-v2-m3";
  const options = {
    query,
    documents
  };
  return ai(model, options, "rerank", forceFetch);
}, "rerank");

// ../../node_modules/.pnpm/azion@2.2.3_@babel+core@7.28.5_@fastly+js-compute@3.36.0_typescript@5.9.3__@swc+core@1.15.3/node_modules/azion/packages/sql/dist/index.mjs
init_global_polyfill_process();
init_global_polyfill_global();
init_global_polyfill_Buffer();
init_global_polyfill_clearImmediate();
init_global_polyfill_setImmediate();
init_global_polyfill_dirname();
init_global_polyfill_filename();
init_global_polyfill_performance();
init_global_polyfill_setInterval();
init_global_polyfill_clearInterval();
init_global_polyfill_console();
init_env_vars_polyfills();
init_network_list_polyfills();
init_storage_polyfills();
var m = /* @__PURE__ */ __name((t, s) => t?.length > s ? t.slice(0, s) : t, "m");
async function d(t, s, r, o = true) {
  let e = await fetch(t, s);
  if (!e.ok) try {
    let a = await e.json();
    if (r && console.log("Error response body:", a), a.errors && Array.isArray(a.errors) && a.errors.length > 0 || a.detail || a.message) return a;
    let n = `HTTP error! Status: ${e.status} - ${e.statusText}`;
    throw r && console.log(`Error in fetch: ${n}`), new Error(n);
  } catch {
    let a = `HTTP error! Status: ${e.status} - ${e.statusText}`;
    throw r && console.log(`Error in fetch: ${a}`), new Error(a);
  }
  if (o) {
    let a = e.headers.get("content-type");
    if (!a || !a.includes("application/json")) {
      let u = `Expected JSON response, but got: ${await e.text()}`;
      throw r && console.log(`Error in fetch: ${u}`), new Error(u);
    }
    return await e.json();
  } else return await e.text();
}
__name(d, "d");
var f = /* @__PURE__ */ __name((t = "production") => ({ production: "https://api.azion.com/v4/workspace/sql/databases", development: "/v4/workspace/sql/databases", staging: "https://stage-api.azion.com/v4/workspace/sql/databases" })[t], "f");
var z = /* @__PURE__ */ __name((t, s = {}) => {
  let r = { Accept: "application/json", ...s };
  return t ? { ...r, Authorization: `Token ${t}` } : r;
}, "z");
var R = /* @__PURE__ */ __name((t, s, r) => {
  let o = { method: t, headers: s, credentials: "include" };
  return r && (o.body = r), o;
}, "R");
var h = /* @__PURE__ */ __name((t, s, r) => {
  let o = { message: "Error unknown", operation: r };
  if (s.errors && Array.isArray(s.errors) && s.errors.length > 0) {
    let e = s.errors[0];
    if (e.detail) return o = { message: e.detail, operation: r }, o;
    if (e.title) return o = { message: e.title, operation: r }, o;
  }
  return t.forEach((e) => {
    s[e] && (o = { message: Array.isArray(s[e]) ? s[e].join(", ") : s[e], operation: r });
  }), o;
}, "h");
var N = /* @__PURE__ */ __name(async (t, s, r, o, e = "production") => {
  try {
    let a = f(e), n = z(t, { "Content-Type": "application/json" }), i = R("POST", n, JSON.stringify({ statements: r })), u = await d(`${a}/${s}/query`, i, o);
    if (u.errors) return { error: h([], u, "post query") };
    let l = u.data;
    if (o) {
      let b = { ...u, data: u?.data?.map((c) => ({ ...c, results: { ...c.results, rows: m(c.results?.rows, 10) } })) };
      console.log("Response Query:", JSON.stringify(b));
    }
    return { state: u.state, data: l };
  } catch (a) {
    return o && console.error("Error querying EdgeDB:", a), { error: { message: a.toString(), operation: "post query" } };
  }
}, "N");
var A = /* @__PURE__ */ __name(async (t, s, r, o = "production") => {
  try {
    let e = f(o), a = new URL(e);
    s && Object.entries(s).forEach(([b, c]) => {
      c !== void 0 && a.searchParams.append(b, c.toString());
    });
    let n = z(t), i = R("GET", n), u = await d(a.toString(), i, r);
    if (u.errors) return { error: h([], u, "get databases") };
    let l = u.results;
    if (r) {
      let b = { ...u, results: m(u.results, 10) };
      console.log("Response Databases:", JSON.stringify(b));
    }
    return { count: u.count, results: l };
  } catch (e) {
    return r && console.error("Error getting all EdgeDBs:", e), { error: { message: e.message, operation: "get databases" } };
  }
}, "A");
var x = /* @__PURE__ */ __name(({ state: t, results: s }) => {
  let r = [];
  if (s instanceof Array) {
    if (s.length === 0) return { results: [] };
    let o = null;
    r = s?.map((e) => (e?.rows && (o = e.rows.map((a) => {
      let n = {};
      return e?.columns && e.columns.forEach((i, u) => {
        n[i] = a[u];
      }), n;
    })), { statement: e.statement, rows: o }));
  }
  return { state: t, results: r };
}, "x");
var w = /* @__PURE__ */ __name(() => globalThis.Azion?.Sql || null, "w");
var E2 = class {
  static {
    __name(this, "E");
  }
  database = null;
  constructor() {
    this.database = w()?.Database || null;
  }
  mapperQuery = /* @__PURE__ */ __name(async (s) => {
    let r = [];
    for (let o of s) {
      let e = o.result.columnCount();
      if (e === 0) continue;
      let a = [];
      for (let u = 0; u < e; u++) a.push(o.result.columnName(u));
      let n = await o.result.next(), i = [];
      for (; n; ) {
        let u = [];
        for (let l = 0; l < e; l++) u.push(n.getValue(l));
        i.push(u), n = await o.result.next();
      }
      r.push({ statement: o?.statement?.split(" ")[0], columns: a, rows: i });
    }
    return Promise.resolve(r);
  }, "mapperQuery");
  query = /* @__PURE__ */ __name(async (s, r, o) => {
    if (this.database?.open) {
      let e = await this.database?.open(s), a = r.map(async (n) => {
        let i = await e?.query(n);
        return { statement: n, result: i };
      });
      try {
        let n = await Promise.all(a);
        if (n.every((i) => i.result?.columnCount() > 0)) return n;
      } catch (n) {
        throw o?.debug && console.error("Error querying:", n?.message), n;
      }
    }
    return [];
  }, "query");
};
var T = /* @__PURE__ */ __name(async (t, s, r, o) => {
  let e = await A(t, { search: s, page_size: 1 }, o?.debug, o?.env);
  if (e?.error) return { error: e.error };
  let a = e?.results?.[0];
  if (!a?.name) return { error: { message: `Database ${s} not found`, operation: "apiQuery" } };
  let { state: n, data: i, error: u } = await N(t, a.id, r, o?.debug, o?.env);
  if (u) return { error: { message: u.message || "Error executing query", operation: "apiQuery" } };
  let l = i?.map((c, D) => ({ statement: r[D]?.split(" ")[0], columns: c?.results?.columns && c?.results?.columns.length > 0 ? c?.results?.columns : void 0, rows: c?.results?.rows && c?.results?.rows.length > 0 ? c?.results?.rows : void 0, error: c?.error || void 0 }));
  if (o?.debug && l) {
    let c = l.map((D) => ({ ...D, rows: m(D?.rows || [], 10) }));
    console.log("Response Query:", JSON.stringify({ state: n, results: c, toObject: /* @__PURE__ */ __name(() => null, "toObject") }));
  }
  let b = l && l.filter((c) => c?.error !== void 0);
  return { data: { state: n, results: l, toObject: /* @__PURE__ */ __name(() => x({ results: l, state: n, toObject: /* @__PURE__ */ __name(() => null, "toObject") }), "toObject") }, error: b && b.length > 0 ? { message: b.map((c) => c?.error || "Error executing query").join(", "), operation: "apiQuery" } : void 0 };
}, "T");
var C = /* @__PURE__ */ __name(async (t, s, r, o) => {
  try {
    let e = new E2(), a = await e.query(s, r, o), n = { state: "executed-runtime", results: [], toObject: /* @__PURE__ */ __name(() => null, "toObject") }, i = await e.mapperQuery(a);
    if (i && i.length > 0 && (n.state = "executed-runtime", n.results = i), o?.debug) {
      let u = { ...n, results: n.results.map((l) => ({ ...l, rows: m(l?.rows || [], 10) })) };
      console.log("Response Query:", JSON.stringify(u));
    }
    return { data: { ...n, toObject: /* @__PURE__ */ __name(() => x(n), "toObject") } };
  } catch (e) {
    return { error: { message: e?.message || "Error executing query", operation: "executing query" } };
  }
}, "C");
var v = /* @__PURE__ */ __name(() => typeof window < "u" && typeof window.document < "u", "v");
var J = !v() && process?.env.AZION_DEBUG === "true";
var p = /* @__PURE__ */ __name((t) => v() ? t ?? "" : t ?? process?.env.AZION_TOKEN ?? "", "p");
var j = /* @__PURE__ */ __name((t) => t ?? !!J, "j");
var B = /* @__PURE__ */ __name((t) => v() ? t ?? "production" : t ?? process?.env.AZION_ENV ?? "production", "B");
var g = /* @__PURE__ */ __name((t) => ({ ...t, debug: j(t?.debug), env: B(t?.env) }), "g");
var y = /* @__PURE__ */ __name(async (t, s, r, o) => {
  let e = g(o);
  if (!s || s === "") return { error: { message: "Database name is required", operation: "query database" } };
  if (e.debug && console.log(`Executing statements on database ${s}: ${r}`), !Array.isArray(r) || r.length === 0) return { error: { message: 'No statements to execute. Please provide at least one statement. e.g ["SELECT * FROM users"]', operation: "query database" } };
  if (!r.some((n) => ["SELECT", "PRAGMA"].some((i) => n.trim().toUpperCase().startsWith(i)))) throw new Error("Only read statements are allowed");
  return e.external || !w() ? T(t, s, r, e) : C(t, s, r, e);
}, "y");
var le = /* @__PURE__ */ __name((t, s, r) => y(p(), t, s, r), "le");

// src/services/rag.ts
var getDbConfig = /* @__PURE__ */ __name(() => {
  const dbName = process.env.SQL_DATABASE_NAME;
  const dbTable = process.env.SQL_DATABASE_TABLE;
  if (!dbName || !dbTable) {
    throw new Error("Missing SQL_DATABASE_NAME or SQL_DATABASE_TABLE env vars");
  }
  return { dbName, dbTable };
}, "getDbConfig");
var search = /* @__PURE__ */ __name(async (query, topK = 5, useRerank = true) => {
  console.log(`[RAG] Searching for: "${query}"`);
  const { dbName, dbTable } = getDbConfig();
  const embedded = await embedding(query, 1536, true);
  const vector = embedded?.data?.[0]?.embedding;
  if (!vector) {
    throw new Error("Failed to generate embedding");
  }
  const limit = useRerank ? topK * 3 : topK;
  const vectorStr = JSON.stringify(vector);
  const sql = `
      SELECT 
        id,
        filename,
        content,
        (1 - vector_distance_cos(embedding, vector('${vectorStr}'))) AS similarity
      FROM ${dbTable}
      ORDER BY similarity DESC
      LIMIT ${limit};
    `;
  const { data, error } = await le(dbName, [sql]);
  if (error) {
    console.error("[RAG] SQL Error:", error);
    throw new Error(`Database query failed: ${error.message}`);
  }
  const rows = data?.results?.[0]?.rows || data?.rows || [];
  let results = rows.map((row) => ({
    id: row[0],
    filename: row[1],
    content: row[2],
    similarity: row[3]
  }));
  if (useRerank && results.length > 0) {
    const documents = results.map((r) => r.content);
    const reranked = await rerank(query, documents, true);
    if (reranked?.results) {
      results = reranked.results.map((r) => {
        const original = results[r.index];
        return {
          ...original,
          rerank_score: r.relevance_score
        };
      });
    }
  } else {
    results = results.slice(0, topK);
  }
  return results;
}, "search");
var ask = /* @__PURE__ */ __name(async (question) => {
  console.log(`[RAG] Asking: "${question}"`);
  const contextResults = await search(question, 5, true);
  const relevantContext = contextResults.filter((r) => r.similarity > 0.2);
  const contextText = relevantContext.map((c) => c.content).join("\n---\n");
  const messages = [
    {
      role: "system",
      content: `
        You are a helpful assistant. Your job is finding answers in the context provided. 
        If the context is empty, you should say you do not know.
        Answer the user question based strictly on the provided context. If the answer is not in the context, say you do not know.
        Always answer in brazilian portuguese.
      `
    },
    {
      role: "user",
      content: `Context:
${contextText}
---
Question: ${question}`
    }
  ];
  const response = await chat(messages, true);
  const answer = response?.choices?.[0]?.message?.content || "No answer generated";
  return {
    question,
    answer,
    context: relevantContext
  };
}, "ask");

// src/azion-index-20251202.temp.ts
var app = new Hono2();
app.use("*", cors());
app.get("/", (c) => c.text("RAG Retrieval Orchestration API"));
app.post("/search", async (c) => {
  try {
    const body = await c.req.json();
    const q = body.q;
    const topK = body.top_k || 5;
    const useRerank = body.rerank !== false;
    if (!q) {
      return c.json({ error: 'Query "q" is required' }, 400);
    }
    const results = await search(q, topK, useRerank);
    return c.json({ results });
  } catch (err) {
    console.error("[Search] Error:", err);
    return c.json({ error: err.message }, 500);
  }
});
app.post("/ask", async (c) => {
  try {
    const body = await c.req.json();
    const question = body.question;
    if (!question) {
      return c.json({ error: "Question is required" }, 400);
    }
    const response = await ask(question);
    return c.json(response);
  } catch (err) {
    console.error("[Ask] Error:", err);
    return c.json({ error: err.message }, 500);
  }
});
fire(app);
/*! Bundled license information:

unenv/dist/runtime/node/internal/buffer/ieee754.mjs:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

unenv/dist/runtime/node/internal/buffer/buffer.mjs:
  (*!
  * The buffer module from node.js, for the browser.
  *
  * @author   Feross Aboukhadijeh <https://feross.org>
  * @license  MIT
  *)
*/
