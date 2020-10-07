export const throws = <T extends Error | string | undefined>(err: T): never => {
    if (err instanceof Error) {
        throw err
    } else {
        throw new Error(err as string | undefined)
    }
}
