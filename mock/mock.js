module.exports = {
  rules: [
    {
      pattern: /\/api\/home\.php\?type=home\&pageNo=1/,
      respondwith: './home.json'
    },{
      pattern: /\/api\/list\.php/,
      respondwith: './list.json'
    },{
      pattern: /\/api\/banner\.php/,
      respondwith: './banner.json'
    },{
      pattern: /\/api\/home\.php/,
      respondwith: './home.json'
    }
  ]
};
