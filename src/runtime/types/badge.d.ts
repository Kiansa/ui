import type { AppConfig } from 'nuxt/schema'
import type { badge } from '../ui.config'
import type { NestedKeyOf, ExtractDeepKey, ExtractDeepObject } from '.'
import type colors from '#ui-colors'

export type BadgeSize = keyof typeof badge.size | ExtractDeepKey<AppConfig, ['ui', 'badge', 'size']>
export type BadgeColor = keyof typeof badge.color | ExtractDeepKey<AppConfig, ['ui', 'badge', 'color']> | typeof colors[number]
export type BadgeVariant = keyof typeof badge.variant | ExtractDeepKey<AppConfig, ['ui', 'badge', 'variant']> | NestedKeyOf<typeof badge.color> | NestedKeyOf<ExtractDeepObject<AppConfig, ['ui', 'badge', 'color']>>

export interface Badge {
  label?: string
  size?: BadgeSize
  color?: BadgeColor
  variant?: BadgeVariant
}
