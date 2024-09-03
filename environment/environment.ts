type EnvironmentVariables = {
    singleUser: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
    }
}

type Environment = {
    [key: string]: EnvironmentVariables
}

const environment: Environment = {
    dev: {
        singleUser: {
            id: 2,
            firstName: 'Janet',
            lastName: 'Weaver',
            email: 'janet.weaver@reqres.in'
        }
    }
}

export default environment[process.env["NODE_ENV"]]