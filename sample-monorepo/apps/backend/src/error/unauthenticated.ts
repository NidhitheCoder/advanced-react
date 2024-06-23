export class UnauthenticatedError extends Error {
  statusCode?: number;

  constructor(message: string) {
    super(message);
  }
}
