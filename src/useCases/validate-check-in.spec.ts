/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { expect, describe, it, beforeEach, vi, afterEach } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { ValidateCheckInUseCase } from './validate-check-in'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

let checkInsRepository: InMemoryCheckInsRepository
let sut: ValidateCheckInUseCase

describe('Validate Check-in Use Case', () => {

    beforeEach(async () => {
        checkInsRepository = new InMemoryCheckInsRepository()
        sut = new ValidateCheckInUseCase(checkInsRepository)

        vi.isFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('should be able to  validate check-in', async () => {

        const createdCheckin = await checkInsRepository.create({
            gym_id: 'gym-01',
            user_id: 'user-01'
        })

         const { checkIn } = await sut.execute({
            checkInId: createdCheckin.id
        })

        expect(checkIn.validated_at).toEqual(expect.any(Date))
        expect(checkInsRepository.items[0].validated_at).toEqual(expect.any(Date))
    })

    it('should not be able to validate an inexistent check-in', async () => {

        await expect(() => sut.execute({
            checkInId: 'inexisrtent-check-in-id'
        })).rejects.toBeInstanceOf(ResourceNotFoundError)
    })

    it.skip('should not be able to validate the check-in after 20 minutes of its creation', async () => {
        vi.setSystemTime(new Date(2023, 0, 1, 13, 40))

        const createdCheckin = await checkInsRepository.create({
            gym_id: 'gym-01',
            user_id: 'user-01'
        })

        const twentyOneMinutesInMs = 1000 * 60 * 21

        vi.advanceTimersByTime(twentyOneMinutesInMs)

        await expect(() => sut.execute({
            checkInId: createdCheckin.id
        })).rejects.toBeInstanceOf(Error)
    } )
})
