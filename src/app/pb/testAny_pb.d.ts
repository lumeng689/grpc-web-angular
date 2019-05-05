import * as jspb from "google-protobuf"

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';

export class CommonMsg extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSid(): string;
  setSid(value: string): void;

  getType(): string;
  setType(value: string): void;

  getSeq(): number;
  setSeq(value: number): void;

  getVer(): string;
  setVer(value: string): void;

  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getParams(): google_protobuf_any_pb.Any | undefined;
  setParams(value?: google_protobuf_any_pb.Any): void;
  hasParams(): boolean;
  clearParams(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonMsg.AsObject;
  static toObject(includeInstance: boolean, msg: CommonMsg): CommonMsg.AsObject;
  static serializeBinaryToWriter(message: CommonMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonMsg;
  static deserializeBinaryFromReader(message: CommonMsg, reader: jspb.BinaryReader): CommonMsg;
}

export namespace CommonMsg {
  export type AsObject = {
    id: string,
    sid: string,
    type: string,
    seq: number,
    ver: string,
    from: string,
    to: string,
    params?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class Test extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Test.AsObject;
  static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
  static serializeBinaryToWriter(message: Test, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Test;
  static deserializeBinaryFromReader(message: Test, reader: jspb.BinaryReader): Test;
}

export namespace Test {
  export type AsObject = {
    message: string,
  }
}

export class PingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
  }
}

export class PingResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    id: string,
  }
}

