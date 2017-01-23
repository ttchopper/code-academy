function StaffMember(name, discountPercent) {
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("Bob", 10);
var me = new StaffMember("Andrew", 20);

var cashRegister = {
    total: 0,
    lastTransactionAmount: 0,
    add: function(itemCost) {
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },

    scan: function(item, quantity) {
        while (quantity > 0) {
            switch (item) {
                case "eggs":
                    this.add(0.98);
                    break;
                case "milk":
                    this.add(1.23);
                    break;
                case "magazine":
                    this.add(4.99);
                    break;
                case "chocolate":
                    this.add(0.45);
                    break;
            }
            quantity--;
        }
        return true;
    },

    voidLastTransaction: function() {
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },

    applyStaffDiscount: function(employee) {
        this.total -= employee.discountPercent / 100 * this.total;
    }

};

cashRegister.scan('eggs', 1);
cashRegister.scan('milk', 1);
cashRegister.scan('magazine', 3);
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is ' + cashRegister.total.toFixed(2));
