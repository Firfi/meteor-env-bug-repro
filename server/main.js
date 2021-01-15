import { Meteor } from 'meteor/meteor';
import { env } from '../imports/env';

Meteor.startup(() => {
  console.warn('env:', env());
});
