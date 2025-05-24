// Basic user object for validation, adding, and updating password
const users = [
  {
    id: 1,
    name: "Sheldon Cooper",
    username: "cooper@brainstrust.com",
    password: "genius",
    Pet: "Chimpanzee",
    PetName: "Carl",
    image: "../assets/userImages/Sheldon.jpg",
    PetBirthdate: "10/3/2000",
    PetDescription:
      "Carl is a highly intelligent chimpanzee. I have conducted several experiments with him, and his cognitive abilities are, dare I say, almost on par with Leonard's. He enjoys solving puzzles, but not as much as I do.",
  },
  {
    id: 2,
    name: "Penny",
    username: "happy@startstruck.com",
    password: "password",
    Pet: "Pomeranian",
    PetName: "Princess",
    image: "../assets/userImages/Penny.jpg",
    PetBirthdate: "5/12/2018",
    PetDescription:
      "Princess is the cutest, fluffiest little Pomeranian ever! She loves cuddles, attention, and totally has better hair than me on most days.",
  },
  {
    id: 3,
    name: "Howard Wolowitz",
    username: "astronaught@spaceguy.com",
    password: "uranus",
    Pet: "Chameleon",
    PetName: "Leonard",
    image: "../assets/userImages/Howard.jpg",
    PetBirthdate: "8/22/2017",
    PetDescription:
      "Leonard (the chameleon, not the man) is awesome. He changes colors almost as fast as I change my mind about what to eat for dinner. He's got a curious personality—just like me, except with a longer tongue.",
  },
  {
    id: 4,
    name: "Raj Koothrappali",
    email: "Raj@brainrot.com",
    password: "hello",
    Pet: "Love Birds",
    PetName: "Romeo & Juliet",
    image: "../assets/userImages/Raj.jpg",
    PetBirthdate: "2/14/2021",
    PetDescription:
      "Romeo and Juliet are my adorable love birds. They sing together every morning, and honestly, their relationship is more romantic than any I've ever had.",
  },
];

const login = (req, res) => {
  const { username, password } = req?.body;
  console.log("user", username, password);

  if (!username || !password) {
    return res
      .status(400)
      .send({ message: "Username and password are required" });
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).send({ message: "Invalid username or password" });
    // WHAT WOULD I DO IF I WANTED TO TELL THE FRONT END THAT IT WAS EITHER THE USERNAME OR PASSWORD THAT WAS WRONG?
  }

  // user is found
  res.status(200).send({ message: "Login successful", userId: user?.id });
};

const getUser = (req, res) => {
  const { userId } = req?.body;
  const user = users.find((u) => u.userId === userId);

  if (!user) {
    return res.status(401).send({ message: "no user found for that id" });
    // WHAT WOULD I DO IF I WANTED TO TELL THE FRONT END THAT IT WAS EITHER THE USERNAME OR PASSWORD THAT WAS WRONG?
  }

  res.status(200).send({ ...user });
};

const changePassword = (req, res) => {
  const { username, currentPassword, newPassword } = req?.body;

  if (!username || !currentPassword || !newPassword) {
    return res.status(400).send({
      message: "Username, current password, and new password are required",
    });
  }

  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  if (user.password !== currentPassword) {
    return res.status(401).send({ message: "Current password is incorrect" });
  }

  user.password = newPassword;

  res.status(200).send({ message: "Password updated successfully" });
};

const addUser = (req, res) => {
  const { username, password } = req?.body;

  if (!username || !password) {
    return res
      .status(400)
      .send({ message: "Username and password are required" });
  }

  const userExists = users.some((u) => u.username === username);

  if (userExists) {
    return res.status(409).send({ message: "User already exists" });
  }

  users.push({ username, password });

  res.status(201).send({ message: "User added successfully" });
};

module.exports = {
  login,
  changePassword,
  addUser,
  getUser,
};
