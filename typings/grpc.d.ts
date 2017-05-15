declare module "google-protobuf" {
    var Message: any;
    export {
        Message
    }
}
declare module 'grpc' {

  namespace grpc {
    function load(protoPath: string): any;

    class Server {
      addProtoService(service: any, impl: any): void;
      bind(hostPort: string, cred: any): void;
      start(): void;
    }

    class credentials {
      static createInsecure(): any;
    }

    class ServerCredentials {
      static createInsecure(): any;
    }
  }

  export = grpc;

}