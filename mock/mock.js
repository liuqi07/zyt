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
    },{
      pattern: /\/api\/cart\.php/,
      respondwith: './cart.json'
    },{
      pattern: /\/api\/allGoods\.php/,
      respondwith: './allGoods.json'
    }
  ]
};
