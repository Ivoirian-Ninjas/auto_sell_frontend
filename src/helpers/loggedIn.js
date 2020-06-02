
export default function loggedIn() {
  return localStorage.getItem('auto_sell_user') ? true : false
}

