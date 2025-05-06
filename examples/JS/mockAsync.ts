const mockAsync = <T extends string | number>(value: T, timeout: number): Promise<T> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, timeout);
    });

mockAsync<number>(42, 4000).then((value) => {
    console.log(value);
});

mockAsync<string>('foo', 1000).then((value) => console.log(value));

mockAsync<string[]>(['foo'], 2000);
