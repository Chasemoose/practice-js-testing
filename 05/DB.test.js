import DB from './DB';

describe('Insert method testing', () => {
    it('Get 1 when first number added', async () => {
        const dataBase = new DB();
        await dataBase.insert({id: 2, color: 'green'});

        const rows = await dataBase.getRows()
        const rowsLength = rows.length
        expect(rowsLength).toBe(1)
    })


    it('ID can be only number! If no reject ', async () => {
        const dataBase = new DB();
        await dataBase.insert({id: 'a', color: 'green'});

        const rows = await dataBase.getRows()
        const rowsLength = rows.length
        expect(rowsLength).toBe(1)
    })


})