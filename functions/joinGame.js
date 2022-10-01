import * as Repo from "./repo.js"
const stytch = require("stytch");
export async function onRequestPost(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
    
    const client = new stytch.Client({
    project_id: "project-test-9f5ef6ac-4e18-46a1-8296-bb8dc7d02c74",
    secret: "secret-test-3touIgg-eB22rSnLNPOFkOUQarIlbUMljCQ=",
    env: stytch.envs.test,
    });
    let user = {};
    let gameCode = 'beta'
    const formData = await request.formData();
    const usr = {};
    for (const entry of formData.entries()) {
      usr[entry[0]] = entry[1];
    }
    console.log(usr)
    //Get Users from database
    const users = await env.GUSERS.get();
    user = Repo.getOrCreateUser({firstName: usr.firstName, lastName: usr.lastName},req.server.app.users);
  

//   let game = Repo.getGame(gameCode, req.server.app.games);
//   if(!game){
//     game = Repo.createGame(Table(), gameConfig, gameCode, req.server.app.games);
//   }

    const body = JSON.stringify({body:"Hello World"})
    const headers = { 'Content-type': 'application/json' }
    return new Response(body, { headers })
    // return new Response();
  }