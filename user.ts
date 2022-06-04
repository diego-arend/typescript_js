// User Account structure
type AccountUser = {
  id: number;
  name: string;
  // pode ser substituido ?(optional)
  //   email: string | undefined
  email?: string;
};

// Character strutucture
type CharInfo = {
  nickName: string;
  level: number;
};

// Interseção de tipos
type UserInfo = AccountUser & CharInfo

const account: AccountUser = {
  id: 1,
  name: "Diego",
};

const char: CharInfo = {
  nickName: "Zeus",
  level: 10,
};

const userInfo : UserInfo = {
    id: 1,
    name: "Diego",
    nickName: "Zeus",
    level: 10
}