import type { NotImplementedLinkProps } from './NotImplementedLinkProps';
import { useToast } from '../../../context/ToastContext';

export const NotImplementedLink = ({
	feature,
	children,
	className = '',
	as: Component = 'a',
}: NotImplementedLinkProps) => {
	const { showNotImplemented } = useToast();

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		showNotImplemented(feature);
	};

	return (
		<Component
			href="#"
			className={className}
			onClick={handleClick}
			role={Component === 'span' ? 'button' : undefined}
			tabIndex={Component === 'span' ? 0 : undefined}
			onKeyDown={
				Component === 'span'
					? (e: React.KeyboardEvent) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								showNotImplemented(feature);
							}
						}
					: undefined
			}
		>
			{children}
		</Component>
	);
};
