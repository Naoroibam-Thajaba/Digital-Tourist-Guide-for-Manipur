/**
 * AuthLayout component for authentication pages
 *
 * Features a 2-column split-screen layout on desktop (lg+) and
 * single column layout on mobile/tablet devices.
 *
 * @component
 * @example
 * // Used as a route layout element
 * <Route element={<AuthLayout />}>
 *   <Route path="login" element={<Login />} />
 *   <Route path="register" element={<Register />} />
 * </Route>
 *
 * @example
 * // Direct usage with children
 * <AuthLayout>
 *   <LoginForm />
 * </AuthLayout>
 */

export interface AuthLayoutProps {
	/** Form content (optional when using with React Router Outlet) */
	children?: React.ReactNode;
	/** Additional CSS classes */
	className?: string;
}
