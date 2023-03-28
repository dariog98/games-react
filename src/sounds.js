import click from './assets/mixkit-game-ball-tap-2073.wav'
import fail from './assets/mixkit-player-losing-or-failing-2042.wav'
import gameover from './assets/mixkit-game-level-completed-2059.wav'

const clickSound = new Audio(click)
const failSound = new Audio(fail)
const gameoverSound = new Audio(gameover)

export {
    clickSound,
    failSound,
    gameoverSound
}
