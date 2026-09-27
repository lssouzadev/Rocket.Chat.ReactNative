# Ice Laser Android white-label

Esta branch parte da branch oficial `single-server` do Rocket.Chat e é destinada ao aplicativo interno da Ice Laser.

## Já configurado

- Nome Android: **Ice Laser**
- Application ID / shared user ID: `com.espacoicelaser.chat`
- Fluxo single-server mantido
- Identidade visual Ice Laser aplicada aos principais destaques e ações
- Splash escuro
- Ícones Android adaptativo, legado e monocromático
- Branding nas telas de workspace/login e no loading interno
- Canal de chamada nativo renomeado
- Firebase opcional para permitir o primeiro build interno

## Pendente antes do uso operacional

1. Substituir `https://replace-me.invalid` em `app.json` pelo subdomínio definitivo do Rocket.Chat.
2. Criar o app Android no Firebase com package `com.espacoicelaser.chat`.
3. Adicionar `android/app/google-services.json` quando formos habilitar push.
4. Configurar o gateway de push do Rocket.Chat com as credenciais Firebase próprias.
5. Configurar assinatura de produção do APK/AAB sem commitar chaves ou senhas.

## Build

```bash
pnpm install
pnpm android
```

Sem `google-services.json`, a primeira versão é destinada a teste interno da mensageria e não depende de push Firebase.
