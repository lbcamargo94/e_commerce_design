export interface IUpdateUserEmail {
  id: string;
  email: string;
  validationCode: string;
}

export interface IUpdateUsersPassword {
  email: string;
  password: string;
  passwordConfirmation: string;
  validationCode: string;
}
