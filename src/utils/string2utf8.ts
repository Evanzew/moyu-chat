import iconv from 'iconv-lite'

export function string2utf8(str: string | undefined) {
  if (str === undefined)
    return undefined

  // eslint-disable-next-line n/prefer-global/buffer
  return iconv.decode(Buffer.from(str as string, 'binary'), 'gbk')
}
