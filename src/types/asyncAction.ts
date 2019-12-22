export interface asyncAction {
  type: string;
  payload: any;
  errorMessage: string;
}

export interface asyncState {
  loading: boolean;
  errorMessage: string;
  data: any;
}
