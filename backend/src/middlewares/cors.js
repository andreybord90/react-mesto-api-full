const allowedCors = [
  'https://andrey.students.nomoredomains.work',
  'http://andrey.students.nomoredomains.work',
  'https://localhost:3000',
  'http://localhost:3000',
  'https://web.postman.co',
];

// export const options = {
//   origin: [
//     'https://andrey.students.nomoredomains.work/',
//     'http://andrey.students.nomoredomains.work/',
//     'https://localhost:3000',
//     'http://localhost:3000',
//     'https://web.postman.co',
//   ],
//   credentials: true,
//   methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };

// eslint-disable-next-line consistent-return
export const corsOptions = (req, res, next) => {
  const { method } = req;
  const { origin } = req.headers;
  const requestHeaders = req.headers['access-control-request-headers'];

  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  if (allowedCors.includes(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
  }
  res.set('Access-Control-Allow-Credentials', true);

  if (method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.set('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  next();
};
