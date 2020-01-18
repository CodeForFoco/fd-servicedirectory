export interface ActionRequest {
  type: string;
  errorMessage?: any;
  payload?: any;
}

export interface Request {
  loading: boolean;
  errorMessage: any;
  data: any;
}

export interface FormattedService {
  address: string;
  description: string;
  hours: number;
  id: number;
  otherInfo: string;
  phone: string;
  populations: string;
  subtype: string;
  title: string;
  type: string;
  requirements: {
    appointment: boolean;
    id: boolean;
    residency: boolean;
    income: boolean;
    lowIncome: boolean;
  };
}
