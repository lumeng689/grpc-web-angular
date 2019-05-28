/**
 * @fileoverview gRPC-Web generated client stub for testPackage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  CommonMsgRequest,
  CommonMsgResponse,
  EchoRequest,
  EchoResponse,
  PingRequest,
  PingResponse} from './test_pb';

export class SwitchMSgServiceClient {
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

  methodInfoPing = new grpcWeb.AbstractClientBase.MethodInfo(
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
        '/testPackage.SwitchMSgService/Ping',
      request,
      metadata || {},
      this.methodInfoPing,
      callback);
  }

  methodInfoLoadMsgStream = new grpcWeb.AbstractClientBase.MethodInfo(
    CommonMsgResponse,
    (request: CommonMsgRequest) => {
      return request.serializeBinary();
    },
    CommonMsgResponse.deserializeBinary
  );

  loadMsgStream(
    request: CommonMsgRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/testPackage.SwitchMSgService/LoadMsgStream',
      request,
      metadata || {},
      this.methodInfoLoadMsgStream);
  }

}

