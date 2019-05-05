import { Component } from '@angular/core';
import { EchoServiceClient } from './pb/EchoServiceClientPb';
import { EchoRequest, EchoResponse, ServerStreamingEchoRequest, ServerStreamingEchoResponse } from './pb/echo_pb';
// import { PingRequest, PingResponse, CommonMsg } from './pb/test_pb';
// import { swithMSgServiceClient } from './pb/TestServiceClientPb';

import { PingRequest, PingResponse } from './pb/testAny_pb';
import { swithMSgServiceClient } from './pb/TestAnyServiceClientPb';

import * as grpcWeb from 'grpc-web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'web-grpc-demo';

  readonly INTERVAL = 500;  // ms
  readonly MAX_STREAM_MESSAGES = 50;
  echoService: EchoServiceClient;
  // testService: swithMSgServiceClient;
  testAnyService: swithMSgServiceClient;

  msg: string;

  constructor() {
    this.echoService = new EchoServiceClient('http://127.0.0.1:8080', null, null);
    // this.testService = new swithMSgServiceClient('http://127.0.0.1:8080', null, null);
    this.testAnyService = new swithMSgServiceClient('http://127.0.0.1:8080', null, null);
  }

  send() {
    this.echo(this.msg);
  }

  send2() {
    // const req = new PingRequest();
    // this.testService.ping(req, null, (err: grpcWeb.Error, response: PingResponse) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.dir(response);
    //   console.log('ping -> :', response.getId());
    //   // console.log('==================================');
    // });
  }

  send3() {
    const req = new PingRequest();
    const call = this.testAnyService.ping(req, null, (err: grpcWeb.Error, response: PingResponse) => {
      if (err) {
        if (err.code !== grpcWeb.StatusCode.OK) {
          console.error(err);
          console.error('Error code: ' + err.code + ' "' + err.message + '"');
          return;
        }
      }
      console.dir(response);
      console.log('ping -> :', response.getId());
    });

    call.on('status', (status: grpcWeb.Status) => {
      if (status.metadata) {
        console.log('=====print meta start ======');
        console.log('Received metadata');
        console.log(status.metadata);
        console.log('=====print meta end ======');
      }
    });
  }

  send4() {
    const request = new PingRequest();
  }

  echo(msg: string) {
    const request = new EchoRequest();
    request.setMessage(msg);
    const call = this.echoService.echo(
      request, {'custom-header-1': 'value1'},
      (err: grpcWeb.Error, response: EchoResponse) => {
        if (err) {
          if (err.code !== grpcWeb.StatusCode.OK) {
            console.log(
              'Error code: ' + err.code + ' "' + err.message + '"');
          }
        } else {
          console.log('接收到数据');
          console.log(response.getMessage());
        }
      });
    call.on('status', (status: grpcWeb.Status) => {
      if (status.metadata) {
        console.log('Received metadata');
        console.log(status.metadata);
      }
    });
  }
}
