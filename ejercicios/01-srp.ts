interface User {
  username: string;
  email: string;
}

class UserValidator {
  isValid(email: string): boolean {
    if (email.includes("@")) {
      return true;
    }
    return false;
  }
}

class UserRepository {
  users: User[] = [];

  save({ username, email }: User): void {
    this.users.push({ username, email })
  }
}

class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}

class UserRegistationService {
  constructor ( 
    public userValidatior: UserValidator = new UserValidator(),
    public userRepository: UserRepository = new UserRepository(),
    public emailService: EmailService = new EmailService(),
  ) {}

  newUSer ({ username, email }: User) {
    this.userValidatior.isValid(email);
    this.userRepository.save({ username, email });
    return this.emailService.sendWelcomeEmail(email);
  }
}

const Users = new UserRegistationService();
const user1 = Users.newUSer({ username: "Lautaro", email: "lautaroayala@gmail.com"});

console.log(user1)
