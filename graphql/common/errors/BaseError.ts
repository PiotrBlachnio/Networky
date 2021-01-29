export abstract class BaseError extends Error {
    public abstract readonly id: number
    public abstract readonly message: string;
}