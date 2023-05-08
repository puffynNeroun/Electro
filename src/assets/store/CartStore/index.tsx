import { makeAutoObservable } from 'mobx';

// продукт который кладут в корзину
export type Product = {
  id: string,
  name: string,
  image: string,
  price: number,
  oldprice: number,
  category: string,
}

// вещь которую уже положили в корзину
export type CartItem = Product & {
  count: number,
}

export class CartStore {
  // вещи в корзине
  items: CartItem[] = []

  constructor() {
    makeAutoObservable(this)
  }

  // добавить продукт в корзину
  add(item: Product): this {
    // проверяем есть ли в корзине
    const exists = this.items.some(x => x.id == item.id)

    if (exists) {
      // если существует - то увеличиваем на 1 количество
      this.items = this.items
        .map(x => x.id == item.id ? { ...x, count: x.count + 1 } : x)
    } else {
      // если нет - то добавляем в конец
      this.items = [...this.items, { ...item, count: 1 }]
    }

    this.saveToLocalstorage()

    // возвращаем this чтобы можно было писать cart.add({}).add({}).add({})
    return this
  }

  // удалить продукт из корзины по идентификатору
  delete(id: string): this {
    this.items = this.items
      .map(x => x.id == id ? { ...x, count: x.count - 1 } : x)
      .filter(x => x.count > 0)
    this.saveToLocalstorage()
    return this
  }

  // очистить корзину
  clear(): this {
    this.items = []
    this.saveToLocalstorage()
    return this
  }

  // сохранить состояние в localStorage
  private saveToLocalstorage() {
    localStorage.setItem("cart_items", JSON.stringify(this.items))
  }
}