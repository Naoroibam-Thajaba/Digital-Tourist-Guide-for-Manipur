import { useState, useEffect } from 'react';
import { Icon } from '../../atoms/Icon';
import type { DatePickerProps, DateRange } from './DatePickerProps';

/**
 * DatePicker component for date range selection
 *
 * @param props - Component props
 * @returns DatePicker component
 */
export const DatePicker = ({
	value,
	onChange,
	minDate,
	maxDate,
	startLabel = 'Check-in',
	endLabel = 'Check-out',
	error,
	disabled = false,
	className = ''
}: DatePickerProps) => {
	// Internal state for uncontrolled mode
	const [internalValue, setInternalValue] = useState<DateRange>({
		startDate: null,
		endDate: null
	});

	// Use controlled or uncontrolled value
	const dateRange = value !== undefined ? value : internalValue;

	// Update internal value when controlled value changes
	useEffect(() => {
		if (value !== undefined) {
			setInternalValue(value);
		}
	}, [value]);

	// Format date to YYYY-MM-DD for input value
	const formatDateForInput = (date: Date | null): string => {
		if (!date) return '';
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	// Parse date string from input
	const parseDateFromInput = (dateString: string): Date | null => {
		if (!dateString) return null;
		const [year, month, day] = dateString.split('-').map(Number);
		return new Date(year, month - 1, day);
	};

	// Handle start date change
	const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newStartDate = parseDateFromInput(e.target.value);
		const newRange: DateRange = {
			startDate: newStartDate,
			endDate: dateRange.endDate
		};

		// If end date is before start date, clear it
		if (newStartDate && dateRange.endDate && newStartDate > dateRange.endDate) {
			newRange.endDate = null;
		}

		if (value === undefined) {
			setInternalValue(newRange);
		}
		onChange?.(newRange);
	};

	// Handle end date change
	const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newEndDate = parseDateFromInput(e.target.value);
		const newRange: DateRange = {
			startDate: dateRange.startDate,
			endDate: newEndDate
		};

		if (value === undefined) {
			setInternalValue(newRange);
		}
		onChange?.(newRange);
	};

	// Calculate min/max for inputs
	const minDateStr = minDate ? formatDateForInput(minDate) : undefined;
	const maxDateStr = maxDate ? formatDateForInput(maxDate) : undefined;
	const startDateStr = formatDateForInput(dateRange.startDate);
	const endDateStr = formatDateForInput(dateRange.endDate);

	// Input classes
	const inputClasses = [
		'input',
		'input-bordered',
		'w-full',
		'flex',
		'items-center',
		'gap-2',
		error && 'input-error'
	].filter(Boolean).join(' ');

	return (
		<div className={`space-y-2 ${className}`.trim()}>
			<div className="flex flex-col sm:flex-row gap-2">
				{/* Start date field */}
				<fieldset className="fieldset flex-1">
					<legend className="fieldset-legend">{startLabel}</legend>
					<label className={inputClasses}>
						<Icon
							name="calendar_month"
							size="sm"
							color={error ? 'error' : 'base-content'}
							className="opacity-70"
						/>
						<input
							type="date"
							value={startDateStr}
							onChange={handleStartDateChange}
							min={minDateStr}
							max={endDateStr || maxDateStr}
							disabled={disabled}
							className="grow bg-transparent border-none outline-none"
							aria-label={startLabel}
							aria-invalid={error ? 'true' : undefined}
						/>
					</label>
				</fieldset>

				{/* End date field */}
				<fieldset className="fieldset flex-1">
					<legend className="fieldset-legend">{endLabel}</legend>
					<label className={inputClasses}>
						<Icon
							name="calendar_month"
							size="sm"
							color={error ? 'error' : 'base-content'}
							className="opacity-70"
						/>
						<input
							type="date"
							value={endDateStr}
							onChange={handleEndDateChange}
							min={startDateStr || minDateStr}
							max={maxDateStr}
							disabled={disabled}
							className="grow bg-transparent border-none outline-none"
							aria-label={endLabel}
							aria-invalid={error ? 'true' : undefined}
						/>
					</label>
				</fieldset>
			</div>

			{/* Error message */}
			{error && (
				<p
					className="text-error text-sm flex items-center gap-1"
					role="alert"
					aria-live="polite"
				>
					<Icon name="error" size="xs" color="error" ariaLabel="Error" />
					{error}
				</p>
			)}
		</div>
	);
};
