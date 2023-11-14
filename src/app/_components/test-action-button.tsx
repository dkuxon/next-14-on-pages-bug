'use client';
import React from 'react';
import { Loader2Icon } from 'lucide-react';

import { testAction } from './action';
import { cn } from '@/lib/utils';

const TestActionButton = () => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<Error | null>(null);
    const [result, setResult] = React.useState<String | null>(null);

    const handleButtonClick = () => {
        setLoading(true);
        setError(null);
        setResult(null);

        testAction()
            .then((result) => {
                setResult(result);
                setError(null);
            })
            .catch(setError)
            .finally(() => setLoading(false));
    };

    return (
        <div className='flex flex-col items-center gap-2'>
            {error && (
                <div className='text-red-500'>
                    {error.message || 'An error occurred'}
                </div>
            )}

            {result && <div className='text-green-500'>{result}</div>}

            <button
                onClick={handleButtonClick}
                disabled={loading}
                className={cn(
                    'truncate rounded-full text-center transition-all duration-200 ease-out',
                    'flex items-center justify-center',
                    'bg-neutral-700 hover:bg-neutral-600 disabled:bg-neutral-800',
                    'active:scale-95',
                    {
                        'w-32 p-2 px-4': !loading,
                        'w-14 py-4': loading,
                    },
                )}
            >
                {loading ? (
                    <Loader2Icon className='animate-spin' size={20} />
                ) : (
                    'Test Action'
                )}
            </button>
        </div>
    );
};

export default TestActionButton;
