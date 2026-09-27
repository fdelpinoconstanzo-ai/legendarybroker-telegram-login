import { createRemoteJWKSet, jwtVerify } from 'jose';
const JWKS = createRemoteJWKSet(new URL('https://oauth.telegram.org/.well-known/jwks.json'));
export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'POST only'});
  const { id_token } = req.body || {};
  if(!id_token) return res.status(400).json({error:'missing id_token'});
  try{
    const { payload } = await jwtVerify(id_token, JWKS, { issuer: 'https://oauth.telegram.org', audience: '8688658192' });
    // payload contiene: sub, name, preferred_username, picture, etc.
    return res.json({ ok:true, user: payload });
  }catch(e){
    return res.status(401).json({ ok:false, error: e.message });
  }
}
