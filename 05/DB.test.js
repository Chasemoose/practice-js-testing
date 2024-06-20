import DB from './DB';

describe('Insert method testing', ()=> {
    it('Get 1 when first number added', () => {
        const dataBase = new DB();
        await dataBase.insert({id: 2, color: 'green'});

        const rows = await dataBase.getRows()

    })
})