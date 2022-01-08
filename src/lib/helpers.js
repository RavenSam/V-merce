export const truncate = (str, len = 35) => {
   return str.length > len ? str.substring(0, len) + "..." : str
}
