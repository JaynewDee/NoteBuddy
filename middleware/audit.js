// Middleware provided by starter code to assist with monitoring server requests through the console
const audit = (req, res, next) => {
  const fgCyan = '\x1b[36m';
  switch (req.method) {
    case 'GET': {
      console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    case 'POST': {
      console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
  }

  next();
};

exports.audit = audit;
