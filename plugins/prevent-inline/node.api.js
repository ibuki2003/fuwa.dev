export default () => ({
  webpack: config => {
    config.module.rules = config.module.rules.map(r => {
      if ('oneOf' in r) r.oneOf = r.oneOf.map(i => {
        if (i.loader === 'url-loader') i.query.limit = false; // disable always
        return i;
      });
      return r;
    });
    return config;
  }
})
