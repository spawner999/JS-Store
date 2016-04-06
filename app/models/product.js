import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
  seller: DS.belongsTo('seller', {async: true})
});
