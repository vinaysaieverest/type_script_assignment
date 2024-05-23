var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        var _this = this;
        this.count1 = 0;
        this.count2 = 0;
        this.placeholder = document.getElementById('placeholder');
        this.addButton = document.getElementById('add_button');
        this.container2 = document.getElementById('container2');
        this.count1Display = document.getElementById('count1');
        this.count2Display = document.getElementById('count2');
        this.addButton.addEventListener('click', function () { return _this.addFunction(); });
        this.placeholder.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === 'Shift') {
                _this.addFunction();
            }
        });
    }
    ShoppingCart.prototype.addFunction = function () {
        var value = this.placeholder.value;
        if (value === "") {
            alert("Please enter something");
        }
        else {
            this.addItem(value);
            this.placeholder.value = "";
        }
    };
    ShoppingCart.prototype.addItem = function (value) {
        var _this = this;
        var li = document.createElement('li');
        li.innerHTML = "".concat(value, " <button class='delete_button'>X</button>");
        li.style.height = "30px";
        li.style.marginBottom = "10px";
        li.style.border = "1px solid";
        li.style.width = "500px";
        li.style.textAlign = "center";
        li.style.marginRight = "80px";
        li.style.justifyContent = "center";
        li.style.color = "black";
        li.style.textDecoration = "none";
        li.querySelector('.delete_button').addEventListener('click', function () { return _this.deleteFunction(li); });
        li.addEventListener('click', function () { return _this.changeFunction(li); });
        this.container2.appendChild(li);
        this.count2++;
        this.updateCount2();
    };
    ShoppingCart.prototype.deleteFunction = function (li) {
        this.container2.removeChild(li);
        this.count2--;
        this.updateCount2();
    };
    ShoppingCart.prototype.changeFunction = function (li) {
        if (li.style.backgroundColor === "rgb(175, 225, 175)") {
            li.style.backgroundColor = "beige";
            li.style.textDecoration = "none";
            this.count1--;
        }
        else {
            li.style.backgroundColor = "rgb(175, 225, 175)";
            li.style.textDecoration = "line-through";
            this.count1++;
        }
        this.updateCount1();
    };
    ShoppingCart.prototype.updateCount1 = function () {
        this.count1Display.innerHTML = "no.of selected items = ".concat(this.count1);
    };
    ShoppingCart.prototype.updateCount2 = function () {
        this.count2Display.innerHTML = "no.of added items = ".concat(this.count2);
    };
    return ShoppingCart;
}());
var shoppingCart = new ShoppingCart();
