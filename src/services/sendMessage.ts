import { log } from 'wechaty'
import type { Wechaty } from 'wechaty'

export async function sendContactMsg(bot: Wechaty, content: string, alias?: string, name?: string) {
  let query: Record<string, string> = {}
  if (alias)
    query = { alias }
  else if (name)
    query = { name }

  try {
    const contact = await bot.Contact.find(query)
    if (contact)
      contact.say(content)
  }
  catch (error) {
    log.error('发送联系人信息错误')
  }
}

export async function sendRoomMsg(bot: Wechaty, content: string, topic: string) {
  try {
    const room = await bot.Room.find({ topic })

    if (room)
      room.say(content)
  }
  catch (error) {
    log.error('发送群信息错误')
  }
}
