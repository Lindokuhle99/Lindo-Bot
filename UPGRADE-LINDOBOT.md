# Lindo Bot upgrade (Knightbot-MD → Lindo Bot 4.0)

## How to apply (GitHub → KataBump)
1. Unzip this overlay **over the root of your repo** (the folder that contains `index.js`, `main.js`, `settings.js`) and let it replace files.
2. Open `settings.js` and check: `ownerNumber`, and optionally fill `channelLink`, `supportLink`, `githubRepo`.
3. Commit + push:
   ```
   git add -A
   git commit -m "Lindo Bot 4.0: WCG, Connect 4, flags, banword, economy, new menu, SA time"
   git push
   ```
4. Re-deploy / restart the server on KataBump. No new npm packages are needed.
5. In WhatsApp send `.menu`, then `.wcg` in a group to test.

## New commands
Games: `.wcg [cap]` `.flag [n] [africa]` `.c4` `.c4 bot` `.math` `.slots` `.rps` `.dice` `.flip` `.wyr`
Economy (Rands): `.balance` `.daily` `.weekly` `.work` `.transfer` `.leaderboard` `.profile`
Music: `.play` / `.song` (cover art + audio, 4-source fallback)
Group: `.afk` `.poll` `.link` `.couple`
Owner: `.banword` `.broadcast` `.join` `.leave` `.block` `.unblock` `.banchat` `.unbanchat` `.listgroups` `.stats` `.restart` `.setbio`
Menu: `.menu`, `.menu games`, `.menu all`, `.about`

## Not included on purpose
- `.eval` / `.exec` (remote code execution for anyone who ever becomes sudo)
- Anything from LINDO-KANGO-XMD-LITE (fully obfuscated code; see notes in chat)
- NSFW plugins
