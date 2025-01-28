/*

Intro:

    Time to filter the data! In order to be flexible
    we filter users using a number of criteria and
    return only those matching all of the criteria.
    We don't need Admins yet, we only filter Users.

Exercise:

    Without duplicating type structures, modify
    filterUsers function definition so that we can
    pass only those criteria which are needed,
    and not the whole User information as it is
    required now according to typing.

Higher difficulty bonus exercise:

    Exclude "type" from filter criteria.

*/

interface IUser{
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface IAdmin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type TPerson = IUser| IAdmin;

export const persons: TPerson[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];

export const isAdmin = (person: TPerson): person is IAdmin => person.type === 'admin';
export const isUser = (person: TPerson): person is IUser=> person.type === 'user';

export function logPerson(person: TPerson) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(persons: TPerson[], criteria: Partial<Omit<IUser, 'type'>>): IUser[] {
    return persons.filter(isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria) as (keyof Partial<Omit<IUser, 'type'>>)[];
        return criteriaKeys.every((key) => {
            return user[key] === criteria[key];
        });
    });
}

console.log('Users of age 23:');

filterUsers(
    persons,
    {
        age: 23
    }
).forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types
