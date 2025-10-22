interface ICredentials {
  username: string;
  password: string;
}

interface IUserData {
  credentials: ICredentials;
  errorMessage: string;
}

enum MESSAGES {
  EMPTY_FIELDS = "Please, provide valid data",
  NAME_INUSE = "Username is in use",
  EMPTY_PASS = "Password is required",
  LESS_NAME = "Username should contain at least 3 characters",
  LESS_PASS = "Password should contain at least 8 characters",
  LOWERCASE_PASS = "Password should contain at least one character in lower case",
  PREFIXPOSTFIX = "Prefix and postfix spaces are not allowed is username",
  //UPPERCASE_PASS = "Password should contain at least one character in upper case",
}

const invalidTestData: IUserData[] = [
  {
    credentials: { username: "", password: "" },
    errorMessage: MESSAGES.EMPTY_FIELDS,
  },
  {
    credentials: { username: "  ", password: "Andrei12345678" },
    errorMessage: MESSAGES.PREFIXPOSTFIX,
  },
  {
    credentials: { username: " name", password: "123456Aa" },
    errorMessage: MESSAGES.PREFIXPOSTFIX,
  },
  {
    credentials: { username: "name ", password: "123456Aaaaaaaaaaaaaa" },
    errorMessage: MESSAGES.PREFIXPOSTFIX,
  },
  {
    credentials: { username: "na", password: "123456Aaaaaaaaaaaaaa" },
    errorMessage: MESSAGES.LESS_NAME,
  },
  //   {
  //     credentials: { username: "namenamenamenamenamenamenamenamenamenamen", password: "123456Aaaaaaaaaaaaaa" },
  //     errorMessage: message,
  //   },
  {
    credentials: { username: "name", password: "" },
    errorMessage: MESSAGES.EMPTY_PASS,
  },
  {
    credentials: { username: "name", password: "1234567" },
    errorMessage: MESSAGES.LESS_PASS,
  },
  {
    credentials: { username: "name", password: "1234567I" },
    errorMessage: MESSAGES.LOWERCASE_PASS,
  },
  //   {
  //     credentials: { username: "name", password: "1234567Ii " },
  //     errorMessage: MESSAGES.EMPTY_FIELDS,
  //   },
  //   {
  //     credentials: { username: "name", password: "1234 567Ii" },
  //     errorMessage: MESSAGES.EMPTY_FIELDS,
  //   },
  //   {
  //     credentials: { username: "name", password: "1234567i" },
  //     errorMessage: MESSAGES.UPPERCASE_PASS,
  //   }
];

export default invalidTestData;
