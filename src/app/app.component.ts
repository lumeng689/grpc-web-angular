import { Component } from '@angular/core';
import { EchoServiceClient } from './pb/EchoServiceClientPb';
import { EchoRequest, EchoResponse, ServerStreamingEchoRequest, ServerStreamingEchoResponse } from './pb/echo_pb';
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

  msg: string;

  constructor() {
    this.echoService = new EchoServiceClient('http://192.168.99.100:8080', null, null);
  }

  send() {
    this.echo(this.msg);
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
          console.log("接收到数据");
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
