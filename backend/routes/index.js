var express = require('express');
var router = express.Router();
var usercontrollerr=require('../controllers/userr')
var statecontrollerr=require('../controllers/states')
var mongoClient=require('mongodb').MongoClient
router.post('/register',usercontrollerr.addUser)
router.get('/login',usercontrollerr.login)
router.get('/restrictedPage',usercontrollerr.restrictedPage)
router.get('/logout',usercontrollerr.logout)
router.post('/addstate',statecontrollerr.addState)
router.get('/showstate',statecontrollerr.getState)
router.post('/adddistrict',statecontrollerr.addDistrict)
router.get('/showdistrict',statecontrollerr.getDistrict)
router.post('/addchild',statecontrollerr.addChild)
router.get('/showchildren',statecontrollerr.showchildren)
module.exports = router;
