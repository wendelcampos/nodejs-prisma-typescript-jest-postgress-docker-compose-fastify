/* eslint-disable prettier/prettier */
import { UsersRespository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { User } from '@prisma/client'

interface RegisterUseCaseRequest {
    name: string,
    email: string,
    password: string
}

interface RegisterUseCaseResponse {
    user: User
}

// SOLID

// D - Dependency Inversion Principle

export class RegisterUseCase {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(private userRepository: UsersRespository) {}

    async execute ({ name, email, password }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
      const password_hash = await hash(password, 6)

      const userWithSameEmail = await this.userRepository.findByEmail(email)

      if (userWithSameEmail) {
        throw new UserAlreadyExistsError()
      }

      // const prismaUSerRepository = new PrismaUsersRepository()

      const user = await this.userRepository.create({
          name,
          email,
          password_hash
        })

      return {
        user
      }
    }
}

