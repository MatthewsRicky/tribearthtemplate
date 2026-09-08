import config from '@payload-config'
import { getPayload } from 'payload'

let payloadInstance: Awaited<ReturnType<typeof getPayload>> | null = null

export async function getPayloadClient() {
  if (!payloadInstance) {
    payloadInstance = await getPayload({
      config,
    })
  }

  return payloadInstance
}
