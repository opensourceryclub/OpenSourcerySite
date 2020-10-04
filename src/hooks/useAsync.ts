import { useCallback, useEffect, useState } from "react"

export type Status = "idle" | "loading" | "success" | "error";

// TODO find a better name for this
export interface AsyncHookPayload<T, E = string> {

    /**
     * Executes the async function. You will need to call this if the `immediate`
     * parameter was set to `false`
     */
    execute: () => Promise<void>

    /**
     * The status of the executing async function. This can take one of four values:
     * 
     * - `idle`    - `execute()` has not been invoked yet
     * - `loading` - `execute()` has been invoked, and the async function is executing/has not resolved.
     * - `success` -  Execution as completed successfully, and `value` has been set to the result
     * - `error`   -  Execution has completed unsuccessfully, and `error` has been set to whatever error was thrown.
     */
    status: Status

    /**
     * The value the async function resolved to. If execution has not finished
     * or was not successful, `value` is null.
     */
    value: T | null

    /**
     * The error object, if any, the async function threw/rejected. If it did
     * not reject, then `error` is null.
     */
    error: E | null
}

/**
 * 
 * @param asyncFunction The async function to call.
 * @param immediate Whether `asyncFunction` should be called immediately. If `false`,
 * you will need to invoke `execute()` manually. Defaults to true.
 * 
 * @returns An `AsyncHookPayload` containing state data, etc. Refer to it for
 * more details.
 * 
 * @see AsyncHookPayload
 */
export const useAsync = <T, E = string>(
    asyncFunction: () => Promise<T>,
    immediate = true
): AsyncHookPayload<T, E> => {
    const [ status, setStatus ] = useState<Status>("idle")
    const [ value, setValue ] = useState<T | null>(null)
    const [ error, setError ] = useState<E | null>(null)

    // The execute function wraps asyncFunction and
    // handles setting state for pending, value, and error.
    // useCallback ensures the below useEffect is not called
    // on every render, but only if asyncFunction changes.
    const execute = useCallback(() => {
        setStatus("loading")
        setValue(null)
        setError(null)

        return asyncFunction()
            .then(response => {
                setValue(response)
                setStatus("success")
            })
            .catch(error => {
                setError(error)
                setStatus("error")
            })
    }, [ asyncFunction ])

    // Call execute if we want to fire it right away.
    // Otherwise execute can be called later, such as
    // in an onClick handler.
    useEffect(() => {
        if (immediate) {
            execute()
        }
    }, [ execute, immediate ])

    return { execute, status, value, error }
}
