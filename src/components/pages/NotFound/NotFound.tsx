import { Link, useNavigate } from 'react-router';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';
import type { NotFoundProps, QuickLink } from './NotFoundProps';

// Default quick links
const defaultQuickLinks: QuickLink[] = [
	{ label: 'Homestays', href: '/homestays', icon: 'home' },
	{ label: 'Local Guides', href: '/guides', icon: 'person_pin' },
	{ label: 'Marketplace', href: '/marketplace', icon: 'storefront' },
	{ label: 'Search', href: '/search', icon: 'search' },
];

/**
 * NotFound page component for 404 errors
 */
export const NotFound = ({
	title = 'Page Not Found',
	description = "Oops! The page you're looking for seems to have wandered off into the Manipur wilderness.",
	homeUrl = '/',
	quickLinks = defaultQuickLinks,
	className = '',
}: NotFoundProps) => {
	const navigate = useNavigate();

	return (
		<div className={`min-h-[60vh] flex items-center justify-center p-4 ${className}`.trim()}>
			<div className="text-center max-w-lg">
				{/* 404 Illustration */}
				<div className="relative mb-8">
					{/* Background decorative element */}
					<div className="absolute inset-0 flex items-center justify-center opacity-5">
						<span className="text-[200px] font-bold">404</span>
					</div>

					{/* Main icon */}
					<div className="relative z-10 inline-flex items-center justify-center w-32 h-32 rounded-full bg-base-200">
						<Icon name="explore_off" className="text-6xl text-primary" />
					</div>
				</div>

				{/* Error Code */}
				<p className="text-primary font-bold text-sm tracking-wider mb-2">
					ERROR 404
				</p>

				{/* Title */}
				<h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
					{title}
				</h1>

				{/* Description */}
				<p className="text-base-content/60 mb-8 max-w-md mx-auto">
					{description}
				</p>

				{/* Primary Action */}
				<div className="mb-8">
					<Button
						variant="primary"
						size="lg"
						onClick={() => navigate(homeUrl)}
					>
						<Icon name="home" size="sm" />
						Back to Home
					</Button>
				</div>

				{/* Quick Links */}
				{quickLinks.length > 0 && (
					<div>
						<p className="text-sm text-base-content/60 mb-4">
							Or try one of these popular pages:
						</p>
						<div className="flex flex-wrap justify-center gap-2">
							{quickLinks.map((link) => (
								<Link
									key={link.href}
									to={link.href}
									className="btn btn-ghost btn-sm gap-1"
								>
									{link.icon && <Icon name={link.icon} size="xs" />}
									{link.label}
								</Link>
							))}
						</div>
					</div>
				)}

				{/* Fun message */}
				<div className="mt-12 p-4 bg-base-200 rounded-lg">
					<p className="text-sm text-base-content/60">
						<Icon name="lightbulb" size="sm" className="inline-block mr-1 text-warning" />
						<strong>Did you know?</strong> Manipur means &ldquo;Land of Forests&rdquo; and is home to over 30 tribal communities!
					</p>
				</div>
			</div>
		</div>
	);
};
