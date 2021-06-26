let _betterErrorSupportMode = {
  isOn: null,
  devMode: null
}

// if(process.env.NODE_ENV === `development`) BetterErrorEnvSupportMode(process)
// _betterErrorSupportMode = process.env[ENVS.supportMode] ?
//                             process.env[ENVS.devMode] ?
//                               {isOn: true, devMode: true} :
//                               {isOn:true, devMode: false} :
//                                 {isOn:false, devMode: false}

const supportModeHandler = (
  origProcess = process,
  tokenShape = { primaryKey: `__BETTER_ERROR__`, devKey: `__BETTER_ERROR_DEV__`},
  defaultMode = false) => {
    let _env = origProcess.env || {}
    let _tknShp = tokenShape
    let _mde = defaultMode

  if(_env[tokenShape.devKey]) {
  	if(process.env.NODE_ENV === `development`) {
  	  let devLogStartMsg = `BETTER ERROR: Running in developer mode!
  	   ** Note **
  	     If you're seeing this, but NOT hacking against the actual Better-Error library,
  	     something is WRONG!
  	     Please, if you don't mind, shoot us a message to let us know?
  	     Here's a link:
  	       -> https://github.com/TheoryLabs/Better-Error/issues/new
         Thank you!
           - love, Management`
      console.log(devLogStartMsg)
  	}
  }

  if(_env[tokenShape.primaryKey]) _mde = _env[tokenShape.primaryKey]

  if(typeof _mde !== 'boolean') {
  	let errMsg = `Expects third argument be type of Boolean. Recieved ${typeof _mde}.`
  	throw Error(errMsg)
  }

  process.env[tokenShape.primaryKey] = _mde

  return
}
