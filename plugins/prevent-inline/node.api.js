export default () => ({
  webpack: (config) => {
    config.module.rules = config.module.rules.map((r) => {
      if ("oneOf" in r)
        r.oneOf = r.oneOf.map((i) => {
          if (i.loader === "url-loader") {
            if ("options" in i) i.options.limit = false;
            if ("query" in i) i.query.limit = false;
          }
          return i;
        });
      return r;
    });
    return config;
  },
});
