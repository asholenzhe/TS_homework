import {FirstArgument, IsTypeEqual, typeAssert} from 'type-assertions';
import {logPerson, TPerson, persons} from './index';


typeAssert<
    IsTypeEqual<
        TPerson,
        {name: string; age: number} & ({occupation: string} | {role: string})
    >
>();

typeAssert<
    IsTypeEqual<
        typeof persons,
        ({name: string; age: number} & ({occupation: string} | {role: string}))[]
    >
>();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof logPerson>,
        {name: string; age: number} & ({occupation: string} | {role: string})
    >
>();

typeAssert<
    IsTypeEqual<
        ReturnType<typeof logPerson>,
        void
    >
>();
