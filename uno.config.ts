import { defineConfig } from 'unocss'
import { presetStarlightIcons } from 'starlight-plugin-icons/uno'

export default defineConfig({
  presets: [
    presetStarlightIcons(),
  ],

  safelist: [
    "i-game-icons:biohazard",
    "i-game-icons:bird-claw",
    "i-game-icons:castle",
    "i-game-icons:herbs-bundle",
    "i-game-icons:night-sky",
    "i-game-icons:person",
    "i-game-icons:slingshot",
    "i-game-icons:village",
    "i-game-icons:wolf-howl",
    "i-wi:moon-waning-crescent-3",
    "i-wi:moon-waxing-crescent-4"
  ],
})
