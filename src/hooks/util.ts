export const throws = (err: any) => {
    if (err instanceof Error) {
        throw err;
    } else {
        throw new Error(err)
    }
}
