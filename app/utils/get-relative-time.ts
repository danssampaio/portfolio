export function getRelativeTimeString(
    date: Date | number,
    lang = navigator.language,
): string {
    const timeMs = typeof date === 'number' ? date : date.getTime();

    const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

    const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];

    const units: Intl.RelativeTimeFormatUnit[] = [
        'second',
        'minute',
        'hour',
        'day',
        'week',
        'month',
        'year',
    ];

    const unitIndex = cutoffs.findIndex(
        (cutoff) => cutoff > Math.abs(deltaSeconds),
    );

    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

    const mainValue = Math.round(deltaSeconds / divisor);
    let remainingValue = 0;

    if (units[unitIndex] === 'year') {
        const remainingSeconds = Math.abs(deltaSeconds) % cutoffs[unitIndex - 1];
        remainingValue = Math.round(remainingSeconds / (86400 * 30));
    }

    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'always' });
    let relativeTime = rtf.format(mainValue, units[unitIndex]);

    if (remainingValue > 0 && units[unitIndex] === 'year') {
        const rtfMonths = new Intl.RelativeTimeFormat(lang, { numeric: 'always' });
        let monthsText = rtfMonths.format(remainingValue, 'month');

        monthsText = monthsText.replace(/em |há /g, '').trim();

        relativeTime = relativeTime.replace('ago', '').replace('in', '').trim();
        relativeTime = `${relativeTime} e ${monthsText}`;
    }

    return relativeTime;
}