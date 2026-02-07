
export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  link: string;
  icon: string;
  category: 'Commercial' | 'Academic' | 'Personal';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
