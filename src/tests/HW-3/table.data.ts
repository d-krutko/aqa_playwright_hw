interface IUserData {
  email: string;
  firstName: string;
  lastName: string;
  salary: number;
  age: number;
  occupation: string;
}

const usersData: IUserData[] = [
  {
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    salary: 55000,
    age: 29,
    occupation: "AQA Engineer",
  },
  {
    email: "sarah.smith@example.com",
    firstName: "Sarah",
    lastName: "Smith",
    salary: 72000,
    age: 34,
    occupation: "Frontend Developer",
  },
  {
    email: "alex.johnson@example.com",
    firstName: "Alex",
    lastName: "Johnson",
    salary: 64000,
    age: 31,
    occupation: "Backend Developer",
  },
  {
    email: "linda.williams@example.com",
    firstName: "Linda",
    lastName: "Williams",
    salary: 48000,
    age: 26,
    occupation: "Manual Tester",
  },
  {
    email: "michael.brown@example.com",
    firstName: "Michael",
    lastName: "Brown",
    salary: 89000,
    age: 41,
    occupation: "Team Lead",
  },
];

export default usersData;
