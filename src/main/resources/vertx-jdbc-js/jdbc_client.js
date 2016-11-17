/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-jdbc-js/jdbc_client */
var utils = require('vertx-js/util/utils');
var Vertx = require('vertx-js/vertx');
var SQLConnection = require('vertx-sql-js/sql_connection');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JJDBCClient = io.vertx.ext.jdbc.JDBCClient;

/**
 An asynchronous client interface for interacting with a JDBC compliant database

 @class
*/
var JDBCClient = function(j_val) {

  var j_jDBCClient = j_val;
  var that = this;

  /**
   Returns a connection that can be used to perform SQL operations on. It's important to remember
   to close the connection when you are done, so it is returned to the pool.

   @public
   @param handler {function} the handler which is called when the <code>JdbcConnection</code> object is ready for use.
   @return {JDBCClient}
   */
  this.getConnection = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_jDBCClient["getConnection(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(SQLConnection, ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Close the client

   @public

   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_jDBCClient["close()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_jDBCClient;
};

JDBCClient._jclass = utils.getJavaClass("io.vertx.ext.jdbc.JDBCClient");
JDBCClient._jtype = {
  accept: function (obj) {
    return JDBCClient._jclass.isInstance(obj._jdel);
  },
  wrap: function (jdel) {
    var obj = Object.create(JDBCClient.prototype, {});
    JDBCClient.apply(obj, arguments);
    return obj;
  },
  unwrap: function (obj) {
    return obj._jdel;
  }
};
JDBCClient._create = function (jdel) {
  var obj = Object.create(JDBCClient.prototype, {});
  JDBCClient.apply(obj, arguments);
  return obj;
}
/**
 Create a JDBC client which maintains its own data source.

 @memberof module:vertx-jdbc-js/jdbc_client
 @param vertx {Vertx} the Vert.x instance
 @param config {Object} the configuration
 @return {JDBCClient} the client
 */
JDBCClient.createNonShared = function(vertx, config) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && (typeof __args[1] === 'object' && __args[1] != null)) {
    return utils.convReturnVertxGen(JDBCClient, JJDBCClient["createNonShared(io.vertx.core.Vertx,io.vertx.core.json.JsonObject)"](vertx._jdel, utils.convParamJsonObject(config)));
  } else throw new TypeError('function invoked with invalid arguments');
};

/**
 Create a JDBC client which shares its data source with any other JDBC clients created with the same
 data source name

 @memberof module:vertx-jdbc-js/jdbc_client
 @param vertx {Vertx} the Vert.x instance
 @param config {Object} the configuration
 @param dataSourceName {string} the data source name
 @return {JDBCClient} the client
 */
JDBCClient.createShared = function() {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && (typeof __args[1] === 'object' && __args[1] != null)) {
    return utils.convReturnVertxGen(JDBCClient, JJDBCClient["createShared(io.vertx.core.Vertx,io.vertx.core.json.JsonObject)"](__args[0]._jdel, utils.convParamJsonObject(__args[1])));
  }else if (__args.length === 3 && typeof __args[0] === 'object' && __args[0]._jdel && (typeof __args[1] === 'object' && __args[1] != null) && typeof __args[2] === 'string') {
    return utils.convReturnVertxGen(JDBCClient, JJDBCClient["createShared(io.vertx.core.Vertx,io.vertx.core.json.JsonObject,java.lang.String)"](__args[0]._jdel, utils.convParamJsonObject(__args[1]), __args[2]));
  } else throw new TypeError('function invoked with invalid arguments');
};

module.exports = JDBCClient;
