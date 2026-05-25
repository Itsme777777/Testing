import { Bot } from "grammy"

const bot = new Bot(process.env.BOT_TOKEN)

// Reply to every message
bot.on("message", async (ctx) => {
  await ctx.reply("Hello bot is online 🚀")
})

// Telegram webhook
export async function POST(req) {

  const update = await req.json()

  await bot.handleUpdate(update)

  return Response.json({
    success: true
  })
}

// Browser test
export async function GET() {

  return Response.json({
    status: "Bot is running"
  })
}
