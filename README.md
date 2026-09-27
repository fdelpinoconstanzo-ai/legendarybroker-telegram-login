# legendarybroker-telegram-login

Login con Telegram para legendarybroker.cl — widget + verificación JWT.

## Deploy en Vercel (1 click)

1. `vercel` o importa el repo en vercel.com
2. No necesitas env vars (usa JWKS público)
3. En @BotFather → Login Widget agrega:
   - https://tu-dominio.vercel.app
   - https://tu-dominio.vercel.app/auth/callback (si usas OIDC)

## Probar local

npm i && vercel dev
