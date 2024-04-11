import Create from "./http-request";

export interface todo {
    id: number;
    title: string;
    complited: Boolean;
  }


export default  Create("/todos")