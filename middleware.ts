import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware triggered for path:", request.nextUrl.pathname); // Debug log
  const launchDate = new Date("2025-07-15T12:00:00-07:00").getTime(); // Target launch date
  const now = new Date().getTime();
  const isBeforeLaunch = now < launchDate;
  console.log("Current time:", new Date(now).toLocaleString(), "Launch date:", new Date(launchDate).toLocaleString(), "Is before launch:", isBeforeLaunch);

  // Allow access to the coming soon page regardless of date
  if (request.nextUrl.pathname === "/coming-soon") {
    console.log("Allowing access to /coming-soon");
    return NextResponse.next();
  }

  // Define the protected routes based on your navbar
  const protectedRoutes = ["/", "/projects", "/experience", "/about", "/Jundrel_CV.pdf"];

  // Redirect to coming soon page if the current route is protected and before launch date
  if (isBeforeLaunch && protectedRoutes.includes(request.nextUrl.pathname)) {
    console.log("Redirecting to /coming-soon from:", request.nextUrl.pathname);
    try {
      const response = NextResponse.redirect(new URL("/coming-soon", request.url));
      console.log("Redirect response status:", response.status);
      return response;
    } catch (error) {
      console.error("Redirect failed:", error);
      return NextResponse.next(); // Fallback to avoid 404
    }
  }

  // Allow access to all other routes after launch date
  console.log("Allowing access to:", request.nextUrl.pathname);
  return NextResponse.next();
}

// Configure paths to apply middleware to specific routes
export const config = {
  matcher: [
    "/",
    "/projects",
    "/experience",
    "/about",
    "/Jundrel_CV.pdf",
    "/coming-soon",
  ],
};