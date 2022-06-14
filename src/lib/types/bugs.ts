
export type Bug = {
    id: string
    error: any
    domain: string
    message?: string
    custom?: Record<string, any>
    time: number
}

export type NewBug = Omit<Bug, "id" | "time">