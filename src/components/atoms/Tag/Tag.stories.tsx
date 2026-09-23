import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';
import { useState } from 'react';

const meta = {
	title: 'Atoms/Tag',
	component: Tag,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			description: 'Size of the tag',
		},
		variant: {
			control: 'select',
			options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
			description: 'Color variant of the tag',
		},
		tagStyle: {
			control: 'select',
			options: ['default', 'outline', 'soft', 'ghost'],
			description: 'Style variant of the tag',
		},
		dismissible: {
			control: 'boolean',
			description: 'Show dismiss button',
		},
		interactive: {
			control: 'boolean',
			description: 'Make tag clickable',
		},
	},
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Tag
export const Default: Story = {};

// Sizes
export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Tag size="xs">Extra Small</Tag>
			<Tag size="sm">Small</Tag>
			<Tag size="md">Medium</Tag>
			<Tag size="lg">Large</Tag>
			<Tag size="xl">Extra Large</Tag>
		</div>
	),
};

// Colors
export const Colors: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Tag variant="primary">Primary</Tag>
			<Tag variant="secondary">Secondary</Tag>
			<Tag variant="accent">Accent</Tag>
			<Tag variant="neutral">Neutral</Tag>
			<Tag variant="info">Info</Tag>
			<Tag variant="success">Success</Tag>
			<Tag variant="warning">Warning</Tag>
			<Tag variant="error">Error</Tag>
		</div>
	),
};

// Soft Style
export const SoftStyle: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Tag tagStyle="soft" variant="primary">Primary</Tag>
			<Tag tagStyle="soft" variant="secondary">Secondary</Tag>
			<Tag tagStyle="soft" variant="accent">Accent</Tag>
			<Tag tagStyle="soft" variant="info">Info</Tag>
			<Tag tagStyle="soft" variant="success">Success</Tag>
			<Tag tagStyle="soft" variant="warning">Warning</Tag>
			<Tag tagStyle="soft" variant="error">Error</Tag>
		</div>
	),
};

// Outline Style
export const OutlineStyle: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Tag tagStyle="outline" variant="primary">Primary</Tag>
			<Tag tagStyle="outline" variant="secondary">Secondary</Tag>
			<Tag tagStyle="outline" variant="accent">Accent</Tag>
			<Tag tagStyle="outline" variant="info">Info</Tag>
			<Tag tagStyle="outline" variant="success">Success</Tag>
			<Tag tagStyle="outline" variant="warning">Warning</Tag>
			<Tag tagStyle="outline" variant="error">Error</Tag>
		</div>
	),
};

// Dismissible Tags
export const Dismissible: Story = {
	args: {},
	render: () => {
		const DismissibleDemo = () => {
			const [tags, setTags] = useState(['React', 'TypeScript', 'Next.js', 'Tailwind CSS']);

			return (
				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<Tag
							key={tag}
							dismissible
							variant="primary"
							onDismiss={() => setTags(tags.filter((t) => t !== tag))}
						>
							{tag}
						</Tag>
					))}
				</div>
			);
		};

		return <DismissibleDemo />;
	},
};

// Interactive Tags
export const Interactive: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Tag interactive variant="primary" onClick={() => alert('Primary clicked')}>
				Click me
			</Tag>
			<Tag interactive variant="secondary" onClick={() => alert('Secondary clicked')}>
				Click me
			</Tag>
			<Tag interactive variant="accent" onClick={() => alert('Accent clicked')}>
				Click me
			</Tag>
		</div>
	),
};

// Technology Tags
export const TechnologyTags: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Tag tagStyle="soft" variant="primary">React</Tag>
			<Tag tagStyle="soft" variant="info">TypeScript</Tag>
			<Tag tagStyle="soft" variant="secondary">Next.js</Tag>
			<Tag tagStyle="soft" variant="accent">Tailwind CSS</Tag>
			<Tag tagStyle="soft" variant="success">Node.js</Tag>
			<Tag tagStyle="soft" variant="warning">JavaScript</Tag>
		</div>
	),
};

// Status Tags
export const StatusTags: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Tag variant="success">Active</Tag>
			<Tag variant="warning">Pending</Tag>
			<Tag variant="error">Inactive</Tag>
			<Tag variant="info">Draft</Tag>
			<Tag variant="primary">Published</Tag>
		</div>
	),
};

// Tags with Icons
export const WithIcons: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Tag variant="success">
				<svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
						<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></circle>
						<polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></polyline>
					</g>
				</svg>
				Verified
			</Tag>
			<Tag variant="info">
				<svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
						<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></circle>
						<path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path>
						<circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="2"></circle>
					</g>
				</svg>
				New
			</Tag>
			<Tag variant="warning">
				<svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
					<g fill="currentColor">
						<path d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
						<line x1="9" y1="6.5" x2="9" y2="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line>
						<path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" stroke="none"></path>
					</g>
				</svg>
				Alert
			</Tag>
		</div>
	),
};

// Dismissible with Different Colors
export const DismissibleColors: Story = {
	args: {},
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Tag dismissible variant="primary" onDismiss={() => {}}>Primary</Tag>
			<Tag dismissible variant="secondary" onDismiss={() => {}}>Secondary</Tag>
			<Tag dismissible variant="accent" onDismiss={() => {}}>Accent</Tag>
			<Tag dismissible variant="info" onDismiss={() => {}}>Info</Tag>
			<Tag dismissible variant="success" onDismiss={() => {}}>Success</Tag>
			<Tag dismissible variant="warning" onDismiss={() => {}}>Warning</Tag>
			<Tag dismissible variant="error" onDismiss={() => {}}>Error</Tag>
		</div>
	),
};

// Tag Group Example
export const TagGroup: Story = {
	args: {},
	render: () => (
		<div className="space-y-4">
			<div>
				<h3 className="text-sm font-semibold mb-2">Skills</h3>
				<div className="flex flex-wrap gap-2">
					<Tag tagStyle="soft" variant="primary">React</Tag>
					<Tag tagStyle="soft" variant="primary">Vue</Tag>
					<Tag tagStyle="soft" variant="primary">Angular</Tag>
					<Tag tagStyle="soft" variant="primary">Svelte</Tag>
				</div>
			</div>
			<div>
				<h3 className="text-sm font-semibold mb-2">Interests</h3>
				<div className="flex flex-wrap gap-2">
					<Tag tagStyle="outline" variant="secondary">Design</Tag>
					<Tag tagStyle="outline" variant="secondary">Development</Tag>
					<Tag tagStyle="outline" variant="secondary">Photography</Tag>
					<Tag tagStyle="outline" variant="secondary">Travel</Tag>
				</div>
			</div>
		</div>
	),
};

// Tag Input Simulation
export const TagInput: Story = {
	args: {},
	render: () => {
		const TagInputDemo = () => {
			const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind CSS']);
			const [input, setInput] = useState('');

			const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
				if (e.key === 'Enter' && input.trim()) {
					e.preventDefault();
					setTags([...tags, input.trim()]);
					setInput('');
				} else if (e.key === 'Backspace' && !input && tags.length > 0) {
					setTags(tags.slice(0, -1));
				}
			};

			return (
				<div className="w-96">
					<div className="border border-base-300 rounded-lg p-2 flex flex-wrap gap-2">
						{tags.map((tag, index) => (
							<Tag
								key={index}
								dismissible
								variant="primary"
								size="sm"
								onDismiss={() => setTags(tags.filter((_, i) => i !== index))}
							>
								{tag}
							</Tag>
						))}
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKeyDown}
							placeholder="Add tag..."
							className="flex-1 min-w-[100px] outline-none bg-transparent text-sm"
						/>
					</div>
					<p className="text-xs text-gray-500 mt-2">
						Press Enter to add, Backspace to remove
					</p>
				</div>
			);
		};

		return <TagInputDemo />;
	},
};

// Filter Tags
export const FilterTags: Story = {
	args: {},
	render: () => {
		const FilterDemo = () => {
			const [selected, setSelected] = useState<string[]>(['all']);

			const filters = ['all', 'active', 'pending', 'completed', 'archived'];

			const toggleFilter = (filter: string) => {
				if (filter === 'all') {
					setSelected(['all']);
				} else {
					const newSelected = selected.includes(filter)
						? selected.filter((f) => f !== filter)
						: [...selected.filter((f) => f !== 'all'), filter];
					setSelected(newSelected.length === 0 ? ['all'] : newSelected);
				}
			};

			return (
				<div className="flex flex-wrap gap-2">
					{filters.map((filter) => (
						<Tag
							key={filter}
							interactive
							variant={selected.includes(filter) ? 'primary' : undefined}
							tagStyle={selected.includes(filter) ? 'default' : 'outline'}
							onClick={() => toggleFilter(filter)}
						>
							{filter.charAt(0).toUpperCase() + filter.slice(1)}
						</Tag>
					))}
				</div>
			);
		};

		return <FilterDemo />;
	},
};
