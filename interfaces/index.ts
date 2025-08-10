export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  price?: number;
  actionText?: string;
  onAction?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

// Property listing interface for future use
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  imageUrls: string[];
  amenities: string[];
}