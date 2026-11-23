import {json,user,redis,fail} from './_shared.js';
function valid(s){return s&&typeof s==='object'&&Array.isArray(s.plots)&&s.plots.length===9&&s.plots.every(p=>p===null||(Number.isInteger(p.type)&&p.type>=0&&p.type<3&&Number.isFinite(p.at)&&typeof p.water==='boolean'))&&['coins','xp','harvests','waterings','selected'].every(k=>Number.isSafeInteger(s[k])&&s[k]>=0&&s[k]<1e9)&&s.selected<3&&typeof s.daily==='string'&&typeof s.decor==='boolean'&&s.claimed&&typeof s.claimed==='object'}
export default async function handler(req,res){
 if(!['GET','PUT'].includes(req.method))return json(res,405,{error:'Method not allowed'});
 try{
  const u=await user(req),key='luckyfarm:v22:'+u.uid;
  if(req.method==='GET'){const raw=await redis(['GET',key]);return json(res,200,{state:raw?JSON.parse(raw):null})}
  const state=req.body?.state;
  if(!valid(state)||JSON.stringify(state).length>15000)return json(res,400,{error:'Dữ liệu nông trại không hợp lệ'});
  await redis(['SET',key,JSON.stringify(state)]);return json(res,200,{ok:true});
 }catch(e){fail(res,e)}
}
