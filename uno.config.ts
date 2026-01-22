import { defineConfig } from 'unocss'
import { presetStarlightIcons } from 'starlight-plugin-icons/uno'

export default defineConfig({
  presets: [
    presetStarlightIcons(),
  ],

  safelist: [
    // game-icons
    'i-game-icons:night-sky',
    'i-game-icons:herbs-bundle',
    'i-game-icons:wolf-howl',
    'i-game-icons:biohazard',
    'i-game-icons:bird-claw',
    'i-game-icons:slingshot',
    'i-game-icons:person',
    'i-game-icons:gold-mine',
    'i-game-icons:castle',

    // weather icons
    'i-wi:moon-waning-crescent-3',
    'i-wi:moon-waxing-crescent-4',
  ],
})
