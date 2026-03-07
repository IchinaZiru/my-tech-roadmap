import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * shadcn/ui が全コンポーネントで使うユーティリティ関数。
 * clsx でクラスを結合し、tailwind-merge で重複クラスを解決する。
 *
 * 例: cn("px-4 py-2", isActive && "bg-blue-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
