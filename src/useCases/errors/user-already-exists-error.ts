/* eslint-disable prettier/prettier */
export class UserAlreadyExistsError extends Error {
  constructor() {
    super('Email already exists')
  }
}
