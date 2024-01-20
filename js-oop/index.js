let obj = {
  width: 90,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};
console.log(obj.area());
