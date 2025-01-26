/* eslint-disable prettier/prettier */
import { Gym } from '@prisma/client'
import { GymsRespository } from '@/repositories/gyms-repository'

interface FetchNearbyGymUseCaseRequest {
    userLatitude: number
    userLongitude: number
}

interface FetchNearbyGymUseCaseResponse {
    gyms: Gym[]
}


export class FetchNearbyGymUseCase {

  constructor(private gymsRepository: GymsRespository) {}

    async execute ({ userLatitude, userLongitude }: FetchNearbyGymUseCaseRequest): Promise<FetchNearbyGymUseCaseResponse> {

      const gyms = await this.gymsRepository.findManyNearby({ latitude: userLatitude, longitude: userLongitude })

      return {
        gyms
      }
    }
}

