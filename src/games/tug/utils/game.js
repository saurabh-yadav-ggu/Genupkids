export function generateQuestion() {
  const ops = ["+", "-", "×"];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let n1 = Math.floor(Math.random() * 10) + 1;
  let n2 = Math.floor(Math.random() * 10) + 1;
  if (op === "-" && n2 > n1) [n1, n2] = [n2, n1];
  const answer = op === "+" ? n1 + n2 : op === "-" ? n1 - n2 : n1 * n2;
  return { n1, n2, op, answer };
}
export const initPlayer = () => ({ score:0, input:"", question:generateQuestion(), flash:false, shake:false });
