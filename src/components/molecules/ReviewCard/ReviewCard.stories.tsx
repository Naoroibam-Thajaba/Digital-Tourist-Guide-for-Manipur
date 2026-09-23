import type { Meta, StoryObj } from '@storybook/react';
import { ReviewCard } from './ReviewCard';

const meta = {
	title: 'Molecules/ReviewCard',
	component: ReviewCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		author: {
			control: 'text',
			description: 'Name of the review author',
		},
		rating: {
			control: { type: 'number', min: 0, max: 5, step: 0.5 },
			description: 'Rating value (1-5, can be decimal for half stars)',
		},
		content: {
			control: 'text',
			description: 'Review content text',
		},
		date: {
			control: 'text',
			description: 'Review date',
		},
		avatarSrc: {
			control: 'text',
			description: 'Optional avatar image URL',
		},
		avatarPlaceholder: {
			control: 'text',
			description: 'Optional avatar placeholder (e.g., initials)',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
	},
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		author: 'John Doe',
		rating: 4,
		content: 'Great place to stay! The hospitality was amazing and the location was perfect. Would definitely recommend to anyone visiting the area.',
		date: '2025-01-15',
	},
};

export const WithAvatar: Story = {
	args: {
		author: 'Jane Smith',
		avatarSrc: 'https://i.pravatar.cc/150?img=1',
		rating: 5,
		content: 'Wonderful experience! The hosts were incredibly welcoming and made our stay memorable. The rooms were clean and comfortable.',
		date: '2025-01-10',
	},
};

export const WithCustomPlaceholder: Story = {
	args: {
		author: 'Robert Johnson',
		avatarPlaceholder: 'RJ',
		rating: 4.5,
		content: 'Very good homestay with excellent amenities. The food was delicious and authentic. Minor issues with Wi-Fi connectivity.',
		date: '2024-12-28',
	},
};

export const LowRating: Story = {
	args: {
		author: 'Alice Brown',
		rating: 2,
		content: 'The location was nice but there were some maintenance issues. The staff tried their best to resolve the problems.',
		date: '2024-12-15',
	},
};

export const LongReview: Story = {
	args: {
		author: 'Michael Chen',
		avatarSrc: 'https://i.pravatar.cc/150?img=12',
		rating: 5,
		content: 'This was hands down the best homestay experience we have ever had. The hosts went above and beyond to make our stay comfortable. The breakfast was incredible with a variety of local dishes. The rooms were spotlessly clean and beautifully decorated with traditional touches. The location offered stunning views of the surrounding hills. We spent our evenings on the terrace enjoying the peaceful atmosphere. Highly recommend for families and couples alike. We will definitely be returning!',
		date: '2025-01-01',
	},
};

export const RecentReview: Story = {
	args: {
		author: 'Sarah Williams',
		avatarPlaceholder: 'SW',
		rating: 4.5,
		content: 'Just checked out yesterday. Amazing place with friendly staff and great food. Will come back again!',
		date: new Date().toISOString(),
	},
};
