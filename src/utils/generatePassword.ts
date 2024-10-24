const generatePassword = (): string => {
  return Math.random().toString(36).slice(-6);
};

export default generatePassword;
