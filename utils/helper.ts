import{faker} from '@faker-js/faker'

export class Helper{
    async generateUserData(){
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const middleName = faker.person.middleName();

        return {
            firstName : firstName,  
            lastName : lastName,
            middleName : middleName
        }

    }
}