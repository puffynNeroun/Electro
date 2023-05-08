import { makeAutoObservable } from 'mobx';

export default class CartStore {
  constructor() {
    makeAutoObservable(this)
  }
}