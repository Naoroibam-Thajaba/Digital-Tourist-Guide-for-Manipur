/**
 * DatePicker component for date range selection (booking check-in/check-out)
 *
 * @component
 * @example
 * // Basic date picker
 * <DatePicker
 *   onChange={(range) => console.log(range)}
 * />
 *
 * @example
 * // Controlled date picker
 * <DatePicker
 *   value={{ startDate: new Date(), endDate: addDays(new Date(), 3) }}
 *   onChange={setDateRange}
 *   minDate={new Date()}
 * />
 *
 * @example
 * // With custom labels and error
 * <DatePicker
 *   startLabel="Arrival"
 *   endLabel="Departure"
 *   error="Please select valid dates"
 * />
 */

export interface DateRange {
	/** Start date (check-in) */
	startDate: Date | null;
	/** End date (check-out) */
	endDate: Date | null;
}

export interface DatePickerProps {
	/** Controlled value */
	value?: DateRange;
	/** Callback when date range changes */
	onChange?: (range: DateRange) => void;
	/** Minimum selectable date */
	minDate?: Date;
	/** Maximum selectable date */
	maxDate?: Date;
	/** Label for start date field */
	startLabel?: string;
	/** Label for end date field */
	endLabel?: string;
	/** Error message to display */
	error?: string;
	/** Whether the picker is disabled */
	disabled?: boolean;
	/** Additional CSS classes */
	className?: string;
}
