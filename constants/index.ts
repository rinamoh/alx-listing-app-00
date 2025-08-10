export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  ENDPOINTS: {
    PROPERTIES: '/properties',
    BOOKINGS: '/bookings',
  },
  DEFAULT_TIMEOUT: 10000,
};

export const UI_TEXT = {
  COMMON: {
    LOADING: 'Loading...',
    ERROR: 'Something went wrong',
    RETRY: 'Retry',
  },
  BUTTONS: {
    BOOK_NOW: 'Book Now',
    VIEW_DETAILS: 'View Details',
    SUBMIT: 'Submit',
    CANCEL: 'Cancel',
  },
  CARD: {
    NO_IMAGE: 'No image available',
  },
};

export const ROUTES = {
  HOME: '/',
  PROPERTIES: '/properties',
  BOOKINGS: '/bookings',
  ABOUT: '/about',
};