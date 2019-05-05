protoc -I=./ testAny.proto --js_out=import_style=commonjs:./ --grpc-web_out=import_style=typescript,mode=grpcwebtext:./



protoc -I=./ test.proto --js_out=import_style=commonjs:./ --grpc-web_out=import_style=typescript,mode=grpcwebtext:./
