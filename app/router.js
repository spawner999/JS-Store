import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('seller', {path: 'seller/:seller_id'});
  this.route('product', {path: 'product/:product_id'});
  this.route('shoppping-cart');
});

export default Router;
