/**
 * @fileoverview gRPC-Web generated client stub for testPackage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  CommonMsg,
  PingRequest,
  PingResponse} from './test_pb';

export class swithMSgServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoping = new grpcWeb.AbstractClientBase.MethodInfo(
    PingResponse,
    (request: PingRequest) => {
      return request.serializeBinary();
    },
    PingResponse.deserializeBinary
  );

  ping(
    request: PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PingResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/testPackage.swithMSgService/ping',
      request,
      metadata || {},
      this.methodInfoping,
      callback);
  }

}

