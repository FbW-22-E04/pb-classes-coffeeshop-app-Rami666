class CoffeeShop {
	constructor(name, menu, orders) {
		this.name = name;
		this.menu = menu;
		this.orders = orders;
	}
	//1
	addOrder(product) {
	const Index = this.menu.findIndex((item) =>item.item === product);
		if (Index === -1) {
			console.log('this item is currently unavaible!');
		} else {
			this.orders.push(product);
			console.log('order placed!');
		
		}
	}
		fulfillOrder(product) {
console.log(this.orders);
			if (this.orders.length == 0) {
				console.log('no orders to fulfill');
			} 
}


const shop = new CoffeeShop ("Twinz Coffee", [
{item: 'Hot coffee', type: "drink", price :2 },
{item: 'Cappuccino', type: "drink", price :3 },
{item: 'Cake', type: "food", price :4 },
{item: 'Espresso', type: "drink", price :5 },
{item: 'Americano', type: "drink", price :6 },
], []);



console.log(shop);
shop.addOrder('Espresso');
shop.addOrder('Cake');
shop.addOrder('Americano');
shop.addOrder('Hot coffee');

shop.fulfillOrder('Espresso');
