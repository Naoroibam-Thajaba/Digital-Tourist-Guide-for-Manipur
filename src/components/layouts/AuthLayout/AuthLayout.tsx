import { Outlet } from 'react-router';
import { Icon } from '../../atoms/Icon';
import { NotImplementedLink } from '../../molecules/NotImplementedLink';
import type { AuthLayoutProps } from './AuthLayoutProps';

/**
 * AuthLayout component for authentication pages
 *
 * Desktop (lg+): 2-column split-screen layout
 * Mobile/Tablet: 1-column layout with logo above form
 *
 * @param props - Component props
 * @returns AuthLayout component
 */
export const AuthLayout = ({
	children,
	className = ''
}: AuthLayoutProps) => {
	return (
		<div className={`min-h-screen flex ${className}`.trim()}>
			{/* Left Panel - Branding (Desktop only) */}
			<div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
				{/* Decorative pattern overlay */}
				<div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>

				{/* Content */}
				<div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-primary-content">
					{/* Logo */}
					<div className="flex items-center gap-3 mb-8">
						<Icon name="landscape" size="xl" className="text-primary-content" />
						<span className="text-3xl font-heading font-bold">One Manipur Tourism</span>
					</div>

					{/* Tagline */}
					<h1 className="text-4xl font-heading font-bold text-center mb-4">
						Discover the Soul of Manipur
					</h1>

					{/* Description */}
					<p className="text-lg text-primary-content/80 text-center max-w-md mb-8">
						Experience authentic homestays, connect with expert local guides,
						and explore handcrafted tribal treasures from the heart of India.
					</p>

					{/* Features */}
					<div className="grid grid-cols-2 gap-6 text-sm">
						<div className="flex items-center gap-2">
							<Icon name="cottage" size="sm" className="text-primary-content/80" />
							<span>500+ Homestays</span>
						</div>
						<div className="flex items-center gap-2">
							<Icon name="person" size="sm" className="text-primary-content/80" />
							<span>200+ Local Guides</span>
						</div>
						<div className="flex items-center gap-2">
							<Icon name="storefront" size="sm" className="text-primary-content/80" />
							<span>Tribal Marketplace</span>
						</div>
						<div className="flex items-center gap-2">
							<Icon name="verified" size="sm" className="text-primary-content/80" />
							<span>Verified Hosts</span>
						</div>
					</div>
				</div>
			</div>

			{/* Right Panel - Form */}
			<div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 md:p-8 bg-base-200">
				{/* Mobile Logo (visible only on mobile/tablet) */}
				<div className="lg:hidden flex items-center gap-2 mb-8">
					<Icon name="landscape" size="lg" className="text-primary" />
					<span className="text-2xl font-heading font-bold text-primary">One Manipur Tourism</span>
				</div>

				{/* Form Card */}
				<div className="card bg-base-100 shadow-xl w-full max-w-md">
					<div className="card-body">
						{/* Form Content - rendered by child route or children prop */}
						{children ?? <Outlet />}
					</div>
				</div>

				{/* Footer Links */}
				<div className="mt-6 text-center text-sm text-base-content/60">
					<p>
						By continuing, you agree to our{' '}
						<NotImplementedLink feature="Terms of Service" className="link link-primary">Terms of Service</NotImplementedLink>
						{' '}and{' '}
						<NotImplementedLink feature="Privacy Policy" className="link link-primary">Privacy Policy</NotImplementedLink>
					</p>
				</div>
			</div>
		</div>
	);
};
