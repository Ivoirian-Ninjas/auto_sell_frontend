export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
export const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// // This is for production
// export const API_ROOT= 'https://htm-auto-backend.herokuapp.com'
// export const ROOT = 'https://htm-auto-frontend.herokuapp.com'

// This is for development
export const API_ROOT= 'http://127.0.0.1:3000'
export const ROOT = 'http://localhost:3001'
