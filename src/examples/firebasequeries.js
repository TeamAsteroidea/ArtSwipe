import { where }  from "firebase/firestore/lite";
import * as generic from 'src/server/fs-generic.js'

generic.getAll('test').then((results) => {
  console.log('getAll', results)})
generic.getOne('test', 'CMkyXCeYcedmHbChOsW1').then((results) => {
  console.log('getOne', results)})
generic.write('test', {'foo':"bar"}).then((results) => {
  console.log('write', results)})
generic.update('test', 'CMkyXCeYcedmHbChOsW1', {new: Math.floor(Math.random()*100)}).then((results) => {
  console.log('update', results)
})
generic.search('test', where("foo", "==", "bar")).then((results) => {
  console.log('search', results)
})