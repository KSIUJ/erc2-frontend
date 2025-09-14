/*
 * Stałe dla wszystkich ścieżek routingu w aplikacji
 * Centralne miejsce definiowania URL-i zapobiega duplikacji i błędom literówek
 */
export const ROUTES = {
	// Strony dostępne dla wszystkich
	HOME: "/",
	USER_INFO: "/user-info",

	// Zarządzanie członkami (tylko admin)
	MEMBERS: "/members",
	ADD_MEMBER: "/add-member",
	EXTEND_MEMBERSHIP: "/extend-membership",

	// Zarządzanie systemem (tylko admin)
	ROLES: "/roles",
	ADD_ROLE: "/add-role",
	MAJORS: "/majors",
	ADD_MAJOR: "/add-major",
	PERIODS: "/periods",
	ADD_PERIOD: "/add-period",

	// Zamki (tylko admin)
	LOCKS: "/locks",
	LOCK_LOGS: "/lock-logs",
	REMOTE_UNLOCK: "/remote-unlock",
} as const;

// Typy dla type safety i autouzupełniania
export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
