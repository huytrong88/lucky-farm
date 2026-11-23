import {json,user,fail} from './_shared.js';
export default async function handler(req,res){if(req.method!=='GET')return json(res,405,{error:'Method not allowed'});try{json(res,200,await user(req))}catch(e){fail(res,e)}}
