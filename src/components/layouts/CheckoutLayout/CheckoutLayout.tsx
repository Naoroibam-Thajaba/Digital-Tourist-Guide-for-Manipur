import { Link, Outlet } from 'react-router';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { NotImplementedLink } from '../../molecules/NotImplementedLink';
import type { CheckoutLayoutProps } from './CheckoutLayoutProps';

/**
 * CheckoutLayout component for booking and payment flows
 *
 * @param props - Component props
 * @returns CheckoutLayout component
 */
export const CheckoutLayout = ({
	children,
	steps,
	currentStep,
	title,
	onBack,
	className = ''
}: CheckoutLayoutProps) => {
	return (
		<div className={`min-h-screen flex flex-col bg-base-200 ${className}`.trim()}>
			{/* Minimal Header */}
			<header className="bg-base-100 shadow-sm py-4">
				<div className="container mx-auto px-4 flex items-center justify-between">
					{/* Back button / Logo */}
					<div className="flex items-center gap-4">
						{onBack ? (
							<Button
								style="ghost"
								size="sm"
								onClick={onBack}
								className="gap-1"
							>
								<Icon name="arrow_back" size="sm" />
								<span className="hidden sm:inline">Back</span>
							</Button>
						) : (
							<Link to="/" className="flex items-center gap-2 text-primary">
								<Icon name="landscape" size="md" />
								<span className="font-heading font-bold hidden sm:inline">One Manipur Tourism</span>
							</Link>
						)}
					</div>

					{/* Title (centered) */}
					{title && (
						<h1 className="text-lg font-heading font-semibold text-center flex-1 hidden md:block">
							{title}
						</h1>
					)}

					{/* Secure checkout indicator */}
					<div className="flex items-center gap-1 text-success text-sm">
						<Icon name="lock" size="sm" />
						<span className="hidden sm:inline">Secure Checkout</span>
					</div>
				</div>
			</header>

			{/* Progress Stepper */}
			<div className="bg-base-100 border-b border-base-200 py-4">
				<div className="container mx-auto px-4">
					<ul className="steps steps-horizontal w-full max-w-2xl mx-auto">
						{steps.map((step, index) => (
							<li
								key={step}
								className={`step ${index <= currentStep ? 'step-primary' : ''}`}
								data-content={index < currentStep ? '✓' : index + 1}
							>
								<span className="hidden sm:inline">{step}</span>
								<span className="sm:hidden text-xs">{step.slice(0, 4)}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Main Content */}
			<main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
				{/* Mobile Title */}
				{title && (
					<h1 className="text-xl font-heading font-semibold text-center mb-6 md:hidden">
						{title}
					</h1>
				)}

				{children ?? <Outlet />}
			</main>

			{/* Footer */}
			<footer className="bg-base-100 border-t border-base-200 py-4">
				<div className="container mx-auto px-4">
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-base-content/60">
						<div className="flex items-center gap-4">
							<NotImplementedLink feature="Help" className="hover:text-base-content cursor-pointer">Help</NotImplementedLink>
							<NotImplementedLink feature="Terms" className="hover:text-base-content cursor-pointer">Terms</NotImplementedLink>
							<NotImplementedLink feature="Privacy" className="hover:text-base-content cursor-pointer">Privacy</NotImplementedLink>
						</div>
						<div className="flex items-center gap-2">
							<Icon name="verified_user" size="sm" />
							<span>Secure payment powered by Razorpay</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
