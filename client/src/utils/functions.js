export const validatePasswords = (password, confirmedPassword) => {
  return password.trim() === confirmedPassword.trim();
}
