const AudioCtx =
  typeof window !== 'undefined'
    ? window.AudioContext || window.webkitAudioContext
    : null

let _ctx = null

function getCtx() {
  if (!AudioCtx) return null
  if (!_ctx) _ctx = new AudioCtx()
  if (_ctx.state === 'suspended') _ctx.resume()
  return _ctx
}

function playTone({
  freq = 440,
  type = 'sine',
  gain = 0.35,
  duration = 0.12,
  delay = 0,
}) {
  const ctx = getCtx()
  if (!ctx) return
  const osc = ctx.createOscillator()
  const vol = ctx.createGain()
  osc.connect(vol)
  vol.connect(ctx.destination)
  osc.type = type
  osc.frequency.setValueAtTime(freq, ctx.currentTime + delay)
  vol.gain.setValueAtTime(gain, ctx.currentTime + delay)
  vol.gain.exponentialRampToValueAtTime(
    0.001,
    ctx.currentTime + delay + duration,
  )
  osc.start(ctx.currentTime + delay)
  osc.stop(ctx.currentTime + delay + duration + 0.02)
}

export const Sounds = {
  keyTap() {
    playTone({ freq: 880, type: 'triangle', gain: 0.15, duration: 0.06 })
  },

  clear() {
    playTone({ freq: 660, type: 'sine', gain: 0.16, duration: 0.07 })
    playTone({ freq: 440, type: 'sine', gain: 0.12, duration: 0.07, delay: 0.06 })
  },

  correct() {
    playTone({ freq: 523, type: 'triangle', gain: 0.32, duration: 0.14 })
    playTone({ freq: 784, type: 'triangle', gain: 0.32, duration: 0.18, delay: 0.11 })
  },

  wrong() {
    playTone({ freq: 220, type: 'sawtooth', gain: 0.22, duration: 0.09 })
    playTone({ freq: 175, type: 'sawtooth', gain: 0.18, duration: 0.11, delay: 0.08 })
  },

  climb() {
    playTone({ freq: 140, type: 'sine', gain: 0.28, duration: 0.16 })
    playTone({ freq: 280, type: 'triangle', gain: 0.1, duration: 0.09, delay: 0.05 })
  },

  win() {
    ;[523, 659, 784, 1047].forEach((f, i) => {
      playTone({ freq: f, type: 'triangle', gain: 0.36, duration: 0.22, delay: i * 0.13 })
      playTone({ freq: f * 1.5, type: 'sine', gain: 0.1, duration: 0.16, delay: i * 0.13 })
    })
    ;[1200, 1450, 1700].forEach((f, i) =>
      playTone({ freq: f, type: 'sine', gain: 0.09, duration: 0.1, delay: 0.58 + i * 0.07 }),
    )
  },

  fullscreen() {
    playTone({ freq: 440, type: 'sine', gain: 0.18, duration: 0.08 })
    playTone({ freq: 700, type: 'sine', gain: 0.12, duration: 0.14, delay: 0.07 })
  },
}
