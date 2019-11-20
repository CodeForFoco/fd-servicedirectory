export interface formattedService {
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

export default formattedService;
