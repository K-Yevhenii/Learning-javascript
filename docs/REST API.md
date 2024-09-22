# REST API

## Glossary

**Idempotence** - a feature when a method has the same result regardless amount of times called. GET, PUT, and DELETE are idempotent.

**Upsert** - used for PUT method when:

- a single entity matched by certain criteria (typically by id), it is updated.
- no entity matched by certain criteria, it is created.
- multiple entities matched, an error is thrown.

## Status codes

| Code              | Name                  | Description                                                                           |
| ----------------- | --------------------- | ------------------------------------------------------------------------------------- |
| **Success**       |
| 200               | Success               |                                                                                       |
| 201               | Created               |                                                                                       |
| 204               | No content            | Used for delete                                                                       |
| **Redirects**     |
| 301               | Permanent redirect    |                                                                                       |
| 302               | Temporary redirect    |                                                                                       |
| **Client errors** |
| 400               | Bad request           | Insufficient data provided by user or data is wrong type                              |
| 401               | Unauthorized          |                                                                                       |
| 403               | Forbidden             | A user is authenticated but has not enough permissions                                |
| 404               | Not found             |                                                                                       |
| 405               | Method not allowed    | E.g. an endpoint allows calls to GET, not POST                                        |
| 409               | Conflict              | Cannot perform an action due to error in business logic                               |
| 422               | Unprocessable entity  | Data is valid but cannot be processed by server (e.g. due to uniqueness requirements) |
| **Server errors** |
| 500               | Internal server error |                                                                                       |
