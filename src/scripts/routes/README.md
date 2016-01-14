Custom route attributes:

* status - HTTP response status code (used with SSR)
* requireAuth - redirect to `/sign-in` if user is not authenticated
* requireUnauth - redirect back to app home page if user is already authenticated
* requireRoles - redirect to `/forbidden` if user doesn't have one of the required roles
