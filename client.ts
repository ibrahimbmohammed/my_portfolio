const contentful = require('contentful');

const client = contentful.createClient({
    space: '7e9mu3ttd175',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL,
});

export default client;
