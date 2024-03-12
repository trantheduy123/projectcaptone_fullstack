"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _assert = require("assert");
var _index = _interopRequireDefault(require("../models/index"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _crypto = _interopRequireDefault(require("crypto"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var salt = _bcryptjs["default"].genSaltSync(10);
var hashUserPassword = function hashUserPassword(password) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var _hashPassword;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _bcryptjs["default"].hashSync(password, salt);
          case 3:
            _hashPassword = _context.sent;
            resolve(_hashPassword);
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var handleUserLogin = function handleUserLogin(email, password) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var userData, isExist, user, check;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            userData = {};
            _context2.next = 4;
            return checkUserEmail(email);
          case 4:
            isExist = _context2.sent;
            if (!isExist) {
              _context2.next = 20;
              break;
            }
            _context2.next = 8;
            return _index["default"].User.findOne({
              attributes: ["id", "email", "roleId", "password", "firstName", "lastName"],
              where: {
                email: email
              },
              raw: true
            });
          case 8:
            user = _context2.sent;
            if (!user) {
              _context2.next = 16;
              break;
            }
            _context2.next = 12;
            return _bcryptjs["default"].compareSync(password, user.password);
          case 12:
            check = _context2.sent;
            // false
            if (check) {
              userData.errCode = 0;
              userData.errMessage = "OK", delete user.password, userData.user = user;
            } else {
              userData.errCode = 3;
              userData.errMessage = "Wrong password";
            }
            _context2.next = 18;
            break;
          case 16:
            userData.errCode = 2;
            userData.errMessage = "User's not found";
          case 18:
            _context2.next = 22;
            break;
          case 20:
            userData.errCode = 1;
            userData.errMessage = "Your's Email isn't exist in your system. Please try other email";
          case 22:
            resolve(userData);
            _context2.next = 28;
            break;
          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 28:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 25]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var checkUserEmail = function checkUserEmail(userEmail) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _index["default"].User.findOne({
              where: {
                email: userEmail
              }
            });
          case 3:
            user = _context3.sent;
            if (user) {
              resolve(true);
            } else {
              resolve(false);
            }
            _context3.next = 10;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getAllUsers = function getAllUsers(userId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var users;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            users = "";
            if (!(userId === "All")) {
              _context4.next = 6;
              break;
            }
            _context4.next = 5;
            return _index["default"].User.findAll({
              attributes: {
                exclude: ["password"]
              }
            });
          case 5:
            users = _context4.sent;
          case 6:
            if (!(userId && userId !== "All")) {
              _context4.next = 10;
              break;
            }
            _context4.next = 9;
            return _index["default"].User.findOne({
              where: {
                id: userId
              },
              attributes: {
                exclude: ["password"]
              }
            });
          case 9:
            users = _context4.sent;
          case 10:
            resolve(users);
            _context4.next = 16;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 13]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var createNewUser = function createNewUser(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var check, hashPasswordFromBcrypt;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return checkUserEmail(data.email);
          case 3:
            check = _context5.sent;
            if (!(check === true)) {
              _context5.next = 8;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "your email is already in used, please try another email !"
            });
            _context5.next = 13;
            break;
          case 8:
            _context5.next = 10;
            return hashUserPassword(data.password);
          case 10:
            hashPasswordFromBcrypt = _context5.sent;
            _context5.next = 13;
            return _index["default"].User.create({
              email: data.email,
              password: hashPasswordFromBcrypt,
              firstName: data.firstName,
              lastName: data.lastName,
              address: data.address,
              phonenumber: data.phonenumber,
              gender: data.gender,
              roleId: data.roleId,
              positionId: data.positionId,
              image: data.avatar
            });
          case 13:
            resolve({
              errCode: 0,
              errMessage: "OK"
            });
            _context5.next = 19;
            break;
          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 19:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 16]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var deleteUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(userId) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
              var foundUser;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;
                    _context6.next = 3;
                    return _index["default"].User.findOne({
                      where: {
                        id: userId
                      }
                    });
                  case 3:
                    foundUser = _context6.sent;
                    if (!foundUser) {
                      resolve({
                        errCode: 2,
                        errMessage: "The user doesn't exist"
                      });
                    }
                    _context6.next = 7;
                    return _index["default"].User.destroy({
                      where: {
                        id: userId
                      }
                    });
                  case 7:
                    resolve({
                      errCode: 0,
                      errMessage: "The user is deleted"
                    });
                    _context6.next = 13;
                    break;
                  case 10:
                    _context6.prev = 10;
                    _context6.t0 = _context6["catch"](0);
                    reject(_context6.t0);
                  case 13:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, null, [[0, 10]]);
            }));
            return function (_x12, _x13) {
              return _ref7.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function deleteUser(_x11) {
    return _ref6.apply(this, arguments);
  };
}();
var hashPassword = function hashPassword(password) {
  return _bcryptjs["default"].hashSync(password, _bcryptjs["default"].genSaltSync(12));
};
var updateUserData = function updateUserData(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            if (data.id) {
              _context8.next = 4;
              break;
            }
            resolve({
              errCode: 2,
              errMessage: "Missing required parameter: id"
            });
            return _context8.abrupt("return");
          case 4:
            _context8.next = 6;
            return _index["default"].User.findOne({
              where: {
                id: data.id
              },
              raw: false
            });
          case 6:
            user = _context8.sent;
            if (!user) {
              _context8.next = 21;
              break;
            }
            // Update user data
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.address = data.address;
            user.phonenumber = data.phonenumber;
            user.roleId = data.roleId;
            user.gender = data.gender;
            user.positionId = data.positionId;
            if (data.avatar) {
              user.image = data.avatar;
            }

            // Save the updated user
            _context8.next = 18;
            return user.save();
          case 18:
            resolve({
              errCode: 0,
              errMessage: "Update the user succeeds!"
            });
            _context8.next = 22;
            break;
          case 21:
            resolve({
              errCode: 1,
              errMessage: "User not found"
            });
          case 22:
            _context8.next = 27;
            break;
          case 24:
            _context8.prev = 24;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 27:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 24]]);
    }));
    return function (_x14, _x15) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var forgotPasswordService = function forgotPasswordService(email) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var response, resetToken, savedResponse;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _index["default"].User.findOne({
              where: {
                email: email
              },
              // Using the 'email' parameter directly
              raw: false
            });
          case 3:
            response = _context9.sent;
            if (response) {
              _context9.next = 8;
              break;
            }
            resolve({
              err: 1,
              msg: "This email is not registered"
            });
            _context9.next = 20;
            break;
          case 8:
            if (!(response instanceof _index["default"].User)) {
              _context9.next = 19;
              break;
            }
            resetToken = _crypto["default"].randomBytes(32).toString("hex");
            response.passwordToken = resetToken;
            response.passwordTokenDate = Date.now() + 5 * 60 * 1000; // Thời gian token: 5p

            // Saving the changes to the database
            _context9.next = 14;
            return response.save();
          case 14:
            savedResponse = _context9.sent;
            console.log(savedResponse); // Log the saved response

            resolve({
              err: 0,
              passwordTokenDate: resetToken,
              msg: "The message has been sent to your email"
            });
            _context9.next = 20;
            break;
          case 19:
            resolve({
              err: 1,
              msg: "Error during password reset"
            });
          case 20:
            _context9.next = 25;
            break;
          case 22:
            _context9.prev = 22;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 25:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 22]]);
    }));
    return function (_x16, _x17) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var resetPasswordService = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(password, token) {
    var user;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          if (token) {
            _context10.next = 3;
            break;
          }
          return _context10.abrupt("return", {
            err: 1,
            msg: "Missing required parameter: token"
          });
        case 3:
          _context10.next = 5;
          return _index["default"].User.findOne({
            where: {
              passwordToken: token
            },
            passwordTokenDate: _defineProperty({}, _sequelize.Op.gt, Date.now()),
            raw: false
          });
        case 5:
          user = _context10.sent;
          if (user) {
            _context10.next = 8;
            break;
          }
          return _context10.abrupt("return", {
            err: 1,
            msg: "Bạn đã hết thời hạn thay đổi mật khẩu, vui lòng thử lại!"
          });
        case 8:
          if (!user) {
            _context10.next = 16;
            break;
          }
          user.password = hashPassword(password);
          user.passwordToken = null;
          user.passwordTokenDate = null;
          console.log(user);

          // Save the updated user
          _context10.next = 15;
          return user.save();
        case 15:
          return _context10.abrupt("return", {
            err: 0,
            msg: "Đổi mật khẩu thành công"
          });
        case 16:
          _context10.next = 21;
          break;
        case 18:
          _context10.prev = 18;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", {
            err: -1,
            msg: "An unexpected error occurred during password reset.",
            error: _context10.t0.message || "Unknown error"
          });
        case 21:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 18]]);
  }));
  return function resetPasswordService(_x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}();
var registerNewUser = function registerNewUser(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var check, hashPasswordFromBcrypt;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return checkUserEmail(data.email);
          case 3:
            check = _context11.sent;
            if (!(check === true)) {
              _context11.next = 8;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "your email is already in used, please try another email !"
            });
            _context11.next = 13;
            break;
          case 8:
            _context11.next = 10;
            return hashUserPassword(data.password);
          case 10:
            hashPasswordFromBcrypt = _context11.sent;
            _context11.next = 13;
            return _index["default"].User.create({
              email: data.email,
              password: hashPasswordFromBcrypt,
              address: data.address,
              phonenumber: data.phonenumber
            });
          case 13:
            resolve({
              errCode: 0,
              errMessage: "OK"
            });
            _context11.next = 19;
            break;
          case 16:
            _context11.prev = 16;
            _context11.t0 = _context11["catch"](0);
            reject(_context11.t0);
          case 19:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 16]]);
    }));
    return function (_x20, _x21) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var getAllCodeService = function getAllCodeService(typeInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, rejects) {
      var res, allcode;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            if (typeInput) {
              _context12.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing required parameters !"
            });
            _context12.next = 12;
            break;
          case 5:
            res = {};
            _context12.next = 8;
            return _index["default"].Allcode.findAll({
              where: {
                type: typeInput
              }
            });
          case 8:
            allcode = _context12.sent;
            res.errCode = 0;
            res.data = allcode;
            resolve(res);
          case 12:
            _context12.next = 17;
            break;
          case 14:
            _context12.prev = 14;
            _context12.t0 = _context12["catch"](0);
            rejects(_context12.t0);
          case 17:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 14]]);
    }));
    return function (_x22, _x23) {
      return _ref12.apply(this, arguments);
    };
  }());
};
module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData: updateUserData,
  forgotPasswordService: forgotPasswordService,
  resetPasswordService: resetPasswordService,
  registerNewUser: registerNewUser,
  getAllCodeService: getAllCodeService
};