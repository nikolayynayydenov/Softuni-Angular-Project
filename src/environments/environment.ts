// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    kinvey: {
        baseUrl: 'https://baas.kinvey.com',
        appKey: 'kid_rkFhtZ6Wf',
        appSecret: '53a9167f9c8040a8aa0aa69c368244b8'
    }
};
