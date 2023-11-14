'use server';

export async function testAction(): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return 'server-action';
}
