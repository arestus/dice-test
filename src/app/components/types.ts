interface ResultHistory {
  time: string;
  guess: string;
  result: string;
}

type AlertMessage = "success" | "error";

export type { ResultHistory, AlertMessage };
