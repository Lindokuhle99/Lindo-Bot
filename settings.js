const settings = {
  packname: 'LindoBot',
  author: '‎',
  botName: "Lindo Bot",
  botOwner: 'Lindokuhle Designs', // Your name
  ownerNumber: '27694744342', //Set your number here without + symbol, just add country code & number without any space
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: "public",
  maxStoreMessages: 20, 
  storeWriteInterval: 10000,
  description: "This is a bot for managing group commands and automating tasks.",
  version: "4.0.0",
  // Leave empty so .update can never overwrite your bot with someone else's code.
  // (If your server has a .git folder, .update pulls from YOUR repo instead.)
  updateZipUrl: "",
  channelLink: "",   // your WhatsApp channel link (optional) - shown in .menu
  supportLink: "",   // your support group link (optional)
  githubRepo: "",    // e.g. "yourusername/LindoBot" - used by .repo / .git
  maxSongMinutes: 25, // .play / .song refuse anything longer (protects RAM)
  aboutText: "🤖 *Lindo Bot* 🇿🇦\nBuilt by *Lindokuhle Designs* — graphic design & web.\nPart of the *Own Your Story* student mentorship movement.\nType *.menu* to see what I can do.",
};

module.exports = settings;
