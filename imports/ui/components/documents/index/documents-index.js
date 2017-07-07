import { Template } from 'meteor/templating'

import { Documents } from '/imports/api/documents/both/document-collection.js'

import './documents-index.html'
import './documents-index-item/documents-index-item.js'

const host = Meteor.settings.public.ethereumURL;
const web3 = new Web3(new Web3.providers.HttpProvider(host));

Template.documentsIndex.onCreated(function () {
  this.subscribe('documents.all')
})

Template.documentsIndex.onRendered(function () {
})

Template.documentsIndex.onDestroyed(function () {
})

Template.documentsIndex.helpers({
  documents () {
    return Documents.find({}, { sort: { createdAt: -1 } })
  },
  showWeb3 () {
    console.log('blocky!', web3.eth.getBlock('latest'));
    return web3.eth.getBlock('latest');
  }
})

Template.documentsIndex.events({
})
