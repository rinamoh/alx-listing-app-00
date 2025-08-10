import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  price,
  actionText = 'View Details',
  onAction,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {imageUrl && (
        <img 
          className="w-full h-48 object-cover" 
          src={imageUrl} 
          alt={title} 
        />
      )}
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-base mb-4 line-clamp-2">
          {description}
        </p>
        {price && (
          <p className="text-lg font-semibold text-indigo-600 mb-3">
            ${price.toLocaleString()}
          </p>
        )}
        {onAction && (
          <button
            onClick={onAction}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;