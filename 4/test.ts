import {IsTypeEqual, FirstArgument, typeAssert} from 'type-assertions';
import {logPerson, isUser, isAdmin, TPerson, persons} from './index';

typeAssert<
    IsTypeEqual<
        TPerson,
        {name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string})
    >
>();

typeAssert<
    IsTypeEqual<
        typeof persons,
        ({name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string}))[]
    >
>();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof logPerson>,
        {name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string})
    >
>();

typeAssert<
    IsTypeEqual<
        ReturnType<typeof logPerson>,
        void
    >
>();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof isUser>,
        {name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string})
    >
>();
typeAssert<
    IsTypeEqual<
        ReturnType<typeof isUser>,
        boolean
    >
>();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof isAdmin>,
        {name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string})
    >
>();
typeAssert<
    IsTypeEqual<
        ReturnType<typeof isAdmin>,
        boolean
    >
>();
