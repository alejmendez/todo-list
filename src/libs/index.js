import { piniaInstance } from './pinia'
import { fontAwesomeInit } from './fontawesome'

export const initLibs = (app) => {
  app.use(piniaInstance)
  fontAwesomeInit(app)
}
