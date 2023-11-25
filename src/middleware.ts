import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"]
});

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)"],
// };

// matcher was causing middleware to not be found on home page, found solution below here: https://www.answeroverflow.com/m/1099604152130220052#:~:text=can%20you%20change%20your%20matcher%20to%20this


export const config = {
  matcher: ["/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)", "/"],
};


// original matcher that protects all routes: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]

// USEFUL:

// 1. To make the route accessible to both signed in and signed out users, pass `publicRoutes: ["/"]` to authMiddleware
// 2. To prevent Clerk authentication from running at all, pass `ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/"]` to authMiddleware
// 3. Pass a custom `afterAuth` to authMiddleware, and replace Clerk's default behavior of redirecting unless a route is included in publicRoutes

// 1. To prevent Clerk authentication from protecting (401) the api route, remove the rule matching "/api/trpc/post.hello" from the `apiRoutes` array passed to authMiddleware
// 2. To make the route accessible to both signed in and signed out users, add "/api/trpc/post.hello" to the `publicRoutes` array passed to authMiddleware
// 3. To prevent Clerk authentication from running at all, pass `ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/api/trpc/post.hello"]` to authMiddleware
// 4. Pass a custom `afterAuth` to authMiddleware, and replace Clerk's default behavior of redirecting unless a route is included in publicRoutes