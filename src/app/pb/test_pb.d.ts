import * as jspb from "google-protobuf"

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

export class CommonMsgRequest extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonMsgRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommonMsgRequest): CommonMsgRequest.AsObject;
  static serializeBinaryToWriter(message: CommonMsgRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonMsgRequest;
  static deserializeBinaryFromReader(message: CommonMsgRequest, reader: jspb.BinaryReader): CommonMsgRequest;
}

export namespace CommonMsgRequest {
  export type AsObject = {
    id: string,
    sid: string,
    type: string,
    seq: number,
    ver: string,
    from: string,
    to: string,
  }
}

export class CommonMsgResponse extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonMsgResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommonMsgResponse): CommonMsgResponse.AsObject;
  static serializeBinaryToWriter(message: CommonMsgResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonMsgResponse;
  static deserializeBinaryFromReader(message: CommonMsgResponse, reader: jspb.BinaryReader): CommonMsgResponse;
}

export namespace CommonMsgResponse {
  export type AsObject = {
    id: string,
    sid: string,
    type: string,
    seq: number,
    ver: string,
    from: string,
    to: string,
  }
}

export class EchoRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EchoRequest): EchoRequest.AsObject;
  static serializeBinaryToWriter(message: EchoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoRequest;
  static deserializeBinaryFromReader(message: EchoRequest, reader: jspb.BinaryReader): EchoRequest;
}

export namespace EchoRequest {
  export type AsObject = {
    message: string,
  }
}

export class EchoResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getMessageCount(): number;
  setMessageCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EchoResponse): EchoResponse.AsObject;
  static serializeBinaryToWriter(message: EchoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoResponse;
  static deserializeBinaryFromReader(message: EchoResponse, reader: jspb.BinaryReader): EchoResponse;
}

export namespace EchoResponse {
  export type AsObject = {
    message: string,
    messageCount: number,
  }
}

