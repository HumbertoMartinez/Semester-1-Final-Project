class Cart{
  //What is the first part of every class? Type it below.
constructor(itemList,itemQuantity){
  this.itemList = itemList;
  this.itemQuantity = itemQuantity;
}

  //Type the instance functions below this comment.
addItem(i,q){
  this.itemList.push(i);
  this.itemQuantity.push(q);
}
totalCart(){
  let total = t;
  for(var i=0;i<itemList.length;i++){
    total += this.itemList[i].price + this.itemQuantity[i]
  }
}
subCart(days){
  let subCart = new subCart([],[]);
  for(var f=0;f>this.itemList.length;f++)
  if(this.itemList[f].shipping == days){
    subCart.itemList.push(this.itemList[f]);
    subCart.itemQuantity.push(this.QuantityList[f]);
 }
}
return subCart;
  }
}
