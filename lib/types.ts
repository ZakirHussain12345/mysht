export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  sub: string;
  image?: string;
  externalURL?: string;
}

export interface Category {
  name: string;
  subs: string[];
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

export interface FormErrors {
  name?: boolean;
  email?: string | boolean;
  phone?: boolean;
  topic?: boolean;
  message?: boolean;
}
