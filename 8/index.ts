/*

Intro:

    Project grew and we ended up in a situation with
    some users starting to have more influence.
    Therefore, we decided to create a new person type
    called PowerUser which is supposed to combine
    everything User and Admin have.

Exercise:

    Define type PowerUser which should have all fields
    from both User and Admin (except for type),
    and also have type 'powerUser' without duplicating
    all the fields in the code.

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

type TPowerUser = Omit<IUser, 'type'> & Omit<IAdmin, 'type'> & {type: 'powerUser'};

export type TPerson = IUser| IAdmin | TPowerUser;

export const persons: TPerson[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer'
    }
];

function isAdmin(person: TPerson): person is IAdmin {
    return person.type === 'admin';
}

function isUser(person: TPerson): person is IUser{
    return person.type === 'user';
}

function isPowerUser(person: TPerson): person is TPowerUser {
    return person.type === 'powerUser';
}

export function logPerson(person: TPerson) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    if (isPowerUser(person)) {
        additionalInformation = `${person.role}, ${person.occupation}`;
    }
    console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

console.log();

console.log('Power users:');
persons.filter(isPowerUser).forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
