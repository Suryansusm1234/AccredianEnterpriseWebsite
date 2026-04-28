export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  timestamp: string;
}

const enquiries: Enquiry[] = [];

export { enquiries };