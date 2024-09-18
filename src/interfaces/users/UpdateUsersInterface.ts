interface IUpdateUserEmail {
  id: string;
  email: string;
  validationCode: string;
}

interface IUpdateUsersPassword {
  email: string;
  password: string;
  passwordConfirmation: string;
  validationCode: string;
}

export type { IUpdateUserEmail, IUpdateUsersPassword };
