export interface IUpdateUserEmail {
  id: string;
  email: string;
  validationCode: string;
}

export interface IUpdateUsersPassword {
  id: string;
  password: string;
  passwordConfirmation: string;
  validationCode: string;
}
