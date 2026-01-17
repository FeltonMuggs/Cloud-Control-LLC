
export enum BusinessLine {
  CLOUD_CONTROL = 'CLOUD_CONTROL',
  BLOCKAIDE = 'BLOCKAIDE',
  COLONIAL_COIN = 'COLONIAL_COIN'
}

export interface CRMContact {
  id: string;
  name: string;
  organization: string;
  email: string;
  businessLine: BusinessLine;
  status: 'Lead' | 'Active' | 'Partner' | 'Alumni';
  lastActivity: string;
  value?: number;
}

export interface Project {
  id: string;
  name: string;
  businessLine: BusinessLine;
  status: 'Planning' | 'Execution' | 'Maintenance' | 'Completed';
  progress: number;
  deadline: string;
  budget: number;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Numismatics' | 'Hardware' | 'Digital Asset';
  stock: number;
  image: string;
}

export interface Avatar {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  businessContext: BusinessLine;
}
