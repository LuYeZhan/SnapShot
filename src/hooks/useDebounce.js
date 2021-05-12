import React from 'react';

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = React.useState('');
    React.useEffect(() => {
        const handler: NodeJS.Timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cancel the timeout if value changes (also on delay change or unmount)
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};
