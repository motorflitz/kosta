export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  category: 'german' | 'greek' | 'starter' | 'dessert';
}

export interface Review {
  author: string;
  text: string;
  source: string;
  rating: number;
}

export interface OpeningHours {
  day: string;
  time: string;
}