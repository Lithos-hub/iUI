import { TAILWIND_COLORS } from '@/constants/colors'
import { ColorName, TailwindColors } from '@/interfaces'

export const getTailwindColor = (color: ColorName, shade?: string | number): string => {
    if (color === "black" || color === "white") return TAILWIND_COLORS[color] as string;

    const colorValue = TAILWIND_COLORS[color] as TailwindColors
    return colorValue[(shade ? shade.toString() : "500") as keyof typeof colorValue] as string
    }