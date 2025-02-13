export function detectMisconduct(text: string): boolean {
  const inappropriateWords = ["abuse", "hate", "violence", "threat"]
  return inappropriateWords.some((word) => text.toLowerCase().includes(word))
}

