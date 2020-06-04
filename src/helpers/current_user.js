export default function current_user() {
  return JSON.parse(localStorage.getItem("auto_sell_user"))
}
