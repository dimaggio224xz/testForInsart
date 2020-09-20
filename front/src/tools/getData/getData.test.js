import getData from './index';

test('the data is peanut butter', async () => {
    const data = await getData();
    expect(Object.keys(data).length).toBe(3);
});
