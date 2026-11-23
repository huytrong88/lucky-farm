const PI_ME='https://api.minepi.com/v2/me';
export function json(res,code,data){res.status(code).setHeader('Cache-Control','no-store').json(data)}
export async function user(req){
 const auth=req.headers.authorization||'';
 if(!/^Bearer [A-Za-z0-9._~+\/-]+={0,2}$/.test(auth))throw Object.assign(new Error('Thiếu Pi access token'),{status:401});
 const r=await fetch(PI_ME,{headers:{Authorization:auth},signal:AbortSignal.timeout(9000)});
 if(!r.ok)throw Object.assign(new Error('Pi token không hợp lệ'),{status:401});
 const u=await r.json();if(!u.uid||!u.username)throw Object.assign(new Error('Phản hồi Pi không hợp lệ'),{status:401});return {uid:String(u.uid),username:String(u.username)};
}
export function config(){const url=process.env.UPSTASH_REDIS_REST_URL,token=process.env.UPSTASH_REDIS_REST_TOKEN;if(!url||!token)throw Object.assign(new Error('Chưa cấu hình Upstash Redis trên Vercel'),{status:503});return {url,token}}
export async function redis(cmd){const {url,token}=config();const r=await fetch(url,{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify(cmd),signal:AbortSignal.timeout(9000)});if(!r.ok)throw Object.assign(new Error('Lỗi kho dữ liệu'),{status:502});const j=await r.json();if(j.error)throw Object.assign(new Error('Lỗi Redis'),{status:502});return j.result}
export function fail(res,e){json(res,e.status||500,{error:e.status?e.message:'Lỗi máy chủ'})}
