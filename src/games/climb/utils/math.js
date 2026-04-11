export function generateQuestion() {
  const ops = ['+', '-', '*']
  const op = ops[Math.floor(Math.random() * ops.length)]
  let a = Math.floor(Math.random() * 10) + 1
  let b = Math.floor(Math.random() * 10) + 1
  if (op === '-' && b > a) [a, b] = [b, a]
  const answer = op === '+' ? a + b : op === '-' ? a - b : a * b
  return { num1: a, num2: b, operator: op, answer }
}

export function makePlayer(color) {
  return {
    color,
    input: '',
    question: generateQuestion(),
    correctCount: 0,
    lastResult: null,
  }
}
