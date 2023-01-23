import { piniaInstance } from './pinia'

export const initLibs = (app) => {
  app.use(piniaInstance)
}
