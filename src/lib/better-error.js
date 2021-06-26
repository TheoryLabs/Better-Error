// import { BetterErrorSupportMode } from '../utils'
// import {
//   FALLBACK_NAME,
//   FALLBACK_MESSAGE,
//   NATIVE_ERROR_INTERFACE,
//   ENVS
// } from '../constants'


const BetterErrorApi = (..._args) => {
  
  console.log(`BetterErrorAPI`)
  console.log(`--------------`)
  console.log(`Args Recieved:`)

  let args = _args.push(`BetterError`)

  console.log(args)

  return args
}


export {
  BetterErrorApi
}
