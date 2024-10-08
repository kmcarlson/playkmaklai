declare module 'friggapi.product' {
    interface FriggApi {
      getAll(): Promise<any>;
    }
   
    const friggApi: FriggApi;
    export = friggApi;
  }